package usecase

import (
	"back_end/internal/entity"
	"back_end/internal/entity/interfaces"
	"back_end/internal/usecase/dto"
)

type LoginRepository struct {
	LoginRepository interfaces.LoginInterface
	TokenRepository interfaces.TokenRepositoryInterface
	UserRepository  interfaces.UserRepositoryInterface
}

func NewLoginRepository(loginRepository interfaces.LoginInterface, tokenRepository interfaces.TokenRepositoryInterface, userRepository interfaces.UserRepositoryInterface) *LoginRepository {
	return &LoginRepository{
		LoginRepository: loginRepository,
		TokenRepository: tokenRepository,
		UserRepository:  userRepository,
	}
}

func (loginRepository *LoginRepository) Execute(input dto.InputLoginDto) (dto.OutPutLoginDto, error) {
	user, err := loginRepository.UserRepository.CheckPassword(input.Email, input.Password)
	if err != nil || user.Email == "" && user.Password == "" {
		return dto.OutPutLoginDto{}, err
	}
	token, _ := entity.GenerateJWT(user.Email, user.Password)
	tokenCreate, _ := loginRepository.TokenRepository.CreateAccessToken(&user, token, 3)

	dto := dto.OutPutLoginDto{
		AccessToken: tokenCreate,
		Mensage:     "Login successfully",
	}

	return dto, err
}
