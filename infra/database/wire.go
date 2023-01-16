package database

import (
	"database/sql"
	"fmt"
	"tasks_go/app/task/usecases"
	"tasks_go/domain/task/repository"
	"tasks_go/infra/web"

	"github.com/google/wire"
)

var setTaskRepositoryDependency = wire.NewSet(
	NewTaskRepository,
	wire.Bind(new(repository.TaskRepository), new(*TaskRepository)),
)

func NewCreateTaskUseCase(db *sql.DB) *web.TaskHandler {
	fmt.Println(db)
	wire.Build(
		setTaskRepositoryDependency,
		usecases.NewCreateTaskUseCase,
	)
	return &web.TaskHandler{}
}
