- - -
sidebar_label：概述 sidebar_position：1
- - -

# 概述

Audius 是一个去中心化、社区拥有和艺术家控制的音乐共享协议。 Audius 为现有的流媒体平台提供了基于区块链的替代方案，以帮助艺术家发布他们的作品并从中获利，并将其直接分发给粉丝。

该项目的使命是让每个人都可以自由地分享、获利和收听任何音频。

Audius 协议 [存储库](https://github.com/AudiusProject/audius-protocol) 是一个单一存储库，其中包含制作和支持协议的所有部分，包括智能合约、服务和其他支持库。

如果您对操作服务感兴趣，请参阅 [`运行节点`](../token/running-a-node/introduction.md) 部分。 如果您有兴趣为 Audius 协议做出贡献，请浏览下面的代码！

![](/img/architecture.png)

Audius 由三种用户构成：艺术家（内容创作者）、粉丝（内容消费者）和服务提供商。 一些用户检查属于所有三个人口统计数据！

* **位艺术家** 位上传曲目、创建专辑并将内容分享给他们的关注者
* **位粉丝** 串流曲目、创建播放列表、订阅 & 关注的艺术家，并将内容重新分享给他们的关注者
* **服务提供商** 提供应用流量、流式播放歌曲并帮助保护网络

服务提供商可以通过质押 $AUDIO 个代币并注册其服务来提供以下一项或多项服务：

* 发现节点\（托管具有 SSL 支持的端点并使用权益注册端点\）
* 内容节点\（托管具有 SSL 支持的端点并使用权益注册端点\）

在上图中，创建者可以自己运行内容节点，也可以使用网络注册的内容节点之一。

有关 Audius 架构的更多详细信息，请参阅 [Audius 协议白皮书](whitepaper.md)。

## 音响服务

| 服务                                                                                        | 描述                                             |
|:----------------------------------------------------------------------------------------- |:---------------------------------------------- |
| [`内容节点`](https://github.com/AudiusProject/audius-protocol/tree/master/creator-node)       | 维护 IPFS 上用户内容的可用性，包括用户元数据、图像和音频内容              |
| [`发现节点`](https://github.com/AudiusProject/audius-protocol/tree/master/discovery-provider) | 在以太坊区块链上索引和存储 Audius 合约的内容，供客户通过 API 查询        |
| [`身份服务`](https://github.com/AudiusProject/audius-protocol/tree/master/identity-service)   | 存储加密的身份验证密文，执行 Twitter OAuth 并代表用户中继交易（支付 gas） |

## Audius 智能合约 & Libs

| 库                                                                                     | 描述                                                            |
|:------------------------------------------------------------------------------------- |:------------------------------------------------------------- |
| [`库`](https://github.com/AudiusProject/audius-protocol/tree/master/libs)              | 分布式 Web 和 Audius 服务的简单接口：身份服务、发现节点\（发现提供者\）、内容节点\（创建者节点\） |
| [`合同`](https://github.com/AudiusProject/audius-protocol/tree/master/contracts)        | 正在为 Audius 流协议开发的智能合约                                         |
| [`eth合约`](https://github.com/AudiusProject/audius-protocol/tree/master/eth-contracts) | 正在为 Audius 流协议开发的以太坊智能合约                                      |

## 服务提供商快速入门

如果您是服务提供商，可以找到在 Audius 上运行服务的快速入门指南 [这里](../token/running-a-node/introduction.md)
