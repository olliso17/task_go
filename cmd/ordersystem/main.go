package main

import (
	"database/sql"
	"fmt"
	"tasks_go/internal/infra/web/webserver"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "data.db")
	if err != nil {
		panic(err)
	}
	defer db.Close()
	// creatreTaskUseCase := NewCreateTaskUseCase(db)
	webserver := webserver.NewWebServer(":8080")
	newWebTaskHandler := NewWebTaskHandler(db)
	webserver.AddHandler("/task", newWebTaskHandler.Create)
	fmt.Println("Starting web server on port", ":8080")
	webserver.Start()

}
