---
title: "Observer with Kafka"
description: "Deploy the observer with Kafka"
lead: "Deploy the observer with Kafka"
date: 2021-04-08
lastmod: 2021-04-08
draft: false
weight: 3020
contributors: ["Balazs Kreith"]
toc: true
menu:
  docs:
    parent: "deployments"
---

## Prerequisites
 * You have at least 2 GB memory in the machine you deploy
 * You have installed [docker](https://docker.com)
 * You have installed [kafkacat](https://github.com/edenhill/kafkacat)

## Deploy

### 1. Create a new directory

```shell
mkdir observer-with-kafka
cd observer-with-kafka
```

### 2. Create observer config

Create `observer-config.yaml` and add the following contents to it:

```yaml
observer:
  connectors:
    - name: "MyKafkaConnector"
      buffer:
        maxWaitingTimeInS: 10
      sink:
        type: KafkaSink
        config:
          topic: "reports"
          properties:
            bootstrap.servers: "docker_kafka:29092"
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
    depends_on:
      - kafka
  zookeeper:
    container_name: docker_zookeeper
    image: confluentinc/cp-zookeeper:5.5.1
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000
  kafka:
    container_name: docker_kafka
    image: confluentinc/cp-kafka:5.5.1
    depends_on:
      - zookeeper
    ports:
      - 9092:9092
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: docker_zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://docker_kafka:29092,PLAINTEXT_HOST://localhost:9092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1

  # This "container" is a workaround to pre-create topics
  kafka-setup:
    image: confluentinc/cp-kafka:5.5.1
    hostname: kafka-setup
    container_name: docker_kafka_setup
    depends_on:
      - kafka
    command: "bash -c ' cub kafka-ready -b docker_kafka:29092 1 20 &&
                        kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 12 --replication-factor 1 --topic reports && \
                        sleep 30'"
    environment:
      # The following settings are listed here only to satisfy the image's requirements.
      # We override the image's `command` anyways, hence this container will not start a broker.
      KAFKA_BROKER_ID: ignored
      KAFKA_ZOOKEEPER_CONNECT: ignored

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
In the browser console window you should see no errors.

### 3. Check the reports

Consume reports from kafka by kafkacat.

```shell
kafkacat -b localhost:9092 -t reports -C
```

## References
* [Kafka](https://kafka.apache.org/)
* [Observer](https://github.com/ObserveRTC/observer)
* [Observer Documentation](https://observertc.github.io/observer)
* [Helm](https://github.com/ObserveRTC/helm)
* [Docker](https://github.com/ObserveRTC/docker)

