package main

import (
	"database/sql"
	"tasks_go/internal/infra/web/webserver"

	// _ "github.com/go-sql-driver/mysql"
	_ "github.com/lib/pq"
)

// func getHello(w http.ResponseWriter, r *http.Request) {
// 	fmt.Printf("got /hello request\n")
// 	io.WriteString(w, "Hello, HTTP!\n")
// }

func main() {
	// configs, err := configs.LoadConfig(".")
	// if err != nil {
	// 	panic(err)
	// }
	// db, err := sql.Open(configs.DBDriver, fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", configs.DBUser, configs.DBPassword, configs.DBHost, configs.DBPort, configs.DBName))
	db, err := sql.Open("postgres", "host=localhost port=5432 user=root password=root dbname=root sslmode=disable")
	if err != nil {
		panic(err)
	}

	defer db.Close()
	// creatreTaskUseCase := NewCreateTaskUseCase(db)
	webserver := webserver.NewWebServer(":8080")
	newWebTaskHandler := NewWebTaskHandlerGen(db)

	webserver.AddHandler("/tasks", newWebTaskHandler.Create)

	webserver.Start()
	// http.HandleFunc("/hello", getHello)

	// http.ListenAndServe(":8080", nil)

}
