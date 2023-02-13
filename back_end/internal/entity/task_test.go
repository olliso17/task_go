package entity

import (
	"testing"
)

func TestTask(t *testing.T) {
	var newTask Task
	newTask.Title = "new task"
	if newTask.Title == "" {
		t.Error("Title is empty", newTask.Title)
	}
}
