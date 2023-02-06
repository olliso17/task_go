package interfaces

type TaskRepositoryInterface interface {
	Create(task *entity.Task) error
	FindAll() ([]entity.Task, error)
	FindTitle(title string) (entity.Task, error)
	FindByID(id string) (entity.Task, error)
	SoftDelete(task *entity.Task) error
}
