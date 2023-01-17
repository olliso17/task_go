package entity

type TaskRepositoryInterface interface {
	Save(task *Task) error
}
