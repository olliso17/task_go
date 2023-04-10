package entity

import (
	"net/http"
	"time"
)

type Cookie struct {
	Name       string
	Value      string
	Path       string
	Expires    time.Time
	RawExpires string
	MaxAge     int
	Secure     bool
	HttpOnly   bool
	Raw        string
	SameSite   http.SameSite
	Unparsed   []string // Raw text of unparsed attribute-value pairs
}

func NewCookie(name string, value string, path string) *Cookie {
	expiration := time.Now().Add(1 * 24 * time.Hour)

	cookie := &Cookie{
		Name:       name,
		Value:      value,
		Path:       path,
		Expires:    expiration,
		RawExpires: "",
		MaxAge:     3600,
		Secure:     true,
		HttpOnly:   true,
		Raw:        "",
		SameSite:   http.SameSiteLaxMode,
	}

	return cookie
}
