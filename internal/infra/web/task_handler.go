package web

import (
	"encoding/json"
	"net/http"
	"tasks_go/internal/entity"
	usecase "tasks_go/internal/usecase"
)

type WebTaskHandler struct {
	TaskRepository entity.TaskRepositoryInterface
}

func NewTaskHandler(taskRepository entity.TaskRepositoryInterface) *WebTaskHandler {
	return &WebTaskHandler{
		TaskRepository: taskRepository,
	}
}

func (h *WebTaskHandler) Create(w http.ResponseWriter, r *http.Request) {
	var dto usecase.TaskInputDTO
	err := json.NewDecoder(r.Body).Decode(&dto)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	createTask := usecase.NewCreateTaskUseCase(h.TaskRepository)
	output, err := createTask.Execute(dto)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	err = json.NewEncoder(w).Encode(output)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

}
