package usecase

import (
	"back_end/internal/entity"
	"back_end/internal/entity/interfaces"
	"back_end/internal/usecase/dto"
	"os"
)

type UserRepository struct {
	UserRepository interfaces.UserRepositoryInterface
}

func NewUserRepository(userRepository interfaces.UserRepositoryInterface) *UserRepository {
	return &UserRepository{
		UserRepository: userRepository,
	}
}

func (userRepository *UserRepository) Create(input dto.UserInputDTO) (dto.UserOutputDTO, error) {
	user, _ := entity.NewUser(input.Email, input.Name, input.Password)

	if err := userRepository.UserRepository.Create(user); err != nil {
		return dto.UserOutputDTO{Mensage: "Unable to create user"}, err
	}
	dto := dto.UserOutputDTO{
		Mensage: "User created successfully",
	}
	return dto, nil
}

func (userRepository *UserRepository) CheckPassword(input dto.CheckPasswordInputDTO) (dto.UserOutputDTO, error) {
	password := entity.Hash(input.Email, os.Getenv("CRYPTO_PASSWORD"), input.Password)
	email := entity.Hash(input.Password, os.Getenv("CRYPTO_EMAIL"), input.Email)
	user, err := userRepository.UserRepository.CheckPassword(email, password)

	if err != nil || user.Email == "" && user.Password == "" {
		return dto.UserOutputDTO{Mensage: "incorrect credentials"}, err
	}
	dto := dto.UserOutputDTO{
		Mensage: "Successfully logged in",
	}
	return dto, nil
}
