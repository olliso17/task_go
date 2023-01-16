package main

import (
	"tasks_go/domain/task/repository"
	"tasks_go/infra/web"
	"tasks_go/infra/web/webserver"
)

type TaskUseCase struct {
	repository.TaskRepository
}

func main() {
	// input := &dto.DtoCreateTaskInput{
	// 	Title:       "title",
	// 	Description: "testando essa bagunça",
	// }
	newTaskHandler := web.NewTaskHandler(TaskUseCase{})
	webserver := webserver.NewWebServer(":8080")
	webserver.AddHandler("/task", newTaskHandler.Create)
	webserver.Start()
}
