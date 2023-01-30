package entity

import (
	"time"

	"github.com/google/uuid"
)

type ListEntity struct {
	ID        string
	Name      string
	Tasks     []*Task
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt time.Time
	IsDeleted bool
}

func NewListEntity(name string) (*ListEntity, error) {
	timeNow := time.Now()

	list := &ListEntity{
		ID:        uuid.New().String(),
		Name:      name,
		CreatedAt: timeNow,
		UpdatedAt: timeNow,
		DeletedAt: timeNow,
		IsDeleted: false,
	}

	return list, nil
}
