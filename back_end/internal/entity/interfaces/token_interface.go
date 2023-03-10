package interfaces

import "back_end/internal/entity"

type TokenRepository interface {
	CreateAccessToken(user *entity.User, secret string, expiry int) (accessToken string, err error)
	CreateRefreshToken(user *entity.User, secret string, expiry int) (refreshToken string, err error)
	IsAuthorized(requestToken string, secret string) (bool, error)
	ExtractIDFromToken(requestToken string, secret string) (string, error)
}
