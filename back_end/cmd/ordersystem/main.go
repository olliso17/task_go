package main

import (
	// _ "github.com/go-sql-driver/mysql"

	db "back_end/internal/infra/database/db"
	"back_end/internal/infra/web/webserver"

	_ "github.com/lib/pq"
)

func main() {

	db_postgres, err := db.OpenConnectionPostgres()
	if err != nil {
		panic(err)
	}
	// creatreTaskUseCase := NewCreateTaskUseCase(db)
	webserver := webserver.NewWebServer(":8080")
	newWebTaskHandler := NewWebTaskHandlerGen(db_postgres)
	newWebListHandler := NewWebListHandlerGen(db_postgres)

	webserver.AddHandler("/task/create", newWebTaskHandler.Create)
	webserver.AddHandler("/tasks", newWebTaskHandler.FindAll)
	webserver.AddHandler("/task/title", newWebTaskHandler.FindTitle)
	webserver.AddHandler("/task/id", newWebTaskHandler.FindByID)
	webserver.AddHandler("/task/delete", newWebTaskHandler.SoftDelete)

	webserver.AddHandler("/list/create", newWebListHandler.Create)
	webserver.AddHandler("/lists", newWebListHandler.FindAll)
	webserver.AddHandler("/list/id", newWebListHandler.FindByID)

	webserver.Start()

	// http.HandleFunc("/hello", getHello)

	// http.ListenAndServe(":8080", nil)

}
