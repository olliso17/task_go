package entity

import "time"

type Login struct {
	Email       string
	UserID      string
	Password    string
	AccessToken string
	CreatedAt   string
}

func NewLogin(email string, password string, userId string, accessToken string) (*Login, error) {
	timsesTemp := time.Now().Local().String()

	login := &Login{
		Email:       email,
		Password:    password,
		UserID:      userId,
		AccessToken: accessToken,
		CreatedAt:   timsesTemp,
	}

	return login, nil
}
