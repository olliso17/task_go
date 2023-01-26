package main

import (
	// _ "github.com/go-sql-driver/mysql"

	db "tasks_go/internal/infra/database/db"
	"tasks_go/internal/infra/web/webserver"

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

	webserver.AddHandler("/task/create", newWebTaskHandler.Create)
	webserver.AddHandler("/tasks", newWebTaskHandler.FindAll)
	webserver.AddHandler("/task", newWebTaskHandler.FindTitle)
	webserver.AddHandler("/task", newWebTaskHandler.FindByID)
	webserver.AddHandler("/task", newWebTaskHandler.SoftDelete)

	webserver.Start()
	// http.HandleFunc("/hello", getHello)

	// http.ListenAndServe(":8080", nil)

}
