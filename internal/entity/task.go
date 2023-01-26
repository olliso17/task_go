package entity

import (
	"fmt"
	"regexp"
	"time"

	"github.com/google/uuid"
)

type Task struct {
	ID          string
	Title       string
	Description string
	Status      bool
	Priority    bool
	IsDeleted   bool
	CreatedAt   string
	UpdatedAt   string
	DeletedAt   string
}

func NewTask(title string, description string, status bool, priority bool) (*Task, error) {
	timeNow := time.Now()
	task := &Task{
		ID:          uuid.New().String(),
		Title:       title,
		Description: description,
		Status:      status,
		Priority:    priority,
		IsDeleted:   false,
		CreatedAt:   timeNow.Local().String(),
		UpdatedAt:   timeNow.Local().String(),
		DeletedAt:   timeNow.Local().String(),
	}
	isValidate := IsValid(task)

	if isValidate == true {
		return task, nil
	}
	return &Task{}, fmt.Errorf("Invalid Task")
}

func IsValid(task *Task) bool {

	if task.Title == "" {
		fmt.Printf("Title is required\n")
		return false
	}

	if task.Description == "" {
		fmt.Printf("Description is required\n")
		return false
	}
	task.IsRegex(map[string]string{
		"title":       task.Title,
		"description": task.Description,
	})
	return true
}

func (t *Task) IsRegex(sliceString map[string]string) {

	for k, v := range sliceString {
		regex, _ := regexp.MatchString("[a-zA-Zà-úÀ-Ú0-9]", v)

		switch regex {
		case true:
			continue

		case false:
			fmt.Println(k, "Is required caracteres A-Z, a-z or 0-9")
			break
		}

	}

}
