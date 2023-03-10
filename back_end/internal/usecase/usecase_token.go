package usecase

import "back_end/internal/entity/interfaces"

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
