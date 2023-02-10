package web

import (
	"back_end/internal/entity/interfaces"
	usecase "back_end/internal/usecase"
	"back_end/internal/usecase/dto"
	"encoding/json"
	"net/http"
)

type WebTaskHandler struct {
	TaskRepository interfaces.TaskRepositoryInterface
}

func NewTaskHandler(taskRepository interfaces.TaskRepositoryInterface) *WebTaskHandler {
	return &WebTaskHandler{
		TaskRepository: taskRepository,
	}
}

func (h *WebTaskHandler) Create(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		var dto dto.TaskInputDTO
		err := json.NewDecoder(r.Body).Decode(&dto)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		createTask := *usecase.NewTaskUseCase(h.TaskRepository)
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

	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
}

func (h *WebTaskHandler) FindAll(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		createTask := *usecase.NewTaskUseCase(h.TaskRepository)
		output, err := createTask.FindAll()

		err = json.NewEncoder(w).Encode(output)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}

	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
}

func (h *WebTaskHandler) FindTitle(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		params := r.URL.Query().Get("title")

		createTask := *usecase.NewTaskUseCase(h.TaskRepository)
		output, err := createTask.FindTitle(params)

		err = json.NewEncoder(w).Encode(output)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}

	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
}

func (h *WebTaskHandler) FindByID(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		params := r.URL.Query().Get("id")

		createTask := *usecase.NewTaskUseCase(h.TaskRepository)
		output, err := createTask.FindByID(params)

		err = json.NewEncoder(w).Encode(output)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}

	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
}

func (h *WebTaskHandler) SoftDelete(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodDelete {
		id := r.URL.Query().Get("id")

		input := dto.TaskInputSoftDeleteDTO{
			ID: id,
		}
		createTask := *usecase.NewTaskUseCase(h.TaskRepository)

		taskDelete, err := createTask.SoftDelete(input)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		json.NewEncoder(w).Encode(taskDelete)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

	}

	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
}
