package entity

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"os"
	"regexp"
	"time"

	"github.com/google/uuid"
)

type User struct {
	ID        string
	Email     string
	Name      string
	Password  string
	IsAdmin   bool
	List      []ListEntity
	CreatedAt string
	UpdatedAt string
	DeletedAt string
	IsDeleted bool
}

func NewUser(email string, name string, password string) (*User, error) {
	timsesTemp := time.Now().Local().String()
	user := &User{
		ID:        uuid.New().String(),
		Name:      name,
		Email:     Hash(name, os.Getenv("CRYPTO_EMAIL"), email),
		Password:  Hash(email, os.Getenv("CRYPTO_PASSWORD"), password),
		IsAdmin:   false,
		CreatedAt: timsesTemp,
		UpdatedAt: timsesTemp,
		DeletedAt: timsesTemp,
		IsDeleted: false,
	}
	isValidate := IsValidate(user)
	if isValidate == true {
		return user, nil
	}

	return nil, fmt.Errorf("invalid caracters")
}
func IsValidate(user *User) bool {

	if user.Email == "" {
		fmt.Printf("Email is required\n")
		return false
	}

	if user.Name == "" {
		fmt.Printf("Name is required\n")
		return false
	}

	if user.Password == "" {
		fmt.Printf("Password is required\n")
		return false
	}
	user.IsRegex(map[string]string{
		"email":    user.Email,
		"name":     user.Name,
		"password": user.Password,
	})
	return true
}

func (t *User) IsRegex(sliceString map[string]string) {

	for k, v := range sliceString {
		regex, _ := regexp.MatchString("[a-zA-Zà-úÀ-Ú0-9]", v)

		switch regex {
		case true:
			continue

		case false:
			fmt.Println(k, "Invalid caracters")
			break
		}

	}

}
func Hash(salt, serverSalt, password string) string {
	buff := password + salt + serverSalt
	h := sha256.Sum256([]byte(buff))
	return hex.EncodeToString(h[:])
}
