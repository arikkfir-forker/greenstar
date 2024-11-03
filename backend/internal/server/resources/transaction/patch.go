// Code generated by greenstar scripts; DO NOT EDIT.

package transaction

import (
	"encoding/json"
	"net/http"
	"slices"
	"time"

	"github.com/arikkfir/greenstar/backend/internal/auth"
	"github.com/arikkfir/greenstar/backend/internal/server/util"
	"github.com/shopspring/decimal"
)

type PatchRequest struct {
	TenantID        string           `json:"-"`
	ID              string           `json:"id"`
	Amount          *decimal.Decimal `json:"amount,omitempty"`
	ConvertedAmount *decimal.Decimal `json:"convertedAmount,omitempty"`
	Currency        *string          `json:"currency,omitempty"`
	Date            *time.Time       `json:"date,omitempty"`
	Description     *string          `json:"description,omitempty"`
	ReferenceID     *string          `json:"referenceId,omitempty"`
	SourceAccountID *string          `json:"sourceAccountId,omitempty"`
	TargetAccountID *string          `json:"targetAccountId,omitempty"`
	properties      []string
}

func (lr *PatchRequest) HasAmount() bool      { return slices.Contains(lr.properties, "amount") }
func (lr *PatchRequest) HasCurrency() bool    { return slices.Contains(lr.properties, "currency") }
func (lr *PatchRequest) HasDate() bool        { return slices.Contains(lr.properties, "date") }
func (lr *PatchRequest) HasDescription() bool { return slices.Contains(lr.properties, "description") }
func (lr *PatchRequest) HasReferenceID() bool { return slices.Contains(lr.properties, "referenceId") }
func (lr *PatchRequest) HasSourceAccountID() bool {
	return slices.Contains(lr.properties, "sourceAccountId")
}
func (lr *PatchRequest) HasTargetAccountID() bool {
	return slices.Contains(lr.properties, "targetAccountId")
}
func (lr *PatchRequest) UnmarshalJSON(data []byte) error {
	lr.properties = nil
	var tempMap map[string]json.RawMessage
	if err := json.Unmarshal(data, &tempMap); err != nil {
		return err
	}
	for key := range tempMap {
		lr.properties = append(lr.properties, key)
	}
	type typeAlias PatchRequest
	alias := (*typeAlias)(lr)
	if err := json.Unmarshal(data, alias); err != nil {
		return err
	}
	return nil
}

type PatchResponse Transaction

func (s *Server) Patch(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	l := util.Logger(ctx)
	if !auth.GetToken(ctx).IsPermittedForTenant(r.PathValue("tenantID"), "transactions:update") {
		util.ServeError(w, r, util.ErrForbidden)
		l.With("tenantID", r.PathValue("TenantPathVariableName")).WarnContext(ctx, "Access denied", "permission", "transactions:update")
		return
	}

	req := PatchRequest{}
	if err := util.UnmarshalBody(r, &req); err != nil {
		util.ServeError(w, r, err)
		return
	}
	req.TenantID = r.PathValue("tenantID")
	if req.TenantID == "" {
		util.ServeError(w, r, util.ErrBadRequest)
		return
	}
	req.ID = r.PathValue("id")
	if req.ID == "" {
		util.ServeError(w, r, util.ErrBadRequest)
		return
	}

	res, err := s.h.Patch(ctx, req)
	if err != nil {
		if code := util.ServeError(w, r, err); code >= http.StatusInternalServerError {
			l.ErrorContext(ctx, "Failed patching transaction", "err", err)
		}
		return
	} else if res == nil {
		util.ServeError(w, r, util.ErrNotFound)
		return
	}

	if err := util.Marshal(w, r, http.StatusOK, res); err != nil {
		l.ErrorContext(ctx, "Failed patching transaction", "err", err)
		util.ServeError(w, r, err)
	}
}