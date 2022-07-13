---
sidebar_label: 使用 Audius 登录
sidebar_position: 3
---

# 使用 Audius 登录

## 目录

- [概述](#overview)
  - [身份验证，而非授权](#authentication-not-authorization)
- [工作流程](#workflow)
  - [演示](#demo)
  - [快速链接](#quick-links)
- [如何使用 Javascript SDK 实现使用 Audius 登录](#how-to-implement-log-in-with-audius-with-the-javascript-sdk)
  - [1. 初始化 SDK `oauth` 功能](#1-initialize-the-sdk-oauth-feature)
    - [<ins>**oauth.init(loginSuccessCallback, errorCallback)**</ins>](#insoauthinitloginsuccesscallback-errorcallbackins)
  - [2. 渲染使用 Audius 登录按钮](#2-render-the-log-in-with-audius-button)
    - [<ins>**oauth.renderButton（元素，自定义）**</ins>](#insoauthrenderbuttonelement-customizationsins)
    - [_💡 **提示**：检测按钮何时渲染并显示加载器，直到那时_：](#-tip-detect-when-the-button-has-rendered-and-show-a-loader-until-then)
    - [<ins>**oauth.login()**</ins>](#insoauthloginins)
  - [3. 完毕！](#3-done)
  - [附录：关于电子邮件的快速说明](#addendum-a-quick-note-on-email)
  - [使用 React 和 npm 包的完整代码示例](#full-code-example-using-react-and-npm-package)
  - [使用 vanilla JS 和 SDK dist 的完整代码示例](#full-code-example-using-vanilla-js-and-sdk-dist)
- [如何手动实现使用 Audius 登录](#how-to-implement-log-in-with-audius-manually)
  - [1. 打开使用 Audius 提示页面登录](#1-open-the-log-in-with-audius-prompt-page)
  - [1.5 请记住处理身份验证流程的提前退出（即失败）](#15-remember-to-handle-early-exiting-ie-failure-of-the-authentication-flow)
  - [2. 处理并验证响应](#2-process-and-verify-the-response)
    - [**如果您使用重定向 URI**：](#if-you-used-a-redirect-uri)
    - [**如果您使用 `redirectURI=postmessage`**：](#if-you-used-redirecturipostmessage)
    - [**处理响应**](#handling-the-response)
  - [3. 完毕！](#3-done-1)
  - [附录：关于电子邮件的快速说明](#addendum-a-quick-note-on-email-1)

## 概述

使用 Audius 登录允许您的应用程序检索和验证用户的 Audius 个人资料信息，而无需用户向您提供 Audius 密码。

您可以将此流程用于各种用例，例如：

- 为用户提供一种安全便捷的方式来注册和/或登录您的应用程序，而无需设置密码或填写个人资料表格
- 将用户关联到他们的 Audius 帐户，以便您可以检索他们的 Audius 数据（例如检索他们的曲目）
- 确认用户是否是“已验证”的 Audius 艺术家

但是，请注意，此流程 **CANNOT**：

- 在您的应用上管理用户的登录会话
- 授予您的应用代表用户对 Audius 执行操作的权限（见下文）  
  <br />

### 身份验证，而非授权

请注意，使用 Audius 登录能够提供身份验证，但不能提供授权（还没有！）。 也就是说，此流程尚未提供获取权限以代表用户执行操作（例如，上传曲目）的能力。

<br />

<img src="../../static/img/oauthpopup.png" height="488" width="252" alt="使用 Audius 弹出窗口登录" />

_使用 Audius 对话框登录_

<br />

## 工作流程

“使用 Audius 登录”流程如下所示：

1. 您在您的应用或网站上提供一个按钮以开始身份验证流程
2. 当用户单击按钮时，它会打开一个包含 Audius 登录页面的弹出窗口，提示用户使用他们的 Audius 凭据登录（或者，您的应用程序/网站可以重定向到 Audius 登录页面而不是使用弹出窗口）
3. 用户成功登录后，Audius 会使用 JSON Web 令牌 (JWT) 为您的应用程序/网站提供用户配置文件
4. 您的应用程序验证和解码 JWT

JWT 有效负载包含有关用户的以下信息：

- 唯一标识符（Audius 用户 ID）
- 电子邮件
- 显示名称
- 音响手柄
- 用户是否是经过验证的艺术家（即有紫色复选标记）
- 个人资料图片 URL（如果有）

### 演示

在此处查看 Oauth 流程 [的快速演示](https://codesandbox.io/s/log-in-with-audius-demo-j2jx6f)！

### 快速链接

- React 演示 - [演示应用程序](https://j2jx6f.csb.app/) | [代码](https://codesandbox.io/s/log-in-with-audius-demo-j2jx6f?file=/src/App.js)
- 带有香草 JS 的演示 - [演示应用程序](https://xkogl3.csb.app/) | [代码](https://codesandbox.io/s/log-in-with-audius-demo-vanilla-js-xkogl3?file=/index.html)
- [按钮配置器](https://9ncjui.csb.app/)

<br />

## 如何使用 Javascript SDK 实现使用 Audius 登录

将 Log in with Audius 添加到您的应用程序的最简单方法是使用 Javascript SDK。 如果您无法使用Javascript SDK（例如，如果您正在开发移动应用程序），请跳至 “如何实现手动登录Audius”。

先决条件：

- [在您的应用程序上设置和初始化 Audius SDK](./sdk.md#installation)

### 1. 初始化 SDK `oauth` 功能

首先，您必须调用 `oauth.init` 并向其提供您的应用名称、登录成功回调和可选的错误回调：

#### <ins>**oauth.init(loginSuccessCallback, errorCallback)**</ins>

启用使用 Audius 登录功能。

**参数**

- loginSuccessCallback `(profile: UserProfile) => void` - 当用户成功通过 Audius 验证时调用的函数。 此函数将使用用户的个人资料信息调用，这是一个具有以下形状的对象：

  ```typescript
  // type UserProfile =
  {
    userId: number; // 唯一的 Audius 用户标识符
    email: string;
    名称：字符串； // 用户的显示名称
    句柄：字符串；
    验证：布尔值； // 用户是否有 Audius “已验证”复选标记

    /** 用户头像的 URL，如果有的话。
     * 在绝大多数情况下，将提供三种尺寸 - 150x150、480x480 和 1000x1000。
    * 在极少数情况下，只有未知大小的“misc”可用。
    * 如果用户没有头像，此字段将为空。
    */
    profilePicture: {"150x150": string, "480x480": string, "1000x1000": string } | { misc: string } |未定义 |空
    子：数字； // userId
    的别名 iat: string; // 执行身份验证时的时间戳
}
  ```

- errorSuccessCallback _可选_ `(errorMessage: string) => void` - 在身份验证流程中发生错误时调用的函数。 将使用描述错误的字符串调用此函数。

**返回**：无

例子：

```javascript
audiusSdk.oauth.init(
  (res) => {
    console.log("登录成功！", res);
  },
  (err) => {
    console.log("错误:(", err );
  }
);
```

<br />

### 2. 渲染使用 Audius 登录按钮

您可以使用 `oauth.renderButton` 方法或自己实现登录按钮并使用 `oauth.login`调用登录弹出窗口。

**使用 `oauth.renderButton` （推荐）**：

#### <ins>**oauth.renderButton（元素，自定义）**</ins>

将第一个参数中传递的元素替换为 Log in with Audius 按钮

**参数**

- element `HTMLElement` - 用“使用 Audius 登录”按钮替换的 HTML 元素
- 定制 _可选_ `ButtonOptions` - 可选对象，包含要呈现的按钮的自定义设置。 以下是可用的选项：

  ```typescript
  // type ButtonOptions =
  {
    // 按钮大小：
    size?: 'small' | '中等' | 'large'

    // 按钮的角样式：
    角？：'default' | 'pill'

    // 您自己的按钮文本；默认为 "Log in with Audius":
    customText?: string

    // 是否禁用按钮在悬停时的“增长”动画：
    disableHoverGrow?: boolean

    // 按钮是否应该占据其父元素的整个宽度:
    fullWidth?: boolean
}
  ```

  使用 [this playground](https://9ncjui.csb.app/) 查看这些自定义如何影响按钮外观并确定最适合您的应用的配置。

**返回**：无

例子：

```javascript
<!-- Javascript -->
audiusSdk.oauth.renderButton(document.getElementById('audiusLogInButton'), {
  size: 'large',
  corners: 'pill',
  customText: 'Continue with Audius'
})

<!-- HTML -->
<div id="audiusLogInButton"></div>
```

<br />

#### _💡 **提示**：检测按钮何时渲染并显示加载器，直到那时_：

加载该按钮最多可能需要几秒钟。 您可能希望在按钮加载之前显示加载指示器以获得最佳用户体验。

登录按钮将以 `的 id 呈现audius-login-button`。 您可以使用 MutationObserver 检测何时添加了元素：

例子：

```HTML
<!-- 在您的 HTML 中 -->
<!-- 包围您的元素，该元素将被替换为带有父级的“使用 Audius 登录”按钮，例如：-->
<div id="parent">
  <div id="audiusLogInButton"></div>
  <！-- 您可能想要一个比这更好的加载指示器：P -->
  <div id="loading">Loading...</div>
</div>

```

```JS
// 在你的 JS 中
const observer = new MutationObserver(function(mutations_list) {
    mutation_list.forEach(function(mutation) {
        mutation. addedNodes.forEach(function(added_node) {
            if ( added_node.id == 'audius- login-button') {
        // 登录按钮已渲染
        document.querySelector('#loading').remove()
        observer.disconnect();
            }
        });
    });
});

(document.querySelector("#parent"), { subtree: false, childList: true });

```

<br />

**使用您自己的按钮和 `oauth.login`**：

#### <ins>**oauth.login()**</ins>

打开“使用 Audius 登录”弹出窗口，这将开始身份验证流程

**参数**

没有任何

**返回**：无

例子：

```javascript
<!-- Javascript -->
function logInWithAudius() {
  audiusSdk.oauth.login()
}

<!-- HTML -->
<button onclick="logInWithAudius()">使用 Audius 登录！</button>
```

<br />

### 3. 完毕！

而已！ 请参阅下面的完整代码示例。

### 附录：关于电子邮件的快速说明

一旦您知道您的用户的 Audius 用户 ID，您就可以随时使用我们的 SDK 或 Web API 检索他们的 Audius 信息。 但是，在使用 Audius 登录响应之外不可用的一条配置文件信息是用户的电子邮件地址。 如果您在使用 Audius 登录成功响应中收到用户的电子邮件地址后未存储该电子邮件地址，则只能通过让用户重新完成使用 Audius 登录流程来重新检索该电子邮件。

### 使用 React 和 npm 包的完整代码示例

[在此处查看沙箱](https://codesandbox.io/s/log-in-with-audius-demo-j2jx6f)

### 使用 vanilla JS 和 SDK dist 的完整代码示例

[在此处查看沙箱](https://codesandbox.io/s/log-in-with-audius-demo-vanilla-js-xkogl3?file=/index.html)

<br />
<br />

## 如何手动实现使用 Audius 登录

如果您无法使用 Audius Javascript SDK，您可以按照以下步骤手动实现使用 Audius 登录。

### 1. 打开使用 Audius 提示页面登录

在您的应用程序上创建一个“使用 Audius 登录”按钮。 如果使用 HTML（或类似 HTML 的标记）和 CSS，您可以使用 [这个游乐场](https://j2jx6f.csb.app/) 轻松自定义和生成 Audius 品牌登录按钮的代码。

单击您的登录按钮应通过将用户定向到使用 Audius 提示页面登录来开始身份验证流程。

在本机应用程序上，登录按钮应在应用程序中打开一个安全的 Web 浏览器（例如 iOS 应用程序上的 ASWebAuthenticationSession 或 SFSafariViewController，以及 Android 移动应用程序上的“自定义选项卡”），以加载 Audius 登录页面。 同时，Web 应用程序应在弹出窗口中打开 Audius 登录页面或直接重定向到该页面。

使用 Audius 提示页面登录位于以下 URL：

`https://audius.co/oauth/auth?scope=read&app_name={YourAppName}&redirect_uri={YourRedirectURI}&origin={YourAppOrigin}&state={YourStateValue}&response_mode={query|fragment}`

您必须使用所需的 URL 参数打开此页面，如下所述。

**参数**

- scope `"read"` - 身份验证请求的范围。 只有 `“读取”` 可用（即不要更改它）。
- app_name `字符串` - 您的应用程序的名称。 这将在登录提示页面中显示给用户。
- redirect_uri `string` - 一旦用户成功认证，Audius 登录页面应该重定向到的位置。 允许并支持自定义 URL 方案。 如果您希望登录页面使用 `window.postMessage` 而不是使用重定向将响应发送回其开启者，则可以在此处使用特殊值 `postmessage`。 否则，将应用以下验证规则：

  - 主机不能是原始 IP 地址，除非它们是 localhost IP 地址
  - 不能包含片段组件（`#`）
  - 不能包含 `userinfo` 组件
  - 不能包含路径遍历（包含 `/..` 或 `\..`）
  - 必须包含有效字符和 URI 格式

- origin _可选_ `字符串` 仅在 `redirect_uri` 设置为 `postmessage`时适用和必需。 如果是这样，则该值应设置为打开“使用 Audius 登录”弹出窗口的 [原点](https://developer.mozilla.org/en-US/docs/Web/API/URL/origin)。
- 状态 _可选但强烈推荐_ - `字符串` 任何字符串。 当用户被重定向回您的应用程序时，您在此处提供的确切 `状态` 值将包含在重定向中（在 `状态` URI 片段参数中）。 **此字段应用作 CSRF 保护机制** （在此处阅读更多 [](https://auth0.com/docs/secure/attack-protection/state-parameters) 或 [在此处](https://security.stackexchange.com/questions/20187/oauth2-cross-site-request-forgery-and-state-parameter)），也可用作在生成 `状态` 值和重定向的去向。
- `response_mode` _可选，尽可能不推荐_ - `"fragment" | "query"` 指定当重定向回您的应用程序时，身份验证流响应参数是否将编码在查询字符串或 redirect_uri 的片段组件中。 默认行为相当于“片段”。 如果可能，我们建议不要更改此设置。

**例子**

```HTML
<a href="https://audius.co/oauth/auth?scope=read&app_name=My%20Demo%20App&redirect_uri=https://mydemoapp.com/oauth/receive-token&state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9">点击我用 Audius 登录！</a>
```

### 1.5 记得处理身份验证流程的提前退出（即失败）

如果用户在完成验证流程之前退出验证流程（例如通过关闭窗口），您的应用程序应该检测到这一点并让 UI 做出相应的响应。

<br />

### 2. 处理并验证响应

#### **如果您使用重定向 URI**：

用户成功通过身份验证后，使用 Audius 登录页面将重定向到您指定的重定向 URI， **表示 1) 包含用户配置文件的 JWT，以及 2) 您提供的原始状态值（如果有）包含在URI 片段** （或查询字符串，如果 `response_mode` 设置为 `query`）。 为了说明这一点，从上面的示例开始，我们使用以下 URL 打开登录页面： `https://audius.co/oauth/auth?scope=read&app_name=My%20Demo%20App&redirect_uri=https:/ /mydemoapp.com/oauth/receive-token&状态=a4e0761e-8c21-4e20-819d-5a4daeab4ea9`

...当用户成功通过身份验证时，登录页面将重定向到...： `https://mydemoapp.com/oauth/receive-token#state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9&token={JWT}` 其中 `{JWT}` 是 [JSON Web 令牌](https://jwt.io/introduction) ，其中包含用户的编码配置文件信息和签名。

> 如果您在打开登录页面时指定 `response_mode=query` ，登录页面将改为重定向到...：
> 
> `https://mydemoapp.com/oauth/receive-token?state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9&令牌={JWT}`

请参阅下面的“**处理响应**”以了解下一步该做什么。

<br />

#### **如果您使用 `redirectURI=postmessage`**：

当用户成功认证后，使用 Audius 登录页面将通过 `window.postMessage` 向打开它的窗口发送消息。 该消息将包含一个 JWT，其中包含用户配置文件以及您最初在相应 URL 参数中指定的任何 `状态` 值（如果有）。 例如，如果您的应用使用以下 URL 打开登录页面： `https://audius.co/oauth/auth?scope=read&app_name=My%20Demo%20App&redirect_uri=https://mydemoapp.com/ oauth/接收令牌&状态=a4e0761e-8c21-4e20-819d-5a4daeab4ea9`

...消息如下所示：

```
{
  令牌： <JWT>状态：'
  -8c21-4e20-819d-5a4daeab4ea9'
}
```

其中 `<JWT>` 是一个 [JSON Web 令牌](https://jwt.io/introduction) ，其中包含用户的编码配置文件信息和签名。

快速提醒 - 确保您的 `postMessage` 事件侦听器验证传入事件的来源是 `https://audius.co`！

<br />

#### **处理响应**

从 URI 片段或查询字符串（如果您使用重定向）或事件消息（如果您使用 `postmessage`）中提取 JWT (`token`)。

获得令牌后，您必须将其发送到以下 Audius API 端点，以验证 a) 签名由完成身份验证的 Audius 用户签名，并且 b) 令牌的内容未被篡改. 在验证 JWT 的有效性后，端点将返回经过身份验证的用户的解码配置文件信息。

<ins>获取`/v1/users/verify_token?token[JWT]0`</ins>

**参数**

- token `string` - 您要验证的身份验证流程中的 JWT

**发送请求**

要使用 API，您首先从以下端点返回的端点列表中选择一个 API 端点：

`获取 https://api.audius.co`

选择主机后，所有 API 请求都可以直接发送给它。 例如，如果您选择此主机： `https://audius-dp.singapore.creatorseed.com`，您将向 `https://audius-dp.singapore.creatorseed.com/v1 发出验证令牌请求/users/verify_token?token=<JWT>`，其中 `<JWT>` 替换为您在身份验证流程中检索到的 JWT。

我们建议您在每次应用程序启动时选择一个主机，因为可用性可能会随时间而变化。

**成功响应**

- 代码：200 OK
- 内容：解码后的 JWT 有效载荷，其中包含用户的个人资料信息：

```typescript
{
  userId: number, // 唯一的 Audius 用户标识符
  email: string,
  name: string, // 用户的显示名称
  handle: string,
  verify: boolean, // 用户是否有 Audius“已验证”复选标记

  /** 用户头像的 URL，如果有的话。
   * 在绝大多数情况下，将提供三种尺寸 - 150x150、480x480 和 1000x1000。
  * 在极少数情况下，只有未知大小的“misc”可用。
  * 如果用户没有头像，此字段将为空。
  */
  profilePicture: {"150x150": string, "480x480": string, "1000x1000": string } | { misc: string } |未定义 | null
  sub: number, // userId
  的别名 iat: string, // 执行身份验证的时间戳
}
```

**错误响应**

<ins>无效签名</ins>：

- 代码： `404` 未找到
- 内容：描述所发生问题的错误消息，例如“JWT 签名无效 - 无法恢复钱包”。

<ins>`token` 输入</ins>的问题：

- 代码： `400` 错误请求
- 内容：错误消息，例如“无法解码 JWT 签名”。

<br />

### 3. 完毕！

验证 JWT 后，身份验证流程就完成了，您现在拥有用户的 Audius 个人资料信息。

### 附录：关于电子邮件的快速说明

一旦您知道您的用户的 Audius 用户 ID，您就可以随时使用我们的 SDK 或 Web API 检索他们的 Audius 信息。 但是，在使用 Audius 登录响应之外不可用的一条配置文件信息是用户的电子邮件地址。 如果您在使用 Audius 登录成功响应中收到用户的电子邮件地址后未存储该电子邮件地址，则只能通过让用户重新完成使用 Audius 登录流程来重新检索该电子邮件。
