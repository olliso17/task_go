package main

import (
	"database/sql"
	"tasks_go/internal/infra/web/webserver"
)

func main() {
	db, err := sql.Open("sqlite3", "./teste.db")
	if err != nil {
		panic(err)
	}
	defer db.Close()
	// creatreTaskUseCase := NewCreateTaskUseCase(db)
	webTaskHandler := NewWebTaskHandler(db)
	webserver := webserver.NewWebServer(":8080")
	webserver.AddHandler("/task", webTaskHandler.Create)
	webserver.Start()
}
