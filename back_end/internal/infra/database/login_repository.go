package database

import (
	"back_end/internal/entity"
	"database/sql"
	"fmt"
)

type LoginRepository struct {
	Db *sql.DB
}

func NewLoginRepository(db *sql.DB) *LoginRepository {
	return &LoginRepository{
		Db: db,
	}
}

func (r *LoginRepository) Execute(login *entity.Login) error {
	stmt, err := r.Db.Prepare("INSERT INTO logins (id, access_token, user_id, created_at, expired_at, is_expired, is_success) VALUES ($1, $2, $3, $4, $5, $6, $7)")
	if err != nil {
		fmt.Print("o erro:", err)
		return err
	}
	_, err = stmt.Exec(login.ID, login.AccessToken, login.UserID, login.CreatedAt, login.ExpiredAt, login.IsExpired, login.IsSuccess)
	if err != nil {
		return err
	}

	return nil
}
