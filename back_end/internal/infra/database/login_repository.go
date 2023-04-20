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
	stmt, err := r.Db.Prepare("INSERT INTO logins (id, user_id, session_token, hostname, ip_address, created_at, expired_at, is_logout) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)")
	if err != nil {
		fmt.Print("o erro:", err)
		return err
	}
	_, err = stmt.Exec(login.ID, login.UserID, login.SessionToken, login.HostName, login.IPAddress, login.CreatedAt, login.ExpiredAt, login.IsLogout)
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
		fmt.Print(rows.Scan(&login.ID, &login.UserID, &login.SessionToken, &login.HostName, &login.IPAddress, &login.CreatedAt, &login.ExpiredAt, &login.IsLogout))

		if err := rows.Scan(&login.ID, &login.UserID, &login.SessionToken, &login.HostName, &login.IPAddress, &login.CreatedAt, &login.ExpiredAt, &login.IsLogout); err != nil {
			return logins, err
		}

		logins = append(logins, login)
	}

	if err = rows.Err(); err != nil {
		return logins, err
	}

	return logins, nil

}

func (r *LoginRepository) FindByID(id string) (entity.Login, error) {
	var login entity.Login

	rows, err := r.Db.Query("SELECT * FROM logins WHERE id = $1", id)
	for rows.Next() {
		if err := rows.Scan(&login.ID, &login.UserID, &login.SessionToken, &login.HostName, &login.IPAddress, &login.CreatedAt, &login.ExpiredAt, &login.IsLogout); err != nil {
			return login, err
		}
	}
	if err = rows.Err(); err != nil {
		return login, err
	}
	return login, nil
}

func (r *LoginRepository) FindByUserID(userID string) (entity.Login, error) {
	var login entity.Login

	rows, err := r.Db.Query("SELECT * FROM logins WHERE user_id = $1", userID)
	for rows.Next() {
		if err := rows.Scan(&login.ID, &login.UserID, &login.SessionToken, &login.HostName, &login.IPAddress, &login.CreatedAt, &login.ExpiredAt, &login.IsLogout); err != nil {
			return login, err
		}
	}
	if err = rows.Err(); err != nil {
		return login, err
	}
	return login, nil
}
func (r *LoginRepository) FindByToken(sessionToken string) (entity.Login, error) {
	var login entity.Login

	rows, err := r.Db.Query("SELECT * FROM logins WHERE session_token = $1", sessionToken)
	for rows.Next() {
		if err := rows.Scan(&login.ID, &login.UserID, &login.SessionToken, &login.HostName, &login.IPAddress, &login.CreatedAt, &login.ExpiredAt, &login.IsLogout); err != nil {
			return login, err
		}
	}
	if err = rows.Err(); err != nil {
		return login, err
	}
	return login, nil
}
func (r *LoginRepository) EditLogin(login *entity.Login) error {

	stmt, err := r.Db.Prepare("UPDATE logins SET id=$1, user_id= $2, session_token=$3, hostname=$4, ip_address=$5, created_at=$6, expired_at=$7 ,is_logout=$8 WHERE id = $1")

	if err != nil {

		return err
	}
	_, err = stmt.Exec(login.ID, login.UserID, login.SessionToken, login.HostName, login.IPAddress, login.CreatedAt, login.ExpiredAt, login.IsLogout)
	if err != nil {
		return err
	}
	return nil
}

func (r *LoginRepository) Logout(login *entity.Login) error {

	stmt, err := r.Db.Prepare("UPDATE logins SET id=$1, user_id= $2, session_token=$3, hostname=$4, ip_address=$5, created_at=$6, expired_at=$7 ,is_logout=$8 WHERE session_token = $3")

	if err != nil {

		return err
	}
	_, err = stmt.Exec(login.ID, login.UserID, login.SessionToken, login.HostName, login.IPAddress, login.CreatedAt, login.ExpiredAt, login.IsLogout)
	if err != nil {
		return err
	}
	return nil
}
