package dto

import "back_end/internal/entity"

type ListInpuntDtO struct {
	Name     string `json:"name"`
	UserId   string `json:"user_id"`
	TypeTask string `json:"type_task"`
}
type ListInpuntEditDtO struct {
	ID string `json:"id"`
}

type ListInputSoftDeleteDTO struct {
	ID string `json:"id"`
}
type ListOutputDTO struct {
	Name     string `json:"name"`
	TipeTask string `json:"tipe_task"`
}

type ListOutputMessageDTO struct {
	Message string `json:"mensage"`
}

type EditListEntityInputDto struct {
	ID        string        `json:"id"`
	Name      string        `json:"name"`
	UserId    string        `json:"user_id"`
	TypeTask  string        `json:"type_task"`
	Tasks     []entity.Task `json:"tasks"`
	UpdatedAt string        `json:"updated_at"`
}

type EditListEntityOutputDto struct {
	ID        string        `json:"id"`
	Name      string        `json:"name"`
	UserId    string        `json:"user_id"`
	TypeTask  string        `json:"type_task"`
	Tasks     []entity.Task `json:"tasks"`
	UpdatedAt string        `json:"updated_at"`
}
type ListAllOutputDTO struct {
	ID        string          `json:"id"`
	Name      string          `json:"name"`
	UserId    string          `json:"user_id"`
	TypeTask  string          `json:"type_task"`
	Tasks     []TaskOutputDTO `json:"tasks"`
	IsDeleted bool            `json:"is_deleted"`
}

type ListEntityAllOutputDto struct {
	Lists ListAllOutputDTO `json:"lists"`
}
