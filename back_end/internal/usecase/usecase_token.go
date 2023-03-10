package usecase

import (
	"back_end/internal/entity"
	"back_end/internal/entity/interfaces"
	"back_end/internal/usecase/dto"
	"time"
)

type TokenRepository struct {
	TokenRepository interfaces.TokenRepositoryInterface
	UserRepository  interfaces.UserRepositoryInterface
}

func NewTokenRepository(tokenRepository interfaces.TokenRepositoryInterface, userRepository interfaces.UserRepositoryInterface) *TokenRepository {
	return &TokenRepository{
		TokenRepository: tokenRepository,
		UserRepository:  userRepository,
	}
}

func (tokenRepository *TokenRepository) CreateAccessToken(input dto.InputTokenDTO) (dto.OutputCreateTokenDTO, error) {
	expiry := time.Now().Add(time.Hour * time.Duration(input.Expiry)).Unix()
	token, _ := entity.GenerateJWT(input.Name, input.Email)

	if _, err := tokenRepository.TokenRepository.CreateAccessToken(&input.User, token, expiry); err != nil {
		return dto.OutputCreateTokenDTO{AccessToken: "Unable to create token"}, err
	}
	dto := dto.OutputCreateTokenDTO{AccessToken: token}

	return dto, nil
}
