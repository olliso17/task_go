package usecase

import (
	"fmt"
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
	repoTaskAll := TaskRepository{}
	taskAll, err := repoTaskAll.TaskUsecase.FindAll()
	taskID, err := repoTaskAll.TaskUsecase.FindByID(id)
	fmt.Println(taskAll)
	if err != nil {
		return dto.ListOutputDTO{}, err
	}
	list := entity.NewListEntity(input.Name, input.HasTask)

	if input.HasTask == true {
		dto := dto.ListOutputDTO{
			Name: list.Name,
			//Tasks: //passar findId,
		}
	}
	list := entity.NewListEntity(input.Name, input.HasTask)

	if err := l.ListUsecase.Create(list); err != nil {
		return dto.ListOutputDTO{}, err
	}

	return dto, nil
}
