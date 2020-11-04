---
title: "Archetypes"
description: ""
lead: ""
date: 2020-09-21T13:58:42+02:00
lastmod: 2020-09-21T13:58:42+02:00
draft: false
images: []
menu: 
  docs:
    parent: "basic-hyas"
weight: 130
toc: true
---

```bash
..
├── blog.md
└── default.md
```

See also the Hugo docs: [Archetypes](https://gohugo.io/content-management/archetypes/).

## blog.md

```md
---
title: "{{ replace .Name "-" " " | title }}"
description: ""
excerpt: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
weight: 50
images: ["{{ .Name | urlize }}.jpg"]
categories: [""]
---

{{</* img src="{{ .Name | urlize }}.jpg" alt="{{ replace .Name "-" " " | title }}" caption="{{ replace .Name "-" " " | title }}" class="wide" */>}}
```

## default.md

```md
---
title: "{{ replace .Name "-" " " | title }}"
description: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
images: []
---
```
