# Doks
[![GitHub release](https://img.shields.io/github/release/h-enk/doks.svg?style=flat-square)](https://github.com/h-enk/doks/releases)
[![Build Status](https://img.shields.io/travis/h-enk/doks.svg?style=flat-square)](https://travis-ci.com/github/h-enk/doks)
[![Netlify](https://img.shields.io/netlify/8a1009d5-88ac-413e-96ef-3f928674a083?style=flat-square)](https://doks.netlify.app/)

Doks is a Hugo starter helping you build modern documentation websites.

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
