package usecase

import (
	"back_end/internal/entity"
	"back_end/internal/entity/interfaces"
	"back_end/internal/usecase/dto"
	"errors"
	"fmt"
	"time"
)

type TaskRepository struct {
	TaskRepository interfaces.TaskRepositoryInterface
}

func NewTaskRepository(taskRepository interfaces.TaskRepositoryInterface) *TaskRepository {
	return &TaskRepository{
		TaskRepository: taskRepository,
	}
}

func (c *TaskRepository) Execute(input dto.TaskInputDTO) (dto.TaskOutputDTO, error) {
	taskAll, err := c.TaskRepository.FindAll()

	task, _ := entity.NewTask(input.Title, input.Description, input.Priority, input.ListID, input.TimeSelect)
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
		Priority:    task.Priority,
		ListID:      task.ListID,
		TimeSelect:  task.TimeSelect,
	}

	return dto, nil
}

func (c *TaskRepository) FindExceptDeleted() ([]dto.TaskOutputDTO, error) {
	tasks, err := c.TaskRepository.FindAll()
	if err != nil {
		return []dto.TaskOutputDTO{}, err
	}
	var listTaskAll []dto.TaskOutputDTO

	for positionTask, valueTask := range tasks {
		if tasks[positionTask].IsDeleted != true {
			listTaskAll = append(listTaskAll, dto.TaskOutputDTO{
				ID:          valueTask.ID,
				Title:       valueTask.Title,
				Description: valueTask.Description,
				Status:      valueTask.Status,
				Priority:    valueTask.Priority,
				ListID:      valueTask.ListID,
				TimeSelect:  valueTask.TimeSelect,
				IsDeleted:   valueTask.IsDeleted,
			})
		}

	}

	return listTaskAll, nil
}

func (c *TaskRepository) FindAll() ([]entity.Task, error) {
	tasks, err := c.TaskRepository.FindAll()
	if err != nil {
		return []entity.Task{}, err
	}

	return tasks, nil
}

func (c *TaskRepository) FindTitle(title string) ([]entity.Task, error) {
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

func (c *TaskRepository) FindByID(id string) (entity.Task, error) {
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
func (c *TaskRepository) EditTask(task dto.TaskEditInputDTO) (dto.TaskEditOutputDTO, error) {
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
			v.ID = task.ID
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
		ID:          taskEdit.ID,
		Title:       taskEdit.Title,
		Description: taskEdit.Description,
		Priority:    taskEdit.Priority,
		ListID:      taskEdit.ListID,
		TimeSelect:  taskEdit.TimeSelect,
		UpdatedAt:   taskEdit.UpdatedAt,
	}

	return dto, err
}

func (c *TaskRepository) TaskCompleted(input dto.TaskInputCompletedDTO) (dto.TaskOutputMessageDTO, error) {
	if input.ID == "" {
		return dto.TaskOutputMessageDTO{}, errors.New("credential not provided")
	}
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

func (c *TaskRepository) SoftDelete(input dto.TaskInputSoftDeleteDTO) (dto.TaskOutputMessageDTO, error) {
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
