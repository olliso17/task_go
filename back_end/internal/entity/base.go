package entity

type Base struct {
	ID        string `valid:"uuid"`
	CreatedAt string `valid:"-"`
	UpdatedAt string `valid:"-"`
	DeletedAt string `valid:"-"`
	IsDeleted bool   `valid:"-"`
}

// func init() {
// 	govalidator.SetFieldsRequiredByDefault(true)
// }
// func Prepare() (*Base, error) {
// 	timeNow := time.Now()
// 	base := &Base{
// 		ID:        uuid.New().String(),
// 		CreatedAt: timeNow.Local().String(),
// 		UpdatedAt: timeNow.Local().String(),
// 		DeletedAt: timeNow.Local().String(),
// 		IsDeleted: false,
// 	}

// 	err := base.validate()
// 	if err != nil {
// 		return nil,err
// 	}
// 	return base, nil

// }

// func (base *Base) validate() error {
// 	_, err := govalidator.ValidateStruct(base)
// 	if err != nil {
// 		return err
// 	}
// 	return nil
// }
