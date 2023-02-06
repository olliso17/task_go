package web

import (
	"encoding/json"
	"net/http"
	"tasks_go/internal/entity/interfaces"
	usecase "tasks_go/internal/usecase"
	"tasks_go/internal/usecase/dto"
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

func (h *WebListHandler) FindAll(w http.ResponseWriter, r *http.Request) {

	createList := *usecase.NewListUsecase(h.ListRepository, h.TaskRepository)
	output, err := createList.FindAll()

	err = json.NewEncoder(w).Encode(output)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func (h *WebListHandler) FindByID(w http.ResponseWriter, r *http.Request) {

	params := r.URL.Query().Get("id")

	createList := *usecase.NewListUsecase(h.ListRepository, h.TaskRepository)
	output, err := createList.FindByID(params)

	err = json.NewEncoder(w).Encode(output)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}