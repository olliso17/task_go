package entity

import (
	"fmt"
	"sync"
)

type Manager struct {
	CookieName  string     //private cookiename
	lock        sync.Mutex // protects session
	Provider    Provider
	Maxlifetime int64
}

func NewManager(provideName, cookieName string, maxlifetime int64) (*Manager, error) {
	var provides = make(map[string]Provider)
	provider, ok := provides[provideName]
	if !ok {
		return nil, fmt.Errorf("session: unknown provide %q (forgotten import?)", provideName)
	}
	return &Manager{
		Provider:    provider,
		CookieName:  cookieName,
		Maxlifetime: maxlifetime,
	}, nil
}
