package dto

import "back_end/internal/entity"

type ListInpuntDtO struct {
	Name string `json:"name"`
}
type ListInpuntEditDtO struct {
	ID string `json:"id"`
}
type ListOutputDTO struct {
	Name string `json:"name"`
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
	ID    string          `json:"id"`
	Name  string          `json:"name"`
	Tasks []TaskOutputDTO `json:"tasks"`
}

type ListEntityAllOutputDto struct {
	Lists ListAllOutputDTO `json:"lists"`
}
