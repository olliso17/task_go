package main

import (
	"fmt"
	"tasks_go/domain/tasks/usecase/create"
)

func main() {
	input := create.InputTaskDto{
		Title: "teste", Description: "testando para ver se funciona",
	}
	task, err := create.CreateTaskUseCase(&input)

	fmt.Println(task, err)
}
