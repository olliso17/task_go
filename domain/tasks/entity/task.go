package entity

import (
	"fmt"
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
	isvalid, err := t.IsValidTask(*t)
	if err != nil {
		return nil, err
	}
	return isvalid, nil
}

func (*Task) IsValidTask(t Task) (*Task, error) {
	if t.ID == "" {
		return nil, fmt.Errorf("ID is required")
	}
	if t.Title == "" {
		return nil, fmt.Errorf("Title is required")
	}
	if t.Description == "" {
		return nil, fmt.Errorf("Description is required")
	}
	if t.IsConcluded == true {
		return nil, fmt.Errorf("IsConcluded is finalized")

	}
	return &t, nil

}
