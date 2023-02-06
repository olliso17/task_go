package interfaces

import "tasks_go/back_end/internal/entity"

type ListRepositoryInterface interface {
	Create(list *entity.ListEntity) error
	FindAll() ([]entity.ListEntity, error)
	FindByID(id string) (entity.ListEntity, error)
	// CreateListTask() error
}
