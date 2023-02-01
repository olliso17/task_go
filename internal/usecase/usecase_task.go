package usecase

import (
	"errors"
	"fmt"
	"tasks_go/internal/entity"
	"tasks_go/internal/usecase/dto"
	"time"
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

	task, _ := entity.NewTask(input.Title, input.Description, input.Status, input.Priority, input.ListID)
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
		ListID:      task.ListID,
	}

	return dto, nil
}

func (c *TaskUseCase) FindAll() ([]entity.Task, error) {
	tasks, err := c.TaskRepository.FindAll()
	if err != nil {
		return []entity.Task{}, err
	}
	var taskTitle []entity.Task
	for _, v := range tasks {
		if v.IsDeleted != true {
			taskTitle = append(taskTitle, v)

		}

	}
	return taskTitle, nil
}

func (c *TaskUseCase) FindTitle(title string) ([]entity.Task, error) {
	taskAll, err := c.TaskRepository.FindAll()

	if err != nil {
		return []entity.Task{}, err
	}
	isdelete := IsDeletedFromTitle(taskAll, title)

	return *isdelete, nil

}

func (c *TaskUseCase) FindByID(id string) (entity.Task, error) {
	taskAll, err := c.TaskRepository.FindAll()
	if err != nil {
		return entity.Task{}, err
	}
	for _, v := range taskAll {
		if id == v.ID {
			isdelete := IsDeletedFromID(&v)
			return *isdelete, nil

		}
	}
	return entity.Task{}, err

}

func (c *TaskUseCase) SoftDelete(input dto.TaskInputSoftDeleteDTO) (dto.TaskOutputMessageDTO, error) {
	task, err := c.TaskRepository.FindByID(input.ID)
	timestamp := time.Now()
	if err != nil {
		return dto.TaskOutputMessageDTO{}, errors.New(err.Error())
	}
	task.IsDeleted = true
	task.DeletedAt = timestamp.Local().String()
	c.TaskRepository.SoftDelete(&task)

	return IsValidDelete(&task), nil

}

func IsValidDelete(task *entity.Task) dto.TaskOutputMessageDTO {

	output := dto.TaskOutputMessageDTO{}
	if task.IsDeleted != true {
		output.Message = "Could not delete"
		return output
	}
	output.Message = "Deleted task sucessfully"

	return output

}

func IsDeletedFromID(task *entity.Task) *entity.Task {

	if task.IsDeleted != true {

		return task
	}

	return &entity.Task{}
}

func IsDeletedFromTitle(tasks []entity.Task, title string) *[]entity.Task {

	var taskTitle []entity.Task
	for _, v := range tasks {
		if title == v.Title {
			if v.IsDeleted != true {
				taskTitle = append(taskTitle, v)
			}
		}
	}

	return &taskTitle

}
