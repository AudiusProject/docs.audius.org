---
sidebar_label: SDK de Audius
sidebar_position: 3
---

# Audius Javascript SDK

## Tabla de contenidos
- [Vista general](#overview)
- [Instalación](#installation)
  - [En el navegador/Vanilla JS](#in-the-browservanilla-js)
  - [En Node.js](#in-nodejs)
  - [Importante: incluir Web3.js](#important-include-web3js)
- [Inicialización](#initialization)
  - [En el navegador/Vanilla JS](#in-the-browservanilla-js-1)
  - [En Node.js](#in-nodejs-1)

## Vista general

El SDK de Audius le permite construir e interactuar fácilmente con la red de Audius. Actualmente, sólo tenemos un SDK de Typescript/Javascript.

Estamos trabajando activamente en construir más características y funcionalidad de SDK - ¡mantente atento!

<br />

## Instalación

### En el navegador/Vanilla JS

Para utilizar el SDK de Audius en el navegador, simplemente añade la siguiente etiqueta de script a tus páginas HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/@audius/sdk@latest/dist/sdk.min.js"></script>
```

El SDK de Audius se asignará a `window.audiusSdk`.

### En Node.js

Instale el paquete SDK usando su gestor de paquetes JS preferido.

Ejemplo:

```bash
npm instalar @audius/sdk
```

### Importante: incluir Web3.js

En un entorno del navegador, debe instalar [web3. s](https://github.com/ChainSafe/web3.js) por separado y asegurarse de que esté presente en el objeto de ventana en `window.Web3`.

Ejemplo en el navegador:

```HTML
<!-- Include this BEFORE the Audius SDK script -->
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
```

Ejemplo Node.js:

```JS
// Make sure to run `npm install web3`
const Web3 = require("web3");

window.Web3 = Web3;
```

## Inicialización

Para inicializar el SDK, simplemente llame al constructor de SDK y pase el nombre de su aplicación. Tenga en cuenta que el constructor es asíncrono.

### En el navegador/Vanilla JS

Código de ejemplo:

```HTML
<script>
  var sdk;
  async function init() {
    // This is how you initialize the SDK:
    sdk = await window.audiusSdk({ appName: "<Name of your app here>" });
  }

  async function doStuff() {
    await init();
    // Now you can call SDK methods, for example:
    const tracks = await sdk.discoveryNode.getTracks()
    console.log("Got tracks!", tracks)
  }

  doStuff()
</script>
```

### En Node.js

Código de ejemplo:

```Javascript
// audiusSdk.js
import { sdk } from "@audius/sdk";

let audiusSdk = null;

const initAudiusSdk = async () => {
  // This is how you initialize the SDK:
  const instance = await sdk({ appName: "<Name of your app here>" });

  // For convenience, you can dispatch an event to broadcast that the SDK is ready
  const event = new CustomEvent("SDK_READY");
  window.dispatchEvent(event);
  audiusSdk = instance;
};

// Convenient function to help determine if the SDK is ready
const waitForSdk = () => {
  return new Promise((resolve) => {
    if (audiusSdk) resolve();
    window.addEventListener("SDK_READY", resolve);
  });
}

initAudiusSdk();

export { audiusSdk, waitForSdk };
```

```Javascript
// anotherFile.js
import { audiusSdk, waitForSdk } from "./audiusSdk";

const doStuff = async () => {
  await waitForSdk();
  // Now you can call SDK methods, for example:
  const tracks = await audiusSdk.discoveryNode.getTracks();
  console.log("Got tracks!", tracks);
}

doStuff();
```
