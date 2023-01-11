package create

import (
	"tasks_go/domain/tasks/entity"
	"tasks_go/domain/tasks/repository"
	"tasks_go/domain/tasks/usecase/create/dto"
)

type UseRepository struct {
	repository.TaskRepository
}

func CreateTaskUseCase(input *dto.InputTaskDto) (*dto.OutPutTaskDto, error) {
	// u := UseRepository{}
	t := &entity.Task{}
	task, _ := t.NewTask(input.Title, input.Description)
	// newTask, _ := u.AddTask(task)

	return &dto.OutPutTaskDto{Task: *task}, nil
}
