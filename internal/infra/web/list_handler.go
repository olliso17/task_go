package web

import (
	"encoding/json"
	"net/http"
	"tasks_go/internal/entity"
	usecase "tasks_go/internal/usecase"
	"tasks_go/internal/usecase/dto"
)

type WebListHandler struct {
	ListRepository entity.ListRepositoryInterface
}

func NewListHandler(listRepository entity.ListRepositoryInterface) *WebListHandler {
	return &WebListHandler{
		ListRepository: listRepository,
	}
}

func (h *WebListHandler) Create(w http.ResponseWriter, r *http.Request) {
	var dto dto.ListInpuntDtO
	err := json.NewDecoder(r.Body).Decode(&dto)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	createList := *usecase.NewListUsecase(h.ListRepository)
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

	createList := *usecase.NewListUsecase(h.ListRepository)
	output, err := createList.FindAll()

	err = json.NewEncoder(w).Encode(output)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
