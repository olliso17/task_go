package entity

type TaskRepositoryInterface interface {
	Create(task *Task) error
	FindAll() ([]Task, error)
	FindTitle(title string) (*Task, error)
}

type ListRepositoryInterface interface {
	Create(list *ListEntity) error
}
