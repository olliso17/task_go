package entity_test

import (
	"back_end/internal/entity"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestTask(t *testing.T) {
	_, err := entity.NewTask("nome", "https://www.youtube.com/watch?v=JP-D1In0juw", "fullcycle", "adasasd")
	require.Nil(t, err)

	_, err = entity.NewTask("nome", "", "fullcycle", "adasasd")
	require.Nil(t, err)

	_, err = entity.NewTask("nome", "https://www.youtube.com/watch?v=JP-D1In0juw", "fullcycle", "")
	require.Nil(t, err)

	_, err = entity.NewTask("nome", "", "fullcycle", "")
	require.Nil(t, err)

	_, err = entity.NewTask("", "https://www.youtube.com/watch?v=JP-D1In0juw", "fullcycle", "adasasd")
	require.Error(t, err)

	_, err = entity.NewTask("", "https://www.youtube.com/watch?v=JP-D1In0juw", "", "adasasd")
	require.Error(t, err)

	_, err = entity.NewTask("nome", "https://www.youtube.com/watch?v=JP-D1In0juw", "", "adasasd")
	require.Error(t, err)

	_, err = entity.NewTask(" ", "https://www.youtube.com/watch?v=JP-D1In0juw", " ", "adasasd")
	require.Error(t, err)

	_, err = entity.NewTask(" ", "https://www.youtube.com/watch?v=JP-D1In0juw", "adsaasdd-3rasd_adas", "adasasd")
	require.Error(t, err)

	_, err = entity.NewTask("kghjghj", "https://www.youtube.com/watch?v=JP-D1In0juw", "  ", "adasasd")
	require.Error(t, err)

	// if newTask.Title == segTask.Title {
	// 	t.Error("Task already exists", newTask.Title)
	// }

	// if newTask.ID == segTask.ID {
	// 	t.Error("Task already exists", newTask.ID)
	// }

	// if newTask.Description == "" {
	// 	t.Error("Description is empty", newTask.Description)
	// }
}
