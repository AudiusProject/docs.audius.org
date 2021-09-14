---
sidebar_label: Introduction
sidebar_position: 1
---

# Introduction

This section describes how to run an Audius node.

The Audius protocol is powered by two off-chain services, the Discovery Node and the Content Node.

**Discovery Node**

* Indexes blockchains used by the Audius protocol \(Main-net Ethereum, POA, and Solana\)
* Serves API traffic
* Tracks usage metrics

**Content Node**

* Hosts audio and image content
* Syncs content across nodes to ensure data is consistent and highly available \(using IPFS and the Audius Storage Protocol under the hood\)
