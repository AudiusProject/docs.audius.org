---
sidebar_label: 设置说明
sidebar_position: 3
---

# 设置说明

本指南介绍了如何在单节点 Kubernetes 集群上运行 Audius 服务。 给出了有关多节点集群的注意事项。

加入 [Audius discord server](https://discord.com/invite/audius)上的节点运营商 discord 频道

## 0。 克隆 audius-k8s-manifests 存储库
[**https://github.com/AudiusProject/audius-k8s-manifests**](https://github.com/AudiusProject/audius-k8s-manifests)\*\*\*\*

```text
git clone git@github.com:AudiusProject/audius-k8s-manifests.git
```

## 1. 集群设置

初始化运行 Ubuntu 16.04 LTS 或更高版本的机器，至少有 8 个 vCPU 和 16 GB RAM。

还包括一个方便的脚本来进行“一键式”kubeadm 节点设置。 你可以跑

```text
是的 | sh setup.sh
```

但是，如果节点设置不成功且 kubectl 不可用，则建议在此处手动执行安装步骤 [](https://github.com/AudiusProject/audius-k8s-manifests/blob/master/cluster-setup.md)。

## 2. Audius CLI 设置

如果是第一次安装，您可以跳过此部分。

您可以安装 `audio-cli` 与

```text
sh install_audius_cli.sh
```

然后，您只需运行以下命令即可查看通过 `audio-cli` 可用的所有命令：

```text
audius-cli -h
```

## 3. 贮存

为持久存储提供共享主机目录，

```text
mkdir -p /var/k8s
```

如果需要 sudo，请更改所有权，

```text
sudo chown <user>:<group> /var/k8s
```

通常这将是，

```text
sudo chown -R ubuntu:ubuntu /var/k8s
```

**注意：** 存储即使在删除 `pv、pvc` 对象后仍会保留在主机上。

要核对所有数据并开始清理，

```text
rm -rf /var/k8s/*
```

## 4. 服务设置

有关通过 `audio-cli`部署 [Creator 节点](https://github.com/AudiusProject/audius-k8s-manifests#creator-node-1) 和 [Discovery Provider](https://github.com/AudiusProject/audius-k8s-manifests#discovery-provider-1) 的指南，请参见下文。 完成服务设置后，请继续 Logger 部分。

**注：** “Creator Node”和“Discovery Provider”最近分别重命名为“Content Node”和“Discovery Node”。 然而，为了代码和本 README 的一致性，我们将继续使用术语“创建者节点”和“发现节点”。

### 创建者节点

Audius Creator 节点维护 IPFS 上创作者内容的可用性。

存储的信息包括 Audius 用户元数据、图像和音频内容。 内容由本地目录支持。

**注：** 未来，该服务将扩展为处理来自最终用户客户端的代理重加密请求，并支持其他存储后端。

#### 跑

使用 `audio-cli` 更新所需的变量。 变量和解释的完整列表可以在 wiki [上找到](https://github.com/AudiusProject/audius-protocol/wiki/Content-Node:-Configuration-Details#required-environment-variables)。

必须设置一些变量，您可以使用以下命令执行此操作：

```text
audius-cli set-config creator-node 后端
键：spOwnerWallet
值： <address of wallet that contains audius tokens>

audius-cli set-config creator-node 后端
键：delegateOwnerWallet
值： <address of wallet that contains no tokens but that is registered on chain>

audius-cli set-config creator-node 后端
键：delegatePrivateKey
值： <private key>

audius-cli set-config creator-node 后端
键：creatorNodeEndpoint
值： <your service url>
```

**注意：** 如果您还没有注册服务，请输入您打算注册的url `creatorNodeEndpoint`。

然后通过 `audius-cli`运行启动命令

```text
audius-cli 启动 creator-node --configure-ipfs
```

通过运行验证服务是否健康，

```text
audius-cli 健康检查创建者节点
```

#### 升级

如果您没有 `audius-cli`，有关如何安装的说明可在 [上面的部分](https://github.com/AudiusProject/audius-k8s-manifests#2-audius-cli-setup)中找到。

要使用 `audio-cli`升级您的服务，您需要提取最新的清单代码。 您可以使用 `audius-cli`执行此操作

```text
audius-cli 升级
```

通过运行验证服务是否健康，

```text
audius-cli 健康检查创建者节点
```

**使用 kubectl 的旧升级流程：** 要使用 `kubectl`升级您的服务，您需要提取最新的 `k8s-manifests` 代码。 为此，请运行以下命令，

```text
git stash
git pull
git stash 应用
```

确保您的配置存在于 `audio/creator-node/creator-node-cm.yaml`中，然后执行以下操作，

```text
k 应用 -f audius/creator-node/creator-node-cm.yaml
k 应用 -f audius/creator-node/creator-node-deploy-ipfs.yaml
k 应用 -f audius/creator-node/creator-节点部署后端.yaml
```

您可以使用 `\health_check` 端点验证您的升级。

### 发现提供者

Audius Discovery Provider 为以太坊区块链上的 Audius 合约内容编制索引，以供客户查询。

索引内容包括用户、曲目和专辑/播放列表信息以及社交特征。 存储数据以供快速访问，定期更新，并通过 RESTful API 提供给客户端。

#### 跑

必须设置一些变量，您可以使用以下命令执行此操作：

```text
audius-cli set-config discovery-provider 后端
密钥：audius_delegate_owner_wallet
值： <delegate_owner_wallet>

audius-cli set-config discovery-provider 后端
密钥：audius_delegate_private_key
值： <delegate_private_key>
```

如果您使用的是外部托管 Postgres 数据库\（版本 11.1+\），请将 db url 替换为，

```text
audius-cli set-config discovery-provider 后端
键：audius_db_url
值： <audius_db_url>

audius-cli set-config discovery-provider 后端
键：audius_db_url_read_replica
值： <audius_db_url_read_replica>
```

**注意：** 如果没有只读副本，请输入两个环境变量的主数据库 URL。

以下仅在使用托管 posgres 数据库时：

您还必须替换 `/discovery-provider/discovery-provider-db-seed-job.yaml` 中的数据库种子作业。 提供了示例。 在托管的 postgres 数据库中，将 `temp_file_limit` 标志设置为 `2147483647` 并在目标数据库上运行以下 SQL 命令。

```text
创建扩展 pg_trgm;
```

确保您的服务公开所有必需的环境变量。 有关环境变量和描述的完整列表，请参见此处的 wiki [](https://github.com/AudiusProject/audius-protocol/wiki/Discovery-Node:-Configuration-Details#required-environment-variables)。

#### 发射

```text
audius-cli 启动 discovery-provider --seed-job --configure-ipfs
```

通过运行验证服务是否健康，

```text
audius-cli 健康检查发现提供程序
```

#### 升级

如果您没有 `audius-cli`，有关如何安装的说明可在 [上面的部分](https://github.com/AudiusProject/audius-k8s-manifests#2-audius-cli-setup)中找到。

要使用 `audio-cli`升级您的服务，您需要提取最新的清单代码。 您可以使用 `audius-cli`执行此操作

```text
audius-cli 升级
```

通过运行验证服务是否健康，

```text
audius-cli 健康检查发现提供程序
```

**使用 kubectl 的旧升级流程：** 要使用 kubectl 升级您的服务，您需要提取最新的 `k8s-manifests` 代码。 为此，请运行以下命令，

```text
git stash
git pull
git stash 应用
```

确保您的配置存在于 `audius/discovery-provider/discovery-provider-cm.yaml`中，然后执行以下操作，

```text
k 应用-f audius/discovery-provider/discovery-provider-cm.yaml
k 应用-f audius/discovery-provider/discovery-provider-deploy.yaml
```

您可以使用 `\health_check` 端点验证您的升级。

#### 下一个

一旦你完成了 Discovery Provider 的设置，继续 [Logger](https://github.com/AudiusProject/audius-k8s-manifests#logger) 部分。


## 5. 记录器

为了协助任何调试。 我们提供您可以发布到的日志记录服务。

**跑**

首先，从您在 Audius 的联系人获取服务提供商机密。 这包含日志功能所需的令牌\(s\)。 并应用秘密

```text
kubectl 应用 -f <secret_from_audius>.yaml
```

接下来，使用您的姓名更新 fluentd 守护程序集中的记录器标签，以便我们可以在这里唯一地识别您和您的服务： [https://github.com/AudiusProject/audius-k8s-manifests/blob/master/audius/logger/ logger.yaml\#L207](https://github.com/AudiusProject/audius-k8s-manifests/blob/master/audius/logger/logger.yaml#L207)。 这允许我们的日志服务按服务提供者以及服务提供者和服务过滤日志。 `SP_NAME` 指的是您的组织名称， `SP_NAME_TYPE_ID` 指的是您的组织名称加上您正在运行的服务的类型，再加上一个用于区分同一类型的多个服务的 id。

例如，如果您的名字是 `Awesome Operator` 并且您正在运行内容节点，请将标签设置为：

```text
...
env：
- 名称：LOGGLY_TAGS
  值：外部，Awesome-Operator，Awesome-Operator-Content-1
```

如果您有多个内容节点或发现节点，则使用最后一个标记 \(`Awesome-Operator-Content-1`\) 末尾的数字，以便您可以唯一地标识每个服务。 例如，如果您运行两个内容节点，则在第二个内容节点上，您可以将标签设置为：

```text
...
env：
- 名称：LOGGLY_TAGS
  值：外部，Awesome-Operator，Awesome-Operator-Content-2
```

更新标签后，使用以下命令应用 fluentd 记录器堆栈：

```text
kubectl apply -f audius/logger/logger.yaml
```

**升级**

有两个命令可以升级日志堆栈。

```text
kubectl apply -f audius/logger/logger.yaml

kubectl -n kube-system 删除 pod $(kubectl -n kube-system get pods | grep "fluentd" | awk '{print $1}')
```


## 6. 安全 & 基础设施配置

1.\) 为了让客户端与您的服务通信，您需要公开两个端口：Web 服务器端口和 IPFS 群端口。 为了找到这些端口，运行 `kubectl get svc`。 Web 服务器端口映射到创建者节点的 4000 和发现提供者的 5000。 IPFS swarm 端口映射到 4001

```text
kubectl get svc

NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
discovery-provider-backend-svc NodePort 10.98.78.108    <none>        5000:31744/TCP 18h
discovery-provider-cache-svc ClusterIP 10.101.94.71    <none>        6379 /TCP 18h
discovery-provider-db-svc ClusterIP 10.110.50.147   <none>        5432/TCP 18h
discovery-provider-ipfs-svc NodePort 10.106.89.157   <none>        4001:30480/TCP,5001:30499/TCP,8080:30508/TCP 18h
kubernetes ClusterIP 10.96.0.1       <none>        443/TCP 7d5h

本例中web服务器端口为31744，IPFS端口为30480。
```

2.\) 一旦你暴露了这些端口，你应该能够通过你的实例或负载均衡器的公共 IP 公开地点击健康检查。 下一步是注册 DNS 记录。 建议您将 Web 服务器端口映射到 DNS，并为您正在运行的每个服务设置一个域或子域。 还要确保在没有 HTTPS 的情况下不允许流量。 所有非 HTTPS 流量都应重定向到 HTTPS 端口。

3.\) 现在我们将配置 IPFS。

IPFS 在识别 kubernetes 中的公共主机和端口时遇到了一些问题，这可以用 `audius-cli`修复

```text
audius-cli 配置-ipfs <hostname>
```

示例： `audius-cli 配置-ipfs 108.174.10.10`

4.\) 设置负载均衡器超时。 Creator 节点请求的最短超时时间为 1 小时 \(3600 秒\)，发现提供程序请求的最短超时时间为 1 分钟 \(60 秒\)。 跟踪上传，尤其是较大文件的上传可能需要几分钟才能完成。

5.\) 除了将您的安全组配置为仅限制对 Web 服务器和 IPFS 群端口 \(4001\) 的访问之外，建议您的服务器或负载均衡器受到 DoS 攻击的保护。 Cloudfront 和 Cloudflare 等服务提供免费或低成本的服务来做到这一点。 也可以使用 iptables 来配置保护，如下所示 [](https://javapipe.com/blog/iptables-ddos-protection/)。 请确保代理不会覆盖第 4 步中的超时。

## 7. 注册前检查

在向仪表板注册服务之前，我们需要确保服务配置正确。 请按照以下检查您正在配置的服务类型。 未能验证所有这些工作是否正常可能会导致用户操作失败并可能导致削减操作。

`sp-actions/` 文件夹包含测试服务运行状况的脚本。 在下面为您的服务类型运行相应的检查，以验证您的服务是否已正确设置。 确保运行 `npm install` in `sp-actions/` 以安装所有依赖项。

有关 `sp-actions/` 的更多信息，请参阅 [sp-actions/ 文件夹中的自述文件](https://github.com/AudiusProject/audius-k8s-manifests/tree/master/sp-utilities)

**创建者节点**

```text
➜ pwd
/Audius/audius-k8s-manifests/sp-utilities/creator-node

# 输入 creatorNodeEndpoint 和 delegatePrivateKey 将这些值作为环境变量发送到脚本，而无需导出到终端
➜ creatorNodeEndpoint=https://creatornode .domain.co delegatePrivateKey=5e468bc1b395e2eb8f3c90ef897406087b0599d139f6ca0060ba85dcc0dce8dc node healthChecks.js
现在开始测试。 这可能需要几分钟的时间。
✓ 健康检查通过
✓ 数据库健康检查通过
✓ 心跳持续时间健康检查通过
！ 非心跳持续时间运行状况检查在 180 秒时超时，并显示错误消息：“请求失败，状态代码 504”。 这不是问题。
所有检查都通过了！
```

如果您看到消息“错误运行脚本”，此脚本未成功完成。 如果您看到“所有检查均已通过！”该脚本成功完成。

**发现提供者**

```text
➜ discoveryProviderEndpoint=https://discoveryprovider.domain.co node healthChecks.js
✓ 健康检查通过
所有检查通过！
```

如果您看到消息“错误运行脚本”，此脚本未成功完成。 如果您看到“所有检查均已通过！”该脚本成功完成。

## 8. 在仪表板上注册服务

到目前为止，您已经完成了所有步骤，您就可以注册了！

您可以通过 [https://dashboard.audius.org](https://dashboard.audius.org/)上的仪表板进行注册

## 9. 启动轮次和处理索赔的脚本\（可选\）

如果您想在启动新一轮时自动运行索赔操作，为了方便您在 sp-utilities/claim 文件夹中包含一个脚本。 sp-utilities 自述文件中提供了进一步的说明。
