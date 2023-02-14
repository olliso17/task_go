package interfaces

import "back_end/internal/entity"

type ListRepositoryInterface interface {
	Create(list *entity.ListEntity) error
	FindAll() ([]entity.ListEntity, error)
	FindByID(id string) (entity.ListEntity, error)
	EditList(list *entity.ListEntity) (entity.ListEntity, error)
	// CreateListTask() error
}
