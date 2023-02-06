package dto

type TaskInputDTO struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Status      bool   `json:"status"`
	Priority    bool   `json:"priority"`
	ListID      string `json:"list_id"`
	TimeSelect  string `json:"time_select"`
}

type TaskOutputDTO struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Status      bool   `json:"status"`
	Priority    bool   `json:"priority"`
	ListID      string `json:"list_id"`
	TimeSelect  string `json:"time_select"`
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