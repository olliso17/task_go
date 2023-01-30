package entity

import (
	"time"

	"github.com/google/uuid"
)

type ListEntity struct {
	ID        string
	Name      string
	Tasks     []*Task
	CreatedAt string
	UpdatedAt string
	DeletedAt string
	IsDeleted bool
}

func NewListEntity(name string) (*ListEntity, error) {
	timeNow := time.Now()

	list := &ListEntity{
		ID:        uuid.New().String(),
		Name:      name,
		CreatedAt: timeNow.Local().String(),
		UpdatedAt: timeNow.Local().String(),
		DeletedAt: timeNow.Local().String(),
		IsDeleted: false,
	}

	return list, nil
}

func AddTask(task *Task) (*ListEntity, error) {
	var tasks []*Task
	tasks = append(tasks, task)

	return &ListEntity{
		Tasks: tasks,
	}, nil
}
