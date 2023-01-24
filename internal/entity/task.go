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
	Status      bool
	Priority    bool
	CreatedAt   time.Time
	UpdatedAt   time.Time
	DeletedAt   time.Time
}

func NewTask(title string, description string, status bool, priority bool) (*Task, error) {
	timeNow := time.Now()
	task := &Task{
		ID:          uuid.New().String(),
		Title:       title,
		Description: description,
		Status:      status,
		Priority:    priority,
		CreatedAt:   timeNow,
		UpdatedAt:   timeNow,
		DeletedAt:   timeNow,
	}
	isValidate := IsValid(task)

	if isValidate == true {
		return task, nil
	}
	return nil, fmt.Errorf("Invalid Task")
}

func IsValid(task *Task) bool {

	if task.Title == "" || task.Description == "" {
		fmt.Printf("Title or Description is empty\n")
		return false
	}
	return true
}
