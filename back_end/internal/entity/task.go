package entity

import (
	"regexp"
	"time"

	"github.com/asaskevich/govalidator"
	"github.com/google/uuid"
)

type Task struct {
	Base        `json:"base" valid:"required"`
	Title       string `json:"title" valid:"alphanum,required" gorm:"unique"`
	Description string `json:"description" valid:"-"`
	Status      bool   `json:"status" valid:"-"`
	ListID      string `json:"list_id" valid:"alphanum,notnull"`
	TimeSelect  string `json:"time_select" valid:"-"`
}

func init() {
	govalidator.SetFieldsRequiredByDefault(true)
}

func NewTask(title string, description string, listId string, timeSelect string) (*Task, error) {

	task := &Task{
		// Base:        Base{},
		Title:       title,
		Description: description,
		Status:      false,
		ListID:      listId,
		TimeSelect:  timeSelect,
	}

	err := task.Prepare()

	if err != nil {
		return nil, err
	}
	return task, nil
	// return &Task{}, fmt.Errorf("Invalid Task")
}

func (task *Task) Prepare() error {
	timeNow := time.Now()
	task.ID = uuid.New().String()
	task.CreatedAt = timeNow.Local().String()
	task.UpdatedAt = timeNow.Local().String()
	task.DeletedAt = timeNow.Local().String()
	task.IsDeleted = false

	err := task.validate()
	if err != nil {
		return err
	}
	return nil

}

func (task *Task) validate() error {
	_, err := govalidator.ValidateStruct(task)
	if err != nil {
		return err
	}
	return nil
}

func IsRegex(str string) string {
	regex := regexp.MustCompile(`[a-zA-Zà-úÀ-Ú0-9]`)

	if regex.MatchString(str) {
		return str
	}
	return "caracters requireds"
}
