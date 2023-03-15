package entity

import (
	"sync"
)

type Manager struct {
	CookieName  string     //private cookiename
	lock        sync.Mutex // protects session
	Provider    Provider
	Maxlifetime int64
}

// func NewManager(cookieName string, maxlifetime int64) (*Manager, error) {

// 	return &Manager{
// 		Provider:    provide,
// 		CookieName:  cookieName,
// 		Maxlifetime: maxlifetime,
// 	}, nil
// }
