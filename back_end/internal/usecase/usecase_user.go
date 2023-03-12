package usecase

import (
	"back_end/internal/entity"
	"back_end/internal/entity/interfaces"
	"back_end/internal/usecase/dto"
	"os"
)

type UserRepository struct {
	UserRepository  interfaces.UserRepositoryInterface
	TokenRepository interfaces.TokenRepositoryInterface
}

func NewUserRepository(userRepository interfaces.UserRepositoryInterface, tokenRepository interfaces.TokenRepositoryInterface) *UserRepository {
	return &UserRepository{
		UserRepository:  userRepository,
		TokenRepository: tokenRepository,
	}
}

func (userRepository *UserRepository) Create(input dto.UserInputDTO) (dto.UserOutputDTO, error) {
	user, _ := entity.NewUser(input.Email, input.Name, input.Password)
	token, _ := entity.GenerateJWT(user.Email, user.Name)
	tokenCreate, _ := userRepository.TokenRepository.CreateAccessToken(user, token, 2)

	if err := userRepository.UserRepository.Create(user); err != nil {
		return dto.UserOutputDTO{Mensage: "Unable to create user", AccessToken: tokenCreate}, err
	}
	dto := dto.UserOutputDTO{
		Mensage:     "User created successfully",
		AccessToken: tokenCreate,
	}
	return dto, nil
}

func (userRepository *UserRepository) CheckPassword(input dto.CheckPasswordInputDTO) (dto.UserOutputDTO, error) {
	password := entity.Hash(input.Email, os.Getenv("CRYPTO_PASSWORD"), input.Password)
	email := entity.Hash(input.Name, os.Getenv("CRYPTO_EMAIL"), input.Email)
	user, err := userRepository.UserRepository.CheckPassword(email, password)

	if err != nil || user.Email == "" && user.Password == "" {
		return dto.UserOutputDTO{Mensage: "incorrect credentials"}, err
	}
	dto := dto.UserOutputDTO{
		Mensage: "Successfully logged in",
	}
	return dto, nil
}
