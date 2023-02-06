package main

import (
	"database/sql"
	"tasks_go/internal/entity/interfaces"
	"tasks_go/internal/infra/database"
	"tasks_go/internal/infra/web"

	"github.com/google/wire"
)

var SetTaskRepositoryDependency = wire.NewSet(
	database.NewTaskRepository,
	wire.Bind(new(*interfaces.TaskRepositoryInterface), new(*database.TaskRepository)),
)

var SetListRepositoryDependency = wire.NewSet(
	database.NewListRepository,
	wire.Bind(new(*interfaces.ListRepositoryInterface), new(*database.ListRepository)),
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

func NewWebListHandler(db *sql.DB) *web.WebListHandler {
	wire.Build(
		SetListRepositoryDependency,
	)
	return &web.WebListHandler{}
}
