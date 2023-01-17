package database

import (
	"database/sql"
	"tasks_go/internal/entity"
)

type TaskRepository struct {
	Db *sql.DB
}

func NewTaskRepository(db *sql.DB) *TaskRepository {
	return &TaskRepository{
		Db: db,
	}
}

func (r *TaskRepository) Save(task *entity.Task) error {
	stmt, err := r.Db.Prepare("INSERT INTO tasks (id, title, description, status, priority, created_at, updated_at, deleted_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)")
	if err != nil {
		return err
	}
	_, err = stmt.Exec(task.ID, task.Title, task.Description, task.Status, task.Priority, task.CreatedAt, task.UpdatedAt, task.DeletedAt)
	if err != nil {
		return err
	}

	return nil
}
