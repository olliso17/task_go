package web

import (
	"back_end/internal/entity/interfaces"
	usecase "back_end/internal/usecase"
	"back_end/internal/usecase/dto"
	"encoding/json"
	"net/http"
)

type WebUserHandler struct {
	UserRepository  interfaces.UserRepositoryInterface
	LoginRepository interfaces.LoginRepositoryInterface
}

func NewUserHandler(userRepository interfaces.UserRepositoryInterface, loginRepository interfaces.LoginRepositoryInterface) *WebUserHandler {
	return &WebUserHandler{
		UserRepository:  userRepository,
		LoginRepository: loginRepository,
	}
}

func (userHandler *WebUserHandler) Create(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {

		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	var dto dto.UserInputDTO
	err := json.NewDecoder(r.Body).Decode(&dto)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	createUser := *usecase.NewUserRepository(userHandler.UserRepository, userHandler.LoginRepository)
	output, err := createUser.Create(dto)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	cookie := http.Cookie{
		Name:     output.CookieDTO.Name,
		Value:    output.CookieDTO.Value,
		Expires:  output.CookieDTO.Expires,
		HttpOnly: output.CookieDTO.HttpOnly,
	}

	http.SetCookie(w, &cookie)

	err = json.NewEncoder(w).Encode(output)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

}

func (userHandler *WebUserHandler) FindAll(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {

		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	createUser := *usecase.NewUserRepository(userHandler.UserRepository, userHandler.LoginRepository)
	output, err := createUser.FindAll()

	err = json.NewEncoder(w).Encode(output)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

}
