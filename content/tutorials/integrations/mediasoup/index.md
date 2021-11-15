---
title: "Mediasoup Integration"
description: "Integrate Mediasoup WebRTC Application with ObserveRTC"
lead: "Integrate Mediasoup WebRTC Application with ObserveRTC"
date: 2021-04-07
lastmod: 2021-04-07
draft: false
weight: 2030
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
<script src="https://observertc.github.io/integrations/dist/latest/mediasoup.integration.min.js"></script>
```


In the end it might look similiar to this

```html
    <html>
    <body>
    <script src="https://observertc.github.io/observer-js/dist/latest/observer.min.js"></script>
    <script>
        let observerWsEndPoint = ObserverRTC.ParserUtil.parseWsServerUrl(
            "ws://localhost:7080/",           // observerURL
            {{ServiceUUID}},                  // Add a unique ServiceUUID here
            "mediasoup-demo",                  // MediaUnitID
            "v20200114"                       // StatsVersion
        );
    </script>
    <script src='https://observertc.github.io/integrations/dist/v0.1.1/mediasoup.integration.min.js'></script>
    <script src='/resources/js/antiglobal.js'></script>
    <script>
    window.localStorage.setItem('debug', '* -engine* -socket* -RIE* *WARN* *ERROR*');

    if (window.antiglobal) {
        window.antiglobal('___browserSync___oldSocketIo', 'io', '___browserSync___', '__core-js_shared__');
        setInterval(window.antiglobal, 180000);
    }
    </script>
    <script async src='/mediasoup-demo-app.js?v=foo2'></script>

```

## References

 * [Wiki](https://github.com/ObserveRTC/integrations/wiki/Mediasoup-Integration)
 * [Source](https://github.com/ObserveRTC/integrations/tree/main/src/mediasoup)
 * [Tweaks](https://github.com/ObserveRTC/integrations/wiki/Tweak-your-integration)
