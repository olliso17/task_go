//go:generate go run github.com/google/wire/cmd/wire
//go:build !wireinject
// +build !wireinject

package main

import (
	"back_end/internal/entity/interfaces"
	"back_end/internal/infra/database"
	"back_end/internal/infra/web"
	"database/sql"

	// "internal/usecase"

	"github.com/google/wire"
)

// Injectors from wire.go:

// func NewCreateTaskUseCaseGen(db *sql.DB) *usecase.TaskUseCase {
// 	taskRepository := database.NewTaskRepository(db)
// 	createTaskUseCase := usecase.NewTaskUseCase(taskRepository)
// 	return createTaskUseCase
// }

func NewWebTaskHandlerGen(db *sql.DB) *web.WebTaskHandler {
	taskRepository := database.NewTaskRepository(db)
	webTaskHandler := web.NewTaskHandler(taskRepository)
	return webTaskHandler
}
func NewWebListHandlerGen(db *sql.DB) *web.WebListHandler {
	listNewRepository := database.NewListRepository(db)
	taskRepository := database.NewTaskRepository(db)
	webListHandler := web.NewListHandler(listNewRepository, taskRepository)
	return webListHandler
}
func NewWebUserHandlerGen(db *sql.DB) *web.WebUserHandler {
	userRepository := database.NewUserRepository(db)
	loginRepository := database.NewLoginRepository(db)
	webUserHandler := web.NewUserHandler(userRepository, loginRepository)
	return webUserHandler
}
func NewWebLoginHandlerGen(db *sql.DB) *web.WebLoginHandler {
	loginNewRepository := database.NewLoginRepository(db)
	userRepository := database.NewUserRepository(db)
	webLoginHandler := web.NewLoginHandler(loginNewRepository, userRepository)
	return webLoginHandler
}

var setTaskRepositoryDependency = wire.NewSet(database.NewTaskRepository, wire.Bind(new(interfaces.TaskRepositoryInterface), new(*database.TaskRepository)))
var setLoginRepositoryDependency = wire.NewSet(database.NewLoginRepository, wire.Bind(new(interfaces.LoginRepositoryInterface), new(*database.LoginRepository)))
var setListRepositoryDependency = wire.NewSet(database.NewListRepository, wire.Bind(new(interfaces.ListRepositoryInterface), new(*database.ListRepository)))
var setUserRepositoryDependency = wire.NewSet(database.NewUserRepository, wire.Bind(new(interfaces.UserRepositoryInterface), new(*database.UserRepository)))
