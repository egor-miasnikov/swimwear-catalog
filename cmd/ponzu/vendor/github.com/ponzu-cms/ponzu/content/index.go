package content

import (
	"html/template"
	"net/http"
)

func init() {
	tmpl := template.Must(template.ParseFiles("build/index.html"))
	fs := http.FileServer(http.Dir("build/static/"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	http.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		tmpl.Execute(res, nil)
	})
}
