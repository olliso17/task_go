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
	password := entity.Hash(input.Email, os.Getenv("CRYPTO_PASSWORD"), input.Password)
	email := entity.Hash(input.Password, os.Getenv("CRYPTO_EMAIL"), input.Email)

	user, err := loginRepository.UserRepository.CheckPassword(email, password)

	if err != nil || user.Email == "" && user.Password == "" {
		return dto.OutPutLoginDto{
			Mensage: "Unable to create user please review your credentials",
		}, err
	}
	loginFindUserId, err := loginRepository.LoginRepository.FindByUserID(user.ID)

	hostname, _ := os.Hostname()
	ip := os.Getpid()
	token, _ := entity.GenerateJWT()
	login, _ := entity.NewLogin(user.ID, token, string(hostname), int(ip))

	if loginFindUserId.UserID != " " && loginFindUserId.UserID != login.UserID {

		if err := loginRepository.LoginRepository.Create(login); err != nil {
			return dto.OutPutLoginDto{
				Mensage: "Unable to create user please review your credentials",
			}, err
		}

		dto := dto.OutPutLoginDto{
			Mensage: "Login successfully",
		}

		return dto, nil
	}

	loginFindUserId.SessionToken = token
	loginFindUserId.HostName = login.HostName
	loginFindUserId.IPAddress = login.IPAddress
	loginFindUserId.CreatedAt = login.CreatedAt
	loginFindUserId.ExpiredAt = time.Now().Add(3 * time.Hour)
	loginFindUserId.IsLogout = login.IsLogout
	if err := loginRepository.LoginRepository.EditLogin(&loginFindUserId); err != nil {
		return dto.OutPutLoginDto{
			Mensage: "Unable to create user please review your credentials",
		}, err
	}
	dto := dto.OutPutLoginDto{
		Mensage: "Login successfully",
	}

	return dto, err

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
		CreatedAt:    login.CreatedAt,
		ExpiredAt:    login.ExpiredAt,
		IsLogout:     login.IsLogout,
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
		if id == v.ID {

			return v, nil

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

func (loginRepository *LoginRepository) Logout(token string) error {
	login, err := loginRepository.LoginRepository.FindByToken(token)
	if err != nil {
		return err
	}
	// Revogar o token de autenticação
	login.IsLogout = true
	if err := loginRepository.LoginRepository.Logout(&login); err != nil {
		return fmt.Errorf("failed to revoke token: %v", err)
	}

	return nil
}
