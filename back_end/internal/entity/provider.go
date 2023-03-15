package entity

import (
	"container/list"
	"sync"
)

type Provider struct {
	Lock     sync.Mutex               // lock
	Sessions map[string]*list.Element // save in memory
	List     *list.List               // gc
}

func NewProvider(lock sync.Mutex, sessions map[string]*list.Element, list *list.List) *Provider {
	return &Provider{
		Lock:     lock,
		Sessions: sessions,
		List:     list,
	}
}
