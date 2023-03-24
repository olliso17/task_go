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

func NewLogin(userId string, cookie Cookie) (*Login, error) {

	login := &Login{
		ID:          uuid.New().String(),
		UserID:      userId,
		AccessToken: cookie.Value,
		CreatedAt:   time.Now().Local(),
		ExpiredAt:   cookie.Expires,
		IsExpired:   false,
	}

	return login, nil
}
