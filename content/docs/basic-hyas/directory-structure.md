---
title: "Directory Structure"
description: "The Hyas directory structure explained."
lead: "The Hyas directory structure follows and extends the Hugo directory structure. So you can easily locate stuff."
date: 2020-01-07T16:02:42+01:00
draft: false
images: ["image-hyas.jpg"]
menu: 
  docs:
    parent: "basic-hyas"
weight: 110
toc: true
---

A basic Hyas project would be structured like this:

```shell
my-hyas-site/
├── archetypes/
├── assets/
├── config/
│   ├── _default/
│   ├── production/
│   ├── staging/
│   ├── postcss.config.js
├── content/             
├── data/
├── functions/
├── layouts/
│   ├── _default/
│   ├── partials/
│   ├── shortcodes/
│   │── 404.html
│   │── index.headers
│   │── index.html
│   │── index.redirects
│   │── robots.txt
│   │── sitemap.xml
├── node_modules/
├── public/
├── resources/
├── static/
├── .eslintrc.json
├── .stylelintrc.json
├── netlify.toml
├── package.json
└── yarn.lock
```

## The root directory
Lorem ipsum dolor sit amet, consectetur __adipiscing__ elit. Donec rhoncus commodo nisl, et volutpat sem maximus quis. Phasellus in consequat eros. Etiam in dui eu urna pharetra placerat in efficitur mi. Proin at dui non quam mollis consequat non vel mauris. 

Phasellus sagittis nibh et nibh dictum lobortis. Proin nec ultrices tortor. Aliquam erat volutpat. Donec elementum erat non urna commodo hendrerit. Vestibulum est felis, pellentesque sit amet nulla tristique, porttitor commodo libero.

Vestibulum iaculis velit ut turpis sodales, nec ullamcorper ex imperdiet. Nullam in facilisis sapien. Donec pretium sagittis tortor, id pretium sapien dignissim vitae. Donec finibus, tellus vel vestibulum malesuada, felis augue ultrices elit, et ornare velit lacus ut tortor.
