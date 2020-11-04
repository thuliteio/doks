---
title: "Hyas CLI"
description: "Hyas command line tool."
lead: "Hyas command line tool."
date: 2020-09-22T08:38:48+02:00
lastmod: 2020-09-22T08:38:48+02:00
draft: false
images: []
menu: 
  docs:
    parent: "prologue"
weight: 020
toc: true
---

```bash
Usage: hyas <command> [options]

Commands:
  build         Build production website
  clean         Delete temporary directories
  create [dir]  Create a new Hyas project
  start         Start local development server

Options:
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]

Run hyas <command> --help for detailed usage of given command.
```

## Installation

Install the [Hyas CLI](https://www.npmjs.com/package/@hyas/cli) globally:

```bash
yarn add global @hyas/cli
```

```bash
npm install -g @hyas/cli
```

## npx

Or use [npx](https://nodejs.dev/learn/the-npx-nodejs-package-runner):

```bash
npx @hyas/cli <command> [options]
```

## Commands

### Create

Create a new Hyas project:

```bash
hyas create [dir]
```

### Start

Start local development server:

```bash
hyas start
```

### Build

Build production website:

```bash
hyas build
```

### Clean

Delete temporary directories:

```bash
hyas clean
```

## Options

### -h, --help

Show help.

### -v, --version

Show version number.

## Update

You'll get notified when an update is available:

```bash
Update available: 0.3.2
Run npm install -g @hyas/cli to update
```
