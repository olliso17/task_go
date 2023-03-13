package usecase

import (
	"back_end/internal/entity/interfaces"
	"back_end/internal/usecase/dto"
)

type LoginRepository struct {
	LoginRepository interfaces.LoginInterface
}

func NewLoginRepository(loginRepository interfaces.LoginInterface) *LoginRepository {
	return &LoginRepository{LoginRepository: loginRepository}
}

func (loginRepository *LoginRepository) Execute(input dto.InputLoginDto) (string, error) {

}
