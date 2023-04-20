package web

import (
	"back_end/internal/entity"
	"back_end/internal/entity/interfaces"
	usecase "back_end/internal/usecase"
	"back_end/internal/usecase/dto"
	"encoding/json"
	"net/http"
	"time"
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
	token, _ := entity.GenerateJWT()
	cookie := &http.Cookie{
		Name:     "session_token",
		Value:    token,
		Path:     "/",
		Expires:  time.Now().Add(1 * time.Hour),
		MaxAge:   300,
		HttpOnly: true,
		Secure:   true,
		SameSite: http.SameSiteLaxMode,
	}
	http.SetCookie(w, cookie)
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

	createLogin := *usecase.NewLoginRepository(h.LoginRepository, h.UserRepository)
	output, err := createLogin.Create(dto)

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
	token, _ := entity.GenerateJWT()

	cookie := &http.Cookie{
		Name:     "session_token",
		Value:    token,
		Path:     "/",
		Expires:  time.Now().Add(1 * time.Hour),
		MaxAge:   300,
		HttpOnly: true,
		Secure:   true,
		SameSite: http.SameSiteLaxMode,
	}
	http.SetCookie(w, cookie)

	err = json.NewEncoder(w).Encode(output)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
func (h *WebLoginHandler) FindByToken(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	cookie, err := r.Cookie("session_token")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	http.SetCookie(w, cookie)

	createLogin := *usecase.NewLoginRepository(h.LoginRepository, h.UserRepository)
	output, err := createLogin.FindByToken(cookie.Value)

	err = json.NewEncoder(w).Encode(output)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func (h *WebLoginHandler) Logout(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	// Obter o cookie de autenticação
	cookie, err := r.Cookie("access_token")
	logoutLogin := *usecase.NewLoginRepository(h.LoginRepository, h.UserRepository)
	output := logoutLogin.Logout(cookie.Value)

	if err != nil {
		http.SetCookie(w, cookie)
		return
	}

	// Remover o cookie de autenticação
	cookie.Name = ""
	cookie.Value = ""
	cookie.Path = ""
	cookie.MaxAge = -1

	http.SetCookie(w, cookie)

	err = json.NewEncoder(w).Encode(output)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

}
