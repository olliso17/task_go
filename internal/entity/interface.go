package entity

type TaskRepositoryInterface interface {
	Create(task *Task) error
	FindAll() ([]Task, error)
	FindTitle(title string) (Task, error)
	FindByID(id string) (Task, error)
	SoftDelete(id string) error
}

type ListRepositoryInterface interface {
	Create(list *ListEntity) error
	FindAll() ([]ListEntity, error)
	FindByID(id string) (ListEntity, error)
	// CreateListTask() error
}
