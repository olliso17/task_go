package database

import (
	"back_end/internal/entity"
	"database/sql"
	"fmt"
)

type UserRepository struct {
	Db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{
		Db: db,
	}
}

func (userRepository *UserRepository) Create(user *entity.User) error {
	stmt, err := userRepository.Db.Prepare("INSERT INTO users (id, email, name, password, is_admin, created_at, updated_at, deleted_at, is_deleted) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)")
	if err != nil {
		fmt.Print("o erro:", err)
		return err
	}
	_, err = stmt.Exec(user.ID, user.Email, user.Name, user.Password, user.IsAdmin, user.CreatedAt, user.UpdatedAt, user.DeletedAt, user.IsDeleted)
	if err != nil {
		return err
	}

	return nil
}

func (userRepository *UserRepository) FindAll() ([]entity.User, error) {

	rows, err := userRepository.Db.Query("SELECT id, email, name, password, is_admin, created_at, updated_at, deleted_at, isdeleted,  FROM users")
	var users []entity.User
	for rows.Next() {
		var user entity.User

		if err := rows.Scan(&user.ID, &user.Email, &user.Name, &user.Password, &user.IsAdmin, &user.CreatedAt, &user.UpdatedAt, &user.DeletedAt, &user.IsDeleted); err != nil {
			return users, err
		}
		users = append(users, user)
	}
	if err = rows.Err(); err != nil {
		return users, err
	}

	return users, nil

}

func (userRepository *UserRepository) FindByID(id string) (entity.User, error) {
	var user entity.User

	rows, err := userRepository.Db.Query("SELECT * FROM users WHERE id = $1", id)
	for rows.Next() {
		if err := rows.Scan(&user.ID, &user.Email, &user.Name, &user.Password, &user.IsAdmin, &user.CreatedAt, &user.UpdatedAt, &user.DeletedAt, &user.IsDeleted); err != nil {
			return user, err
		}
	}
	if err = rows.Err(); err != nil {
		return user, err
	}
	return user, nil
}

func (userRepository *UserRepository) CheckPassword(email string, password string) (entity.User, error) {

	var user entity.User

	rows, err := userRepository.Db.Query("SELECT * FROM users WHERE email = $1 AND password = $2", email, password)

	for rows.Next() {
		if err := rows.Scan(&user.ID, &user.Email, &user.Name, &user.Password, &user.IsAdmin, &user.CreatedAt, &user.UpdatedAt, &user.DeletedAt, &user.IsDeleted); err != nil {
			return user, err
		}
	}

	if err = rows.Err(); err != nil {
		return user, err
	}
	return user, nil
}
