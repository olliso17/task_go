package usecase

import (
	"back_end/internal/entity"
	"back_end/internal/entity/interfaces"
	"back_end/internal/usecase/dto"
	"fmt"
	"os"
)

type UserRepository struct {
	UserRepository  interfaces.UserRepositoryInterface
	LoginRepository interfaces.LoginRepositoryInterface
}

func NewUserRepository(userRepository interfaces.UserRepositoryInterface, loginRepository interfaces.LoginRepositoryInterface) *UserRepository {
	return &UserRepository{
		UserRepository:  userRepository,
		LoginRepository: loginRepository,
	}
}

func (userRepository *UserRepository) Create(input dto.UserInputDTO) (dto.OutPutLoginDto, error) {
	userAll, err := userRepository.FindAll()
	user, err := entity.NewUser(input.Email, input.Name, input.Password)

	for _, v := range userAll {
		if user.Email == v.Email || user.Name == v.Name {
			dto := dto.OutPutLoginDto{Mensage: "Unable to create user please review your credentials"}
			return dto, err

		}
		if user.ID == v.ID {
			err = fmt.Errorf("user already exist")
			dto := dto.OutPutLoginDto{Mensage: "Unable to create user please review your credentials"}
			return dto, err

		}
	}

	if user.Name == "" && user.Email == "" && user.Password == "" {
		dto := dto.OutPutLoginDto{Mensage: "Unable to create user please review your credentials"}
		return dto, err
	}

	if err := userRepository.UserRepository.Create(user); err != nil {
		return dto.OutPutLoginDto{Mensage: "Unable to create user please review your credentials"}, err
	}
	hostname, _ := os.Hostname()

	ip := os.Getpid()
	token, _ := entity.GenerateJWT()

	login, _ := entity.NewLogin(user.ID, token, string(hostname), int(ip))
	if err := userRepository.LoginRepository.Create(login); err != nil {
		return dto.OutPutLoginDto{Mensage: "User created successfully"}, err
	}
	dto := dto.OutPutLoginDto{Mensage: "User created successfully"}

	return dto, nil
}

func (userRepository *UserRepository) FindAll() ([]entity.User, error) {
	users, err := userRepository.UserRepository.FindAll()
	if err != nil {
		return []entity.User{}, err
	}

	return users, nil
}

func (userRepository *UserRepository) FindByID(id string) (entity.User, error) {
	userAll, err := userRepository.UserRepository.FindAll()
	if err != nil {
		return entity.User{}, err
	}
	for _, v := range userAll {
		if id == v.ID {

			return v, nil

		}
	}
	return entity.User{}, err

}

// func (userRepository *UserRepository) CheckPassword(input dto.CheckPasswordInputDTO) (dto.CheckPasswordOutputDTO, error) {
// 	password := entity.Hash(input.Email, os.Getenv("CRYPTO_PASSWORD"), input.Password)
// 	email := entity.Hash(input.Password, os.Getenv("CRYPTO_EMAIL"), input.Email)
// 	user, err := userRepository.UserRepository.CheckPassword(email, password)

// 	if err != nil || user.Email == "" && user.Password == "" {
// 		return dto.CheckPasswordOutputDTO{}, err
// 	}
// 	if err != nil || user.Email != email || user.Password != password {
// 		return dto.CheckPasswordOutputDTO{}, err
// 	}

// 	dto := dto.CheckPasswordOutputDTO{
// 		Email:    user.Email,
// 		Password: user.Password,
// 	}
// 	return dto, nil
// }
