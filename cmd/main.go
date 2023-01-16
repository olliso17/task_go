package main

import (
	"database/sql"
	"tasks_go/infra/database"
	"tasks_go/infra/web/webserver"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	const file string = "task.db"
	db, err := sql.Open("sqlite3", file)
	if err != nil {
		panic(err)
	}
	defer db.Close()
	newTaskHandler := database.NewCreateTaskUseCase(db)
	webserver := webserver.NewWebServer(":8080")
	webserver.AddHandler("/task", newTaskHandler.Create)
	webserver.Start()
}
