package dto

import "tasks_go/internal/entity"

type ListInpuntDtO struct {
	Name string
}
type ListOutputDTO struct {
	Name  string
	Tasks []entity.Task
}
