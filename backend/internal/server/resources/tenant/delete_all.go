// Code generated by greenstar scripts; DO NOT EDIT.

package tenant

import (
	"github.com/arikkfir/greenstar/backend/internal/server/util"
	"github.com/arikkfir/greenstar/backend/internal/util/observability"
	"net/http"
)

type DeleteAllRequest struct{}

type DeleteAllResponse struct{}

func (s *Server) DeleteAll(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	l := observability.GetLogger(ctx)
	if err := util.VerifyPermissions(ctx, "tenants:delete"); err != nil {
		util.ServeError(w, r, err)
		return
	}

	req := DeleteAllRequest{}

	err := s.h.DeleteAll(ctx, req)
	if err != nil {
		if code := util.ServeError(w, r, err); code >= http.StatusInternalServerError {
			l.ErrorContext(ctx, "Failed deleting tenant", "err", err)
		}
		return
	}

	w.WriteHeader(http.StatusNoContent)
}
