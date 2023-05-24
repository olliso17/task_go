package entity

import (
	"time"

	"github.com/asaskevich/govalidator"
	"github.com/google/uuid"
)

type ListEntity struct {
	Base     `json:"base" valid:"required"`
	Name     string `json:"name" valid:"alphanum,required"`
	TypeTask string `json:"tipe_task" valid:"alphanum,notnull"`
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
	err := list.Prepare()
	if err != nil {
		return nil, err
	}

	return list, nil
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
