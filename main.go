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
	task, _ := create.CreateTaskUseCase(ctx, &input)
	// if err != nil {
	// 	return nil, err
	// }
	// u := repository.TaskRepository{}
	// u.AddTask(ctx, &input)
	fmt.Println(task, nil)

}
