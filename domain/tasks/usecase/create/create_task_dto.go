package create

import "tasks_go/domain/tasks/entity"

type InputTaskDto struct {
	Title       string
	Description string
}

type OutPutTaskDto struct {
	Task entity.Task
}
