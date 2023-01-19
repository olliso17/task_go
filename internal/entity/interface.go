package entity

type TaskRepositoryInterface interface {
	Save(task *Task) error
}

type ListRepositoryInterface interface {
	Save(list *ListEntity) error
}
