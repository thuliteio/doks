---
title: "Quick Start"
date: 2021-04-01
lastmod: 2021-04-01
draft: false
images: []
menu:
  tutorials:
    parent: "prologue"
weight: 1030
toc: true
images: ["quickstart.gif"]
---

1. Open a terminal and run a demo webrtc app integrated with [observer-js](https://github.com/ObserveRTC/observer-js)


```shell
docker run -it --rm \
    -p 9090:9090 \
    -e __PORT__='9090' \
    -e __OBSERVER_JS__='https://observertc.github.io/observer-js/dist/latest/observer.js' \
    -e __OBSERVER_MARKER__='SAMPLE-OBSERVER-MARKER' \
    -e __OBSERVER_BROWSER_ID__='SAMPLE-SAMPLE-BROWSER-ID' \
    -e __OBSERVER_SERVER_ENDPOINT__='ws://localhost:7080/myServiceId/myWebrtcApp' \
    --name observer-js-demo observertc/observer-js-demo:latest
```

2. Open another terminal and run the [observer](https://github.com/ObserveRTC/observer)

```shell
docker run -p 7080:7080 observertc/observer:latest
```

3. Open browser at `localhost:9090` and start collecting samples

{{< img-simple src="quickstart.gif" alt="Google Lighthouse Scan Results Doks">}}

4. See the summary logs from observer about the samples the demo sent
