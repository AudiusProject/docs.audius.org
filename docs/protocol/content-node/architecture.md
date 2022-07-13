---
sidebar_label: Architecture
sidebar_position: 2
---

# Architecture

## Web Server

The Content Node's core service is a web server with an HTTP API to process incoming requests and perform the following functions:

- user & track metadata upload
- user & track image upload
- user track file upload
- user & track data, metadata, and track file retrieval

*The web server is a [NodeJS](https://nodejs.org) [Express app](https://expressjs.com/).*

## Persistent Storage (Postgres)

It stores all data in a postgresql database and all images and metadata objects on its file system.

Pointers to all content and metadata stored on disk are persisted in the Postgres DB.

*Postgres is managed in the codebase using the [Sequelize ORM](https://sequelize.org/master/) which includes migrations, models and validations*

## Redis

A [Redis client](https://redis.io/) is used for for resource locking, request rate limiting, and limited caching and key storage.

*Redis is managed in the codebase through the [ioredis](https://github.com/luin/ioredis) npm package*

## Track Segmenting

As defined by the [Audius protocol](https://whitepaper.audius.co), the content node uses [FFMPEG](https://ffmpeg.org/ffmpeg.html) to segment & transcode all uploaded track files before storing/serving.

## Data Redundancy**

As defined by the [Audius protocol](https://whitepaper.audius.co), all content is stored redundantly across multiple nodes to maximize availability. This is all done automatically - every node monitors every other node in the network to ensure minimum redundancy of all data, transfering files as required.
