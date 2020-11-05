---
title: "Commands"
description: "Doks comes with commands for most used tasks."
lead: "Doks comes with commands for most used tasks."
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu: 
  docs:
    parent: "prologue"
weight: 030
toc: true
---

{{< alert icon="💡" text="You can change the commands in the scripts section of `./package.json`." >}}

## start

Start local development server:

```bash
npm run start
```

## lint

Check scripts, styles, and markdown for errors:

```bash
npm run lint
```

### scripts

Check scripts for errors:

```bash
npm run lint:scripts [--fix]
```

### styles

Check styles for errors:

```bash
npm run lint:styles [--fix]
```

### markdown

Check markdown for errors:

```bash
npm run lint:markdown [--fix]
```

## clean

Delete temporary directories:

```bash
npm run clean
```

## build

Build production website:

```bash
npm run build
```

### functions

Build Lambda functions:

```bash
npm run build:functions
```

### preview

Build production website including draft and future content:

```bash
npm run build:preview
```
