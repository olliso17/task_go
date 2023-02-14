package usecase

import (
	"back_end/internal/entity"
	"back_end/internal/entity/interfaces"
	"back_end/internal/usecase/dto"
	"fmt"
)

type ListUsecase struct {
	ListUsecase interfaces.ListRepositoryInterface
	TaskUseCase interfaces.TaskRepositoryInterface
}

func NewListUsecase(listUsecase interfaces.ListRepositoryInterface, taskUsecase interfaces.TaskRepositoryInterface) *ListUsecase {
	return &ListUsecase{
		ListUsecase: listUsecase,
		TaskUseCase: taskUsecase,
	}
}

func (l *ListUsecase) Execute(input dto.ListInpuntDtO) (dto.ListOutputDTO, error) {

	list, err := entity.NewListEntity(input.Name)

	if err != nil {
		return dto.ListOutputDTO{}, err
	}

	if err := l.ListUsecase.Create(list); err != nil {
		return dto.ListOutputDTO{}, err
	}
	dto := dto.ListOutputDTO{
		Name: list.Name,
	}

	return dto, nil
}

func (l *ListUsecase) FindAll() ([]entity.ListEntity, error) {
	lists, err := l.ListUsecase.FindAll()

	tasks, err := l.TaskUseCase.FindAll()

	if err != nil {
		return []entity.ListEntity{}, err
	}
	var listAll []entity.ListEntity

	for positionList, valueList := range lists {
		for positionTask, valueTask := range tasks {
			if lists[positionList].ID == tasks[positionTask].ListID && tasks[positionTask].IsDeleted != true {
				lists[positionList].Tasks = append(lists[positionList].Tasks, valueTask)
			}

		}
		listAll = append(listAll, valueList)

	}

	return lists, nil
}

func (l *ListUsecase) FindByID(id string) (entity.ListEntity, error) {
	list, err := l.ListUsecase.FindByID(id)
	tasks, err := l.TaskUseCase.FindAll()
	fmt.Println(list)
	if err != nil {
		return entity.ListEntity{}, err
	}
	for positionTask, valueTask := range tasks {
		if tasks[positionTask].ListID == list.ID {
			list.Tasks = append(list.Tasks, valueTask)
		}
	}
	return list, err

}
