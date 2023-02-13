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
	newWebTaskHandler := NewWebTaskHandlerGen(db_postgres)
	newWebListHandler := NewWebListHandlerGen(db_postgres)

	routes.RoutesAll(":8080", newWebTaskHandler, newWebListHandler)

	// http.HandleFunc("/hello", getHello)

	// http.ListenAndServe(":8080", nil)

}
