package database

import (
	"database/sql"
	"tasks_go/domain/task/entity"
)

type TaskRepository struct {
	Db *sql.DB
}

func NewTaskRepository(db *sql.DB) *TaskRepository {
	return &TaskRepository{Db: db}
}

func (r *TaskRepository) Save(task *entity.Task) error {
	stmt, err := r.Db.Prepare("INSERT INTO tasks (id, title, description, create) VALUES (?, ?, ?, ?)")
	if err != nil {
		return err
	}
	_, err = stmt.Exec(task.ID, task.Title, task.Description, task.CreateAt)
	if err != nil {
		return err
	}
	return nil
}

func (r *TaskRepository) GetTotal() (int, error) {
	var total int
	err := r.Db.QueryRow("Select count(*) from tasks").Scan(&total)
	if err != nil {
		return 0, err
	}
	return total, nil
}
