package interfaces

import "back_end/internal/entity"

type TokenRepositoryInterface interface {
	CreateAccessToken(user *entity.User, secret string, expiry int64) (string, error)
	CreateRefreshToken(user *entity.User, secret string, expiry int) (string, error)
	IsAuthorized(requestToken string, secret string) (bool, error)
	ExtractIDFromToken(requestToken string, secret string) (string, error)
}
