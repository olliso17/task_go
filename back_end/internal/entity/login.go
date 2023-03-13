package entity

import "time"

type Login struct {
	AccessToken string
	UserID      string
	CreatedAt   time.Time
	ExpiredAt   time.Time
}

func NewLogin(userId string, accessToken string) (*Login, error) {

	login := &Login{
		UserID:      userId,
		AccessToken: accessToken,
		CreatedAt:   time.Now(),
	}

	return login, nil
}
