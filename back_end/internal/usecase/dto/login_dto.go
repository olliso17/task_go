package dto

type InputLoginDto struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}
type InputLogoutDto struct {
	SessionToken string `json:"session_token"`
}

type OutPutLoginDto struct {
	Mensage string `json:"mensage"`
}

type OutPutLoginTokenDto struct {
	UserId string `json:"user_id"`
}
