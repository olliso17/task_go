package interfaces

import "tasks_go/internal/entity"

type ListRepositoryInterface interface {
	Create(list *entity.ListEntity) error
	FindAll() ([]entity.ListEntity, error)
	FindByID(id string) (entity.ListEntity, error)
	// CreateListTask() error
}
