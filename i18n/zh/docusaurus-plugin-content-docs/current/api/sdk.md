---
sidebar_label: 音频 SDK
sidebar_position: 3
---

# Audius Javascript SDK

## 目录
- [概述](#overview)
- [安装](#installation)
  - [在浏览器/Vanilla JS](#in-the-browservanilla-js)
  - [在 Node.js 中](#in-nodejs)
  - [重要：包括 Web3.js](#important-include-web3js)
- [初始化](#initialization)
  - [在浏览器/Vanilla JS](#in-the-browservanilla-js-1)
  - [在 Node.js 中](#in-nodejs-1)

## 概述

Audius SDK 可让您轻松构建 Audius 网络并与之交互。 目前，我们只有一个 Typescript/Javascript SDK。

我们正在积极构建更多 SDK 特性和功能 - 请继续关注！

<br />

## 安装

### 在浏览器/Vanilla JS

要在浏览器中使用 Audius SDK，只需将以下脚本标签添加到您的 HTML 页面：

```html
<script src="https://cdn.jsdelivr.net/npm/@audius/sdk@latest/dist/sdk.min.js"></script>
```

然后将 Audius SDK 分配给 `window.audiusSdk`。

### 在 Node.js 中

使用您喜欢的 JS 包管理器安装 SDK 包。

例子：

```bash
npm install @audius/sdk
```

### 重要：包括 Web3.js

在浏览器环境中，您必须单独安装 [web3.js](https://github.com/ChainSafe/web3.js) 并确保它存在于 `window.Web3`的窗口对象上。

浏览器内示例：

```HTML
<!-- 在 Audius SDK 脚本之前包含这个 -->
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
```

Node.js 示例：

```JS
// 确保运行 `npm install web3`
const Web3 = require("web3");

窗口.Web3 = Web3;
```

## 初始化

要初始化 SDK，只需调用 SDK 构造函数并传入您的应用程序名称即可。 请注意，构造函数是异步的。

### 在浏览器/Vanilla JS

示例代码：

```HTML
<script>
  变量 SDK；
  async function init() {
    // 这就是初始化 SDK 的方式：
    sdk = await window.audiusSdk({ appName: "<Name of your app here>" });
  }

  异步函数 doStuff() {
    等待 init();
    // 现在可以调用 SDK 方法了，例如：
    const tracking = await sdk.discoveryNode.getTracks()
    console.log("Got track!", tracking)
  }

  doStuff()
</script>
```

### 在 Node.js 中

示例代码：

```Javascript
// audiusSdk.js
import { sdk } from "@audius/sdk";

让audiusSdk = null;

const initAudiusSdk = async () => {
  // 这就是初始化 SDK 的方式：
  const instance = await sdk({ appName: "<Name of your app here>" });

  // 为方便起见，您可以发送一个事件来广播 SDK 准备就绪
  const event = new CustomEvent("SDK_READY");
  window.dispatchEvent(事件);
  audiusSdk = 实例；
};

// 方便的函数来帮助确定 SDK 是否准备就绪
const waitForSdk = () => {
  return new Promise((resolve) => {
    if (audiusSdk) resolve();
    window.addEventListener("SDK_READY" , 解决);
  });
}

initAudiusSdk();

出口 { audiusSdk, waitForSdk };
```

```Javascript
// anotherFile.js
import { audiusSdk, waitForSdk } from "./audiusSdk";

const doStuff = async () => {
  等待 waitForSdk();
  // 现在可以调用 SDK 方法了，例如：
  const tracking = await audiusSdk.discoveryNode.getTracks();
  console.log("得到了曲目！", tracking);
}

doStuff();
```
