package entity

import (
	"fmt"
	"regexp"
	"time"

	"github.com/asaskevich/govalidator"
	"github.com/google/uuid"
)

type ListEntity struct {
	Base     `json:"base" valid:"required"`
	Name     string `json:"name" valid:"alphanum,notnull"`
	TypeTask string `json:"tipe_task" valid:"notnull"`
	UserId   string `json:"user_id" valid:"alphanum,notnull"`
	Tasks    []Task `json:"tasks" valid:"-"`
}

func init() {
	govalidator.SetFieldsRequiredByDefault(true)
}
func NewListEntity(name string, user_id string, type_task string) (*ListEntity, error) {

	list := &ListEntity{
		UserId:   user_id,
		TypeTask: type_task,
		Name:     name,
	}

	isValidateList := IsValidateList(list)
	if isValidateList == true {
		return list, nil
	}

	return nil, fmt.Errorf("Name list is required")
}

func (list *ListEntity) Prepare() error {
	timeNow := time.Now()
	list.ID = uuid.New().String()
	list.CreatedAt = timeNow.Local().String()
	list.UpdatedAt = timeNow.Local().String()
	list.DeletedAt = timeNow.Local().String()
	list.IsDeleted = false

	err := list.validate()
	if err != nil {
		return err
	}
	return nil

}

func (list *ListEntity) validate() error {
	_, err := govalidator.ValidateStruct(list)
	if err != nil {
		return err
	}
	return nil
}

func IsValidateList(list *ListEntity) bool {

	if list.Name == "" {
		fmt.Printf("Name is required\n")
		return false
	}

	list.IsRegexList(map[string]string{
		"name": list.Name,
	})

	return true
}

func (l *ListEntity) IsRegexList(sliceString map[string]string) {

	for k, v := range sliceString {
		regex, _ := regexp.MatchString("[a-zA-Zà-úÀ-Ú0-9]", v)

		switch regex {
		case true:
			continue

		case false:
			fmt.Println(k, "Invalid caracters")
			break
		}

	}

}
