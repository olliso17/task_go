package entity

type TaskRepositoryInterface interface {
	Create(task *Task) error
	// CreateCsvTask() ([]*Task, error)
}

type ListRepositoryInterface interface {
	Create(list *ListEntity) error
}
