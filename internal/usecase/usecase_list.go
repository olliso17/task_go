package usecase

import (
	"tasks_go/internal/entity"
	"tasks_go/internal/usecase/dto"
)

type ListUsecase struct {
	ListUsecase entity.ListRepositoryInterface
}
type TaskRepository struct {
	TaskUsecase entity.TaskRepositoryInterface
}

func NewListUsecase(listUsecase entity.ListRepositoryInterface) *ListUsecase {
	return &ListUsecase{
		ListUsecase: listUsecase,
	}
}

func (l *ListUsecase) Execute(input dto.ListInpuntDtO) (dto.ListOutputDTO, error) {

	list, err := entity.NewListEntity(input.Name, input.HasTask)

	if err != nil {
		return dto.ListOutputDTO{}, err
	}

	if err := l.ListUsecase.Create(list); err != nil {
		return dto.ListOutputDTO{}, err
	}
	dto := dto.ListOutputDTO{
		Name:    list.Name,
		HasTask: list.HasTask,
	}

	return dto, nil
}

func (l *ListUsecase) CreateListTask(idTask string, idList string) entity.Task {
	

}
