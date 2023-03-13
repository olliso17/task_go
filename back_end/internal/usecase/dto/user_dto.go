package dto

type UserInputDTO struct {
	Email    string `json:"email"`
	Name     string `json:"name"`
	Password string `json:"password"`
}

type UserOutputDTO struct {
	Mensage string `json:"mensage"`
}

type CheckPasswordInputDTO struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type CheckPasswordOutputDTO struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}
