---
title: "Introduction"
description: "Introduction Hyas."
lead: "Hyas is a Hugo starter helping you build modern websites that are secure, fast, and SEO-ready — by default."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu: 
  docs:
    parent: "prologue"
weight: 010
toc: true
---

## Why Hyas?

Six reasons why you should use Hyas:

1. __Security aware__. Get A+ scores on [Mozilla Observatory](https://observatory.mozilla.org/analyze/hyas.netlify.app) out of the box. Easily change the default Security Headers to suit your needs.

2. __Fast by default__. Get 100 scores on [Google Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?gist=8b7aec005ae7b9e128ad5c4e2f125fea) by default. Hyas removes unused css, prefetches links, and lazy loads images.

3. __SEO-ready__. Use sensible defaults for structured data, open graph, and Twitter cards. Or easily change the SEO settings to your liking.

4. __Development tools__. Code with confidence. Check styles, scripts, and markdown for errors and fix automatically or manually.

5. __Bootstrap framework__. Build robust, flexible, and intuitive websites with Bootstrap. Or use any other front-end framework if you prefer.

6. __Netlify-ready__. Deploy to Netlify with sensible defaults. Easily use Netlify Functions, Netlify Redirects, and Netlify Headers.

## Prerequisites

Make sure all dependencies have been installed:

- [Hugo](https://gohugo.io/) >= 0.75.1/extended
- [Node.js](https://nodejs.org/) >= 14.12.0
- [Yarn](https://yarnpkg.com/) >= 1.22.5 (recommended)

{{< alert icon="💡" text="npm (comes with Node.js) and Yarn are both Node.js package managers. <a href=\"https://classic.yarnpkg.com/en/\">Yarn</a> is faster, more reliable, and more secure than npm." >}}

## Get started

Three ways to get started.

### Hyas CLI

Install the Hyas CLI globally:

```bash
yarn add global @hyas/cli
```

Create a new Hyas project:

```bash
hyas create [dir]
```

#### npx

Or use [npx](https://nodejs.dev/learn/the-npx-nodejs-package-runner):

```bash
npx @hyas/cli create my-hyas-site
```

See also: [Hyas CLI]({{< ref "hyas-cli" >}}).

### Repository clone

Create a new Hyas project:

```bash
git clone git@github.com:h-enk/hyas.git my-hyas-site
```

Install dependencies:

```bash
yarn install
```

Start local development server:

```bash
yarn start
```

See also: [commands]({{< ref "commands" >}}).

### Netlify deploy

Get your Hyas site in 1 min.

<a class="btn btn-primary btn-sm px-3" href="https://app.netlify.com/start/deploy?repository=https://github.com/h-enk/hyas" role="button">Deploy to Netlify</a>

<!--
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/h-enk/hyas "Deploy to Netlify")
-->

## Example site

👉 [hyas.netlify.app](https://hyas.netlify.app/)
