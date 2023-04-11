package entity

import (
	"time"

	"github.com/google/uuid"
)

type Login struct {
	ID        string
	UserID    string
	CreatedAt time.Time
	ExpiredAt time.Time
	IsExpired bool
}

func NewLogin(userId string) (*Login, error) {
	expiration := time.Now().Add(1 * 24 * time.Hour)
	login := &Login{
		ID:        uuid.New().String(),
		UserID:    userId,
		CreatedAt: time.Now().Local(),
		ExpiredAt: expiration,
		IsExpired: false,
	}

	return login, nil
}
