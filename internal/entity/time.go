package entity

import (
	"time"

	"github.com/google/uuid"
)

type Time struct {
	ID         string
	TaskID     string
	TimeSelect string
	CreatedAt  string
	UpdatedAt  string
	DeletedAt  string
	IsDeleted  bool
}

func NewTime(timeSelect string, taskId string) *Time {
	timeNow := time.Now()
	return &Time{
		ID:         uuid.New().String(),
		TaskID:     taskId,
		TimeSelect: timeSelect,
		CreatedAt:  timeNow.Local().String(),
		UpdatedAt:  timeNow.Local().String(),
		DeletedAt:  timeNow.Local().String(),
		IsDeleted:  false,
	}
}
