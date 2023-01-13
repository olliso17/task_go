package repository

import "tasks_go/domain/tasks/entity"

type TaskRepository interface {
	AddTask(t *entity.Task) (*entity.Task, error)
}

//
//	type Service interface {
//		// CreateTask(task *entity.Task) (*entity.Task, error)
//		// UpdateTask(task *entity.Task) error
//		// DeleteTask(task *entity.Task) error
//	}
//

// type service struct {
// 	t TaskRepository
// }

// func NewTaskRepository[T TaskRepository](t T) T {
// 	return &service{t: t}
// }
