- - -
sidebar_label: 개요 sidebar_position: 1
- - -

# 개요

Audius는 탈중앙화되고 커뮤니티가 소유하고 아티스트가 제어하는 음악 공유 프로토콜입니다. Audius는 기존 스트리밍 플랫폼에 대한 블록체인 기반 대안을 제공하여 아티스트가 작품을 게시하고 수익을 창출하고 팬에게 직접 배포할 수 있도록 지원합니다.

프로젝트의 사명은 모든 사람에게 모든 오디오를 공유하고, 수익을 창출하고, 들을 수 있는 자유를 제공하는 것입니다.

Audius Protocol [저장소](https://github.com/AudiusProject/audius-protocol) 은 스마트 계약, 서비스 및 기타 지원 라이브러리를 포함하여 프로토콜을 만들고 지원하는 모든 부분이 있는 단일 저장소입니다.

서비스 운영에 관심이 있다면 [`노드 실행`](../token/running-a-node/introduction.md) 섹션을 참조하세요. Audius 프로토콜에 기여하는 데 관심이 있다면 아래 코드를 살펴보세요!

![](/img/architecture.png)

Audius는 아티스트(컨텐츠 제작자), 팬(컨텐츠 소비자) 및 서비스 제공자의 세 가지 사용자 인구 통계로 구성됩니다. 일부 사용자는 세 가지 인구 통계 모두에 해당하는지 확인합니다!

* **아티스트** 은 트랙을 업로드하고, 앨범을 만들고, 다음과 같은 콘텐츠를 공유합니다.
* **팬** 은 트랙을 스트리밍하고, 재생 목록을 만들고, & 명의 팔로우 아티스트를 구독하고, 팔로우하는 사람과 콘텐츠를 다시 공유합니다.
* **서비스 제공업체** 은 앱 트래픽을 제공하고 노래를 스트리밍하며 네트워크 보안을 지원합니다.

서비스 제공자는 $AUDIO 개의 토큰을 스테이킹하고 서비스를 등록하여 다음 서비스 중 하나 이상을 제공할 수 있습니다.

* 디스커버리 노드 \(SSL 지원으로 엔드포인트 호스팅 및 스테이크에 엔드포인트 등록\)
* 콘텐츠 노드 \(SSL 지원으로 엔드포인트를 호스팅하고 스테이크에 엔드포인트 등록\)

위의 다이어그램에서 작성자는 콘텐츠 노드를 직접 실행하거나 네트워크에 등록된 콘텐츠 노드 중 하나를 사용할 수 있습니다.

Audius 아키텍처에 대한 자세한 내용은 [Audius 프로토콜 백서](whitepaper.md)을 참조하십시오.

## 오디우스 서비스

| 서비스                                                                                           | 설명                                                                     |
|:--------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------- |
| [`콘텐츠 노드`](https://github.com/AudiusProject/audius-protocol/tree/master/creator-node)         | 사용자 메타데이터, 이미지 및 오디오 콘텐츠를 포함하여 IPFS에서 사용자 콘텐츠의 가용성을 유지합니다.             |
| [`디스커버리 노드`](https://github.com/AudiusProject/audius-protocol/tree/master/discovery-provider) | 클라이언트가 API를 통해 쿼리할 수 있도록 이더리움 블록체인에서 Audius 계약의 내용을 인덱싱하고 저장합니다.       |
| [`신원 서비스`](https://github.com/AudiusProject/audius-protocol/tree/master/identity-service)     | 암호화된 인증 암호문을 저장하고 Twitter OAuth를 수행하며 사용자를 대신하여 트랜잭션을 중계합니다(가스 요금 지불). |

## Audius 스마트 계약 & Libs

| 리브                                                                                     | 설명                                                                                                                         |
|:-------------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------- |
| [`도서관`](https://github.com/AudiusProject/audius-protocol/tree/master/libs)             | 분산 웹 및 Audius 서비스에 대한 쉬운 인터페이스: Identity Service, Discovery Node \(discovery provider\), Content Node \(creator node\) |
| [`계약`](https://github.com/AudiusProject/audius-protocol/tree/master/contracts)         | Audius 스트리밍 프로토콜을 위해 개발 중인 스마트 계약                                                                                          |
| [`eth-계약`](https://github.com/AudiusProject/audius-protocol/tree/master/eth-contracts) | Audius 스트리밍 프로토콜을 위해 개발 중인 이더리움 스마트 계약                                                                                     |

## 서비스 제공업체 빠른 시작

서비스 제공업체인 경우 Audius에서 서비스를 실행하기 위한 빠른 시작 가이드를 찾을 수 있습니다. [여기](../token/running-a-node/introduction.md)
