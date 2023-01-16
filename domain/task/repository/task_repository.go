package repository

import (
	"tasks_go/domain/task/entity"
)

// type TaskRepositoryUsecase interface {
// 	Create(input *dto.DtoCreateTaskInput) *entity.Task
// }

type TaskRepository interface {
	Create(task *entity.Task) *entity.Task
}
