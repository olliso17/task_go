package dto

import (
	"back_end/internal/entity"
	"time"
)

type InputTokenDTO struct {
	User  entity.User `json:"user"`
	Name  string      `json:"name"`
	Email string      `json:"email"`
}

type OutputCreateTokenDTO struct {
	AccessToken string `json:"access_token"`
}

type OutputTokenDTO struct {
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	UserID    string    `json:"user_id"`
	ExpiresAt time.Time `json:"expires_at"`
}
