package usecase

import (
	"back_end/internal/entity"
	"back_end/internal/entity/interfaces"
	"back_end/internal/usecase/dto"
	"os"
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
	loginFindUserId, err := loginRepository.LoginRepository.FindByUserID(user.ID)

	if err != nil || user.Email == "" && user.Password == "" {
		return dto.OutPutLoginDto{}, err
	}
	token, _ := entity.GenerateJWT(user.Email, user.Password)

	login, _ := entity.NewLogin(user.ID, token)
	if loginFindUserId.UserID != login.UserID {

		if err := loginRepository.LoginRepository.Create(login); err != nil {
			return dto.OutPutLoginDto{}, err
		}

		dto := dto.OutPutLoginDto{
			AccessToken: login.AccessToken,
			Mensage:     "Login successfully",
		}

		return dto, err
	}
	loginFindUserId.AccessToken = login.AccessToken
	loginFindUserId.CreatedAt = login.CreatedAt
	loginFindUserId.ExpiredAt = login.ExpiredAt
	loginFindUserId.IsExpired = login.IsExpired

	if err := loginRepository.LoginRepository.EditLogin(&loginFindUserId); err != nil {
		return dto.OutPutLoginDto{
			AccessToken: " ",
			Mensage:     "Unable to login please review your credentials",
		}, err
	}

	dto := dto.OutPutLoginDto{
		AccessToken: login.AccessToken,
		Mensage:     "Login successfully",
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
		ID:          login.ID,
		UserID:      login.UserID,
		AccessToken: login.AccessToken,
		CreatedAt:   login.CreatedAt,
		ExpiredAt:   login.ExpiredAt,
		IsExpired:   login.IsExpired,
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