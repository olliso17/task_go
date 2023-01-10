package entity

import (
	"time"

	"github.com/google/uuid"
)

type Task struct {
	ID          string
	Title       string
	Description string
	IsConcluded bool
	Created     time.Time
}

func (*Task) NewTask(title string, description string) (*Task, error) {
	t := &Task{
		ID:          uuid.New().String(),
		Title:       title,
		Description: description,
		IsConcluded: false,
		Created:     time.Now(),
	}
	return t, nil
}
