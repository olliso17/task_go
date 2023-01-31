package database

import (
	"database/sql"
	"fmt"
	"tasks_go/internal/entity"
)

type ListRepository struct {
	Db *sql.DB
}

func NewListRepository(db *sql.DB) *ListRepository {
	return &ListRepository{
		Db: db,
	}
}

func (l *ListRepository) Create(list *entity.ListEntity) error {
	stmt, err := l.Db.Prepare("INSERT INTO lists (id, name, created_at, updated_at, deleted_at, isDeleted) VALUES ($1, $2, $3, $4, $5, $6)")
	if err != nil {
		fmt.Print("o erro:", err)
		return err
	}
	_, err = stmt.Exec(list.ID, list.Name, list.CreatedAt, list.UpdatedAt, list.DeletedAt, list.IsDeleted)
	if err != nil {
		return err
	}

	return nil
}

func (l *ListRepository) FindAll() ([]entity.ListEntity, []entity.Task, error) {

	listSelec, err := l.Db.Query("SELECT * FROM lists")
	taskSelec, err := l.Db.Query("SELECT * FROM tasks")

	var lists []entity.ListEntity
	var tasks []entity.Task
	for listSelec.Next() {
		var list entity.ListEntity

		if err := listSelec.Scan(&list.ID, &list.Name, &list.CreatedAt, &list.UpdatedAt, &list.DeletedAt, &list.IsDeleted); err != nil {
			return lists, tasks, err
		}

		lists = append(lists, list)

	}
	if err = listSelec.Err(); err != nil {
		return lists, tasks, err
	}

	for taskSelec.Next() {

		var task entity.Task

		if err := taskSelec.Scan(&task.ID, &task.Title, &task.Description, &task.Status, &task.Priority, &task.ListID, &task.CreatedAt, &task.UpdatedAt, &task.DeletedAt, &task.IsDeleted); err != nil {
			return lists, tasks, err
		}

		tasks = append(tasks, task)

	}

	if err = taskSelec.Err(); err != nil {
		return lists, tasks, err
	}

	return lists, tasks, nil

}
