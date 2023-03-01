package database

import (
	"back_end/internal/entity"
	"database/sql"
	"fmt"
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

func (l *ListRepository) FindAll() ([]entity.ListEntity, error) {

	listSelec, err := l.Db.Query("SELECT * FROM lists")

	var lists []entity.ListEntity

	for listSelec.Next() {

		var list entity.ListEntity

		if err := listSelec.Scan(&list.ID, &list.Name, &list.CreatedAt, &list.UpdatedAt, &list.DeletedAt, &list.IsDeleted); err != nil {
			return lists, err
		}

		lists = append(lists, list)
	}
	if err = listSelec.Err(); err != nil {
		return lists, err
	}

	return lists, nil

}
func (l *ListRepository) FindByID(id string) (entity.ListEntity, error) {
	var list entity.ListEntity

	rows, err := l.Db.Query("SELECT * FROM lists WHERE id = $1", id)
	for rows.Next() {
		if err := rows.Scan(&list.ID, &list.Name, &list.CreatedAt, &list.UpdatedAt, &list.DeletedAt, &list.IsDeleted); err != nil {
			return list, err
		}
	}
	if err = rows.Err(); err != nil {
		return list, err
	}
	return list, nil
}

func (l *ListRepository) EditList(list *entity.ListEntity) error {
	stmt, err := l.Db.Prepare("UPDATE lists SET name= $1,  updated_at=$2 WHERE id = $3")

	if err != nil {
		fmt.Print(err)
		return err
	}
	_, err = stmt.Exec(list.Name, list.UpdatedAt, list.ID)
	if err != nil {
		return err
	}
	return nil
}
func (l *ListRepository) SoftDelete(list *entity.ListEntity) error {
	stmt, err := l.Db.Prepare("UPDATE lists SET isdeleted= $1, deleted_at=$2 WHERE id = $3")
	if err != nil {
		fmt.Print(err)
		return err
	}
	_, err = stmt.Exec(list.IsDeleted, list.DeletedAt, list.ID)
	if err != nil {
		return err
	}
	return nil
}
