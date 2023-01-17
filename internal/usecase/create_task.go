package usecase

import (
	"tasks_go/internal/entity"
)

type TaskInputDTO struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Status      bool   `json:"status"`
	Priority    bool   `json:"priority"`
}

type TaskOutputDTO struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Status      bool   `json:"status"`
	Priority    bool   `json:"priority"`
}

type CreateTaskUseCase struct {
	TaskRepository entity.TaskRepositoryInterface
}

func NewCreateTaskUseCase(taskRepository entity.TaskRepositoryInterface) *CreateTaskUseCase {
	return &CreateTaskUseCase{
		TaskRepository: taskRepository,
	}
}

func (c *CreateTaskUseCase) Execute(input TaskInputDTO) (TaskOutputDTO, error) {
	task := entity.Task{
		Title:       input.Title,
		Description: input.Description,
		Status:      input.Status,
		Priority:    input.Priority,
	}

	if err := c.TaskRepository.Save(&task); err != nil {
		return TaskOutputDTO{}, err
	}
	dto := TaskOutputDTO{
		Title:       task.Title,
		Description: task.Description,
		Status:      task.Status,
		Priority:    task.Priority,
	}

	return dto, nil
}
