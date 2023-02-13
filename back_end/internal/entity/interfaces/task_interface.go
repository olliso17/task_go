package interfaces

import "back_end/internal/entity"

type TaskRepositoryInterface interface {
	Create(task *entity.Task) error
	FindExceptDeleted() ([]entity.Task, error)
	FindAll() ([]entity.Task, error)
	FindTitle(title string) (entity.Task, error)
	FindByID(id string) (entity.Task, error)
	TaskCompleted(task *entity.Task) error
	UpdateTask(task *entity.Task) error
	SoftDelete(task *entity.Task) error
}
