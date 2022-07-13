---
sidebar_label: 설정 지침
sidebar_position: 삼
---

# 설정 지침

이 가이드에서는 단일 노드 Kubernetes 클러스터에서 Audius 서비스를 실행하는 방법을 설명합니다. 다중 노드 클러스터에 대한 참고 사항은 관련하여 제공됩니다.

[Audius 디스코드 서버](https://discord.com/invite/audius)의 노드 운영자 디스코드 채널에 가입하십시오.

## 0. audius-k8s-manifests 저장소 복제
[**https://github.com/AudiusProject/audius-k8s-manifests**](https://github.com/AudiusProject/audius-k8s-manifests)\*\*\*\*

```text
git clone git@github.com:AudiusProject/audius-k8s-manifests.git
```

## 1. 클러스터 설정

최소 8개의 vCPU와 16GB의 RAM으로 Ubuntu 16.04 LTS 이상을 실행하는 시스템을 초기화합니다.

"원 클릭" kubeadm 노드 설정을 수행하기 위한 편의 스크립트도 포함되어 있습니다. 당신은 실행할 수 있습니다

```text
네 | sh 설정.sh
```

그러나 노드 설정이 성공하지 못하고 kubectl을 사용할 수 없는 경우 [여기](https://github.com/AudiusProject/audius-k8s-manifests/blob/master/cluster-setup.md)에서 직접 설치 단계를 수행하는 것이 좋습니다.

## 2. 오디우스 CLI 설정

처음 설치하는 경우 이 섹션을 건너뛸 수 있습니다.

다음을 사용하여 `개의 audius-cli` 을 설치할 수 있습니다.

```text
sh install_audius_cli.sh
```

그런 다음 다음을 실행하여 `audius-cli` 을 통해 사용 가능한 모든 명령을 볼 수 있습니다.

```text
audius-cli -h
```

## 삼. 저장

영구 스토리지를 위한 공유 호스트 디렉토리 프로비저닝

```text
mkdir -p /var/k8s
```

sudo가 필요한 경우 소유권을 다음으로 변경하십시오.

```text
sudo chown <user>:<group> /var/k8s
```

일반적으로 다음과 같습니다.

```text
sudo chown -R 우분투: 우분투 /var/k8s
```

**참고:** 스토리지는 `pv, pvc` 개체를 삭제한 후에도 호스트에 유지됩니다.

모든 데이터를 핵 제거하고 정리를 시작하려면

```text
rm -rf /var/k8s/*
```

## 4. 서비스 설정

`audius-cli`를 통한 [Creator Node](https://github.com/AudiusProject/audius-k8s-manifests#creator-node-1) 및 [Discovery Provider](https://github.com/AudiusProject/audius-k8s-manifests#discovery-provider-1) 배포에 대한 가이드는 아래를 참조하십시오. 서비스 설정을 마친 후 로거 섹션을 계속 진행하십시오.

**참고:** "Creator Node" 및 "Discovery Provider"는 최근에 각각 "Content Node" 및 "Discovery Node"로 이름이 변경되었습니다. 그러나 코드와 이 README 내의 일관성을 위해 "Creator Node" 및 "Discovery Node"라는 용어를 계속 사용할 것입니다.

### 생성자 노드

Audius Creator Node는 IPFS에서 제작자 콘텐츠의 가용성을 유지합니다.

저장된 정보에는 Audius 사용자 메타데이터, 이미지 및 오디오 콘텐츠가 포함됩니다. 컨텐츠는 로컬 디렉토리에 의해 지원됩니다.

**참고:** 앞으로는 최종 사용자 클라이언트의 프록시 재암호화 요청을 처리하고 다른 스토리지 백엔드를 지원하도록 서비스가 확장될 것입니다.

#### 운영

`audius-cli` 을 사용하여 필수 변수를 업데이트하십시오. 변수 및 설명의 전체 목록은 wiki [here](https://github.com/AudiusProject/audius-protocol/wiki/Content-Node:-Configuration-Details#required-environment-variables)에서 찾을 수 있습니다.

일부 변수는 설정해야 합니다. 다음 명령으로 이를 수행할 수 있습니다.

```text
audius-cli set-config Creator-node 백엔드
키 : spOwnerWallet
값 : <address of wallet that contains audius tokens>

audius-cli set-config Creator-node 백엔드
키 : delegateOwnerWallet
값 : <address of wallet that contains no tokens but that is registered on chain>

audius-cli set-config Creator-node 백엔드
키 : delegatePrivateKey
값 : <private key>

audius-cli set-config Creator-node 백엔드
키 : CreatorNodeEndpoint
값 : <your service url>
```

**참고:** 아직 서비스를 등록하지 않은 경우 등록하려는 url을 입력하십시오. `creatorNodeEndpoint`.

그런 다음 `audius-cli`을 통해 실행 명령을 실행합니다.

```text
audius-cli 시작 생성자 노드 --configure-ipfs
```

다음을 실행하여 서비스가 정상인지 확인합니다.

```text
audius-cli 상태 확인 작성자 노드
```

#### 업그레이드

`audius-cli`가 없는 경우 설치 방법에 대한 지침은 [위의 섹션](https://github.com/AudiusProject/audius-k8s-manifests#2-audius-cli-setup)에서 확인할 수 있습니다.

`audius-cli`을 사용하여 서비스를 업그레이드하려면 최신 매니페스트 코드를 가져와야 합니다. `audius-cli`로 이 작업을 수행할 수 있습니다.

```text
audius-cli 업그레이드
```

다음을 실행하여 서비스가 정상인지 확인합니다.

```text
audius-cli 상태 확인 작성자 노드
```

**kubectl을 사용한 이전 업그레이드 흐름:** `kubectl`을 사용하여 서비스를 업그레이드하려면 최신 `k8s-manifests` 코드를 가져와야 합니다. 이렇게 하려면 다음을 실행합니다.

```text
git stash
git pull
git stash 적용
```

구성이 `audius/creator-node/creator-node-cm.yaml`에 있는지 확인하고 다음을 수행합니다.

```text
k 적용 -f audius/creator-node/creator-node-cm.yaml
k 적용 -f audius/creator-node/creator-node-deploy-ipfs.yaml
k 적용 -f audius/creator-node/creator- node-deploy-backend.yaml
```

`\health_check` 엔드포인트로 업그레이드를 확인할 수 있습니다.

### 디스커버리 제공자

Audius Discovery Provider는 클라이언트가 쿼리할 수 있도록 이더리움 블록체인에서 Audius 계약의 내용을 인덱싱합니다.

인덱싱된 콘텐츠에는 소셜 기능과 함께 사용자, 트랙 및 앨범/재생 목록 정보가 포함됩니다. 데이터는 빠른 액세스를 위해 저장되고 정기적으로 업데이트되며 RESTful API를 통해 클라이언트가 사용할 수 있습니다.

#### 운영

일부 변수는 설정해야 합니다. 다음 명령으로 이를 수행할 수 있습니다.

```text
audius-cli set-config discovery-provider backend
키: audius_delegate_owner_wallet
값: <delegate_owner_wallet>

audius-cli set-config discovery-provider backend
키: audius_delegate_private_key
값: <delegate_private_key>
```

외부 관리 Postgres 데이터베이스 \(버전 11.1+\)를 사용하는 경우 db url을 다음으로 바꾸십시오.

```text
audius-cli set-config discovery-provider backend
키 : audius_db_url
값 : <audius_db_url>

audius-cli set-config discovery-provider 백엔드
키 : audius_db_url_read_replica
값 : <audius_db_url_read_replica>
```

**참고:** 읽기 전용 복제본이 없는 경우 두 환경 변수에 대한 기본 db URL을 입력합니다.

아래는 관리형 posgres 데이터베이스를 사용하는 경우에만 해당됩니다.

`audius/discovery-provider/discovery-provider-db-seed-job.yaml` 에서도 db seed 작업을 교체해야 합니다. 예제가 제공됩니다. 관리되는 postgres 데이터베이스에서 `temp_file_limit` 플래그를 `2147483647` 으로 설정하고 대상 db에서 다음 SQL 명령을 실행합니다.

```text
확장 생성 pg_trgm;
```

서비스가 모든 필수 환경 변수를 노출하는지 확인하십시오. env 변수 및 설명의 전체 목록은 wiki [here](https://github.com/AudiusProject/audius-protocol/wiki/Discovery-Node:-Configuration-Details#required-environment-variables) 을 참조하십시오.

#### 시작하다

```text
audius-cli 시작 discovery-provider --seed-job --configure-ipfs
```

다음을 실행하여 서비스가 정상인지 확인합니다.

```text
audius-cli 상태 확인 검색 공급자
```

#### 업그레이드

`audius-cli`가 없는 경우 설치 방법에 대한 지침은 [위의 섹션](https://github.com/AudiusProject/audius-k8s-manifests#2-audius-cli-setup)에서 확인할 수 있습니다.

`audius-cli`을 사용하여 서비스를 업그레이드하려면 최신 매니페스트 코드를 가져와야 합니다. `audius-cli`로 이 작업을 수행할 수 있습니다.

```text
audius-cli 업그레이드
```

다음을 실행하여 서비스가 정상인지 확인합니다.

```text
audius-cli 상태 확인 검색 공급자
```

**kubectl을 사용한 이전 업그레이드 흐름:** kubectl을 사용하여 서비스를 업그레이드하려면 최신 `k8s-manifests` 코드를 가져와야 합니다. 이렇게 하려면 다음을 실행합니다.

```text
git stash
git pull
git stash 적용
```

구성이 `audius/discovery-provider/discovery-provider-cm.yaml`에 있는지 확인하고 다음을 수행합니다.

```text
k 적용 -f audius/discovery-provider/discovery-provider-cm.yaml
k 적용 -f audius/discovery-provider/discovery-provider-deploy.yaml
```

`\health_check` 엔드포인트로 업그레이드를 확인할 수 있습니다.

#### 다음

검색 공급자 설정을 완료했으면 [로거](https://github.com/AudiusProject/audius-k8s-manifests#logger) 섹션으로 계속 진행합니다.


## 5. 나무꾼

디버깅을 지원하기 위해. 게시할 수 있는 로깅 서비스를 제공합니다.

**운영**

먼저 Audius 담당자로부터 서비스 제공자 비밀을 얻습니다. 여기에는 로깅이 작동하는 데 필요한 토큰이 포함됩니다. 그리고 다음과 같이 비밀을 적용하십시오.

```text
kubectl 적용 -f <secret_from_audius>.yaml
```

다음으로, fluentd 데몬셋의 로거 태그를 귀하의 이름으로 업데이트하면 귀하와 귀하의 서비스를 여기에서 고유하게 식별할 수 있습니다. [https://github.com/AudiusProject/audius-k8s-manifests/blob/master/audius/logger/ logger.yaml\#L207](https://github.com/AudiusProject/audius-k8s-manifests/blob/master/audius/logger/logger.yaml#L207). 이를 통해 로깅 서비스는 서비스 제공자, 서비스 제공자 및 서비스별로 로그를 필터링할 수 있습니다. `SP_NAME` 은 조직의 이름을 나타내고 `SP_NAME_TYPE_ID` 은 조직의 이름과 실행 중인 서비스 유형, 동일한 유형의 여러 서비스를 구분하기 위한 ID를 나타냅니다.

예를 들어, 이름이 `Awesome Operator` 이고 콘텐츠 노드를 실행하는 경우 태그를 다음과 같이 설정합니다.

```text
...
환경:
- 이름: LOGGLY_TAGS
  값: 외부,Awesome-Operator,Awesome-Operator-Content-1
```

마지막 태그 \(`Awesome-Operator-Content-1`\) 끝에 있는 숫자는 콘텐츠 노드 또는 검색 노드가 두 개 이상인 경우 사용하므로 각 서비스를 고유하게 식별할 수 있습니다. 예를 들어 두 번째 콘텐츠 노드에서 두 개의 콘텐츠 노드를 실행하는 경우 태그를 다음과 같이 설정할 수 있습니다.

```text
...
환경:
- 이름: LOGGLY_TAGS
  값: 외부,Awesome-Operator,Awesome-Operator-Content-2
```

태그를 업데이트했으면 다음 명령을 사용하여 fluentd 로거 스택을 적용합니다.

```text
kubectl 적용 -f audius/logger/logger.yaml
```

**업그레이드**

로깅 스택을 업그레이드하는 두 가지 명령이 있습니다.

```text
kubectl apply -f audius/logger/logger.yaml

kubectl -n kube-system 삭제 포드 $(kubectl -n kube-system get 포드 | grep "fluentd" | awk '{print $1}')
```


## 6. 보안 & 인프라 구성

1.\) 클라이언트가 서비스와 통신하려면 웹 서버 포트와 IPFS 스웜 포트라는 두 개의 포트를 노출해야 합니다. 이러한 포트를 찾으려면 `kubectl get svc`을 실행하십시오. 웹 서버 포트는 작성자 노드의 경우 4000, 검색 공급자의 경우 5000으로 매핑됩니다. IPFS 스웜 포트는 4001에 매핑됩니다.

```text
kubectl get svc

이름 유형 CLUSTER-IP 외부 IP 포트(S) AGE
discovery-provider-backend-svc NodePort 10.98.78.108    <none>        5000:31744/TCP 18h
discovery-provider-cache-    <none>        .494.30111 .49 /TCP 18h
discovery-provider-db-svc ClusterIP 10.110.50.147   <none>        5432/TCP 18h
discovery-provider-ipfs-svc NodePort 10.106.89.157   <none>        4001:30480/TCP,54809 18h
kubernetes ClusterIP 10.96.0.1       <none>        443/TCP 7d5h

이 경우 웹 서버 포트는 31744이고 IPFS 포트는 30480입니다.
```

2.\) 이러한 포트를 노출하면 인스턴스 또는 로드 밸런서의 공용 IP를 통해 공개적으로 상태 확인에 도달할 수 있어야 합니다. 다음 단계는 DNS 레코드를 등록하는 것입니다. 웹 서버 포트를 DNS에 매핑하고 실행 중인 각 서비스에 대한 도메인 또는 하위 도메인을 갖는 것이 좋습니다. 또한 HTTPS 없이 트래픽이 허용되지 않는지 확인하십시오. 모든 비 HTTPS 트래픽은 HTTPS 포트로 리디렉션되어야 합니다.

3.\) 이제 IPFS를 구성합니다.

IPFS는 kubernetes 내부의 공용 호스트와 포트를 식별하는 데 문제가 있습니다. 이는 `audius-cli`로 수정할 수 있습니다.

```text
audius-cli 구성-ipfs <hostname>
```

예: `audius-cli configure-ipfs 108.174.10.10`

4.\) 로드 밸런서 시간 초과를 설정합니다. 최소 시간 초과는 작성자 노드 요청의 경우 1시간(3600초)이고 검색 공급자 요청의 경우 1분(60초)입니다. 특히 대용량 파일의 업로드 추적은 완료하는 데 몇 분 정도 걸릴 수 있습니다.

5.\) 웹 서버 및 IPFS 스웜 포트 \(4001\)에 대한 액세스만 제한하도록 보안 그룹을 구성하는 것 외에도 서버 또는 로드 밸런서를 DoS 공격으로부터 보호하는 것이 좋습니다. Cloudfront 및 Cloudflare와 같은 서비스는 이를 위해 무료 또는 저렴한 서비스를 제공합니다. 여기에 [https://javapipe.com/blog/iptables-ddos-protection/](https://javapipe.com/blog/iptables-ddos-protection/)에 설명된 대로 iptables를 사용하여 보호를 구성하는 것도 가능합니다. 프록시가 4단계의 시간 초과를 무시하지 않는지 확인하십시오.

## 7. 사전 등록 확인

대시보드에 서비스를 등록하기 전에 서비스가 올바르게 구성되었는지 확인해야 합니다. 구성 중인 서비스 유형에 대해 아래 확인 사항을 따르세요. 이러한 모든 작업이 제대로 작동하는지 확인하지 못하면 사용자 작업이 실패하고 작업이 중단될 수 있습니다.

`sp-actions/` 폴더에는 서비스 상태를 테스트하는 스크립트가 포함되어 있습니다. 아래에서 서비스 유형에 해당하는 검사를 실행하여 서비스가 올바르게 설정되었는지 확인하십시오. 모든 종속성을 설치하려면 `npm install` in `sp-actions/` 를 실행해야 합니다.

`sp-actions/` 에 대한 자세한 내용은 [sp-actions/ 폴더](https://github.com/AudiusProject/audius-k8s-manifests/tree/master/sp-utilities)의 README를 참조하십시오.

**생성자 노드**

```text
➜ pwd
/Audius/audius-k8s-manifests/sp-utilities/creator-node

# CreatorNodeEndpoint 및 delegatePrivateKey를 입력하면 터미널
로 내보낼 필요 없이 해당 값을 env vars로 스크립트에 보냅니다. ➜ CreatorNodeEndpoint=https://creatornode .domain.co delegatePrivateKey=5e468bc1b395e2eb8f3c90ef897406087b0599d139f6ca0060ba85dcc0dce8dc 노드 healthChecks.js
지금 테스트 시작. 이 작업은 몇 분 정도 걸릴 수 있습니다.
✓ 상태 점검 통과
✓ DB 상태 점검 통과
✓ 하트비트 지속 시간 상태 점검 통과
! 하트비트가 아닌 기간 상태 확인이 180초에 시간 초과되었으며 오류 메시지: "요청이 상태 코드 504로 실패했습니다." 이것은 문제가 아닙니다.
모든 검사를 통과했습니다!
```

"Error running script" 메시지가 표시되면 이 스크립트가 성공적으로 완료되지 않은 것입니다. "모든 검사를 통과했습니다!"가 표시되는 경우 이 스크립트는 성공적으로 완료되었습니다.

**디스커버리 제공자**

```text
➜ discoveryProviderEndpoint=https://discoveryprovider.domain.co node healthChecks.js
✓ 상태 확인 통과
모든 확인 통과!
```

"Error running script" 메시지가 표시되면 이 스크립트가 성공적으로 완료되지 않은 것입니다. "모든 검사를 통과했습니다!"가 표시되는 경우 이 스크립트는 성공적으로 완료되었습니다.

## 8. 대시보드에 서비스 등록

지금까지 모든 단계를 완료했으므로 등록할 준비가 된 것입니다!

[https://dashboard.audius.org](https://dashboard.audius.org/)의 대시보드를 통해 등록할 수 있습니다.

## 9. 라운드 시작 및 청구 처리 스크립트 \(선택 사항\)

새 라운드가 시작될 때마다 청구 작업을 자동으로 실행하려면 편의를 위해 sp-utilities/claim 폴더에 스크립트가 포함되어 있습니다. 추가 지침은 sp-utilities README에서 제공됩니다.
