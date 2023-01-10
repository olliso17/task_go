package create

import (
	"tasks_go/domain/tasks/entity"
	"tasks_go/domain/tasks/repository"
)

type UseRepository struct {
	repository.TaskRepository
}

func CreateTaskUseCase(input *InputTaskDto) (*OutPutTaskDto, error) {
	u := UseRepository{}
	t := &entity.Task{}
	task, _ := t.NewTask(input.Title, input.Description)
	newTask, _ := u.AddTask(task)

	return &OutPutTaskDto{Task: *newTask}, nil
}
