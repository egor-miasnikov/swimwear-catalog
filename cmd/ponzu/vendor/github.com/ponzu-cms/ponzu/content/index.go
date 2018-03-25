package content

import (
	"html/template"
	"net/http"
)

type initialData struct {
	PageTitle string
}

func init() {
	tmpl := template.Must(template.ParseFiles("dist/index.html"))
	fs := http.FileServer(http.Dir("dist/static/"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	http.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		data := initialData{
			PageTitle: "Swimware catalog",
		}
		tmpl.Execute(res, data)
	})
}
