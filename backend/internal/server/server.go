// Code generated by greenstar scripts; DO NOT EDIT.

package server

import (
	"errors"
	"github.com/arikkfir/greenstar/backend/internal/server/resources/account"
	"github.com/arikkfir/greenstar/backend/internal/server/resources/openapi"
	"github.com/arikkfir/greenstar/backend/internal/server/resources/tenant"
	"github.com/arikkfir/greenstar/backend/internal/server/resources/transaction"
	"github.com/jackc/pgx/v5/pgxpool"
	"net/http"
)

type Server struct {
	Pool                *pgxpool.Pool
	AccountsHandler     account.Handler
	TenantsHandler      tenant.Handler
	TransactionsHandler transaction.Handler
}

func (s *Server) Register(mux *http.ServeMux) error {
	if s.AccountsHandler == nil {
		return errors.New("no accounts handler was set on this server")
	}
	account.NewServer(s.Pool, s.AccountsHandler).Register(mux)
	if s.TenantsHandler == nil {
		return errors.New("no tenants handler was set on this server")
	}
	tenant.NewServer(s.Pool, s.TenantsHandler).Register(mux)
	if s.TransactionsHandler == nil {
		return errors.New("no transactions handler was set on this server")
	}
	transaction.NewServer(s.Pool, s.TransactionsHandler).Register(mux)

	openapi.NewServer().Register(mux)

	return nil
}
