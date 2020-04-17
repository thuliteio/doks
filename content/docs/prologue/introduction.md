---
title: "Introduction"
description: "Introduction Doks."
lead: "Doks is a Hugo starter helping you build modern documentation websites."
date: 2020-04-17T08:48:57+00:00
draft: false
images: [image-doks.png]
menu: 
  docs:
    parent: "prologue"
weight: 010
toc: true
---

## Features
- Lightweight code base
- 100 scores Google Lighthouse
- A+ scores [Mozilla Observatory](https://observatory.mozilla.org/)
- [Algolia DocSearch](https://docsearch.algolia.com/) support
- Dark/Light toggle
- Blog ready
- Easily make it your own
- All in [Hyas](https://github.com/h-enk/hyas)

See a working example at [doks.netlify.app](https://doks.netlify.app/)

## Requirements

Make sure all dependencies have been installed:

- [Hugo](https://gohugo.io/) >= 0.69.0/extended
- [Node.js](https://nodejs.org/) >= 13.11.0
- [Yarn](https://yarnpkg.com/) >= 1.22.4 (recommended)

## Get started

Create a new Doks project:

```bash
$ git clone git@github.com:h-enk/doks.git my-doks-site
```

Install dependencies:

```bash
# @ my-doks-site/
$ yarn install
```

Build development theme with live reloading and injection:

```bash
# @ my-doks-site/
$ yarn start
```

### Other commands
- `yarn lint:styles` - Check Sass for errors
- `yarn lint:scripts` - Check JavaScript for errors
- `yarn clean` - Delete temporary directories
- `yarn build` - Build production theme

## Documentation
- [Hugo](https://gohugo.io/documentation/)
- [Hyas](https://gethyas.com/)
- [Doks](https://getdoks.org/)
