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

// type TaskInputPutCsvDTO struct {
// 	Title       string `json:"title"`
// 	Description string `json:"description"`
// }
