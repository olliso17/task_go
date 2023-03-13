package dto

import "time"

type InputLoginDto struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type OutPutLoginDto struct {
	AccessToken string    `json:"access_token"`
	Expired     time.Time `json:"expired"`
	Mensage     string    `json:"mensage"`
}
