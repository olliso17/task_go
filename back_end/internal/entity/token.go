package entity

import (
	"errors"
	"os"
	"time"

	"github.com/dgrijalva/jwt-go"
)

var jwtKey = []byte(os.Getenv("CRYPTO_EMAIL"))

type JWTClaim struct {
	User     User
	Password string
	Email    string
	jwt.StandardClaims
}

func GenerateJWT(email string, password string) (tokenString string, err error) {
	expire := time.Now().Add(1 * time.Hour)

	auth := &JWTClaim{
		Email:          email,
		Password:       password,
		StandardClaims: jwt.StandardClaims{ExpiresAt: expire.Unix()},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, auth)
	tokenString, err = token.SignedString(jwtKey)
	return
}

func ValidateToken(signedToken string) (err error) {
	token, err := jwt.ParseWithClaims(
		signedToken,
		&JWTClaim{},
		func(token *jwt.Token) (interface{}, error) {
			return []byte(jwtKey), nil
		},
	)
	if err != nil {
		return
	}
	claims, ok := token.Claims.(*JWTClaim)
	if !ok {
		err = errors.New("couldn't parse claims")
		return
	}
	if claims.ExpiresAt < time.Now().Local().Unix() {
		err = errors.New("token expired")
		return
	}
	return
}
