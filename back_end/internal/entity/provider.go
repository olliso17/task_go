package entity

import (
	"container/list"
	"sync"
)

type Provider struct {
	lock     sync.Mutex               // lock
	sessions map[string]*list.Element // save in memory
	list     *list.List               // gc
}
