package interfaces

import "back_end/internal/entity"

type LoginRepositoryInterface interface {
	// Execute(login *entity.Login) error
	Create(login *entity.Login) error
	FindAll() ([]entity.Login, error)
	FindByID(id string) (entity.Login, error)
	FindByUserID(userID string) (entity.Login, error)
	EditLogin(login *entity.Login) error
	// Logout(userID string, token string) error
}
