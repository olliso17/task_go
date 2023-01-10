package repository

import "tasks_go/domain/tasks/entity"

type TaskRepository interface {
	AddTask(t *[]entity.Task) (*[]entity.Task, error)
}
