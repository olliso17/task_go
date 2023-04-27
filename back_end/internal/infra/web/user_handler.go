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
	cookie, err := r.Cookie("session_token")
	currentTime := time.Now()
	token, _ := entity.GenerateJWT()

	var dto dto.UserInputDTO
	err = json.NewDecoder(r.Body).Decode(&dto)
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
	// fmt.Print(currentTime.Add(10 * time.Minute))
	if output.Mensage == "User created successfully" {
		cookie = &http.Cookie{
			Name:     "session_token",
			Value:    token,
			Path:     "/",
			Expires:  currentTime.Add(1 * time.Hour).UTC(),
			HttpOnly: true,
			// Secure:   true,
			SameSite: http.SameSiteLaxMode,
		}
		http.SetCookie(w, cookie)
	}
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
