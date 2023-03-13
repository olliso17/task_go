package entity

import (
	"time"

	"github.com/google/uuid"
)

type Login struct {
	ID          string
	UserID      string
	AccessToken string
	CreatedAt   time.Time
	ExpiredAt   time.Time
	IsExpired   bool
}

func NewLogin(userId string, accessToken string) (*Login, error) {

	login := &Login{
		ID:          uuid.New().String(),
		UserID:      userId,
		AccessToken: accessToken,
		CreatedAt:   time.Now(),
		ExpiredAt:   time.Now().Add(1 * time.Hour),
		IsExpired:   false,
	}

	return login, nil
}
