package web

import (
	"back_end/internal/entity/interfaces"
	usecase "back_end/internal/usecase"
	"back_end/internal/usecase/dto"
	"encoding/json"
	"net/http"
)

type WebListHandler struct {
	ListRepository interfaces.ListRepositoryInterface
	TaskRepository interfaces.TaskRepositoryInterface
}

func NewListHandler(listRepository interfaces.ListRepositoryInterface, taskUsecase interfaces.TaskRepositoryInterface) *WebListHandler {
	return &WebListHandler{
		ListRepository: listRepository,
		TaskRepository: taskUsecase,
	}
}

func (h *WebListHandler) Create(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		var dto dto.ListInpuntDtO
		err := json.NewDecoder(r.Body).Decode(&dto)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		createList := *usecase.NewListUsecase(h.ListRepository, h.TaskRepository)
		output, err := createList.Execute(dto)
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

func (h *WebListHandler) FindAll(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		createList := *usecase.NewListUsecase(h.ListRepository, h.TaskRepository)
		output, err := createList.FindAll()

		err = json.NewEncoder(w).Encode(output)

		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}

	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)

}

func (h *WebListHandler) FindByID(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		params := r.URL.Query().Get("id")

		createList := *usecase.NewListUsecase(h.ListRepository, h.TaskRepository)
		output, err := createList.FindByID(params)

		err = json.NewEncoder(w).Encode(output)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}

	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
}
