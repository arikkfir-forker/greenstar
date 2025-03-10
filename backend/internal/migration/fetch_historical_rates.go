package migration

import (
	"archive/tar"
	"compress/bzip2"
	"context"
	"encoding/csv"
	"errors"
	"fmt"
	"github.com/arikkfir/greenstar/backend/internal/util/observability"
	"github.com/jackc/pgx/v5"
	"github.com/shopspring/decimal"
	"go.opentelemetry.io/otel/trace"
	"io"
	"log/slog"
	"os"
	"path/filepath"
	"time"
)

const (
	RatesPath                            = "/var/greenstar/rates"
	historicalExchangeRatesTarObjectName = "rates.csv"
)

type rateRecord struct {
	LineNumber         int
	Date               time.Time
	SourceCurrencyCode string
	TargetCurrencyCode string
	Rate               decimal.Decimal
}

// PopulateHistoricalRates processes historical exchange rate files located in a predefined directory and updates the database.
// It verifies the existence of the directory, iterates through the files, and processes each file's data.
// Returns an error if the directory is inaccessible or a file processing operation fails.
func (m *exchangeRatesManagerImpl) PopulateHistoricalRates(ctx context.Context) error {
	ctx, span := observability.Trace(ctx, trace.SpanKindServer)
	defer span.End()

	// Verify rates directory exists
	if info, err := os.Stat(RatesPath); err != nil {
		if errors.Is(err, os.ErrNotExist) {
			return nil
		} else {
			return fmt.Errorf("failed inspecting rates directory '%s': %w", RatesPath, err)
		}
	} else if !info.IsDir() {
		return fmt.Errorf("expected '%s' to be a directory, but it is not", RatesPath)
	}

	// List the files in the rates path
	ratesEntries, err := os.ReadDir(RatesPath)
	if err != nil {
		return fmt.Errorf("failed reading rates directory '%s': %w", RatesPath, err)
	}

	// Iterate over the directory entries
	for _, entry := range ratesEntries {
		fileName := filepath.Join(RatesPath, entry.Name())
		if err := m.readHistoricalRatesFromFile(ctx, fileName); err != nil {
			return fmt.Errorf("failed reading rates file '%s': %w", fileName, err)
		}
	}

	return nil
}

// readHistoricalRatesFromFile reads and processes historical exchange rates from a compressed tar file into the database.
// It takes a context and file name as input, handles extraction, parsing, and populates the rates table in a transaction.
// Returns an error if file reading, processing, or database operations fail.
func (m *exchangeRatesManagerImpl) readHistoricalRatesFromFile(ctx context.Context, fileName string) error {
	slog.InfoContext(ctx, "Populating historical exchange rates", "file", fileName)

	f, err := os.Open(fileName)
	if err != nil {
		return fmt.Errorf("failed opening file '%s': %w", fileName, err)
	}
	defer f.Close()

	bz2Reader := bzip2.NewReader(f)
	tarReader := tar.NewReader(bz2Reader)

	header, err := tarReader.Next()
	if err == io.EOF {
		return fmt.Errorf("no tar file entries found in '%s'", fileName)
	} else if err != nil {
		return fmt.Errorf("failed to read next tar file entry in '%s': %w", fileName, err)
	} else if header.Typeflag != tar.TypeReg {
		return fmt.Errorf("unexpected type flag encountered in '%s': %v", fileName, header.Typeflag)
	} else if header.Name != historicalExchangeRatesTarObjectName {
		return fmt.Errorf("unexpected object name: %s", header.Name)
	}

	recCh := make(chan rateRecord, 1_000)
	errCh := make(chan error, 2)

	go func() {
		defer close(recCh)
		defer close(errCh)

		csvReader := csv.NewReader(tarReader)
		csvReader.Comment = '#'
		csvReader.FieldsPerRecord = 6
		var recordNumber int
		for {
			rec, err := csvReader.Read()
			if err == io.EOF {
				break // End of CSV file
			} else if err != nil {
				errCh <- fmt.Errorf("failed to read CSV record after reading %d record: %w", recordNumber, err)
				break
			}

			recordNumber++
			if recordNumber%1_000_000 == 0 {
				slog.DebugContext(ctx, "Progressing in reading of historical exchange rates", "records", recordNumber)
			}

			r, err := newRateRecord(recordNumber, rec)
			if err != nil {
				errCh <- fmt.Errorf("failed to read record %d: %w", recordNumber, err)
				break
			}
			recCh <- r
		}
	}()

	tx, err := m.pool.BeginTx(ctx, pgx.TxOptions{
		AccessMode:     pgx.ReadWrite,
		DeferrableMode: pgx.NotDeferrable,
	})
	if err != nil {
		return fmt.Errorf("failed creating transaction: %w", err)
	}
	defer tx.Rollback(ctx)

	// Delete all rates first, to start from scratch
	if _, err := tx.Exec(ctx, "TRUNCATE rates"); err != nil {
		return fmt.Errorf("failed to truncate rates table: %w", err)
	}

	// PopulateHistoricalRates the table from the historical data
	copiedRowsCount, err := tx.CopyFrom(
		ctx,
		pgx.Identifier{"rates"},
		[]string{"date", "source_currency_code", "target_currency_code", "rate", "mock", "line_number"},
		pgx.CopyFromFunc(func() (rows []any, err error) {
			select {
			case err := <-errCh:
				return nil, err
			case r := <-recCh:
				return []any{
					r.Date.Format("2006-01-02"),
					r.SourceCurrencyCode,
					r.TargetCurrencyCode,
					r.Rate,
					false,
					r.LineNumber,
				}, nil
			}
		}),
	)
	if err != nil {
		return fmt.Errorf("failed to populate batch: %w", err)
	} else if err, ok := <-errCh; ok {
		return fmt.Errorf("residual error discovered though batch was populated: %w", err)
	}

	// Done; commit...
	if err := tx.Commit(ctx); err != nil {
		return fmt.Errorf("failed to commit transaction: %w", err)
	}

	slog.InfoContext(ctx, "Populated historical exchange rates", "file", fileName, "count", copiedRowsCount)
	return nil
}

