---
title: "Shortcodes"
description: "This cheat sheet provides a quick overview of all available Doks shortcodes."
summary: "This cheat sheet provides a quick overview of all available Doks shortcodes."
date: 2023-03-31T12:07:31+02:00
lastmod: 2023-03-31T12:07:31+02:00
draft: false
weight: 50
images: []
categories: []
tags: []
contributors: ["Henk Verlinde"]
pinned: false
homepage: false
---

## Alert

### Default

```md
{{</* alert */>}}
**Note**: Advisories for malware are currently in beta and subject to change.
{{</* /alert */>}}
```

{{< alert >}}
**Note**: Advisories for malware are currently in beta and subject to change.
{{< /alert >}}

### Context

```md
{{</* alert context="primary" */>}}
**Note**: Advisories for malware are currently in beta and subject to change.
{{</* /alert */>}}
```

{{< alert context="primary">}}
**Note**: Advisories for malware are currently in beta and subject to change.
{{< /alert >}}

### Icon

```md
{{</* alert icon="👉" */>}}
Advisories for malware are currently in beta and subject to change.
{{</* /alert */>}}
```

{{< alert icon="👉" >}}
Advisories for malware are currently in beta and subject to change.
{{< /alert >}}

## Details

```md
{{</* details "How will we conduct IEP and 504 meetings?" */>}}
All meetings will be held *remotely*.
{{</* /details */>}}
```

{{< details "How will we conduct IEP and 504 meetings?" >}}
All meetings will be held *remotely*.
{{< /details >}}

## Tabs

Run the following command in your terminal to start our handy install wizard, `create-hyas`.

````md
{{</* tabs "create-new-site" */>}}
{{</* tab "npm" */>}}

```bash
npm create hyas@latest
```

{{</* /tab */>}}
{{</* tab "pnpm" */>}}

```bash
pnpm create hyas@latest
```

{{</* /tab */>}}
{{</* tab "Yarn" */>}}

```bash
yarn create hyas
```

{{</* /tab */>}}
{{</* /tabs */>}}
````

{{< tabs "create-new-site" >}}
{{< tab "npm" >}}

```bash
npm create hyas@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create hyas@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create hyas
```

{{< /tab >}}
{{< /tabs >}}

`cd` into your new project directory to begin using Hyas. Install your dependencies before continuing.

````md
{{</* tabs "install-dependencies" */>}}
{{</* tab "npm" */>}}

```bash
npm install
```

{{</* /tab */>}}
{{</* tab "pnpm" */>}}

```bash
pnpm install
```

{{</* /tab */>}}
{{</* tab "Yarn" */>}}

```bash
yarn install
```

{{</* /tab */>}}
{{</* /tabs */>}}
````

{{< tabs "install-dependencies" >}}
{{< tab "npm" >}}

```bash
npm install
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn install
```

{{< /tab >}}
{{< /tabs >}}

## Video

```md
{{</* video ratio="16x9" attributes="controls autoplay muted" webm-src="videos/flower.webm" mp4-src="videos/flower.mp4" */>}}
```

{{< video ratio="16x9" attributes="controls autoplay muted" webm-src="videos/flower.webm" mp4-src="videos/flower.mp4" >}}
