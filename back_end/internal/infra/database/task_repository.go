package database

import (
	"back_end/internal/entity"
	"database/sql"
	"fmt"
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
	stmt, err := r.Db.Prepare("INSERT INTO tasks (id, title, description, status, priority, list_id, created_at, updated_at, deleted_at, isDeleted, time_select) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)")
	if err != nil {
		fmt.Print("o erro:", err)
		return err
	}
	_, err = stmt.Exec(task.ID, task.Title, task.Description, task.Status, task.Priority, task.ListID, task.CreatedAt, task.UpdatedAt, task.DeletedAt, task.IsDeleted, &task.TimeSelect)
	if err != nil {
		return err
	}

	return nil
}

func (r *TaskRepository) FindAll() ([]entity.Task, error) {

	rows, err := r.Db.Query("SELECT id, title, description, status, priority, list_id, created_at, updated_at, deleted_at, isdeleted, time_select FROM tasks")
	var tasks []entity.Task
	for rows.Next() {
		var task entity.Task

		if err := rows.Scan(&task.ID, &task.Title, &task.Description, &task.Status, &task.Priority, &task.ListID, &task.CreatedAt, &task.UpdatedAt, &task.DeletedAt, &task.IsDeleted, &task.TimeSelect); err != nil {
			return tasks, err
		}
		tasks = append(tasks, task)
	}
	if err = rows.Err(); err != nil {
		return tasks, err
	}

	return tasks, nil

}
func (r *TaskRepository) FindExceptDeleted() ([]entity.Task, error) {

	rows, err := r.Db.Query("SELECT id, title, description, status, priority, list_id, created_at, updated_at, deleted_at, isdeleted, time_select FROM tasks")
	var tasks []entity.Task
	for rows.Next() {
		var task entity.Task

		if err := rows.Scan(&task.ID, &task.Title, &task.Description, &task.Status, &task.Priority, &task.ListID, &task.CreatedAt, &task.UpdatedAt, &task.DeletedAt, &task.IsDeleted, &task.TimeSelect); err != nil {
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

	for rows.Next() {
		if err := rows.Scan(&task.ID, &task.Title, &task.Description, &task.Status, &task.Priority, &task.ListID, &task.CreatedAt, &task.UpdatedAt, &task.DeletedAt, &task.IsDeleted, &task.TimeSelect); err != nil {
			return task, err
		}
	}
	if err = rows.Err(); err != nil {
		return task, err
	}
	return task, nil
}

func (r *TaskRepository) FindByID(id string) (entity.Task, error) {
	var task entity.Task

	rows, err := r.Db.Query("SELECT * FROM tasks WHERE id = $1", id)
	for rows.Next() {
		if err := rows.Scan(&task.ID, &task.Title, &task.Description, &task.Status, &task.Priority, &task.ListID, &task.CreatedAt, &task.UpdatedAt, &task.DeletedAt, &task.IsDeleted, &task.TimeSelect); err != nil {
			return task, err
		}
	}
	if err = rows.Err(); err != nil {
		return task, err
	}
	return task, nil
}

func (r *TaskRepository) UpdateTask(task *entity.Task) error {
	stmt, err := r.Db.Prepare("UPDATE tasks SET title= $1, description=$2, priority=$3, list_id=$4,  time_select=$5, updated_at=$6 WHERE id = $7")

	if err != nil {
		fmt.Print(err)
		return err
	}
	_, err = stmt.Exec(task.Title, task.Description, task.Priority, task.ListID, task.TimeSelect, task.UpdatedAt, task.ID)
	if err != nil {
		return err
	}
	return nil
}

func (r *TaskRepository) SoftDelete(task *entity.Task) error {
	stmt, err := r.Db.Prepare("UPDATE tasks SET isdeleted= $1, deleted_at=$2 WHERE id = $3")
	if err != nil {
		fmt.Print(err)
		return err
	}
	_, err = stmt.Exec(task.IsDeleted, task.DeletedAt, task.ID)
	if err != nil {
		return err
	}
	return nil
}

func (r *TaskRepository) TaskCompleted(task *entity.Task) error {
	stmt, err := r.Db.Prepare("UPDATE tasks SET status= $1, updated_at=$2 WHERE id = $3")
	if err != nil {
		fmt.Print(err)
		return err
	}
	_, err = stmt.Exec(task.Status, task.UpdatedAt, task.ID)
	if err != nil {
		return err
	}
	return nil
}
