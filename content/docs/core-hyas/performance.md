---
title: "Performance"
description: "Get 100 scores on Google Lighthouse by default. Hyas removes unused css, prefetches links, and lazy loads images."
lead: "Get 100 scores on <a href=\"https://googlechrome.github.io/lighthouse/viewer/?gist=8b7aec005ae7b9e128ad5c4e2f125fea\">Google Lighthouse</a> by default. Hyas removes unused css, prefetches links, and lazy loads images."
date: 2020-09-17T15:37:44+02:00
lastmod: 2020-09-17T15:37:44+02:00
draft: false
images: []
menu: 
  docs:
    parent: "core-hyas"
weight: 220
toc: true
---

## Unused CSS removal

`./config/postcss.config.js`:

```js
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      whitelist: [
        'lazyloaded',
        ...whitelister([
          './assets/scss/components/_syntax.scss',
          './assets/scss/components/_code.scss',
        ]),
      ],
    }),
  ],
}
```

See also the PurgeCSS docs: [Configuration](https://purgecss.com/configuration.html), and the Purgecss Whitelister [Readme](https://github.com/qodesmith/purgecss-whitelister#readme).

## Asset minification

Hyas uses [Hugo](https://gohugo.io/hugo-pipes/minification/) to minify CSS, JS and HTML.

## Link prefetching

Hyas uses [instant.page](https://instant.page/) with default settings for link prefetching. By default, instant.page preloads 65 ms after hovering a link and when a mobile user starts touching their display.

See also the instant.page website: [Intensity](https://instant.page/intensity).

## Lazy loading images

Hyas uses [lazysizes](https://github.com/aFarkas/lazysizes) with a Low Quality Image Placeholder (LQIP) to lazyload images added with the [image shortcode]({{< ref "layouts" >}}). The LQIP is blurred with a CSS filter.

See also the lazysizes [Readme](https://github.com/aFarkas/lazysizes#readme)
