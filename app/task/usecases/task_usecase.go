package usecases

import (
	"tasks_go/app/task/usecases/dto"
	task "tasks_go/domain/task/entity"
	"tasks_go/domain/task/repository"
)

type CreateTaskUseCase struct {
	TaskRepository repository.TaskRepository
}

func NewCreateTaskUseCase(repository repository.TaskRepository) *CreateTaskUseCase {
	return &CreateTaskUseCase{
		TaskRepository: repository,
	}
}

func (c *CreateTaskUseCase) Execute(input dto.DtoCreateTaskInput) dto.DtoCreateTaskOutput {

	// ts := task.NewTask(newTask.Title, newTask.Description)

	ts := task.Task{
		Title:       input.Title,
		Description: input.Description,
	}
	newTask := c.TaskRepository.Create(&ts)
	dto := dto.DtoCreateTaskOutput{
		Title:       newTask.Title,
		Description: newTask.Description,
	}
	return dto
}
