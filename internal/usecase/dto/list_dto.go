package dto

import "tasks_go/internal/entity"

type ListInpuntDtO struct {
	Name string
}
type ListOutputDTO struct {
	ID        string        `json:"id"`
	Name      string        `json:"name"`
	CreatedAt string        `json:"created_at"`
	Tasks     []entity.Task `json:"tasks"`
	UpdatedAt string        `json:"updated_at"`
	DeletedAt string        `json:"deleted_at"`
	IsDeleted bool          `json:"is_deleted"`
}
