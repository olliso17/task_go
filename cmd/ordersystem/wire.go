package main

import (
	"database/sql"
	"tasks_go/internal/entity"
	"tasks_go/internal/infra/database"
	"tasks_go/internal/infra/web"
	"tasks_go/internal/usecase"

	"github.com/google/wire"
)

var setTaskRepositoryDependency = wire.NewSet(
	database.NewTaskRepository,
	wire.Bind(new(entity.TaskRepositoryInterface), new(*database.TaskRepository)),
)

func NewCreateTaskUseCase(db *sql.DB) *usecase.CreateTaskUseCase {
	wire.Build(
		setTaskRepositoryDependency,
	)
	return &usecase.CreateTaskUseCase{}
}

func NewWebTaskHandler(db *sql.DB) *web.WebTaskHandler {
	wire.Build(
		setTaskRepositoryDependency,
	)
	return &web.WebTaskHandler{}
}
