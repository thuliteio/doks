---
title: "Deployment"
description: "Deployment Hyas."
lead: "Hyas is optimized for deployment to Netlify, but you can use any other static web host if you prefer."
date: 2020-04-20T12:46:25+02:00
lastmod: 2020-04-20T12:46:25+02:00
draft: false
images: []
menu: 
  docs:
    parent: "basic-hyas"
weight: 160
toc: true
---

```bash
yarn build
```

## Netlify

See also: [Netlify]({{< ref "netlify" >}}).

### Netlify Drop

Netlify Drop lets you deploy a website with simply drag & drop.

- Run `yarn build` in your project folder.
- This will generate a `public` folder where your generated site is located.
- Visit [Netlify Drop](https://app.netlify.com/drop) and drop the `public` folder there.

## Other hosting options

See the Hugo Docs: [Hosting & Deployment](https://gohugo.io/hosting-and-deployment/).
