---
sidebar_label: 오디우스 SDK
sidebar_position: 삼
---

# 오디우스 자바스크립트 SDK

## 목차
- [개요](#overview)
- [설치](#installation)
  - [브라우저/Vanilla JS에서](#in-the-browservanilla-js)
  - [Node.js에서](#in-nodejs)
  - [중요: Web3.js 포함](#important-include-web3js)
- [초기화](#initialization)
  - [브라우저/Vanilla JS에서](#in-the-browservanilla-js-1)
  - [Node.js에서](#in-nodejs-1)

## 개요

Audius SDK를 사용하면 Audius 네트워크를 쉽게 구축하고 상호 작용할 수 있습니다. 현재 Typescript/Javascript SDK만 있습니다.

더 많은 SDK 기능을 구축하기 위해 적극적으로 노력하고 있습니다. 계속 지켜봐 주시기 바랍니다!

<br />

## 설치

### 브라우저/Vanilla JS에서

브라우저에서 Audius SDK를 사용하려면 HTML 페이지에 다음 스크립트 태그를 추가하기만 하면 됩니다.

```html
<script src="https://cdn.jsdelivr.net/npm/@audius/sdk@latest/dist/sdk.min.js"></script>
```

그러면 Audius SDK가 `window.audiusSdk`에 할당됩니다.

### Node.js에서

선호하는 JS 패키지 관리자를 사용하여 SDK 패키지를 설치합니다.

예시:

```bash
npm install @audius/sdk
```

### 중요: Web3.js 포함

브라우저 환경에서는 [web3.js](https://github.com/ChainSafe/web3.js) 을 별도로 설치하고 `window.Web3`의 window 객체에 존재하는지 확인해야 합니다.

브라우저 내 예:

```HTML
<!-- Audius SDK 스크립트 전에 이것을 포함하십시오 -->
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
```

Node.js 예시:

```JS
// `npm install web3`을 실행해야 합니다.
const Web3 = require("web3");

창.Web3 = Web3;
```

## 초기화

SDK를 초기화하려면 SDK 생성자를 호출하고 앱 이름을 전달하기만 하면 됩니다. 생성자는 비동기식입니다.

### 브라우저/Vanilla JS에서

예제 코드:

```HTML
<script>
  var SDK;
  async function init() {
    // SDK를 초기화하는 방법은 다음과 같습니다.
    sdk = await window.audiusSdk({ appName: "<Name of your app here>" });
  }

  비동기 함수 doStuff() {
    init()를 기다립니다.
    // 이제 다음과 같이 SDK 메서드를 호출할 수 있습니다.
    const track = await sdk.discoveryNode.getTracks()
    console.log("Got track!",tracks)
  }

  doStuff()
</script>
```

### Node.js에서

예제 코드:

```Javascript
// audiusSdk.js
import { sdk } from "@audius/sdk";

audiusSdk = null;

const initAudiusSdk = async () => {
  // SDK를 초기화하는 방법은 다음과 같습니다.
  const instance = await sdk({ appName: "<Name of your app here>" });

  // 편의를 위해 SDK가 준비되었음을 알리는 이벤트를 전달할 수 있습니다.
  const event = new CustomEvent("SDK_READY");
  window.dispatchEvent(이벤트);
  audiusSdk = 인스턴스;
};

// SDK가 준비되었는지 판단하는 데 도움이 되는 편리한 함수
const waitForSdk = () => {
  return new Promise((resolve) => {
    if (audiusSdk) resolve();
    window.addEventListener("SDK_READY") , 해결),
  });
}

initAudiusSdk();

수출 { audiusSdk, waitForSdk };
```

```Javascript
// anotherFile.js
import { audiusSdk, waitForSdk } from "./audiusSdk";

const doStuff = async() => {
  waitForSdk()를 기다립니다.
  // 이제 SDK 메서드를 호출할 수 있습니다. 예를 들면 다음과 같습니다.
  const tracks = await audiusSdk.discoveryNode.getTracks();
  console.log("트랙이 있습니다!", track);
}

doStuff();
```
