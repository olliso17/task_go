package entity

import (
	"time"

	"github.com/google/uuid"
)

type Login struct {
	ID           string
	UserID       string
	SessionToken string
	CreatedAt    time.Time
	ExpiredAt    time.Time
	IsExpired    bool
}

func NewLogin(userId string, token string) (*Login, error) {
	expiration := time.Now().Add(3 * time.Hour)
	login := &Login{
		ID:           uuid.New().String(),
		UserID:       userId,
		SessionToken: token,
		CreatedAt:    time.Now().Local(),
		ExpiredAt:    expiration,
		IsExpired:    false,
	}

	return login, nil
}
