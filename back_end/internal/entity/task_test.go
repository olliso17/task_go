package entity

import (
	"testing"
)

func TestTask(t *testing.T) {
	var newTask Task
	var segTask Task
	newTask.Title = "new task"
	newTask.ID = "akdashdahs"
	newTask.Description = "asdasd"
	segTask.Title = "new tas"
	segTask.ID = "akd"

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
