package dto

import (
	"back_end/internal/entity"
)

type InputTokenDTO struct {
	User   entity.User `json:"user"`
	Name   string      `json:"name"`
	Email  string      `json:"email"`
	Expiry int64       `json:"expiry"`
}

type OutputCreateTokenDTO struct {
	AccessToken string `json:"access_token"`
	Expired     int64  `json:"expired"`
}
