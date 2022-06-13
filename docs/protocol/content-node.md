---
sidebar_label: Content Node
sidebar_position: 3
---

# Content Node

## Overview

An Audius Content Node maintains the availability of all content in the network.  
Content types include user and track metadata, user and track images, and audio content.

*NOTE - Previously, there was a concept of a ”creator node” that was separate from a content node. These have been combined into a single node type rather than being separate, with ”content node” referring to the merged type. Some references to ”creator node” still exist in Audius code and in other documentation; those can safely be assumed to be referring to the content nodes outlined here.*

All registered content nodes are visible here: https://dashboard.audius.org/services/creator-node

## Architecture

**Web Server**

The content node's core service is a web server with an HTTP API to process incoming requests and perform the following functions:

- user & track metadata upload
- user & track image upload
- user track file upload
- user & track data, metadata, and track file retrieval

*The web server is a [NodeJS](https://nodejs.org) [Express app](https://expressjs.com/).*

**Persistent Storage (Postgres)**

It stores all data in a postgresql database and all images and metadata objects on its file system.

Pointers to all content and metadata stored on disk are persisted in the Postgres DB.

*Postgres is managed in the codebase using the [Sequelize ORM](https://sequelize.org/master/) which includes migrations, models and validations*

**Redis**

A [Redis client](https://redis.io/) is used for for resource locking, request rate limiting, and limited caching and key storage.

*Redis is managed in the codebase through the [ioredis](https://github.com/luin/ioredis) npm package*

**Track Segmenting**

As defined by the [Audius protocol](https://whitepaper.audius.co), the content node uses [FFMPEG](https://ffmpeg.org/ffmpeg.html) to segment & transcode all uploaded track files before storing/serving.

**Data Redundancy**

As defined by the [Audius protocol](https://whitepaper.audius.co), all content is stored redundantly across multiple nodes to maximize availability. This is all done automatically - every node monitors every other node in the network to ensure minimum redundancy of all data, transfering files as required.

## Configuration

### Up and Running 

#### Service Dependencies

The Content Node depends on external services to run:
* [Postgres](https://www.postgresql.org/)
* [Redis](https://redis.io/)

#### Docker Compose
[Docker Compose](https://docs.docker.com/compose/) is used for a bit more automated management of the service dependencies.  
**Make sure you have Docker and Docker-compose installed and operational.**

To start the content node along with its services, run 
```
docker-compose -f docker-compose/docker-compose.yml up
```

*In development, it may be useful to use the `--build` flag to rebuild changes.*

#### Docker
The Audius Content Node is an evolving FOSS project. The application is dockerized for the ease of development and deployment of our user community. To use these images you will need to have Docker installed and operational.

##### Environment Variables 

Variables listed in [config.js](https://github.com/AudiusProject/audius-protocol/blob/master/creator-node/src/config.js) can also be overridden via   
1.) Environment variables using a `:` delimiter for nested fields.  
2.) Creating a `local-config.json` file with the `:` delimited keys as nested fields.  

The environment variables take the highest priority, then the `local-config.json`, then `default-config.json`

###### Required environment variables

**delegateOwnerWallet**  `Default: null`  
This required environment variable is the public wallet address of the service provider running this service

**delegatePrivateKey**  `Default: null`  
This required environment variable is the private key of the service provider running this service

**spOwnerWallet**  `Default: wallet used by SP to register SP on chain`  
This required environment variable is the owner wallet that owns Audius tokens and registered this service, not to be confused with the `delegateOwnerWallet`

**creatorNodeEndpoint**  `Default: null`  
The URL of the endpoint that's been registered on chain. If the endpoint has not been registered on chain yet, enter the endpoint that you plan to register.

###### Optional environment variables

**storagePath** `default: './file_storage'`  
The local storage path for content. Note, if the env vars: `awsBucket`, `awsAccessKeyId`, `awsSecretAccessKey` are defined then aws s3 will take precedence as the content storage. 

**port**  `Default: 4000`  
This optional environment variable defined the port the application uses to expose its API. 
If it is not specified, then the default port of `4000` will be used.

**logLevel**  `Default: debug`  
The npm package [bunyan](https://www.npmjs.com/package/bunyan) is used for logging. The [log level options](https://github.com/trentm/node-bunyan#levels) of the application are defined the the [library's documentation](https://github.com/trentm/node-bunyan)

**ipfsHost**  `Default: localhost`  
This optional environment variable is used in conjunction with `ipfsPort` to connect the application 
with an ipfs client. This variable will indicate the host on which the ipfs client is running. 
If it is not specified, then the default value of `localhost` will be used.

**ipfsPort**  `Default: 5001`  
This optional environment variable is used in conjunction with `ipfstHost` to connect the application with a 
ipfs client. This variable will indicate the port on which the ipfs client is running. 
If it is not specified, then the default port of `4379` will be used.

**dbUrl**  `Default: postgres://postgres:postgres@localhost:4432/audius_creator_node`  
This optional environment variable is used to define the postgres database url passed to the 
[sequelize constructor](http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor). 
If it is not specified, then the default value of `postgres://postgres:postgres@localhost:4432/audius_creator_node` will be used.
Note that the pg user and password are passed as part of the `dbUrl`. 

**redisHost**  `Default: localhost`  
This optional environment variable is used in conjunction with `redisPort` to connect the application 
with a redis client. This variable will indicate the host on which the redis client is running. 
If it is not specified, then the default value of `localhost` will be used.

**redisPort**  `Default: 4379`  
This optional environment variable is used in conjunction with `redistHost` to connect the application with a 
redis client. This variable will indicate the port on which the redis client is running. 
If it is not specified, then the default port of `4379` will be used.

**rateLimiting:audiusUserReqLimit**  `Default: 3000`
This optional environment variable is used to define the maximum number of request per hour per ip.
The rate limiter is applied to the `/audius_user` endpoint. 
If it is not specified, then the value of `3000` will be used.

**rateLimiting:userReqLimit**  `Default: 3000`  
This optional environment variable is used to define the maximum number of request per hour per ip.
The rate limiter is applied to the `/users` endpoint. 
If it is not specified, then the value of `3000` will be used.

**rateLimiting:metadataReqLimit**  `Default: 3000`  
This optional environment variable is used to define the maximum number of request per hour per ip.
The rate limiter is applied to the `/metadata` endpoint. 
If it is not specified, then the value of `3000` will be used.

**rateLimiting:imageReqLimit**  `Default: 6000`  
This optional environment variable is used to define the maximum number of request per hour per ip.
The rate limiter is applied to the `/image_upload` endpoint. 
If it is not specified, then the value of `6000` will be used.

**rateLimiting:trackReqLimit**  `Default: 6000`
This optional environment variable is used to define the maximum number of request per hour per ip.
The rate limiter is applied to the `/track*` endpoint. 
If it is not specified, then the value of `6000` will be used.

**maxAudioFileSizeBytes**  `Default: 1000000000`  
This optional environment variable is used to define the maximum audio file size that can be uploaded in bytes.
If it is not specified, then the value of `1000000000` will be used. Note that by default: 1,000,000,000 bytes = 1GB

**maxMemoryFileSizeBytes**  `Default: 100000000`  
This optional environment variable is used to define the maximum memory file size that can be uploaded in bytes.
If it is not specified, then the value of `100000000` will be used. Note that by default: 100,000,000 bytes = 100MB

**WAIT_HOSTS**  `Default: 0.0.0.0:5432,0.0.0.0:6379`  
This optional environment variable is used to define the host:port pairs that the application waits for 
TCP port connection to before starting. The [wait script](https://github.com/ufoscout/docker-compose-wait) uses these
env vars. If not declared, the script executes without waiting.

###### Development-specific environment variables

**ethProviderUrl**  
Not to be used by service providers. URL of the ethereum provider to make contract calls

**ethNetworkId**  
Not to be used by service providers. Network Id of the ethereum provider to make contract calls

**ethTokenAddress**  
Not to be used by service providers. Address of the Audius token contract on Ethereum

**ethRegistryAddress**  
Not to be used by service providers. Address of the Audius registry on Ethereum

**ethOwnerWallet**  
Not to be used by service providers. Wallet used by Audius to deploy contracts

**debounceTime**  
Not to be used by service providers. Time to debounce between `/sync` requests

**discoveryProviderWhitelist**  
Not to be used by service providers. Whitelisted discovery providers to select from (comma-separated)

**userMetadataNode**
Not to be used by service providers. Boolean to indicate if this node is of type "user metadata node".

#### Available Images

##### Official image (stable and tested)
The Official Docker Image Repository is where Audius' official, stable image is maintained.

```
docker pull audius/creator-node
```

##### Latest Release Image
This is an image released from the latest master branch.

```
docker pull audius/creator-node:latest
```

##### Specific Release Image
This is an image with an associated with a release build that has been published to the audius docker repository. 
Check the [release notes](https://github.com/AudiusProject/audius-monorepo/releases) 
for details on each version.

```
docker pull audius/creator-node:X.X.X
```

##### Discovering existing releases
You can select the release you need from our GitHub Release Page. 
Here’s a description of our current development and versioning strategy.

**TODO: input dev/versioning strategy for publishing docker image**

#### Build & Run the Content Node
For information about running this service locally, see the [Service Commands](https://github.com/AudiusProject/audius-protocol/tree/master/service-commands) folder for more information.
