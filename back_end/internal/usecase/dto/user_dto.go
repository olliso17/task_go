package dto

type UserInputDTO struct {
	Email    string `json:"email"`
	Name     string `json:"name"`
	Password string `json:"password"`
}

type UserOutputDTO struct {
	Mensage     string `json:"mensage"`
	AccessToken string `json:"access_token"`
}

type CheckPasswordInputDTO struct {
	Email    string `json:"email"`
	Name     string `json:"name"`
	Password string `json:"password"`
}
