package entity

import (
	"time"

	"github.com/asaskevich/govalidator"
	"github.com/google/uuid"
)

type Login struct {
	Base         `valid:"required"`
	UserID       string    `json:"user_id" valid:"notnull"`
	SessionToken string    `json:"session_token" valid:"alphanum,notnull"`
	HostName     string    `json:"host_name" valid:"alphanum,notnull"`
	IPAddress    int       `json:"ip_address" valid:"notnull"`
	ExpiredAt    time.Time `json:"expired_at" valid:"-"`
	IsLogout     bool      `json:"is_logout" valid:"-"`
}

func init() {
	govalidator.SetFieldsRequiredByDefault(true)
}

func NewLogin(userId string, token string, hostName string, ipAddress int) (*Login, error) {
	expiration := time.Now().Add(3 * time.Hour)
	login := &Login{
		UserID:       userId,
		SessionToken: token,
		HostName:     hostName,
		IPAddress:    ipAddress,
		ExpiredAt:    expiration,
		IsLogout:     false,
	}
	err := login.Prepare()

	if err != nil {
		return nil, err
	}

	return login, nil
}

func (login *Login) Prepare() error {
	timeNow := time.Now()
	login.ID = uuid.New().String()
	login.CreatedAt = timeNow.Local().String()
	login.UpdatedAt = timeNow.Local().String()
	login.DeletedAt = timeNow.Local().String()
	login.IsDeleted = false

	err := login.validate()
	if err != nil {
		return err
	}
	return nil

}

func (login *Login) validate() error {
	_, err := govalidator.ValidateStruct(login)
	if err != nil {
		return err
	}
	return nil
}
