package entity

import (
	"time"

	"github.com/google/uuid"
)

type ListEntity struct {
	ID        string
	Name      string
	TypeTask  string
	CreatedAt string
	UserId    string
	Tasks     []Task
	UpdatedAt string
	DeletedAt string
	IsDeleted bool
}

func NewListEntity(name string, user_id string, type_task string) (*ListEntity, error) {
	timeNow := time.Now()

	list := &ListEntity{
		ID:        uuid.New().String(),
		UserId:    user_id,
		TypeTask:  type_task,
		Name:      name,
		CreatedAt: timeNow.Local().String(),
		UpdatedAt: timeNow.Local().String(),
		DeletedAt: timeNow.Local().String(),
		IsDeleted: false,
	}

	return list, nil
}
