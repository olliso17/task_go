package interfaces

import "back_end/internal/entity"

type LoginRepositoryInterface interface {
	Execute(login *entity.Login) error
	FindAll() ([]entity.Login, error)
	FindByUserID(id string) (entity.Login, error)
	EditLogin(login *entity.Login) error
}
