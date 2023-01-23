package entity

import (
	"time"

	"github.com/google/uuid"
)

type ListEntity struct {
	ID         string
	Name       string
	Tasks      []Task
	HasTask    bool
	Created_at time.Time
	Updated_at time.Time
	Deleted_at time.Time
}

func NewListEntity(name string, tasks []Task) *ListEntity {
	timeNow := time.Now()

	list := &ListEntity{
		ID:         uuid.New().String(),
		Name:       name,
		Tasks:      tasks,
		HasTask:    false,
		Created_at: timeNow,
		Updated_at: timeNow,
		Deleted_at: timeNow,
	}

	return list
}