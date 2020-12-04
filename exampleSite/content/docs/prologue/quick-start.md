---
title: "Quick Start"
description: "One page summary of how to start a new Doks project."
lead: "One page summary of how to start a new Doks project."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu: 
  docs:
    parent: "prologue"
weight: 110
toc: true
---

## Requirements

{{< alert icon="👉" text="Node.js is needed to install npm packages and run commands." >}}

Make sure all dependencies have been installed:

- [Hugo](https://gohugo.io/getting-started/installing/) >= 0.75.0/extended
- [Node.js](https://nodejs.org/) >= 14.15.0

## Start a new Doks project

Create a new site, change directories, install npm packages, and start development server.

### Create a new site

{{< btn-copy text="git clone https://github.com/h-enk/doks.git my-doks-site" >}}

```bash
git clone https://github.com/h-enk/doks.git my-doks-site
```

### Change directories

{{< btn-copy text="cd my-doks-site" >}}

```bash
cd my-doks-site
```

### Install npm packages

{{< btn-copy text="npm install" >}}

```bash
npm install
```

### Start development server

{{< btn-copy text="npm run start" >}}

```bash
npm run start
```

Doks will start the Hugo development webserver accessible by default at `http://localhost:1313`. Saved changes will live reload in the browser.

## Other commands

Doks comes with commands for common tasks. [Commands →]({{< ref "commands" >}})
