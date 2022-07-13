---
sidebar_label: 刺猬
sidebar_position: 2
---

# 刺猬

像应用程序一样构建 DApps

[Github](https://github.com/AudiusProject/hedgehog)👈

Hedgehog 是一个使用用户名和密码的开源客户端以太坊钱包。 它旨在降低非技术用户进入加密项目的门槛。

允许用户像与任何其他网站一样与您的 DApp 进行交互，无需扩展，无需集中控制密钥。

**Hedgehog** 是 Metamask 的替代品，它在浏览器上管理用户的私钥和钱包。 它公开了一个简单的 API，允许您创建身份验证方案，让用户在多个浏览器和设备上注册并登录他们的钱包。

### 并非所有交易都是平等的

当前的以太坊钱包将每笔交易都视为转移您一生的积蓄。 Hedgehog 是为涉及低到没有财务价值的用例而构建的。

> 注意：最终用户体验的主要改进是通过隐藏钱包的复杂性和不强迫用户确认交易来获得的——这与转移大量资金时想要的相反。

#### 没有更多的弹出窗口🦊

今天的去中心化应用程序需要大量技术知识来配置和使用，从而限制了您的用户群并降低了增长潜力。

### 安装

```bash
npm i --save @audius/hedgehog
```

### 文档 & 示例

查看我们完整的技术 [文档](http://audiusproject.github.io/hedgehog-docs) 和 [api how-to](http://audiusproject.github.io/hedgehog-docs#how-to)。

对于浏览器端的快速演示， [不要再看了](https://codesandbox.io/embed/pp9zzv2n00)。 有关完整的端到端身份验证演示，请参阅我们的 [demo repo](https://github.com/AudiusProject/audius-hedgehog-demo)。

### 为什么使用这个？

#### 并非所有交易都是平等的

当前可用的钱包将每笔交易都视为在您一生的积蓄中移动。 Hedgehog 是为涉及低到没有财务价值的用例而构建的。

**注**：最终用户体验的主要改进是隐藏钱包的复杂性，而不是强迫用户不断确认交易——这与转移大量资金时想要的相反。

#### Hedgehog 适合你的 DApp 吗？

Hedgehog 并不适合所有 DApp。 只有通过权衡，才能大幅提升用户体验。 作为一般规则，Hedgehog 不应用于涉及大量资金的应用程序。 作为桥梁，可以在 Hedgehog 上启动用户，如果他们的储值增加超过某个阈值，则建议迁移到更安全的钱包； Hedgehog 范式也可以与现有的 web3 提供程序互操作。

_\[好的用例\]_

* **签名数据**：如果您正在构建依赖用户签名数据的去中心化应用程序\（例如，通过 EIP-712-esque 签名方案\），如果风险足够低，Hedgehog 可以帮助简化体验。
* **游戏 DApp**：没有什么比签署交易更能破坏乐趣了。 如果你正在构建一个不使用大量金融资产的游戏 DApp，那么改进用户体验是关键。
* **去中心化音乐播放器**：如果您正在构建面向消费者的 DApp，Hedgehog 将显着改善用户体验并显着增加您的潜在用户群。

_\[不良用例\]_

如果你的 DApp 涉及转移大量资金，那么在安全性方面的权衡很可能是不值得的。 Hedgehog 对最终用户体验的主要改进是隐藏钱包而不是强迫用户确认交易——这与你在转移资金时想要的相反。 我们绝对不建议在以下情况下使用 Hedgehog：

* **银行 DApp**
* **去中心化借贷**
* **预测市场**

### 仔细观察

Hedgehog 是一个存在于前端应用程序中的包，用于创建和管理用户的熵\（从中派生出私钥\）。 Hedgehog 依靠用户名和密码来创建身份验证工件，因此它能够模拟熟悉的身份验证系统，允许用户从多个浏览器或设备注册或登录并检索他们的熵。 这些工件通过 Hedgehog 保存到您选择的后端。

**注**：私钥仅在客户端计算和可用，并且永远不会在用户浏览器之外的任何地方传输或存储。

```javascript
// 提供 getFn、setAuthFn、setUserFn 作为对您的数据库/后端服务的请求（文档中的更多详细信息）。
常量刺猬=新刺猬（getFn，setAuthFn，setUserFn）
让钱包
如果（hedgehog.isLoggedIn（））{
  钱包=hedgehog.getWallet（）
}否则{
  钱包=等待hedgehog.login（'用户名'，' password')
  // 或
  wallet = await Hedgehog.signUp('username', 'password')
}
```

在创建或检索用户的钱包后，您可以 **直接为他们的钱包注资** 支付交易费用或 **通过 EIP-712 中继器**中继他们的交易。


### 👉 [深入了解文档](https://audiusproject.github.io/hedgehog-docs/#installation)👈
