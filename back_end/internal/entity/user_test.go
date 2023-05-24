package entity_test

import (
	"back_end/internal/entity"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestUser(t *testing.T) {
	_, err := entity.NewUser("patricia@gmail.com", "patricia", "nadoa4n32332")
	require.Nil(t, err)

	// if user.Email == "" {
	// 	t.Error("email not empty", err)
	// }
	// if user.Name == "" {
	// 	t.Error("name not empty", err)
	// }
	// if user.Password == "" {
	// 	t.Error("password not empty", err)
	// }
}
