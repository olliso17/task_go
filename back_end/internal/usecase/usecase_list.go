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

func (l *ListUsecase) FindByID(id string) (entity.ListEntity, error) {
	list, err := l.ListRepository.FindByID(id)
	tasks, err := l.TaskRepository.FindAll()
	if err != nil {
		return entity.ListEntity{}, err
	}
	for positionTask, valueTask := range tasks {
		if tasks[positionTask].ListID == list.ID && tasks[positionTask].IsDeleted != true {
			list.Tasks = append(list.Tasks, valueTask)
		}
	}
	return list, err

}

func (l *ListUsecase) EditList(list dto.EditListEntityInputDto) (dto.EditListEntityOutputDto, error) {
	listEntity, err := l.ListRepository.FindByID(list.ID)
	tasks, err := l.TaskRepository.FindAll()
	timesTamp := time.Now()
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
		UpdatedAt: timesTamp.Local().String(),
	}
	return dto, err
}
