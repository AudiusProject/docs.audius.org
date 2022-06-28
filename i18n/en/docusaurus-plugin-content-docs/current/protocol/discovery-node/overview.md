---
sidebar_label: Overview
sidebar_position: 1
---

# Overview

An Audius Discovery Node is a service that indexes the metadata and availability of data across the protocol for Audius users to query. The indexed content includes user, track, and album/playlist information along with social features. The data is stored for quick access, updated on a regular interval, and made available for clients via a RESTful API.

[github repository](https://github.com/AudiusProject/audius-protocol/tree/master/discovery-provider)

*NOTE - previously the discovery node was also referred to as "discovery provider" or "discovery node". These names all refer to the same service, the discovery node.*

Design Goals

1. Expose queryable endpoints which listeners/creators can interact with
2. Reliably store relevant blockchain events
3. Continuously monitor the blockchain and ensure stored data is up to date with the network
