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

type TaskInputPutCsvDTO struct {
	Title       string `json:"title"`
	Description string `json:"description"`
}

type TaskOutputFindAlltDTO struct {
	Tasks []entity.Task
}
type TaskUseCase struct {
	TaskRepository entity.TaskRepositoryInterface
}

func NewTaskUseCase(taskRepository entity.TaskRepositoryInterface) *TaskUseCase {
	return &TaskUseCase{
		TaskRepository: taskRepository,
	}
}

func (c *TaskUseCase) Execute(input TaskInputDTO) (TaskOutputDTO, error) {
	task, _ := entity.NewTask(input.Title, input.Description, input.Status, input.Priority)

	if err := c.TaskRepository.Create(task); err != nil {
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
