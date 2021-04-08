---
title: "Jitsi Integration"
description: "Integrate Jitsi WebRTC Application with ObserveRTC"
lead: "Integrate Jitsi WebRTC Application with ObserveRTC"
date: 2021-04-07
lastmod: 2021-04-07
draft: false
weight: 2020
contributors: ["Balazs Kreith", "Pallab Gain"]
toc: true
menu:
  docs:
    parent: "integrations"
---

## Recipe

Follow these steps to integrate [observer-js](https://github.com/ObserveRTC/observer-js) with [jitsi](https://jitsi.org).

### 1. Edit config.js

For existing installations and typical deployments you can simply add a few lines to the end of the `meet-[your-domain]-config.js` configuration file.
This is usually located under `/etc/jitsi/meet` in the Debian installation.

Goto your `config.js` file from jitsi-meet `config` folder.

```shell
nano /etc/jitsi/meet/meet.my.domain-config.js
```

Add these two implementation specific variable at the very end of the file.

```javascript
config.analytics.observerPoolingIntervalInMs = 1000
config.observerWsEndpoint = "wss://websocket_server_url/service_uuid/media_unit_id/stats_version/json"
```

Make sure to specify your `service_uuid` and a unique string for `media_unit_id` to indentify this specific Jitsi Meet instance .

### 2. Build Docker Image

You will need to pass the integration specific configuration using `config.js` before building the container. Goto your jitsi-meet `settings-config.js`and add the following:

```javascript
// observer rtc related config

{{ if .Env.POOLING_INTERVAL_IN_MS -}}
config.analytics.observerPoolingIntervalInMs = '{{ .Env.OBSERVER_POOLING_INTERVAL_IN_MS }}';
{{ end -}}


{{ if .Env.OBSERVER_WS_ENDPOINT -}}
config.observerWsEndpoint = '{{ .Env.OBSERVER_WS_ENDPOINT }}';
{{ end -}}
```

Now, if we build a new jitsi-meet container, these two environment variable will be present in `config.js` when jitsi-meet is loaded.


### 3. Add observer-js

To load the ObserverRTC library, we need to edit the Jitsi Meet webpage.

Goto your JitsiMeet  `index.html` page:

```bash
nano /usr/share/jitsi-meet/index.html
```

Add these two file after the line where `config.js` script is loaded:
```javascript
<script src="https://observertc.github.io/observer-js/dist/latest/observer.min.js"></script>
<script src="https://observertc.github.io/integrations/dist/v0.1.1/jitsi.integration.min.js"></script>
```

This should look something like:

```html

    <!--... -->
    <!--#include virtual="static/settingsToolbarAdditionalContent.html" -->

    <!-- Added manually as part of Observe RTC installation; using minified versions -->
    <script src="https://observertc.github.io/observer-js/dist/latest/observer.min.js"></script>
    <script src="https://observertc.github.io/integrations/dist/v0.1.1/jitsi.integration.min.js"></script>

  </head>
  <body>
    <!--#include virtual="body.html" -->
    <div id="react"></div>
  </body>
</html>

```

Reload the Jitsi Meet page from browser to apply changes. Jitsi Meet now integrated.

## References

 * [Wiki](https://github.com/ObserveRTC/integrations/wiki/Jitsi-Integration)
 * [Source](https://github.com/ObserveRTC/integrations/tree/main/src/jitsi)
 * [Tweaks](https://github.com/ObserveRTC/integrations/wiki/Tweak-your-integration)
