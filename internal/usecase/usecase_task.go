package usecase

import (
	"tasks_go/internal/entity"
	"tasks_go/internal/usecase/dto"
)

type TaskUseCase struct {
	TaskRepository entity.TaskRepositoryInterface
}

func NewTaskUseCase(taskRepository entity.TaskRepositoryInterface) *TaskUseCase {
	return &TaskUseCase{
		TaskRepository: taskRepository,
	}
}

func (c *TaskUseCase) Execute(input dto.TaskInputDTO) (dto.TaskOutputDTO, error) {
	task, _ := entity.NewTask(input.Title, input.Description, input.Status, input.Priority)

	if err := c.TaskRepository.Create(task); err != nil {
		return dto.TaskOutputDTO{}, err
	}
	dto := dto.TaskOutputDTO{
		Title:       task.Title,
		Description: task.Description,
		Status:      task.Status,
		Priority:    task.Priority,
	}

	return dto, nil
}

func (c *TaskUseCase) FindAll() ([]entity.Task, error) {
	task, err := c.TaskRepository.FindAll()

	if err != nil {
		return []entity.Task{}, err
	}

	return task, nil
}
