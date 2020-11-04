---
title: "Netlify"
description: "Deploy to Netlify with sensible defaults. Easily use Netlify Functions, Netlify Redirects, and Netlify Headers."
lead: "Deploy to Netlify with sensible defaults. Easily use Netlify Functions, Netlify Redirects, and Netlify Headers."
date: 2020-09-21T15:58:12+02:00
lastmod: 2020-09-21T15:58:12+02:00
draft: false
images: []
menu: 
  docs:
    parent: "core-hyas"
weight: 260
toc: true
---

```bash
.
├── assets/
│   └── lambda/
├── layouts/
│   ├── index.headers
│   └── index.redirects
└── netlify.toml
```

See also the Hugo Docs: [Host on Netlify](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/).

## Functions

Functions in `./assets/lambda/` are compiled on build to `./functions/`.

See also the Netlify docs: [Functions overview](https://docs.netlify.com/functions/overview/)

## Redirects

`./layouts/index.redirects` is converted on build to `./public/_redirects`.

```bash
{{ range $pages := .Site.Pages -}}
  {{ range .Aliases -}}
    {{ . }} {{ $pages.RelPermalink -}}
  {{ end -}}
{{ end -}}
```

See also the Netlify docs: [Redirects and rewrites](https://docs.netlify.com/routing/redirects/)

## Headers

`./layouts/index.headers` is converted on build to `./public/_headers`.

```bash
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Content-Security-Policy: default-src 'none'; manifest-src 'self'; connect-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin
  Feature-Policy: geolocation 'self'
  Cache-Control: public, max-age=31536000
```

See also the Netlify docs: [Custom headers](https://docs.netlify.com/routing/headers/)

## Build and deploy

`./netlify.toml`:

```toml
[build]
  publish = "public"
  functions = "functions"

[build.environment]
  HUGO_VERSION = "0.74.3"
  NODE_VERSION = "13.11.0"
  NPM_VERSION = "6.13.7"
  YARN_VERSION = "1.22.4"

[context.production]
  command = "hugo -b $URL --gc --minify && npm run build:functions"

[context.deploy-preview]
  command = "hugo -b $DEPLOY_PRIME_URL --gc --minify"

[context.branch-deploy]
  command = "hugo -b $DEPLOY_PRIME_URL --gc --minify"
```

See also the Netlify docs: [File-based configuration](https://docs.netlify.com/configure-builds/file-based-configuration/)
