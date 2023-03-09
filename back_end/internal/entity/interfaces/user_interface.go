package interfaces

import "back_end/internal/entity"

type UserRepositoryInterface interface {
	Create(user *entity.User) error
	CheckPassword(email string, password string) (entity.User, error)
}
