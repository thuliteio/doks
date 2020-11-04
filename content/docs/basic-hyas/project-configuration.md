---
title: "Project Configuration"
description: "The Hyas project configuration extends Hugo's."
lead: "The Hyas project configuration extends Hugo's."
date: 2020-09-21T12:19:02+02:00
lastmod: 2020-09-21T12:19:02+02:00
draft: false
images: []
menu: 
  docs:
    parent: "basic-hyas"
weight: 120
toc: true
---

```bash
..
├── _default/
│   ├── config.toml
│   ├── menus.toml
│   └── params.toml
├── production/
├── staging/
└── postcss.config.js
```

See also the Hugo docs: [Configure Hugo](https://gohugo.io/getting-started/configuration/).

## config.toml

### Netlify specifics

```toml
# add redirects/headers
[outputs]
home = ["HTML", "RSS", "REDIRECTS", "HEADERS"]

# remove .{ext} from text/netlify
[mediaTypes."text/netlify"]
suffixes = [""]
delimiter = ""

# add output format for netlify _redirects
[outputFormats.REDIRECTS]
mediatype = "text/netlify"
baseName = "_redirects"
isPlainText = true
notAlternative = true

# add output format for netlify _headers
[outputFormats.HEADERS]
mediatype = "text/netlify"
baseName = "_headers"
isPlainText = true
notAlternative = true
```

## menus.toml

No specifics.

## params.toml

### SEO specifics

```toml
title = "Hyas"
titleSeparator = "-"
titleAddition = "Modern Hugo Starter"
description = "Hugo starter helping you build modern websites."

images = ["hyas.png"]

twitterSite = "@henkverlinde"
twitterCreator = "@henkverlinde"
facebookAuthor = "verlinde.henk"
facebookPublisher = "verlinde.henk"
ogLocale = "en_US"

schemaType = "Organization"
schemaLogo = "logo-hyas.png"
schemaTwitter = "https://twitter.com/henkverlinde"
schemaLinkedIn = "https://www.linkedin.com/in/henkverlinde/"
schemaGitHub = "https://github.com/h-enk"
schemaSection = "blog"

siteLinksSearchBox = false

themeColor = "#fff"
```

### Image shortcode

```toml
quality = 85
bgColor = "#fff"
landscapePhotoWidths = [1000, 800, 700, 600, 500]
portraitPhotoWidths = [800, 700, 600, 500]
lqipWidth = "20x"
```

### Footer

```toml
footer = "© 2020 Henk Verlinde - MIT License"
```

### Alert

```toml
alert = false
alertText = "Deliver web projects 10x faster. <a class=\"alert-link\" href=\"https://www.netlify.com/whitepaper/\">Get the free enterprise paper →</a>"
```

## postcss.config.js

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

See also: [Unused CSS removal]({{< ref "performance#unused-css-removal" >}}).
