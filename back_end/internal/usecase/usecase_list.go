package usecase

import (
	"back_end/internal/entity"
	"back_end/internal/entity/interfaces"
	"back_end/internal/usecase/dto"
	"time"
)

type ListUsecase struct {
	ListRepository interfaces.ListRepositoryInterface
	TaskRepository interfaces.TaskRepositoryInterface
}

func NewListUsecase(listRepository interfaces.ListRepositoryInterface, taskRepository interfaces.TaskRepositoryInterface) *ListUsecase {
	return &ListUsecase{
		ListRepository: listRepository,
		TaskRepository: taskRepository,
	}
}

func (l *ListUsecase) Execute(input dto.ListInpuntDtO) (dto.ListOutputDTO, error) {

	list, err := entity.NewListEntity(input.Name)

	if err != nil {
		return dto.ListOutputDTO{}, err
	}

	if err := l.ListRepository.Create(list); err != nil {
		return dto.ListOutputDTO{}, err
	}
	dto := dto.ListOutputDTO{
		Name: list.Name,
	}

	return dto, nil
}

func (l *ListUsecase) FindAll() ([]dto.ListAllOutputDTO, error) {
	lists, err := l.ListRepository.FindAll()

	tasks, err := l.TaskRepository.FindAll()

	if err != nil {
		return []dto.ListAllOutputDTO{}, err
	}
	var listAll []dto.ListAllOutputDTO
	var tasksList []dto.TaskOutputDTO
	for positionList, valueList := range lists {

		for positionTask, valueTask := range tasks {
			if lists[positionList].ID == tasks[positionTask].ListID && tasks[positionTask].IsDeleted != true {
				lists[positionList].Tasks = append(lists[positionList].Tasks, valueTask)
				tasksList = append(tasksList, dto.TaskOutputDTO{
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

		list := dto.ListAllOutputDTO{
			ID:    valueList.ID,
			Name:  valueList.Name,
			Tasks: tasksList,
		}
		listAll = append(listAll, list)

	}

	return listAll, nil
}

func (l *ListUsecase) FindByID(id string) (dto.ListAllOutputDTO, error) {
	list, err := l.ListRepository.FindByID(id)
	tasks, err := l.TaskRepository.FindAll()
	if err != nil {
		return dto.ListAllOutputDTO{}, err
	}
	listID := dto.ListAllOutputDTO{}
	tasksDto := dto.TaskOutputDTO{}
	for positionTask, valueTask := range tasks {
		if tasks[positionTask].ListID == list.ID && tasks[positionTask].IsDeleted != true {

			tasksDto.ID = valueTask.ID
			tasksDto.Title = valueTask.Title
			tasksDto.Description = valueTask.Description
			tasksDto.Status = valueTask.Status
			tasksDto.Priority = valueTask.Priority
			tasksDto.ListID = valueTask.ListID
			tasksDto.TimeSelect = valueTask.TimeSelect
			tasksDto.IsDeleted = valueTask.IsDeleted

			listID.ID = list.ID
			listID.Name = list.Name
			listID.Tasks = append(listID.Tasks, tasksDto)
		}
	}

	return listID, err

}

func (l *ListUsecase) EditList(list dto.EditListEntityInputDto) (dto.EditListEntityOutputDto, error) {
	timesTamp := time.Now().Local().String()
	listEntity, err := l.ListRepository.FindByID(list.ID)
	tasks, err := l.TaskRepository.FindAll()
	for positionTask, valueTask := range tasks {
		if tasks[positionTask].ListID == listEntity.ID && tasks[positionTask].IsDeleted != true {
			listEntity.Tasks = append(listEntity.Tasks, valueTask)
		}
	}
	listEntity.Name = list.Name
	l.ListRepository.EditList(&listEntity)
	dto := dto.EditListEntityOutputDto{
		ID:        listEntity.ID,
		Name:      listEntity.Name,
		Tasks:     listEntity.Tasks,
		UpdatedAt: timesTamp,
	}
	return dto, err
}

func (l *ListUsecase) SoftDelete(input dto.ListInputSoftDeleteDTO) (dto.ListOutputMessageDTO, error) {
	timestamp := time.Now().Local().String()
	list, err := l.ListRepository.FindByID(input.ID)
	tasks, err := l.TaskRepository.FindAll()
	if err != nil {
		return dto.ListOutputMessageDTO{}, err
	}
	for positionTask, valueTask := range tasks {
		if tasks[positionTask].ListID == list.ID && tasks[positionTask].IsDeleted != true {
			tasks[positionTask].IsDeleted = true
			tasks[positionTask].DeletedAt = timestamp
			l.TaskRepository.SoftDelete(&tasks[positionTask])
			list.Tasks = append(list.Tasks, valueTask)
		}

	}
	list.IsDeleted = true
	list.DeletedAt = timestamp
	l.ListRepository.SoftDelete(&list)
	return IsValidDeleteList(&list), nil

}

func IsValidDeleteList(list *entity.ListEntity) dto.ListOutputMessageDTO {

	output := dto.ListOutputMessageDTO{}
	if list.IsDeleted == true {
		output.Message = "list already deleted"
		return output
	}
	output.Message = "Deleted list sucessfully"

	return output

}
