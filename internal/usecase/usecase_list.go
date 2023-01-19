package usecase

import "tasks_go/internal/entity"

type ListInpuntDtO struct {
	Name string
}
type ListOutputDTO struct {
	Name string
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
	list := entity.NewListEntity(input.Name)

	if err := l.ListUsecase.Save(list); err != nil {
		return ListOutputDTO{}
	}

	dto := ListOutputDTO{
		Name: list.Name,
	}

	return dto
}
