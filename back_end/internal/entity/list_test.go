package entity_test

import (
	"back_end/internal/entity"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestList(t *testing.T) {
	_, err := entity.NewListEntity("tasda", "adasdsad", "adasdad")
	require.Nil(t, err)
	_, err = entity.NewListEntity("", "", "")
	require.Error(t, err)
	_, err = entity.NewListEntity("", "", "card")
	require.Error(t, err)
	_, err = entity.NewListEntity("", "adasdasdsad", "card")
	require.Error(t, err)
	_, err = entity.NewListEntity("dasdada", "", "card")
	require.Error(t, err)
	_, err = entity.NewListEntity("dasdada", "asdsda", "")
	require.Error(t, err)
	_, err = entity.NewListEntity(" ", " ", " ")
	require.Error(t, err)
	_, err = entity.NewListEntity(" ", " ", "card")
	require.Error(t, err)
	_, err = entity.NewListEntity(" ", "adasdasdsad", "card")
	require.Error(t, err)
	_, err = entity.NewListEntity("dasdada", " ", "card")
	require.Error(t, err)
	_, err = entity.NewListEntity("dasdada", "asdsda", " ")
	require.Error(t, err)
}
