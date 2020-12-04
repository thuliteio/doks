---
title: "Commands"
description: "Doks comes with commands for common tasks."
lead: "Doks comes with commands for common tasks."
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu: 
  docs:
    parent: "prologue"
weight: 130
toc: true
---

{{< alert icon="💡" text="You can change the commands in the scripts section of `./package.json`." >}}

## start

Start local development server:

{{< btn-copy text="npm run start" >}}

```bash
npm run start
```

## lint

Check scripts, styles, and markdown for errors:

{{< btn-copy text="npm run lint" >}}

```bash
npm run lint
```

### scripts

Check scripts for errors:

{{< btn-copy text="npm run lint:scripts" >}}

```bash
npm run lint:scripts [-- --fix]
```

### styles

Check styles for errors:

{{< btn-copy text="npm run lint:styles" >}}

```bash
npm run lint:styles [-- --fix]
```

### markdown

Check markdown for errors:

{{< btn-copy text="npm run lint:markdown" >}}

```bash
npm run lint:markdown [-- --fix]
```

## clean

Delete temporary directories:

{{< btn-copy text="npm run clean" >}}

```bash
npm run clean
```

## build

Build production website:

{{< btn-copy text="npm run build" >}}

```bash
npm run build
```

### functions

Build Lambda functions:

{{< btn-copy text="npm run build:functions" >}}

```bash
npm run build:functions
```

### preview

Build production website including draft and future content:

{{< btn-copy text="npm run build:preview" >}}

```bash
npm run build:preview
```
