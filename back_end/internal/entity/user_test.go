package entity

import "testing"

func TestUser(t *testing.T) {
	user, err := NewUser("patricia@gmail.com", "patricia", "nadoa4n32332")

	if user.Email == "" {
		t.Error("email not empty", err)
	}
	if user.Name == "" {
		t.Error("name not empty", err)
	}
	if user.Password == "" {
		t.Error("password not empty", err)
	}
}
