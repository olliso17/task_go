package database

import (
	"database/sql"
)

type ListRepository struct {
	Db *sql.DB
}

func NewListRepository(db *sql.DB) *ListRepository {
	return &ListRepository{
		Db: db,
	}
}

// func (l *ListRepository) Save(list *entity.ListEntity) error {
// 	smt, err :=
// }
