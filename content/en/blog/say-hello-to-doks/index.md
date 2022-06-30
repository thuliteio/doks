---
title: "Say hello to Doks 👋"
description: "Introducing Doks, a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
lead: "Introducing Doks, a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date: 2020-11-04T09:19:42+01:00
lastmod: 2020-11-04T09:19:42+01:00
draft: false
weight: 50
images: ["say-hello-to-doks.png"]
contributors: ["Henk Verlinde"]
---

## Remote gif

```md
![Happy Dance by Neil Sanders](https://i.giphy.com/media/hIip12KtxrNU5GG0Ii/giphy.gif?cid=790b7611e72a6d08626c8c4ff1410056fbc51e0ed1f2daab&rid=giphy.gif&ct=s)
```

![Happy Dance by Neil Sanders](https://i.giphy.com/media/hIip12KtxrNU5GG0Ii/giphy.gif?cid=790b7611e72a6d08626c8c4ff1410056fbc51e0ed1f2daab&rid=giphy.gif&ct=s)

## Image in page bundle

```bash
![Image](security-as-code-startup-jit-comes-out-of-stealth-with-38-5m-in-seed-funding.jpg "Optional title")
```

![Image](security-as-code-startup-jit-comes-out-of-stealth-with-38-5m-in-seed-funding.jpg "Optional title")

## Screenshot in page bundle

```bash
![Screenshot](image003.png)
```

![Screenshot](image003.png)

## Image in assets directory

```bash
![Image](images/harley-davidson.jpg)
```

![Image](images/harley-davidson.jpg)

## Shortcode

### Image in page bundle

```md
{{</* figure src="security-as-code-startup-jit-comes-out-of-stealth-with-38-5m-in-seed-funding.jpg" alt="Describe your image" caption="For a figure caption can be different than alt text" */>}}
```

{{< figure src="security-as-code-startup-jit-comes-out-of-stealth-with-38-5m-in-seed-funding.jpg" alt="Describe your image" caption="For a figure caption can be different than alt text" >}}

### Image in assets directory

```md
{{</* figure src="images/harley-davidson.jpg" alt="Harley Davidson" caption="For a figure caption can be different than alt text" */>}}
```

{{< figure src="images/harley-davidson.jpg" alt="Harley Davidson" caption="For a figure caption can be different than alt text" >}}
