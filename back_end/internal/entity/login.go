package entity

import (
	"time"

	"github.com/google/uuid"
)

type Login struct {
	ID          string
	AccessToken string
	UserID      string
	CreatedAt   time.Time
	ExpiredAt   time.Time
	IsExpired   bool
	IsSuccess   bool
}

func NewLogin(userId string, accessToken string) (*Login, error) {

	login := &Login{
		ID:          uuid.New().String(),
		UserID:      userId,
		AccessToken: accessToken,
		CreatedAt:   time.Now(),
		IsExpired:   false,
		IsSuccess:   false,
	}

	return login, nil
}
