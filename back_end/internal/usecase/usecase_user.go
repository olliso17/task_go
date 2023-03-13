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
	user, err := entity.NewUser(input.Email, input.Name, input.Password)

	if user.Name != "" && user.Email != "" && user.Password != "" {
		dto := dto.UserOutputDTO{
			Mensage: "User not created",
		}
		return dto, err
	}
	dto := dto.UserOutputDTO{
		Mensage: "User created successfully",
	}
	return dto, nil
}

func (userRepository *UserRepository) CheckPassword(input dto.CheckPasswordInputDTO) (dto.CheckPasswordOutputDTO, error) {
	password := entity.Hash(input.Email, os.Getenv("CRYPTO_PASSWORD"), input.Password)
	email := entity.Hash(input.Password, os.Getenv("CRYPTO_EMAIL"), input.Email)
	user, err := userRepository.UserRepository.CheckPassword(email, password)

	if err != nil || user.Email == "" && user.Password == "" {
		return dto.CheckPasswordOutputDTO{}, err
	}
	if err != nil || user.Email != email || user.Password != password {
		return dto.CheckPasswordOutputDTO{}, err
	}

	dto := dto.CheckPasswordOutputDTO{
		Email:    user.Email,
		Password: user.Password,
	}
	return dto, nil
}
