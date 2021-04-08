---
title: "Observer with Mongo"
description: "Deploy the observer with Mongo database"
lead: "Deploy the observer with Mongo database"
date: 2021-04-08
lastmod: 2021-04-08
draft: false
weight: 3010
contributors: ["Balazs Kreith"]
toc: true
menu:
  docs:
    parent: "deployments"
---

## Prerequisites
 * You have at least 2 GB memory in the machine you deploy
 * You have installed [docker](https://docker.com)

## Deploy

### 1. Create a new directory

```shell
mkdir observer-with-mongo
cd observer-with-mongo
```

### 2. Create observer config

Create `observer-config.yaml` and add the following contents to it:

```yaml
observer:
  connectors:
    - name: "MyMongoConnector"
      encoder:
        type: BsonEncoder
        format: OBJECT
      buffer:
        maxWaitingTimeInS: 10
      sink:
        type: MongoSink
        config:
          URI: "mongodb://root:password@docker_mongo:27017"
          database: "reports"
```

This configuration sets up a connector inside observer to connect to mongo.

### 3. Create docker compose file

Create `docker-compose.yaml`, and add the following contents:

```shell
version: '3.3'
services:
  observer:
    restart: always
    container_name: docker_observer
    image: observertc/observer:0.7.3
    ports:
      - 7080:7080
      - 7081:7081
    environment:
      - INITIAL_WAITING_TIME_IN_S=5
      - MICRONAUT_CONFIG_FILES=/observer-config.yaml
    volumes:
      - ./observer-config.yaml:/observer-config.yaml
  mongodb:
    image: mongo:4.2
    container_name: docker_mongo
    hostname: mongodb
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: password
    ports:
      - "27017:27017"
  mongo-express:
    image: mongo-express
    container_name: docker_mongo_express
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_SERVER: docker_mongo
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: password
      ME_CONFIG_BASICAUTH_USERNAME: admin
      ME_CONFIG_BASICAUTH_PASSWORD: password
    depends_on:
      - mongodb
```

### 4. Launch

```shell
docker-compose up
```

## Test Deployment

### 1. Run WebRTC App

You can run your WebRTC Integration, or a demo app uses the latest [observer-js](https://github.com/ObserveRTC/observer-js).

```shell
docker run -it --rm \
  -p 9090:9090 \
  -e __PORT__='9090' \
  -e __OBSERVER_JS__='https://observertc.github.io/observer-js/dist/latest/observer.js' \
  -e __OBSERVER_MARKER__='SAMPLE-OBSERVER-MARKER' \
  -e __OBSERVER_BROWSER_ID__='SAMPLE-SAMPLE-BROWSER-ID' \
  -e __OBSERVER_SERVER_ENDPOINT__='ws://localhost:7080/86ed98c6-b001-48bb-b31e-da638b979c72/testMediaUnitId/v20200114/json' \
  --name observer-js-demo observertc/observer-js-demo:latest
```

### 2. Initiate a Call

Go to `localhost:9090` in your browser, `Start` a call and then `Start Collection`.
In the browser console window you should see no errors

### 3. Check the reports

Open a new window in your browser, and go to `localhost:8081`. Authenticate yourself with the
admin username and password you set in the docker-compose file (admin/password).
Once you entered, you should see the `reports` database, inside which you found all reports
observer generated for the call you initiated.

## Tweaks

The following customizations are known regarding the mongo sink.

### Setup collection names

You can set the names of the collections you wish to use inside mongo for different
type of reports.

```yaml
sink: MongoSink
config:
  collectionNames:
    INBOUND_RTP: "MyInboundRTPs"
```

You can find a list of report types [here](https://observertc.github.io/observer/#_observer_reports).


## References
 * [MongoDB](https://www.mongodb.com/)
 * [Observer](https://github.com/ObserveRTC/observer)
 * [Observer Documentation](https://observertc.github.io/observer)
 * [Helm](https://github.com/ObserveRTC/helm)
 * [Docker](https://github.com/ObserveRTC/docker)

