package main

import (
	"database/sql"
	"fmt"
	"tasks_go/internal/infra/web/webserver"

	// _ "github.com/go-sql-driver/mysql"
	_ "github.com/lib/pq"
)

func main() {
	// configs, err := configs.LoadConfig(".")
	// if err != nil {
	// 	panic(err)
	// }
	// db, err := sql.Open(configs.DBDriver, fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", configs.DBUser, configs.DBPassword, configs.DBHost, configs.DBPort, configs.DBName))
	db, err := sql.Open("postgres", "host=localhost port=54322 user=root password=root dbname=root sslmode=disable")
	if err != nil {
		panic(err)
	}

	defer db.Close()
	// creatreTaskUseCase := NewCreateTaskUseCase(db)
	webserver := webserver.NewWebServer(":8080")
	newWebTaskHandler := NewWebTaskHandlerGen(db)

	webserver.AddHandler("/tasks", newWebTaskHandler.Create)
	fmt.Println("Starting web server on port", ":8080")
	webserver.Start()

}
