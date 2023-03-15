package entity

import "time"

type Cookie struct {
	Name       string
	Value      string
	Path       string
	Domain     string
	Expires    time.Time
	RawExpires string

	// MaxAge=0 means no 'Max-Age' attribute specified.
	// MaxAge<0 means delete cookie now, equivalently 'Max-Age: 0'
	// MaxAge>0 means Max-Age attribute present and given in seconds
	MaxAge   int
	Secure   bool
	HttpOnly bool
	Raw      string
	Unparsed []string // Raw text of unparsed attribute-value pairs
}

func NewCookie(name string, value string, path string, domain string) *Cookie {
	expiration := time.Now().Add(365 * 24 * time.Hour)

	cookie := &Cookie{
		Name:    name,
		Value:   value,
		Path:    path,
		Domain:  domain,
		Expires: expiration,
	}

	return cookie
}
