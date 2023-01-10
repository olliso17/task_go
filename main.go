package main

import (
	"fmt"
	"tasks_go/domain/tasks/usecase/create"
)

func main() {
	input := create.InputTaskDto{
		Title: "teste", Description: "testando para ver se funciona",
	}
	task, _ := create.CreateTaskUseCase(input)
	fmt.Println(task)
}
