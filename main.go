package main

import (
	"fmt"
	"tasks_go/domain/tasks/usecase/create"
	"tasks_go/domain/tasks/usecase/create/dto"
)

func main() {
	input := dto.InputTaskDto{
		Title: "teste", Description: "testando para ver se funciona",
	}
	task, err := create.CreateTaskUseCase(&input)

	fmt.Println(task, err)
}
