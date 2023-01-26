package db

import (
	"database/sql"

	_ "github.com/lib/pq"
)

func OpenConnectionPostgres() (*sql.DB, error) {
	db, err := sql.Open("postgres", "host=localhost port=5432 user=root password=root dbname=root sslmode=disable")
	if err != nil {
		panic(err)
	}

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	return db, err
}
