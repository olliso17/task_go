package create

import (
	"context"
	"fmt"
	"tasks_go/domain/tasks/entity"
	"tasks_go/domain/tasks/usecase/create/dto"
	"time"
)

// type UseRepository struct {
// 	repository.TaskRepository
// }

// func ReceiveTaskRepository(c CreateTaskUseCaseInterface) {
// 	c.CreateTaskUseCase(ctx context.Context, input *dto.InputTaskDto) (*dto.OutPutTaskDto, error)

// }

// type CreateTaskUseCaseInterface interface {
// 	CreateTaskUseCase(ctx context.Context, input *dto.InputTaskDto) (*dto.OutPutTaskDto, error)
// }

func CreateTaskUseCase(ctx context.Context, input *dto.InputTaskDto) (*dto.OutPutTaskDto, error) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*3)
	defer cancel()
	// u := UseRepository{}
	t := entity.Task{}
	task, err := t.NewTask(input.Title, input.Description)

	if err != nil {
		return nil, err
	}
	// newTask, _ := u.AddTask(task)
	output := &dto.OutPutTaskDto{Task: *task}
	select {
	case <-ctx.Done():
		fmt.Println("Task added successfully")
	case <-time.After(time.Minute * 2):
		fmt.Println("Task cancelled")
		cancel()
	}
	return output, nil

}
