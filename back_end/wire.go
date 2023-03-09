package main

import (
	"back_end/internal/entity/interfaces"
	"back_end/internal/infra/database"
	"back_end/internal/infra/web"
	"database/sql"

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
var SetUserRepositoryDependency = wire.NewSet(
	database.NewUserRepository,
	wire.Bind(new(*interfaces.UserRepositoryInterface), new(*database.UserRepository)),
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
func NewWebUserHandler(db *sql.DB) *web.WebUserHandler {
	wire.Build(
		SetUserRepositoryDependency,
	)
	return &web.WebUserHandler{}
}
