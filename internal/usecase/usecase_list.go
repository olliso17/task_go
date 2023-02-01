package usecase

import (
	"fmt"
	"tasks_go/internal/entity"
	"tasks_go/internal/usecase/dto"
)

type ListUsecase struct {
	ListUsecase entity.ListRepositoryInterface
}

func NewListUsecase(listUsecase entity.ListRepositoryInterface) *ListUsecase {
	return &ListUsecase{
		ListUsecase: listUsecase,
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
	if err != nil {
		return []entity.ListEntity{}, err
	}
	var listAll []entity.ListEntity

	for k, v := range lists {
		fmt.Println("list---->", k, lists[k].ID)
		listAll = append(listAll, v)

	}

	return lists, nil
}
