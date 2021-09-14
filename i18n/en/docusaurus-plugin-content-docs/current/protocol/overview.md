# Overview

Audius is a decentralized, community-owned and artist-controlled music-sharing protocol. Audius provides a blockchain-based alternative to SoundCloud to help artists publish and monetize their work and distribute it directly to fans.

The mission of the project is to give everyone the freedom to share, monetize, and listen to any audio.

This repository has all the pieces that make and support the Audius protocol including smart contracts, services and other libraries.

If you are interested in operating a service, check out our [`staking resources`](https://github.com/AudiusProject/audius-protocol/wiki/Staking-Resources) section. If you're interested in contributing to the Audius protocol, explore the code below!

![](/img/architecture.png)

Audius consists of three demographics of users: content creators, listeners, and service providers.

Service providers can provide one or more of the following services by staking Audius tokens and registering their service:

* Discovery node \(host an endpoint with SSL support and register endpoint with stake\)
* Content node \(host an endpoint with SSL support and register endpoint with stake\)
* Content service \(host an IPFS service register service with stake\) \(coming soon!\)
* Arbitration \(register yourself as an arbitrator to vote on cases when chosen\) \(coming soon!\)

In the above diagram, creators can either run a content node themselves or use one of the network-registered content nodes.

For more details on the Audius architecture, see the [Audius protocol whitepaper](https://whitepaper.audius.co/).

#### Audius Services

| Service | Description |
| :--- | :--- |
| `Content-Node` | Maintains the availability of users' content on IPFS including user metadata, images, and audio content |
| `Discovery-Node` | Indexes and stores the contents of the Audius contracts on the Ethereum blockchain for clients to query via an API |
| `Identity-Service` | Stores encrypted auth ciphertexts, does Twitter OAuth and relays transactions on behalf of users |

#### Audius Smart Contracts & Libs

| Lib | Description |
| :--- | :--- |
| [`libs`](https://github.com/AudiusProject/audius-protocol/tree/master/libs) | An easy interface to the distributed web and Audius services: Identity Service, Discovery Node \(discovery provider\), Content Node \(creator node\) |
| [`contracts`](https://github.com/AudiusProject/audius-protocol/tree/master/contracts) | The smart contracts being developed for the Audius streaming protocol |
| [`eth-contracts`](https://github.com/AudiusProject/audius-protocol/tree/master/eth-contracts) | The Ethereum smart contracts being developed for the Audius streaming protocol |

#### Service Provider Quickstart

If you're a service provider, a quickstart guide to running services on Audius can be found [here](https://github.com/AudiusProject/audius-protocol/wiki/Staking-Resources)
