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

	webserver.AddHandler("/task/create", newWebTaskHandler.Create, "Post")
	webserver.AddHandler("/tasks", newWebTaskHandler.FindAll, "Get")
	webserver.AddHandler("/task/title", newWebTaskHandler.FindTitle, "Get")
	webserver.AddHandler("/task/id", newWebTaskHandler.FindByID, "Get")
	webserver.AddHandler("/task/delete", newWebTaskHandler.SoftDelete, "Delete")

	webserver.AddHandler("/list/create", newWebListHandler.Create, "Post")
	webserver.AddHandler("/lists", newWebListHandler.FindAll, "Get")
	webserver.AddHandler("/list/id", newWebListHandler.FindByID, "Get")

	webserver.Start()

	// http.HandleFunc("/hello", getHello)

	// http.ListenAndServe(":8080", nil)

}
