package entity

import (
	"time"

	"github.com/google/uuid"
)

type ListEntity struct {
	ID         string
	Name       string
	Tasks      []Task
	Created_at time.Time
	Updated_at time.Time
	Deleted_at time.Time
}

func NewListEntity(name string) (*ListEntity, error) {
	timeNow := time.Now()

	list := &ListEntity{
		ID:         uuid.New().String(),
		Name:       name,
		Tasks:      make([]Task, 0),
		Created_at: timeNow,
		Updated_at: timeNow,
		Deleted_at: timeNow,
	}

	return list, nil
}
