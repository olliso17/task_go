package usecase

import (
	"fmt"
	"tasks_go/internal/entity"
	"tasks_go/internal/usecase/dto"
)

type ListUsecase struct {
	ListUsecase entity.ListRepositoryInterface
	TaskUseCase entity.TaskRepositoryInterface
}

func NewListUsecase(listUsecase entity.ListRepositoryInterface, taskUsecase entity.TaskRepositoryInterface) *ListUsecase {
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
	fmt.Println(tasks)
	if err != nil {
		return []entity.ListEntity{}, err
	}
	var listAll []entity.ListEntity
	// var taskAll []entity.Task

	for k, v := range lists {
		for i, t := range tasks {
			if lists[k].ID == tasks[i].ListID {
				lists[k].Tasks = append(lists[k].Tasks, t)
			}

		}
		listAll = append(listAll, v)

	}

	return lists, nil
}
