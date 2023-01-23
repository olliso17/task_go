package database

import (
	"database/sql"
	"fmt"
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

func (r *TaskRepository) Create(task *entity.Task) error {
	stmt, err := r.Db.Prepare("INSERT INTO tasks (id, title, description, status, priority, created_at, updated_at, deleted_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)")
	if err != nil {
		fmt.Print("o erro:", err)
		return err
	}
	_, err = stmt.Exec(task.ID, task.Title, task.Description, task.Status, task.Priority, task.CreatedAt, task.UpdatedAt, task.DeletedAt)
	if err != nil {
		return err
	}

	return nil
}

func (r *TaskRepository) FindAll() ([]entity.Task, error) {

	rows, err := r.Db.Query("SELECT id, title, description, status, priority, created_at, updated_at, deleted_at FROM tasks")
	var tasks []entity.Task
	for rows.Next() {
		var task entity.Task

		if err := rows.Scan(&task.ID, &task.Title, &task.Description, &task.Status, &task.Priority, &task.CreatedAt, &task.UpdatedAt, &task.DeletedAt); err != nil {
			return tasks, err
		}
		tasks = append(tasks, task)
	}
	if err = rows.Err(); err != nil {
		return tasks, err
	}

	return tasks, nil

}

func (r *TaskRepository) FindTitle(title string) (entity.Task, error) {
	var task entity.Task
	rows, err := r.Db.Query("SELECT * FROM tasks WHERE title = $1", title)
	if err := rows.Scan(&task.Title); err != nil {
		return task, err
	}
	if err = rows.Err(); err != nil {
		return task, err
	}
	return task, nil
}
