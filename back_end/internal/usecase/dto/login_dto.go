package dto

import "back_end/internal/entity"

type InputLoginDto struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type OutPutLoginDto struct {
	CookieDTO entity.Cookie `json:cookie`
	Mensage   string        `json:"mensage"`
}
