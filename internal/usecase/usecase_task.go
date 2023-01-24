package usecase

import (
	"fmt"
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
	taskAll, err := c.TaskRepository.FindAll()

	task, _ := entity.NewTask(input.Title, input.Description, input.Status, input.Priority)
	for _, v := range taskAll {
		if task.Title == v.Title {
			err = fmt.Errorf("task already exist")
			return dto.TaskOutputDTO{}, err

		}
	}
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

func (c *TaskUseCase) FindAll() (dto.TaskOutputFindAlltDTO, error) {
	task, err := c.TaskRepository.FindAll()

	if err != nil {
		return dto.TaskOutputFindAlltDTO{}, err
	}

	return dto.TaskOutputFindAlltDTO{Tasks: task}, nil
}

func (c *TaskUseCase) FindTitle(title string) (entity.Task, error) {
	taskAll, err := c.TaskRepository.FindAll()
	if err != nil {
		return entity.Task{}, err
	}
	for _, v := range taskAll {
		if title == v.Title {
			return v, nil

		}
	}
	return entity.Task{}, err

}
