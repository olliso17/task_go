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

func (r *LoginRepository) Create(login *entity.Login) error {
	stmt, err := r.Db.Prepare("INSERT INTO logins (id, user_id, access_token , created_at, expired_at, is_expired) VALUES ($1, $2, $3, $4, $5, $6)")
	if err != nil {
		fmt.Print("o erro:", err)
		return err
	}
	_, err = stmt.Exec(login.ID, login.UserID, login.AccessToken, login.CreatedAt, login.ExpiredAt, login.IsExpired)
	if err != nil {
		return err
	}

	return nil
}

func (r *LoginRepository) FindAll() ([]entity.Login, error) {

	rows, err := r.Db.Query("SELECT * FROM logins")

	var logins []entity.Login

	for rows.Next() {

		var login entity.Login
		fmt.Print(rows.Scan(&login.ID, &login.UserID, &login.AccessToken, &login.CreatedAt, &login.ExpiredAt, &login.IsExpired))

		if err := rows.Scan(&login.ID, &login.UserID, &login.AccessToken, &login.CreatedAt, &login.ExpiredAt, &login.IsExpired); err != nil {
			return logins, err
		}

		logins = append(logins, login)
	}

	if err = rows.Err(); err != nil {
		return logins, err
	}

	return logins, nil

}

func (r *LoginRepository) FindByUserID(id string) (entity.Login, error) {
	var login entity.Login

	rows, err := r.Db.Query("SELECT * FROM logins WHERE user_id = $1", id)
	for rows.Next() {
		if err := rows.Scan(&login.ID, &login.UserID, &login.AccessToken, &login.CreatedAt, &login.ExpiredAt, &login.IsExpired); err != nil {
			return login, err
		}
	}
	if err = rows.Err(); err != nil {
		return login, err
	}
	return login, nil
}

func (r *LoginRepository) EditLogin(login *entity.Login) error {

	stmt, err := r.Db.Prepare("UPDATE logins SET user_id= $1, access_token =$2, created_at=$3, expired_at=$4 ,is_expired=$5 WHERE id = $6")

	if err != nil {

		return err
	}
	_, err = stmt.Exec(login.UserID, login.AccessToken, login.CreatedAt, login.ExpiredAt, login.IsExpired, login.ID)
	if err != nil {
		return err
	}
	return nil
}
