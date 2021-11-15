---
title: "Tokbox Integration"
description: "Integrate Tokbox WebRTC Application with ObserveRTC"
lead: "Integrate Tokbox WebRTC Application with ObserveRTC"
date: 2021-04-07
lastmod: 2021-04-07
draft: false
weight: 2040
contributors: ["Balazs Kreith", "Pallab Gain"]
toc: true
menu:
  tutorials:
    parent: "integrations"
---

## Recipe

Follow these steps to integrate [observer-js](https://github.com/ObserveRTC/observer-js) with [mediasoup](https://mediasoup.org).

### 1. Include observer-js

Include [observer-js](https://github.com/ObserveRTC/observer-js) core library before including `antiglobal.js` and mediasoup javascript library file in your html page.

```html
  <script src="https://observertc.github.io/observer-js/dist/latest/observer.min.js"></script>
```

### 2. Set the observer endpoint

Define server endpoint in global scope

```html
<script>
let observerWsEndPoint = ObserverRTC.ParserUtil.parseWsServerUrl(
    "wss://{{ObserverURL}}/",               // observerURL
    {{ServiceUUID}},                        // Add a unique ServiceUUID here
    "mediasoup-demo",                       // MediaUnitID
    "v20200114"                             // StatsVersion
);
</script>
```

### 3. Add the integration

Include the integration library
```html
<script src="https://observertc.github.io/integrations/dist/v0.1.1/tokbox.integration.min.js"></script>
```

In the end it might look similiar to this

```html
<html>
<body>
<!-- ..... -->
<script src="https://observertc.github.io/observer-js/dist/latest/observer.min.js"></script>
<script>
  let observerWsEndPoint = ObserverRTC.ParserUtil.parseWsServerUrl(
    "ws://localhost:8088/",           // observerURL
    "b8bf0467-d7a9-4caa-93c9-8cd6e0dd7731", // Add a unique ServiceUUID here
    "opentok-demo",                         // MediaUnitID
    "v20200114"                             // StatsVersion
  );
</script>
<script src="https://observertc.github.io/integrations/dist/v0.1.1/tokbox.integration.min.js"></script>
<script src="https://static.opentok.com/v2/js/opentok.js" charset="utf-8"></script>
```

## References

 * [Wiki](https://github.com/ObserveRTC/integrations/wiki/Vonage-OpenTok-Integration)
 * [Source](https://github.com/ObserveRTC/integrations/tree/main/src/tokbox)
 * [Tweaks](https://github.com/ObserveRTC/integrations/wiki/Tweak-your-integration)
 * [Example](https://github.com/ObserveRTC/integrations/tree/main/__test__/tokbox)
