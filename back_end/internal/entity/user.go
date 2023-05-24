package entity

import (
	"crypto/sha256"
	"encoding/hex"
	"os"
	"time"

	"github.com/asaskevich/govalidator"
	"github.com/google/uuid"
)

type User struct {
	Base     `valid:"required"`
	Email    string       `json:"email" valid:"notnull"`
	Name     string       `json:"name" valid:"notnull"`
	Password string       `json:"password" valid:"notnull"`
	IsAdmin  bool         `json:"is_admin" valid:"-"`
	Lists    []ListEntity `json:"lists" valid:"-"`
}

func NewUser(email string, name string, password string) (*User, error) {
	user := &User{
		Name:     name,
		Email:    Hash(password, os.Getenv("CRYPTO_EMAIL"), email),
		Password: Hash(email, os.Getenv("CRYPTO_PASSWORD"), password),
		IsAdmin:  false,
	}
	// isValidate := IsValidate(user)
	// if isValidate == true {
	// 	return user, nil
	// }
	err := user.Prepare()

	if err != nil {
		return nil, err
	}
	return user, nil
}
func (user *User) Prepare() error {
	timeNow := time.Now()
	user.ID = uuid.New().String()
	user.CreatedAt = timeNow.Local().String()
	user.UpdatedAt = timeNow.Local().String()
	user.DeletedAt = timeNow.Local().String()
	user.IsDeleted = false

	err := user.validate()
	if err != nil {
		return err
	}
	return nil

}

func (user *User) validate() error {
	_, err := govalidator.ValidateStruct(user)
	if err != nil {
		return err
	}
	return nil
}

// func IsValidate(user *User) bool {

// 	if user.Email == "" {
// 		fmt.Printf("Email is required\n")
// 		return false
// 	}

// 	if user.Name == "" {
// 		fmt.Printf("Name is required\n")
// 		return false
// 	}

// 	if user.Password == "" {
// 		fmt.Printf("Password is required\n")
// 		return false
// 	}
// 	user.IsRegex(map[string]string{
// 		"email":    user.Email,
// 		"name":     user.Name,
// 		"password": user.Password,
// 	})

// 	return true
// }

// func (t *User) IsRegex(sliceString map[string]string) {

// 	for k, v := range sliceString {
// 		regex, _ := regexp.MatchString("[a-zA-Zà-úÀ-Ú0-9]", v)

// 		switch regex {
// 		case true:
// 			continue

// 		case false:
// 			fmt.Println(k, "Invalid caracters")
// 			break
// 		}

// 	}

// }

func Hash(salt, serverSalt, password string) string {
	buff := password + salt + serverSalt
	h := sha256.Sum256([]byte(buff))
	return hex.EncodeToString(h[:])
}
