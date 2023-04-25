package entity

import (
	"fmt"
	"regexp"
	"time"

	"github.com/google/uuid"
)

type ListEntity struct {
	ID        string
	Name      string
	TypeTask  string
	CreatedAt string
	UserId    string
	Tasks     []Task
	UpdatedAt string
	DeletedAt string
	IsDeleted bool
}

func NewListEntity(name string, user_id string, type_task string) (*ListEntity, error) {
	timeNow := time.Now()

	list := &ListEntity{
		ID:        uuid.New().String(),
		UserId:    user_id,
		TypeTask:  type_task,
		Name:      name,
		CreatedAt: timeNow.Local().String(),
		UpdatedAt: timeNow.Local().String(),
		DeletedAt: timeNow.Local().String(),
		IsDeleted: false,
	}

	isValidateList := IsValidateList(list)
	if isValidateList == true {
		return list, nil
	}

	return nil, fmt.Errorf("Name list is required")
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
