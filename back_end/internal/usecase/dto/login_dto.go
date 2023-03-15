package dto

type InputLoginDto struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type OutPutLoginDto struct {
	Mensage string `json:"mensage"`
}
