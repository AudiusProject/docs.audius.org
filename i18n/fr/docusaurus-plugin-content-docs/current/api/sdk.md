---
sidebar_label: Kit de développement Audius
sidebar_position: 3
---

# SDK Javascript Audius

## Table des matières
- [Aperçu](#overview)
- [Installation](#installation)
  - [Dans le navigateur/Vanilla JS](#in-the-browservanilla-js)
  - [Dans Node.js](#in-nodejs)
  - [Important : incluez Web3.js](#important-include-web3js)
- [Initialisation](#initialization)
  - [Dans le navigateur/Vanilla JS](#in-the-browservanilla-js-1)
  - [Dans Node.js](#in-nodejs-1)

## Aperçu

Le SDK Audius vous permet de développer et d'interagir facilement avec le réseau Audius. Actuellement, nous n'avons qu'un SDK Typescript/Javascript.

Nous travaillons activement à la création d'autres fonctionnalités et fonctionnalités du SDK - restez à l'écoute !

<br />

## Installation

### Dans le navigateur/Vanilla JS

Pour utiliser le SDK Audius dans le navigateur, ajoutez simplement la balise de script suivante à vos pages HTML :

```html
<script src="https://cdn.jsdelivr.net/npm/@audius/sdk@latest/dist/sdk.min.js"></script>
```

Le SDK Audius sera alors affecté à `window.audiusSdk`.

### Dans Node.js

Installez le package SDK à l'aide de votre gestionnaire de packages JS préféré.

Exemple:

```bash
npm installer @audius/sdk
```

### Important : incluez Web3.js

Dans un environnement de navigateur, vous devez installer [web3.js](https://github.com/ChainSafe/web3.js) séparément et vous assurer qu'il est présent sur l'objet window à `window.Web3`.

Exemple dans le navigateur :

```HTML
<!-- Inclure ceci AVANT le script Audius SDK -->
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
```

Exemple Node.js :

```JS
// Assurez-vous d'exécuter `npm install web3`
const Web3 = require("web3");

fenêtre.Web3 = Web3 ;
```

## Initialisation

Pour initialiser le SDK, appelez simplement le constructeur du SDK et transmettez le nom de votre application. Notez que le constructeur est asynchrone.

### Dans le navigateur/Vanilla JS

Exemple de code :

```HTML
<script>
  var sdk ;
  async function init() {
    // Voici comment vous initialisez le SDK :
    sdk = await window.audiusSdk({ appName : "<Name of your app here>" });
  }

  fonction asynchrone doStuff() {
    wait init();
    // Vous pouvez maintenant appeler les méthodes du SDK, par exemple :
    const tracks = await sdk.discoveryNode.getTracks()
    console.log("Got tracks!", tracks)
  }

  doStuff()
</script>
```

### Dans Node.js

Exemple de code :

```Javascript
// audiusSdk.js
importe { sdk } de "@audius/sdk" ;

laissez audiusSdk = null ;

const initAudiusSdk = async () => {
  // Voici comment vous initialisez le SDK :
  const instance = await sdk({ appName : "<Name of your app here>" });

  // Pour plus de commodité, vous pouvez envoyer un événement pour signaler que le SDK est prêt
  événement const = new CustomEvent("SDK_READY");
  window.dispatchEvent(événement);
  audioSdk = instance ;
} ;

// Fonction pratique pour aider à déterminer si le SDK est prêt
const waitForSdk = () => {
  return new Promise((resolve) => {
    if (audiusSdk) resolve();
    window.addEventListener("SDK_READY" , résoudre);
  });
}

initAudiusSdk();

exportation { audiusSdk, waitForSdk };
```

```Javascript
// un autreFichier.js
importe { audiusSdk, waitForSdk } de "./audiusSdk" ;

const doStuff = async () => {
  wait waitForSdk();
  // Vous pouvez maintenant appeler les méthodes du SDK, par exemple :
  const tracks = await audiusSdk.discoveryNode.getTracks();
  console.log("Vous avez des pistes!", pistes);
}

faire des trucs();
```
