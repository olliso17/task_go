package web

import (
	"encoding/json"
	"net/http"
	usecase "tasks_go/app/task/usecases"
	"tasks_go/app/task/usecases/dto"
	"tasks_go/domain/task/repository"
)

type TaskHandler struct {
	TaskHandler repository.TaskRepository
}

func NewTaskHandler(taskRepository repository.TaskRepository) *TaskHandler {
	return &TaskHandler{
		TaskHandler: taskRepository,
	}
}

func (h *TaskHandler) Create(w http.ResponseWriter, r *http.Request) {
	var dto dto.DtoCreateTaskInput
	err := json.NewDecoder(r.Body).Decode(&dto)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	createTask := usecase.NewCreateTaskUseCase(h.TaskHandler)
	output := createTask.Execute(&dto)
	err = json.NewEncoder(w).Encode(output)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

}
