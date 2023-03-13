package entity

import "time"

type Login struct {
	Email       string
	Password    string
	AccessToken string
	CreatedAt   string
}

func NewLogin(email string, password string, accessToken string) (*Login, error) {
	timsesTemp := time.Now().Local().String()

	login := &Login{
		Email:       email,
		Password:    password,
		AccessToken: accessToken,
		CreatedAt:   timsesTemp,
	}

	return login, nil
}
