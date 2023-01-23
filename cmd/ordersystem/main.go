package main

import (
	// _ "github.com/go-sql-driver/mysql"

	"database/sql"
	"tasks_go/internal/infra/web/webserver"

	_ "github.com/lib/pq"
)

func main() {
	// task := usecase.TaskInputDTO{
	// 	Title:       "getHello",
	// 	Description: "get hello",
	// 	Status:      false,
	// 	Priority:    false,
	// }
	// teste, _ := entity.NewTask(task.Title, task.Description, task.Status, task.Priority)

	// input := entity.NewListEntity("Jack", *teste)

	// fmt.Println(input)

	db, err := sql.Open("postgres", "host=localhost port=5432 user=root password=root dbname=root sslmode=disable")
	if err != nil {
		panic(err)
	}

	defer db.Close()
	// creatreTaskUseCase := NewCreateTaskUseCase(db)
	webserver := webserver.NewWebServer(":8080")
	newWebTaskHandler := NewWebTaskHandlerGen(db)

	webserver.AddHandler("/task/create", newWebTaskHandler.Create)
	webserver.AddHandler("/tasks", newWebTaskHandler.FindAll)
	webserver.AddHandler("/task", newWebTaskHandler.FindTitle)

	webserver.Start()
	// http.HandleFunc("/hello", getHello)

	// http.ListenAndServe(":8080", nil)

}
