package entity

import (
	"time"

	"github.com/google/uuid"
)

type Login struct {
	ID        string
	UserID    string
	Cookie    Cookie
	CreatedAt time.Time
	IsExpired bool
}

func NewLogin(userId string, cookie Cookie) (*Login, error) {

	login := &Login{
		ID:        uuid.New().String(),
		UserID:    userId,
		Cookie:    cookie,
		CreatedAt: time.Now().Local(),
		IsExpired: false,
	}

	return login, nil
}
