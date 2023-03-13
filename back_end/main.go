package main

import (
	// _ "github.com/go-sql-driver/mysql"

	db "back_end/internal/infra/database/db"
	"back_end/internal/infra/web/routes"

	_ "github.com/lib/pq"
)

func main() {

	db_postgres, err := db.OpenConnectionPostgres()
	if err != nil {
		panic(err)
	}
	// creatreTaskUseCase := NewCreateTaskUseCase(db)
	newWebTaskHandlerPostgres := NewWebTaskHandlerGen(db_postgres)
	newWebListHandlerPostgres := NewWebListHandlerGen(db_postgres)
	newWebUserHandlerPostgres := NewWebUserHandlerGen(db_postgres)
	newWebLoginHandlerPostgres := NewWebLoginHandlerGen(db_postgres)

	routes.RoutesAll(":8080", newWebTaskHandlerPostgres, newWebListHandlerPostgres, newWebUserHandlerPostgres, newWebLoginHandlerPostgres)

}
