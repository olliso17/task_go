package dto

type TaskInputDTO struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Priority    bool   `json:"priority"`
	ListID      string `json:"list_id"`
	TimeSelect  string `json:"time_select"`
}

type TaskOutputDTO struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Status      bool   `json:"status"`
	Priority    bool   `json:"priority"`
	ListID      string `json:"list_id"`
	IsDeleted   bool   `json:"is_deleted"`
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
type TaskInputCompletedDTO struct {
	ID     string `json:"id"`
	Status bool   `json:"status"`
}

type TaskEditInputDTO struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Priority    bool   `json:"priority"`
	ListID      string `json:"list_id"`
	TimeSelect  string `json:"time_select"`
}

type TaskEditOutputDTO struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Priority    bool   `json:"priority"`
	ListID      string `json:"list_id"`
	UpdatedAt   string `json:"update_at"`
	TimeSelect  string `json:"time_select"`
}
