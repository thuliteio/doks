var docs = [
{{ range $index, $page := (where .Site.Pages "Section" "docs") -}}
  {
    id: {{ $index }},
    href: "{{ .Permalink | absURL }}",
    title: {{ .Title | jsonify }},
    description: {{ .Params.description | jsonify }},
    content: {{ .Content | jsonify }}
  },
{{ end -}}
];