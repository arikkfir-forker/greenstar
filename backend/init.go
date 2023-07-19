package main

import (
	"bytes"
	"fmt"
	"github.com/jessevdk/go-flags"
	pkgerrors "github.com/pkg/errors"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	swerrors "github.com/secureworks/errors"
	"os"
)

var (
	cfg = Config{}
)

func init() {
	parser := flags.NewParser(&cfg, flags.HelpFlag|flags.PassDoubleDash)
	if _, err := parser.Parse(); err != nil {
		fmt.Printf("ERROR: %s\n\n", err)
		parser.WriteHelp(os.Stderr)
		os.Exit(1)
	}
	if cfg.DevMode {
		// Set an error stack marshaller which simply prints the stack trace as a string
		// This string will be used afterward by the "FormatExtra" to print it nicely AFTER
		// the log message line
		// This creates a similar effect to Java & Python log output experience
		zerolog.ErrorStackMarshaler = func(err error) interface{} {
			type pkgErrorsStackTracer interface {
				StackTrace() pkgerrors.StackTrace
			}
			if pkgError, ok := err.(pkgErrorsStackTracer); ok {
				return fmt.Sprintf("%+v", pkgError)
			} else if cst, ok := err.(swerrors.ChainStackTracer); ok {
				return fmt.Sprintf("%+v", cst)
			}
			return nil
		}
		writer := zerolog.ConsoleWriter{
			Out:           os.Stderr,
			FieldsExclude: []string{zerolog.ErrorStackFieldName},
			FormatExtra: func(event map[string]interface{}, b *bytes.Buffer) error {
				stack, ok := event[zerolog.ErrorStackFieldName]
				if !ok {
					return nil
				} else if stackString, ok := stack.(string); ok {
					b.WriteByte('\n')
					_, err := fmt.Fprint(b, stackString)
					if err != nil {
						return err
					}
				}
				return nil
			},
		}
		log.Logger = log.Output(writer)
		zerolog.DefaultContextLogger = &log.Logger
	} else {
		zerolog.ErrorStackMarshaler = func(err error) interface{} {
			type pkgErrorsStackTracer interface {
				StackTrace() pkgerrors.StackTrace
			}
			if pkgError, ok := err.(pkgErrorsStackTracer); ok {
				return fmt.Sprintf("%+v", pkgError)
			} else if cst, ok := err.(swerrors.ChainStackTracer); ok {
				return fmt.Sprintf("%+v", cst)
			}
			return nil
		}
	}
	if level, err := zerolog.ParseLevel(cfg.LogLevel); err != nil {
		log.Fatal().Err(err).Msg("Failed to parse config")
	} else {
		zerolog.SetGlobalLevel(level)
	}
	zerolog.DefaultContextLogger = &log.Logger
	log.Info().Interface("config", cfg).Msg("Configured")
}