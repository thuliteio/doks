---
title: "Janus Integration"
description: "Integrate Janus WebRTC Application with ObserveRTC"
lead: "Integrate Janus WebRTC Application with ObserveRTC"
date: 2021-04-07
lastmod: 2021-04-07
draft: false
weight: 2010
contributors: ["Balazs Kreith", "Pallab Gain"]
toc: true
menu:
  tutorials:
    parent: "integrations"
---

## Recipe

Follow these steps to integrate [observer-js](https://github.com/ObserveRTC/observer-js) with [janus](https://janus.conf.meetecho.com/).


### 1. Include observer-js

Include core library before including janus javascript library file in your html page.

```html
<script src="https://observertc.github.io/observer-js/dist/latest/observer.min.js"></script>
```

### 2. Set the observer endpoint

Define server endpoint in global( window ) scope
```html
<script>
    let observerWsEndPoint = ObserverRTC.ParserUtil.parseWsServerUrl(
        "wss://{{ObserverURL}}/",               // observerURL
        {{ServiceUUID}},                        // Add a unique ServiceUUID here
        "janus-demo",                           // MediaUnitID
        "v20200114"                             // StatsVersion
    );
</script>
`````

### 3. Add the integration

Include the integration library

```html
<script src="https://observertc.github.io/integrations/dist/latest/janus.integration.min.js"></script>
```

In the end it might look similiar to this
```html
<html>
<body>
<!-- ..... -->
<script src="http://observertc.github.io/observer-js/dist/latest/observer.js"></script>
<script>
    let observerWsEndPoint = ObserverRTC.ParserUtil.parseWsServerUrl(
        "ws://localhost:7080/",                 // observerURL
        "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee", // Add a unique ServiceUUID here
        "janus-demo",                           // MediaUnitID
        "v20200114"                             // StatsVersion
    );
</script>
<script type="text/javascript" src="http://localhost:9090/dist/latest/janus.integration.js"></script>

<script type="text/javascript" src="janus.js" ></script>
<script type="text/javascript" src="videoroomtest.js"></script>

```

## References

 * [Wiki](https://github.com/ObserveRTC/integrations/wiki/Janus-integration)
 * [Source](https://github.com/ObserveRTC/integrations/tree/main/src/janus)
 * [Tweaks](https://github.com/ObserveRTC/integrations/wiki/Tweak-your-integration)

