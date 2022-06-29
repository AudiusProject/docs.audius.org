---
id: "index"
title: "@audius/sdk"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

# Audius JavaScript SDK

## Overview

The Audius JavaScript (TypeScript) SDK allows you to easily build upon and interact with the Audius protocol.
- ✍️ Log in with Audius
- 🎵 Fetch and stream tracks
- 🔍 Search and display users, tracks, and playlists

👷‍♀️ We're actively working on building out more SDK features and functionality - stay tuned!

## Installation

- [Node.js](#nodejs)
- [HTML + JS](#html--js)

### Node.js

#### 1. Install the SDK package using your preferred JS package manager

In your terminal, run:

```bash"
npm install web3 @audius/sdk
```

#### 2. Initialize the SDK

```js
import { sdk } from '@audius/sdk'

const audiusSdk = sdk({ appName: 'Name of your app goes here' })
```

#### 3. Make your first API call using the SDK!

```js
const tracks = await audiusSdk.discoveryNode.getTracks()
console.log(tracks, 'Tracks fetched!')
```

#### Full example

```js title="app.js" showLineNumbers
import Web3 from 'web3'
import { sdk } from '@audius/sdk'

// If running in a browser, set window.Web3
window.Web3 = Web3

const audiusSdk = sdk({ appName: 'My Example App' })

const tracks = await audiusSdk.discoveryNode.getTracks()
console.log(tracks, 'Tracks fetched!')
```

### HTML + JS

#### 1. Include the SDK script tag

```html
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@audius/sdk@latest/dist/sdk.min.js"></script>
```

The Audius SDK will then be assigned to `window.audiusSdk`.

#### 2. Initialize the SDK

```js
const audiusSdk = window.audiusSdk({ appName: 'Name of your app goes here' })
```

#### 3. Make your first API call using the SDK!

```js
const tracks = await audiusSdk.discoveryNode.getTracks()
```

#### Full example

```html title="index.html" showLineNumbers
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@audius/sdk@latest/dist/sdk.min.js"></script>
    <script>
      const audiusSdk = window.audiusSdk({
        appName: "My Example App",
      });
      const tracks = await audiusSdk.discoveryNode.getTracks();
      console.log(tracks, "Tracks fetched!");
    </script>
  </head>
  <body>
    <h1>Example content</h1>
  </body>
</html>
```
