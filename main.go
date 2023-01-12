package main

import (
	"context"
	"fmt"
	"tasks_go/domain/tasks/usecase/create"
	"tasks_go/domain/tasks/usecase/create/dto"
)

func main() {
	ctx := context.Background()
	input := dto.InputTaskDto{
		Title: "Test", Description: "testando para ver se funciona",
	}
	task, err := create.CreateTaskUseCase(ctx, &input)
	// u := useRepository{}
	// u.AddTask(&input)
	fmt.Println(task, err)
}
