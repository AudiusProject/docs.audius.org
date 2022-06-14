---
sidebar_label: Setup Instructions
sidebar_position: 3
---

# Setup Instructions

This guide describes how to run Audius services on a single machine via Docker Compose.
The repository of Docker Compose files can be found on [GitHub](https://github.com/AudiusProject/audius-docker-compose).

Please join the node operator discord channel on the [Audius discord server](https://discord.com/invite/audius) for announcements & troubleshooting assistance.


## Installation

On a VM that meets the minimum requirements from above run:

```sh
bash <(curl https://raw.githubusercontent.com/AudiusProject/audius-docker-compose/main/install.sh)
```

During installation there will be prompts for required environment variables. The variables are:

### Creator Node
- `creatorNodeEndpoint` - The DNS of your content node. If you haven't registered the service yet, please enter the url you plan to register.
- `delegateOwnerWallet` - Address of wallet that contains no tokens but that is registered on chain, used to sign JSON responses from server
- `delegatePrivateKey` - Private key associated with `delegateOwnerWallet`
- `spOwnerWallet` - Wallet that registered (or will register) the content node on chain

If you're using an externally managed Postgres DB please see [this section](advanced_setup.md#external-creator-node-postgres)

### Discovery Provider
- `audius_delegate_owner_wallet` - Address of wallet that contains no tokens but that is registered on chain, used to sign JSON responses from server
- `audius_delegate_private_key` - Private key associated with `audius_delegate_owner_wallet`

If you're using an externally managed Postgres DB please see [this section](advanced_setup.md#external-discovery-provider-postgres-instance)

## More options
For more advanced configuration options or migrating from Kubernetes check out the [Advanced Setup Guide](advanced_setup.md)
