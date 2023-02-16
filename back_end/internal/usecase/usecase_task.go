package usecase

import (
	"back_end/internal/entity"
	"back_end/internal/entity/interfaces"
	"back_end/internal/usecase/dto"
	"errors"
	"fmt"
	"time"
)

type TaskUseCase struct {
	TaskRepository interfaces.TaskRepositoryInterface
}

func NewTaskUseCase(taskRepository interfaces.TaskRepositoryInterface) *TaskUseCase {
	return &TaskUseCase{
		TaskRepository: taskRepository,
	}
}

func (c *TaskUseCase) Execute(input dto.TaskInputDTO) (dto.TaskOutputDTO, error) {
	taskAll, err := c.TaskRepository.FindAll()

	task, _ := entity.NewTask(input.Title, input.Description, input.Status, input.Priority, input.ListID, input.TimeSelect)
	for _, v := range taskAll {
		if task.Title == v.Title && v.IsDeleted == false && v.Status != true {
			err = fmt.Errorf("task already exist")
			return dto.TaskOutputDTO{}, err

		}
		if task.ID == v.ID {
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
		TimeSelect:  task.TimeSelect,
	}

	return dto, nil
}

func (c *TaskUseCase) FindExceptDeleted() ([]entity.Task, error) {
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

func (c *TaskUseCase) FindAll() ([]entity.Task, error) {
	tasks, err := c.TaskRepository.FindAll()
	if err != nil {
		return []entity.Task{}, err
	}

	return tasks, nil
}

func (c *TaskUseCase) FindTitle(title string) ([]entity.Task, error) {
	taskAll, err := c.TaskRepository.FindExceptDeleted()

	if err != nil {
		return []entity.Task{}, err
	}
	var taskTitle []entity.Task
	for _, v := range taskAll {
		if title == v.Title {

			taskTitle = append(taskTitle, v)
			return taskTitle, nil

		}
	}

	return []entity.Task{}, nil

}

func (c *TaskUseCase) FindByID(id string) (entity.Task, error) {
	taskAll, err := c.TaskRepository.FindExceptDeleted()
	if err != nil {
		return entity.Task{}, err
	}
	for _, v := range taskAll {
		if id == v.ID {

			return v, nil

		}
	}
	return entity.Task{}, err

}
func (c *TaskUseCase) EditTask(task dto.TaskEditInputDTO) (dto.TaskEditOutputDTO, error) {
	taskAll, err := c.TaskRepository.FindAll()

	if err != nil {
		return dto.TaskEditOutputDTO{}, err
	}
	var taskEdit entity.Task
	timesTamp := time.Now()
	for _, v := range taskAll {

		if task.Title == v.Title && task.ID != v.ID && v.IsDeleted == false && v.Status != true {
			err = fmt.Errorf("task already exist")
			return dto.TaskEditOutputDTO{}, err

		}
		if task.ID == v.ID {
			v.Title = task.Title
			v.Description = task.Description
			v.ListID = task.ListID
			v.Priority = task.Priority
			v.UpdatedAt = timesTamp.Local().String()
			v.TimeSelect = task.TimeSelect
			taskEdit = v
		}
	}

	c.TaskRepository.EditTask(&taskEdit)
	dto := dto.TaskEditOutputDTO{
		Title:       taskEdit.Title,
		Description: taskEdit.Description,
		Priority:    taskEdit.Priority,
		ListID:      taskEdit.ListID,
		TimeSelect:  taskEdit.TimeSelect,
		UpdatedAt:   taskEdit.UpdatedAt,
	}

	return dto, err
}

func (c *TaskUseCase) TaskCompleted(input dto.TaskInputCompletedDTO) (dto.TaskOutputMessageDTO, error) {
	task, err := c.TaskRepository.FindByID(input.ID)
	timestamp := time.Now()
	if err != nil {
		return dto.TaskOutputMessageDTO{}, errors.New(err.Error())
	}
	task.Status = input.Status
	task.UpdatedAt = timestamp.Local().String()
	c.TaskRepository.TaskCompleted(&task)

	return dto.TaskOutputMessageDTO{Message: "successfully edited status"}, nil

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
	if task.IsDeleted == true {
		output.Message = "task already deleted"
		return output
	}
	output.Message = "Deleted task sucessfully"

	return output

}
