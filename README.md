# Hyas
[![GitHub release](https://img.shields.io/github/release/h-enk/hyas.svg?style=flat-square)](https://github.com/h-enk/hyas/releases)
[![Build Status](https://img.shields.io/travis/h-enk/hyas.svg?style=flat-square)](https://travis-ci.org/h-enk/hyas)
[![Netlify](https://img.shields.io/netlify/895a161c-86be-48a2-8c57-a8c5d68cd1a4?style=flat-square)](https://hyas.netlify.com/)

Hugo boilerplate helping you build fast, robust, and adaptable websites.

## Features

- Bootstrap Sass (no JavaScript) and Autoprefixer
- Check Sass and JavaScript for errors
- Environment specific configuration
- Image shortcode with [lazysizes](https://github.com/aFarkas/lazysizes) and [blur up](https://github.com/aFarkas/lazysizes/tree/master/plugins/blur-up) plugin
- Fingerprinting and [SRI](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) (production)
- Remove unused CSS (production)

## Requirements

Make sure all dependencies have been installed:

- Hugo >= 0.68.3/extended
- Node.js >= 13.11.0
- npm >= 6.13.7
- Yarn >= 1.22.0 (recommended)

## Getting started

Create a new Hyas project:

```bash
$ git clone git@github.com:h-enk/hyas.git my-hyas-site
```

Install dependencies:

```bash
# @ my-hyas-site/
$ yarn install
```

Build development theme with live reloading and injection:

```bash
# @ my-hyas-site/
$ yarn start
```

### Other commands
- `yarn lint:styles` - Check Sass for errors
- `yarn lint:scripts` - Check JavaScript for errors
- `yarn clean` - Delete temporary directories
- `yarn build` - Build production theme

## Theme structure

```shell
my-hyas-site/               # → Root of your Hyas based theme
├── archetypes/             # → Content template files
├── assets/                 # → Asset files (fonts, images, js, lambda, and sass)
├── config/                 # → Configuration directives
│   ├── _default/           # → Development and defaults
│   ├── production/         # → Production specific
│   ├── staging/            # → Staging specific
│   ├── postcss.config.js   # → PostCSS configuration file
├── content/                # → Content using page bundles
├── data/                   # → Custom data files
├── functions/              # → Netlify lambda functions directory (production)
├── layouts/                # → Template files
│   ├── _default/           # → Base templates for list & singular pages
│   ├── partials/           # → Partials (footer, head, header, and sidebar)
│   ├── shortcodes/         # → Shortcodes (img)
│   │── 404.html            # → 404 Template
│   │── index.headers       # → Custom Netlify HTTP headers
│   │── index.html          # → Homepage template
│   │── index.redirects     # → Custom Netlify redirect rules
│   │── robots.txt          # → Template for robots.txt
│   │── sitemap.xml         # → Custom sitemap template
├── node_modules/           # → Node.js packages (never edit)
├── public/                 # → Publish directory (temporary)
├── resources/              # → Resource cache directory (temporary)
├── static/                 # → Static content (favicons et cetera)
├── .eslintrc.json          # → ESLint configuration
├── .stylelintrc.json       # → stylelint configuration
├── netlify.toml            # → Netlify configuration
├── package.json            # → Node.js dependencies and scripts
└── yarn.lock               # → Yarn lock file (never edit)
```

## Theme setup
Edit files in `config/` directory.


## Theme development
### Sass

Don't like Bootstrap? Remove it:
```bash
# @ my-hyas-site/
$ yarn remove bootstrap
```
Also make sure to update your sass files, like `app.scss`.

### Images

Use the image shortcode:
```
{{< img src="image-in-page-bundle.jpg" alt="Text description image" caption="Caption, optional" class="wide" >}}
```

Configuration in `config/_default/params.toml`:

```toml
quality = 85
bgColor = "#fff"
landscapePhotoWidths = [900, 700, 500]
portraitPhotoWidths = [1500, 1000, 750]
lqipWidth = "20x"
```

### Sitemap
Exclude a page by adding the following front matter variable:
```yaml
sitemap_exclude: true
```

### Robots
Add a custom [robots meta tag](https://developers.google.com/search/reference/robots_meta_tag) by adding the following front matter variable:
```yaml
robots: "noindex, noarchive"
```
This will output:

```html
<meta name=robots content="noindex, noarchive">
```

## Documentation
- [Hugo](https://gohugo.io/documentation/)
- [Goldmark](https://github.com/yuin/goldmark/)
