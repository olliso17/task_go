package usecase

import (
	"tasks_go/internal/entity"
)

type ListInpuntDtO struct {
	Name  string
	Tasks entity.Task
}
type ListOutputDTO struct {
	Name  string
	Tasks []entity.Task
}
type ListUsecase struct {
	ListUsecase entity.ListRepositoryInterface
}

func NewListUsecase(listUsecase entity.ListRepositoryInterface) *ListUsecase {
	return &ListUsecase{
		ListUsecase: listUsecase,
	}
}

func (l *ListUsecase) Execute(input ListInpuntDtO) ListOutputDTO {

	list := entity.NewListEntity(input.Name, input.Tasks)

	if err := l.ListUsecase.Create(list); err != nil {
		return ListOutputDTO{}
	}

	dto := ListOutputDTO{
		Name:  list.Name,
		Tasks: list.Tasks,
	}

	return dto
}
