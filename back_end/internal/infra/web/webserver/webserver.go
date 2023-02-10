package webserver

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
)

type WebServer struct {
	Router        chi.Router
	Handlers      map[string]http.HandlerFunc
	WebServerPort string
	// Verb          string
}

func NewWebServer(serverPort string) *WebServer {
	return &WebServer{
		Router:        chi.NewRouter(),
		Handlers:      make(map[string]http.HandlerFunc),
		WebServerPort: serverPort,
	}
}

func (s *WebServer) AddHandler(path string, handler http.HandlerFunc) {
	s.Handlers[path] = handler
	// s.Verb = verb
}

// loop through the handlers and add them to the router
// register middeleware logger
// start the server
func (s *WebServer) Start() {
	s.Router.Use(middleware.Logger)
	for path, handler := range s.Handlers {
		// switch s.Verb {
		// case "GET":
		// 	s.Router.Get(path, handler)
		// case "POST":
		// 	s.Router.Post(path, handler)
		// case "PUT":
		// 	s.Router.Put(path, handler)
		// case "PATCH":
		// 	s.Router.Patch(path, handler)
		// case "DELETE":
		// 	s.Router.Delete(path, handler)

		// }
		s.Router.Handle(path, handler)

	}

	http.ListenAndServe(s.WebServerPort, s.Router)

}
