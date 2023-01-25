package dto

import "tasks_go/internal/entity"

type ListInpuntDtO struct {
	Name    string
	HasTask bool
}
type ListOutputDTO struct {
	Name  string
	Tasks []entity.Task
}
