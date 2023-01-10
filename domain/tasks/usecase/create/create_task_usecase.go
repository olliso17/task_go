package create

import (
	"tasks_go/domain/tasks/entity"
)

func CreateTaskUseCase(input InputTaskDto) (OutPutTaskDto, error) {
	task := &entity.Task{}
	newTask, _ := task.NewTask(input.Title, input.Description)

	return OutPutTaskDto{Task: *newTask}, nil
}
