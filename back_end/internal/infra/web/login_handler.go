package web

import (
	"back_end/internal/entity"
	"back_end/internal/entity/interfaces"
	usecase "back_end/internal/usecase"
	"back_end/internal/usecase/dto"
	"encoding/json"
	"net/http"
)

type WebLoginHandler struct {
	LoginRepository interfaces.LoginRepositoryInterface
	UserRepository  interfaces.UserRepositoryInterface
}

func NewLoginHandler(loginRepository interfaces.LoginRepositoryInterface, userRepository interfaces.UserRepositoryInterface) *WebLoginHandler {
	return &WebLoginHandler{
		LoginRepository: loginRepository,
		UserRepository:  userRepository,
	}
}

func (h *WebLoginHandler) Create(w http.ResponseWriter, r *http.Request) {
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

	login := *usecase.NewLoginRepository(h.LoginRepository, h.UserRepository)
	output, err := login.Create(dto)
	// rtCookie := http.Cookie{
	// 	Name:     "refresh_token",
	// 	Path:     "/",
	// 	Value:    output.AccessToken,
	// 	Expires:  time.Now().Add(24 * time.Hour),
	// 	HttpOnly: true,
	// }
	// cookie := http.Cookie{
	// 	Name:     "access_token",
	// 	Value:    output.AccessToken,
	// 	Expires:  time.Now().Add(24 * time.Hour),
	// 	HttpOnly: true,
	// }
	http.SetCookie(w, &output.Cookie)
	// http.SetCookie(w, &rtCookie)
	// fmt.Fprint(w, cookie)
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

func (h *WebLoginHandler) FindAll(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {

		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	createLogin := *usecase.NewLoginRepository(h.LoginRepository, h.UserRepository)
	output, err := createLogin.FindAll()
	err = json.NewEncoder(w).Encode(output)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

}

func (h *WebLoginHandler) EditLogin(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPatch {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	input := entity.Login{}
	err := json.NewDecoder(r.Body).Decode(&input)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	createLogin := *usecase.NewLoginRepository(h.LoginRepository, h.UserRepository)
	output, err := createLogin.EditLogin(input)
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
