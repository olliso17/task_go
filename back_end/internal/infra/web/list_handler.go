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

	if r.Method != http.MethodPost {

		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	cookie, err := r.Cookie("session_token")
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
	}
	http.SetCookie(w, cookie)
	if cookie.Name == "session_token" && cookie.Value != "" {

		var dto dto.ListInpuntDtO
		err = json.NewDecoder(r.Body).Decode(&dto)

		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		createList := *usecase.NewListRepository(h.ListRepository, h.TaskRepository)
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
	http.Error(w, err.Error(), http.StatusUnauthorized)
	return
}

func (h *WebListHandler) FindAll(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	cookie, err := r.Cookie("session_token")
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
	}
	http.SetCookie(w, cookie)
	if cookie.Name == "session_token" && cookie.Value != "" {
		createList := *usecase.NewListRepository(h.ListRepository, h.TaskRepository)
		output, err := createList.FindAll()

		err = json.NewEncoder(w).Encode(output)

		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}
	http.Error(w, err.Error(), http.StatusUnauthorized)
	return
}

func (h *WebListHandler) FindByID(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	cookie, err := r.Cookie("session_token")
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
	}
	http.SetCookie(w, cookie)
	if cookie.Name == "session_token" && cookie.Value != "" {
		params := r.URL.Query().Get("id")

		createList := *usecase.NewListRepository(h.ListRepository, h.TaskRepository)
		output, err := createList.FindByID(params)

		err = json.NewEncoder(w).Encode(output)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}
	http.Error(w, err.Error(), http.StatusUnauthorized)
	return
}
func (h *WebListHandler) EditList(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPatch {

		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	cookie, err := r.Cookie("session_token")
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
	}
	http.SetCookie(w, cookie)
	if cookie.Name == "session_token" && cookie.Value != "" {

		input := dto.EditListEntityInputDto{}
		err = json.NewDecoder(r.Body).Decode(&input)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		createList := *usecase.NewListRepository(h.ListRepository, h.TaskRepository)
		output, err := createList.EditList(input)
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
	http.Error(w, err.Error(), http.StatusUnauthorized)
	return
}
func (h *WebListHandler) SoftDelete(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodDelete {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	cookie, err := r.Cookie("session_token")
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
	}
	http.SetCookie(w, cookie)

	if cookie.Name == "session_token" && cookie.Value != "" {
		input := dto.ListInputSoftDeleteDTO{}
		err = json.NewDecoder(r.Body).Decode(&input)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		createList := *usecase.NewListRepository(h.ListRepository, h.TaskRepository)

		ListDelete, err := createList.SoftDelete(input)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		json.NewEncoder(w).Encode(ListDelete)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}
	http.Error(w, err.Error(), http.StatusUnauthorized)
	return
}
