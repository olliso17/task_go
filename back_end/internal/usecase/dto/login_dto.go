package dto

type InputLoginDto struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type OutPutLoginDto struct {
	AccessToken string `json:"access_token"`
	Mensage     string `json:"mensage"`
}
