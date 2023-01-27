package dto

type TaskInputDTO struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Status      bool   `json:"status"`
	Priority    bool   `json:"priority"`
}

type TaskOutputDTO struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Status      bool   `json:"status"`
	Priority    bool   `json:"priority"`
}

type TaskFindTitleInputDTO struct {
	Title string `json:"title"`
}

type TaskOutputMessageDTO struct {
	Message string `json:"mensage"`
}

type TaskInputSoftDeleteDTO struct {
	ID string `json:"id"`
}
