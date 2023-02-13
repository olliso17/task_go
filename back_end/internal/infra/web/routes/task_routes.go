package routes

import (
	"back_end/internal/infra/web"
	"back_end/internal/infra/web/webserver"
)

func RoutesAll(serverPort string, newWebTaskHandler *web.WebTaskHandler, newWebListHandler *web.WebListHandler) {
	webserver := webserver.NewWebServer(serverPort)

	webserver.AddHandler("/task/create", newWebTaskHandler.Create)
	webserver.AddHandler("/tasks", newWebTaskHandler.FindExceptDeleted)
	webserver.AddHandler("/task/title", newWebTaskHandler.FindTitle)
	webserver.AddHandler("/task/id", newWebTaskHandler.FindByID)
	webserver.AddHandler("/task/delete", newWebTaskHandler.SoftDelete)
	webserver.AddHandler("/task/edit", newWebTaskHandler.EditTask)
	webserver.AddHandler("/task/completed", newWebTaskHandler.TaskCompleted)

	webserver.AddHandler("/list/create", newWebListHandler.Create)
	webserver.AddHandler("/lists", newWebListHandler.FindAll)
	webserver.AddHandler("/list/id", newWebListHandler.FindByID)

	webserver.Start()
}
