package usecase

import (
	"back_end/internal/entity"
	"back_end/internal/entity/interfaces"
	"back_end/internal/usecase/dto"
	"fmt"
	"os"
	"time"
)

type LoginRepository struct {
	LoginRepository interfaces.LoginRepositoryInterface
	UserRepository  interfaces.UserRepositoryInterface
}

func NewLoginRepository(loginRepository interfaces.LoginRepositoryInterface, userRepository interfaces.UserRepositoryInterface) *LoginRepository {
	return &LoginRepository{
		LoginRepository: loginRepository,
		UserRepository:  userRepository,
	}
}

func (loginRepository *LoginRepository) Create(input dto.InputLoginDto) (dto.OutPutLoginDto, error) {
	if input.Password != "" && input.Email != "" {
		password := entity.Hash(input.Email, os.Getenv("CRYPTO_PASSWORD"), input.Password)
		email := entity.Hash(input.Password, os.Getenv("CRYPTO_EMAIL"), input.Email)
		user, err := loginRepository.UserRepository.CheckPassword(email, password)

		if err != nil || user.Email == "" && user.Password == "" {
			return dto.OutPutLoginDto{
				Mensage: "Invalid credentials",
			}, err
		}
		loginFindUserId, err := loginRepository.LoginRepository.FindByUserID(user.ID)

		hostname, _ := os.Hostname()
		ip := os.Getpid()
		token, _ := entity.GenerateJWT()

		if loginFindUserId.UserID == "" {
			login, _ := entity.NewLogin(user.ID, token, string(hostname), int(ip))

			if err := loginRepository.LoginRepository.Create(login); err != nil {
				return dto.OutPutLoginDto{
					Mensage: "Invalid credentials",
				}, err
			}

			dto := dto.OutPutLoginDto{
				Mensage: "Login successfully",
			}

			return dto, nil
		}

		loginFindUserId.SessionToken = token
		loginFindUserId.HostName = hostname
		loginFindUserId.IPAddress = ip

		if err := loginRepository.LoginRepository.EditLogin(&loginFindUserId); err != nil {
			return dto.OutPutLoginDto{
				Mensage: "Invalid credentials",
			}, err
		}
		dto := dto.OutPutLoginDto{
			Mensage: "Login successfully",
		}

		return dto, err

	}
	return dto.OutPutLoginDto{Mensage: "Invalid credentials"}, nil

}

func (loginRepository *LoginRepository) EditLogin(login entity.Login) (entity.Login, error) {
	loginUserId, err := loginRepository.LoginRepository.FindByUserID(login.UserID)

	if err != nil {
		return entity.Login{}, err
	}

	loginRepository.LoginRepository.EditLogin(&loginUserId)
	dto := entity.Login{
		ID:           login.ID,
		UserID:       login.UserID,
		SessionToken: login.SessionToken,
		HostName:     login.HostName,
		IPAddress:    login.IPAddress,
		CreatedAt:    time.Now().Local(),
		ExpiredAt:    time.Now().Add(3 * time.Hour),
		IsLogout:     false,
	}

	return dto, err
}

func (loginRepository *LoginRepository) FindAll() ([]entity.Login, error) {
	loginAll, err := loginRepository.LoginRepository.FindAll()
	if err != nil {
		return []entity.Login{}, err
	}

	return loginAll, nil
}

func (loginRepository *LoginRepository) FindByID(id string) (entity.Login, error) {
	loginAll, err := loginRepository.LoginRepository.FindAll()
	if err != nil {
		return entity.Login{}, err
	}
	for _, v := range loginAll {
		if v.IsLogout != true {

			if id == v.ID {

				return v, nil

			}
		}
	}
	return entity.Login{}, err

}
func (loginRepository *LoginRepository) FindByUserID(userID string) (entity.Login, error) {
	loginAll, err := loginRepository.LoginRepository.FindAll()
	if err != nil {
		return entity.Login{}, err
	}
	for _, v := range loginAll {

		if userID == v.UserID {

			return v, nil

		}
	}
	return entity.Login{}, err

}
func (loginRepository *LoginRepository) FindByToken(sessionToken string) (dto.OutPutLoginTokenDto, error) {
	loginAll, err := loginRepository.LoginRepository.FindAll()
	if err != nil {
		return dto.OutPutLoginTokenDto{}, err
	}
	for _, v := range loginAll {
		if sessionToken == v.SessionToken {
			if v.IsLogout != true {
				dto := dto.OutPutLoginTokenDto{
					UserId: v.UserID,
				}
				return dto, nil
			}

		}
	}
	return dto.OutPutLoginTokenDto{}, err

}

func (loginRepository *LoginRepository) Logout(sessionToken string) (dto.OutPutLoginDto, error) {
	loginAll, err := loginRepository.LoginRepository.FindAll()
	if err != nil {
		return dto.OutPutLoginDto{Mensage: "not logout"}, err
	}
	for _, v := range loginAll {
		if sessionToken == v.SessionToken {
			v.IsLogout = true

			if err := loginRepository.LoginRepository.Logout(&v); err != nil {
				return dto.OutPutLoginDto{Mensage: "not logout"}, fmt.Errorf("failed to revoke token: %v", err)
			}

		}
	}
	// Revogar o token de autenticação

	return dto.OutPutLoginDto{Mensage: "logout"}, nil
}
