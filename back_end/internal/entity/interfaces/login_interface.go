package interfaces

type LoginInterface interface {
	Execute(username string, password string) (string, error)
}
