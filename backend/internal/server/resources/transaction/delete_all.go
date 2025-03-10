// Code generated by greenstar scripts; DO NOT EDIT.

package transaction

import (
	"github.com/arikkfir/greenstar/backend/internal/server/middleware"
	"github.com/arikkfir/greenstar/backend/internal/server/util"
	"net/http"
)

type DeleteAllRequest struct{}

type DeleteAllResponse struct{}

func (s *Server) DeleteAll(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	l := util.Logger(ctx)

	tenantID := middleware.GetTenantID(ctx)
	if tenantID != "" {
		l = l.With("tenantID", tenantID)
	}
	authToken := middleware.GetToken(ctx)
	if !authToken.IsPermittedGlobally("transactions:update") {
		if tenantID != "" {
			if !authToken.IsPermittedForTenant(tenantID, "transactions:update") {
				util.ServeError(w, r, util.ErrForbidden)
				l.WarnContext(ctx, "Access denied", "permission", "transactions:update")
				return
			}
		} else {
			util.ServeError(w, r, util.ErrForbidden)
			l.WarnContext(ctx, "Access denied", "permission", "transactions:update")
			return
		}
	}

	req := DeleteAllRequest{}

	err := s.h.DeleteAll(ctx, req)
	if err != nil {
		if code := util.ServeError(w, r, err); code >= http.StatusInternalServerError {
			l.ErrorContext(ctx, "Failed deleting transaction", "err", err)
		}
		return
	}

	w.WriteHeader(http.StatusNoContent)
}
