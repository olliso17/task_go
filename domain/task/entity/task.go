package entity

import (
	"time"

	"github.com/google/uuid"
)

type Task struct {
	ID          string
	Title       string
	Description string
	CreateAt    time.Time
	UpdadeAt    time.Time
	DeleteAt    time.Time
}

func NewTask(title string, description string) *Task {
	timeNow := time.Now()
	return &Task{
		ID:          uuid.New().String(),
		Title:       title,
		Description: description,
		CreateAt:    timeNow,
		UpdadeAt:    timeNow,
		DeleteAt:    timeNow,
	}
}
