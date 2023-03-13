package web

import (
	"back_end/internal/entity/interfaces"
	usecase "back_end/internal/usecase"
	"back_end/internal/usecase/dto"
	"encoding/json"
	"net/http"
)

type WebLoginHandler struct {
	LoginRepository interfaces.LoginInterface
	TokenRepository interfaces.TokenRepositoryInterface
	UserRepository  interfaces.UserRepositoryInterface
}

func NewLoginHandler(loginRepository interfaces.LoginInterface, tokenRepository interfaces.TokenRepositoryInterface, userRepository interfaces.UserRepositoryInterface) *WebLoginHandler {
	return &WebLoginHandler{
		LoginRepository: loginRepository,
		TokenRepository: tokenRepository,
		UserRepository:  userRepository,
	}
}

func (h *WebLoginHandler) Execute(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {

		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	var dto dto.InputLoginDto
	err := json.NewDecoder(r.Body).Decode(&dto)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	login := *usecase.NewLoginRepository(h.LoginRepository, h.TokenRepository, h.UserRepository)
	output, err := login.Execute(dto)

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
