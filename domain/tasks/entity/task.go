package entity

import (
	"fmt"
	"time"

	"github.com/google/uuid"
)

type Task struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	IsConcluded bool   `json:"is_concluded"`
	Created     time.Time
	Update      time.Time
	Delete      time.Time
}

func (*Task) NewTask(title string, description string) (*Task, error) {
	timeNow := time.Now()

	t := &Task{
		ID:          uuid.New().String(),
		Title:       title,
		Description: description,
		IsConcluded: false,
		Created:     timeNow,
		Update:      timeNow,
		Delete:      timeNow,
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
