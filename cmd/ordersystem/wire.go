package main

import (
	"database/sql"
	"tasks_go/internal/entity"
	"tasks_go/internal/infra/database"
	"tasks_go/internal/infra/web"

	"github.com/google/wire"
)

var SetTaskRepositoryDependency = wire.NewSet(
	database.NewTaskRepository,
	wire.Bind(new(*entity.TaskRepositoryInterface), new(*database.TaskRepository)),
)

// func NewCreateTaskUseCase(db *sql.DB) *usecase.TaskUseCase {
// 	wire.Build(
// 		SetTaskRepositoryDependency,
// 	)
// 	return &usecase.TaskUseCase{}
// }

func NewWebTaskHandler(db *sql.DB) *web.WebTaskHandler {
	wire.Build(
		SetTaskRepositoryDependency,
	)
	return &web.WebTaskHandler{}
}
