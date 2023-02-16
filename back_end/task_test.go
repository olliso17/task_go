package main

import (
	"back_end/internal/entity"
	"testing"
)

func TestTask(t *testing.T) {
	var newTask entity.Task
	var segTask entity.Task
	newTask.Title = "new task"
	newTask.ID = "akdashdahs"
	newTask.Description = "asdasd"
	segTask.Title = "new task"
	segTask.ID = "akdashdahs"

	if newTask.Title == "" {
		t.Error("Title is empty", newTask.Title)
	}
	if newTask.Title == segTask.Title {
		t.Error("Task already exists", newTask.Title)
	}

	if newTask.ID == "" {
		t.Error("ID is empty", newTask.ID)
	}

	if newTask.ID == segTask.ID {
		t.Error("Task already exists", newTask.ID)
	}

	if newTask.Description == "" {
		t.Error("Description is empty", newTask.Description)
	}
}