// newRateRecord parses a slice of strings into a rateRecord struct, validating and converting fields.
// Returns an error on failures.
func newRateRecord(lineNumber int, rec []string) (r rateRecord, err error) {
	r.LineNumber = lineNumber
	r.Date, err = time.Parse("2006-01-02", rec[0])
	if err != nil {
		err = fmt.Errorf("failed to parse date from record %d: %w", lineNumber, err)
		return
	}

	r.SourceCurrencyCode = rec[1]
	r.TargetCurrencyCode = rec[2]

	r.Rate, err = decimal.NewFromString(rec[5])
	if err != nil {
		err = fmt.Errorf("failed to parse rate from record %d: %w", lineNumber, err)
		return
	}

	return
}

/*
func fetchExchangeRatesForCurrency(ctx context.Context, pool *pgxpool.Pool, currencyApiKey, currencyCode string, currencyCodes []string) error {
	currentYear := time.Now().Year()

	var maxStoredDate *time.Time
	if err := pool.QueryRow(ctx, "SELECT MAX(date) FROM rates WHERE source_currency_code = $1", currencyCode).Scan(&maxStoredDate); err != nil {
		if !errors.Is(err, pgx.ErrNoRows) {
			return fmt.Errorf("failed fetching max stored date: %w", err)
		}
	} else {
		startDate = maxStoredDate.AddDate(0, 0, 1)
	}

	wg := &sync.WaitGroup{}
	for year := 1999; year <= currentYear; year++ {
		wg.Add(1)
		go func(ctx context.Context, pool *pgxpool.Pool, currencyApiKey, currencyCode string, year int) {
			defer wg.Done()
			if err := fetchExchangeRatesForCurrencyForYear(ctx, pool, currencyApiKey, currencyCode, currencyCodes, year); err != nil {
				slog.WarnContext(ctx, "Failed fetching historical exchange rates", "currency", currencyCode, "year", year, "err", err)
			}
		}(ctx, pool, currencyApiKey, currencyCode, year)
	}
	wg.Wait()

	return nil
}

func fetchExchangeRatesForCurrencyForYear(ctx context.Context, pool *pgxpool.Pool, currencyApiKey, currencyCode string, currencies []string, year int) error {
	slog.InfoContext(ctx, "Fetching historical exchange rates", "currency", currencyCode, "year", year, "currencies", currencies)

	tx, err := pool.BeginTx(ctx, pgx.TxOptions{})
	if err != nil {
		return fmt.Errorf("failed creating transaction: %w", err)
	}
	defer tx.Rollback(ctx)

	now := time.Now().UTC()
	startDate := time.Date(year, 1, 1, 0, 0, 0, 0, time.UTC)
	endDate := startDate.AddDate(1, 0, 0).AddDate(0, 0, -1)
	if year == now.Year() {
		endDate = now.AddDate(0, 0, -1).Truncate(time.Hour * 24)
	}

	var maxStoredDate *time.Time
	if err := tx.QueryRow(ctx, "SELECT MAX(date) FROM rates WHERE source_currency_code = $1", currencyCode).Scan(&maxStoredDate); err != nil {
		if !errors.Is(err, pgx.ErrNoRows) {
			return fmt.Errorf("failed fetching max stored date: %w", err)
		}
	} else {
		startDate = maxStoredDate.AddDate(0, 0, 1)
	}

	query := url.Values{}
	query.Set("apikey", currencyApiKey)
	query.Set("base_currency", currencyCode)
	query.Set("currencies", strings.Join(currencies, ","))
	query.Set("datetime_start", startDate.Format(currencyAPIDateFormat))
	query.Set("datetime_end", endDate.Format(currencyAPIDateFormat))
	query.Set("accuracy", "day")
	query.Set("type", "fiat")
	response, err := http.Get("https://api.currencyapi.com/v3/range?" + query.Encode())
	if err != nil {
		return fmt.Errorf("failed sending request: %w", err)
	}
	defer response.Body.Close()

	if response.StatusCode != 200 {
		bytes, _ := io.ReadAll(response.Body)
		return fmt.Errorf("request failed: %w\n%s", fmt.Errorf("unexpected status code %s (%d)", response.Status, response.StatusCode), string(bytes))
	}

	decoder := json.NewDecoder(response.Body)
	exchangeRatesList := exchangeRatesList{}
	if err := decoder.Decode(&exchangeRatesList); err != nil {
		return fmt.Errorf("failed decoding response: %w", err)
	}

	for _, exchangeRateForDate := range exchangeRatesList.Data {
		datetime := exchangeRateForDate.Datetime
		for _, rate := range exchangeRateForDate.Currencies {
			if _, err := tx.Exec(ctx, insertExchangeRateSQL, datetime, currencyCode, rate.Code, rate.Value); err != nil {
				return fmt.Errorf("failed storing rate of %v from '%s' to '%s': %w", datetime, currencyCode, rate.Code, err)
			}
		}
	}

	if err := tx.Commit(ctx); err != nil {
		return fmt.Errorf("failed committing exchange rates transaction: %w", err)
	}

	return nil
}
*/
