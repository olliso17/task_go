package entity_test

import (
	"back_end/internal/entity"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestLogin(t *testing.T) {
	_, err := entity.NewLogin("asdasd", "asdasdad", "asdads", 12121)
	require.Nil(t, err)
	_, err = entity.NewLogin("", "", "", 0)
	require.Error(t, err)
	_, err = entity.NewLogin("", "dsadsad", "adsdadsad", 21212)
	require.Error(t, err)
	_, err = entity.NewLogin("adsdasdad", "", "adsdadsad", 21212)
	require.Error(t, err)
	_, err = entity.NewLogin("adsads", "dsadsad", "", 21212)
	require.Error(t, err)
	_, err = entity.NewLogin("asdasd", "dsadsad", "adsdadsad", 0)
	require.Error(t, err)
	_, err = entity.NewLogin(" ", " ", " ", 0)
	require.Error(t, err)
	_, err = entity.NewLogin(" ", "dsadsad", "adsdadsad", 21212)
	require.Error(t, err)
	_, err = entity.NewLogin("adsdasdad", " ", "adsdadsad", 21212)
	require.Error(t, err)
	_, err = entity.NewLogin("adsads", "dsadsad", " ", 21212)
	require.Error(t, err)
}
