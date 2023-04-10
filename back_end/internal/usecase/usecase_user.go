package usecase

import (
	"back_end/internal/entity"
	"back_end/internal/entity/interfaces"
	"back_end/internal/usecase/dto"
	"fmt"
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
			dto := dto.OutPutLoginDto{CookieDTO: entity.Cookie{}, Mensage: "Unable to create user please review your credentials"}
			return dto, err

		}
		if user.ID == v.ID {
			err = fmt.Errorf("user already exist")
			dto := dto.OutPutLoginDto{CookieDTO: entity.Cookie{}, Mensage: "Unable to create user please review your credentials"}
			return dto, err

		}
	}

	if user.Name == "" && user.Email == "" && user.Password == "" {
		dto := dto.OutPutLoginDto{CookieDTO: entity.Cookie{}, Mensage: "Unable to create user please review your credentials"}
		return dto, err
	}

	if err := userRepository.UserRepository.Create(user); err != nil {
		return dto.OutPutLoginDto{CookieDTO: entity.Cookie{}, Mensage: "Unable to create user please review your credentials"}, err
	}
	token, _ := entity.GenerateJWT(user.Email, user.Password)
	cookie := entity.NewCookie("token", token, "/lists")
	login, _ := entity.NewLogin(user.ID, *cookie)
	if err := userRepository.LoginRepository.Create(login); err != nil {
		return dto.OutPutLoginDto{CookieDTO: *cookie, Mensage: "User created successfully"}, err
	}
	dto := dto.OutPutLoginDto{CookieDTO: *cookie, Mensage: "User created successfully"}

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
