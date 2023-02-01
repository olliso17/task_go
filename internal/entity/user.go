package entity

import (
	"time"

	"github.com/google/uuid"
)

type User struct {
	ID        string
	Name      string
	Password  string
	Email     string
	CreatedAt string
	UpdatedAt string
	DeletedAt string
	IsDeleted bool
}

func NewUser(name string, password string, email string) *User {
	timestamp := time.Now()
	return &User{
		ID:        uuid.New().String(),
		Name:      name,
		Password:  password,
		Email:     email,
		CreatedAt: timestamp.Local().String(),
		UpdatedAt: timestamp.Local().String(),
		DeletedAt: timestamp.Local().String(),
		IsDeleted: false,
	}
}
