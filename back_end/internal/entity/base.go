package entity

type Base struct {
	ID        string `valid:"uuid"`
	CreatedAt string `valid:"-"`
	UpdatedAt string `valid:"-"`
	DeletedAt string `valid:"-"`
	IsDeleted bool   `valid:"-"`
}
