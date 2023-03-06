package dto

import "back_end/internal/entity"

type ListInpuntDtO struct {
	Name string `json:"name"`
}
type ListInpuntEditDtO struct {
	ID string `json:"id"`
}

type ListInputSoftDeleteDTO struct {
	ID string `json:"id"`
}
type ListOutputDTO struct {
	Name string `json:"name"`
}

type ListOutputMessageDTO struct {
	Message string `json:"mensage"`
}

type EditListEntityInputDto struct {
	ID        string        `json:"id"`
	Name      string        `json:"name"`
	Tasks     []entity.Task `json:"tasks"`
	UpdatedAt string        `json:"updated_at"`
}

type EditListEntityOutputDto struct {
	ID        string        `json:"id"`
	Name      string        `json:"name"`
	Tasks     []entity.Task `json:"tasks"`
	UpdatedAt string        `json:"updated_at"`
}
type ListAllOutputDTO struct {
	ID        string          `json:"id"`
	Name      string          `json:"name"`
	Tasks     []TaskOutputDTO `json:"tasks"`
	IsDeleted bool            `json:"is_deleted"`
}

type ListEntityAllOutputDto struct {
	Lists ListAllOutputDTO `json:"lists"`
}
