---
title: "Quick Start"
date: 2021-04-01
lastmod: 2021-04-01
draft: false
images: []
menu:
  docs:
    parent: "prologue"
weight: 110
toc: true
---

1. Run the client integration demo in one terminal:

```shell
docker run -it --rm \
    -p 9090:9090 \
    -e __PORT__='9090' \
    -e __OBSERVER_JS__='https://observertc.github.io/observer-js/dist/latest/observer.js' \
    -e __OBSERVER_MARKER__='SAMPLE-OBSERVER-MARKER' \
    -e __OBSERVER_BROWSER_ID__='SAMPLE-SAMPLE-BROWSER-ID' \
    -e __OBSERVER_SERVER_ENDPOINT__='ws://localhost:9090/86ed98c6-b001-48bb-b31e-da638b979c72/testMediaUnitId/v20200114/json' \
    --name observer-js-demo observertc/observer-js-demo:latest
```

2. Run the observer in another terminal:

```shell
docker run -it --rm \
     -p 7080:7080 \
     --name observer observertc/observer:H
```

3. Open browser at `localhost:9090`

![start the demo](quickstart.gif "Start The Demo")

4. See the summary logs from observer about the samples the demo sent
