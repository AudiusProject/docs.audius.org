

<h1 id="api-users">사용자</h1>

## 연결된 지갑으로 사용자 ID 가져오기

<a id="opIdGet the User's id by associated wallet"></a>

> 코드 샘플

```shell
컬 AUDIUS_API_HOST/v1/users/associated_wallets?id=string 


```

```http
GET AUDIUS_API_HOST/v1/users/associated_wallets?id=문자열 HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/users/associated_wallets?id=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    콘솔 .log(본문);
});

```

```ruby
'rest-client' 필요
'json' 필요

헤더 = {
  '수락' => 'application/json'
}

결과 = RestClient.get 'AUDIUS_API_HOST/v1/users/associated_wallets',
  매개변수: {
  ' id' => 'string'
}, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/associated_wallets', params={
  'id': 'string'
}, headers = headers)

print(r.json( ))

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/associated_wallets', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/users/associated_wallets?id=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/associated_wallets", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/associated_wallets`

<h3 id="get-the-user's-id-by-associated-wallet-parameters">쿼리 매개변수</h3>

| 이름 | 유형 | 필수의 | 설명          |
| -- | -- | --- | ----------- |
| ID | 끈  | 진실  | 인코딩된 사용자 ID |

> 예시 응답

> 200 응답

```json
{
  "데이터": {
    "지갑": [
      "문자열"
    ],
    "솔_지갑": [
      "문자열"
    ]
  }
}
```

<h3 id="get-the-user's-id-by-associated-wallet-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                                                  |
| --- | -------------------------------------------------------------- | ------ | ------------------------------------------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 성공     | [Associated_wallets_response](#schemaassociated_wallets_response) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                                                  |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                                                  |

## 사용자의 관련 지갑 가져오기

<a id="opIdGet the User's associated wallets"></a>

> 코드 샘플

```shell
컬 AUDIUS_API_HOST/v1/users/id?associated_wallet=string 


```

```http
GET AUDIUS_API_HOST/v1/users/id?associated_wallet=string HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/users/id?associated_wallet=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    콘솔 .log(본문);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/id',
  매개변수: {
  ' Associated_wallet' => '문자열'
}, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/id', params={
  'associated_wallet': 'string'
}, headers = headers)

print(r.json( ))

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/id', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/users/id?associated_wallet=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/id", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /사용자/아이디`

<h3 id="get-the-user's-associated-wallets-parameters">쿼리 매개변수</h3>

| 이름     | 유형 | 필수의 | 설명    |
| ------ | -- | --- | ----- |
| 연관된_지갑 | 끈  | 진실  | 지갑 주소 |

> 예시 응답

> 200 응답

```json
{
  "데이터": {
    "사용자 ID": "문자열"
  }
}
```

<h3 id="get-the-user's-associated-wallets-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                                                          |
| --- | -------------------------------------------------------------- | ------ | --------------------------------------------------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 성공     | [user_associated_wallet_response](#schemauser_associated_wallet_response) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                                                          |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                                                          |

## 사용자 검색

<a id="opIdSearch Users"></a>

> 코드 샘플

```shell
curl AUDIUS_API_HOST/v1/users/search?query=브라우니 


```

```http
GET AUDIUS_API_HOST/v1/users/search?query=브라우니 HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/users/search?query=Brownies',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    콘솔 .log(본문);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/search',
  매개변수: {
  ' query' => 'string'
}, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/search', params={
  'query': 'Brownies'
}, headers = headers)

print(r.json( ))

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/users/search?query=Brownies");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/search", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /사용자/검색`

*사용자 검색*

<h3 id="search-users-parameters">쿼리 매개변수</h3>

| 이름           | 유형 | 필수의 | 설명  |
| ------------ | -- | --- | --- |
| 질문           | 끈  | 진실  | 검색어 |
| only_다운로드 가능 | 끈  | 거짓  | 없음  |

> 예시 응답

```json
{
  "data": [
    {
      "album_count": 0,
      "bio": "Makin' 움직임 & 로 긴장을 풀 수 있습니다. linktr.ee/browniesandlemonade",
      "
        ": {
        "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPomnode6e/640x.jpg",0x2 audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
      },
      "
      ": 19,
      "follower_count": ""follower_count": "
      "
      ":" ": true,
      "location": "Los Angeles, CA",
      "name": "Brownies & Lemonade",
      "playlist_count": 2,
      "profile_picture": {
        "150x150": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
        "1000x1000": "https:// Creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
      },
      "repost_count": 5,
      "
  ":

    }] 222
```

<h3 id="search-users-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                |
| --- | -------------------------------------------------------------- | ------ | --------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 없음     | [user_search](#schemauser_search) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                |

## 사용자 가져오기

<a id="opIdGet User"></a>

> 코드 샘플

```shell
컬 AUDIUS_API_HOST/v1/users/nlGNe 


```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body ),
});

```

```ruby
'rest-client' 필요
'json' 필요

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe',
  매개변수: {
  }, 헤더 : 헤더

JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe', headers = headers)

print(r.json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/users/nlGNe");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/nlGNe", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /사용자/{user_id}`

*단일 사용자 가져오기*

<h3 id="get-user-parameters">쿼리 매개변수</h3>

| 이름      | 유형 | 필수의 | 설명     |
| ------- | -- | --- | ------ |
| user_id | 끈  | 진실  | 사용자 ID |

> 예시 응답

```json
{
  "data": {
    "album_count": 0,
    "bio": "발가락을 유지하면서 & 동작합니다. linktr.ee/browniesandlemonade",
    "
      ": {
      "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPomnode6e/640x.jpg",0x2 audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
    },
    "
    ": 19,
    "follower_count": ""follower_count": "
    "
    ":" ": true,
    "location": "Los Angeles, CA",
    "name": "Brownies & Lemonade",
    "playlist_count": 2,
    "profile_picture": {
      "150x150": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
      "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
      "1000x1000": "https:// Creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
    },
    "repost_count": 5,
    "track_count": 4 1
  }

```

<h3 id="get-user-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                    |
| --- | -------------------------------------------------------------- | ------ | ------------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 없음     | [user_response](#schemauser_response) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                    |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                    |

## 사용자의 ID

<a id="opIdThe users's ID"></a>

> 코드 샘플

```shell
curl AUDIUS_API_HOST/v1/users/string/challenges 


```

```http
GET AUDIUS_API_HOST/v1/users/string/challenges HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/users/string/challenges',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (본문),
});

```

```ruby
'rest-client' 필요
'json' 필요

헤더 = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/string/challenges',
  매개변수: {
  }, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/string/challenges', headers = headers)

print(r.json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/string/challenges', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/users/string/challenges");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/string/challenges", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{user_id}/challenges`

<h3 id="the-users's-id-parameters">쿼리 매개변수</h3>

| 이름              | 유형 | 필수의 | 설명                        |
| --------------- | -- | --- | ------------------------- |
| show_historical | 끈  | 거짓  | 비활성화되었지만 완료된 챌린지를 표시할지 여부 |
| user_id         | 끈  | 진실  | 없음                        |

> 예시 응답

> 200 응답

```json
{
  "데이터": [
    {
      "challenge_id": "문자열",
      "user_id": "문자열",
      "지정자": "문자열",
      "is_complete": 참,
      "is_active": 참,
      "is_disbursed": true,
      "current_step_count": 0,
      "max_steps": 0,
      "challenge_type": "문자열",
      "메타데이터": {}
    }
  ]
}
```

<h3 id="the-users's-id-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                      |
| --- | -------------------------------------------------------------- | ------ | --------------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 성공     | [get_challenges](#schemaget_challenges) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                      |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                      |

## 사용자의 즐겨찾는 트랙 가져오기

<a id="opIdGet User's Favorite Tracks"></a>

> 코드 샘플

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe/즐겨찾기 


```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe/즐겨찾기 HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe/favorites',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (본문),
});

```

```ruby
'rest-client' 필요
'json' 필요

헤더 = {
  '수락' => 'application/json'
}

결과 = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe/favorites',
  매개변수: {
  }, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe/favorites', headers = headers)

print(r.json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe/favorites', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/users/nlGNe/즐겨찾기");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/nlGNe/favorites", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{user_id}/즐겨찾기`

*사용자의 즐겨찾기 트랙 가져오기*

<h3 id="get-user's-favorite-tracks-parameters">쿼리 매개변수</h3>

| 이름      | 유형 | 필수의 | 설명     |
| ------- | -- | --- | ------ |
| user_id | 끈  | 진실  | 사용자 ID |

> 예시 응답

```json
{
  "데이터": [
    {
      "favorite_item_id": "n3yVD",
      "favorite_type": "SaveType.track",
      "user_id": "nlGNe"
    },
    {
      "favorite_item_id": "nlv5l" ,
      "favorite_type": "SaveType.track",
      "user_id": "nlGNe"
    },
    {
      "favorite_item_id": "ezYKz",
      "favorite_type": "SaveType.track",
      "user_id": "nlGNe"
    }
  ]
}
```

<h3 id="get-user's-favorite-tracks-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                   |
| --- | -------------------------------------------------------------- | ------ | ------------------------------------ |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 없음     | [즐겨찾기_응답](#schemafavorites_response) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                   |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                   |

## 사용자의 재게시물 가져오기

<a id="opIdGet User's Reposts"></a>

> 코드 샘플

```shell
컬 AUDIUS_API_HOST/v1/users/string/reposts 


```

```http
GET AUDIUS_API_HOST/v1/users/string/reposts HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/users/string/reposts',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (본문),
});

```

```ruby
'rest-client' 필요
'json' 필요

헤더 = {
  'Accept' => 'application/json'
}

결과 = RestClient.get 'AUDIUS_API_HOST/v1/users/string/reposts',
  매개변수: {
  }, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/string/reposts', headers = headers)

print(r.json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/string/reposts', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/users/string/reposts");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/string/reposts", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{user_id}/reposts`

<h3 id="get-user's-reposts-parameters">쿼리 매개변수</h3>

| 이름      | 유형 | 필수의 | 설명     |
| ------- | -- | --- | ------ |
| user_id | 끈  | 진실  | 사용자 ID |
| 한계      | 끈  | 거짓  | 한계     |
| 오프셋     | 끈  | 거짓  | 오프셋    |

> 예시 응답

> 200 응답

```json
{
  "데이터": [
    {
      "타임스탬프": "문자열",
      "항목_유형": {},
      "항목": {}
    }
  ]
}
```

<h3 id="get-user's-reposts-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                      |
| --- | -------------------------------------------------------------- | ------ | ----------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 성공     | [다시 게시](#schemareposts) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                      |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                      |

## 사용자가 가장 많이 사용한 트랙 태그 가져오기

<a id="opIdGet User's Most Used Track Tags"></a>

> 코드 샘플

```shell
컬 AUDIUS_API_HOST/v1/users/string/tags?user_id=string 


```

```http
GET AUDIUS_API_HOST/v1/users/string/tags?user_id=string HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/users/string/tags?user_id=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    콘솔 로그(본문),
});

```

```ruby
'rest-client' 필요
'json' 필요

헤더 = {
  '수락' => 'application/json'
}

결과 = RestClient.get 'AUDIUS_API_HOST/v1/users/string/tags',
  매개변수: {
  'user_id' => 'string'
}, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/string/tags', params={
  'user_id': 'string'
}, headers = headers)

print(r. json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/string/tags', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/users/string/tags?user_id=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/string/tags", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /사용자/{user_id}/태그`

*사용자의 트랙에서 가장 많이 사용된 태그 가져오기*

<h3 id="get-user's-most-used-track-tags-parameters">쿼리 매개변수</h3>

| 이름      | 유형 | 필수의 | 설명      |
| ------- | -- | --- | ------- |
| user_id | 끈  | 진실  | 사용자 ID  |
| 한계      | 정수 | 거짓  | 태그 수 제한 |
| user_id | 끈  | 진실  | 없음      |

> 예시 응답

> 200 응답

```json
{
  "데이터": [
    "문자열"
  ]
}
```

<h3 id="get-user's-most-used-track-tags-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                            |
| --- | -------------------------------------------------------------- | ------ | ----------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 성공     | [태그_응답](#schematags_response) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                            |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                            |

## 사용자의 트랙 가져오기

<a id="opIdGet User's Tracks"></a>

> 코드 샘플

```shell
컬 AUDIUS_API_HOST/v1/users/nlGNe/tracks 


```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe/HTTP/1.1 추적

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe/tracks',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (본문),
});

```

```ruby
'rest-client' 필요
'json' 필요

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe/tracks',
  매개변수: {
  }, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe/tracks', headers = headers)

print(r.json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe/tracks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/users/nlGNe/tracks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/nlGNe/tracks", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{user_id}/트랙`

*사용자의 트랙 목록 가져오기*

<h3 id="get-user's-tracks-parameters">쿼리 매개변수</h3>

| 이름      | 유형 | 필수의 | 설명     |
| ------- | -- | --- | ------ |
| user_id | 끈  | 진실  | 사용자 ID |
| 한계      | 끈  | 거짓  | 한계     |
| 오프셋     | 끈  | 거짓  | 오프셋    |
| 종류      | 끈  | 거짓  | 정렬 모드  |

> 예시 응답

```json
{
  "데이터": [
    {
      "아트워크": {
        "
        ": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/.jpg"08https://"jpg"x140 creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic 라이브 세트는 The Shrine의 Brownies & Lemonade Block Party LA에서 7.3.19.",
      "장르": "일렉트로닉",
      "id": "D7KyD",
      "mood": "Fiery",
      "release_date": "월 23 2019 12:35:10 GMT-0700",
      "repost_count": 47,
      "favorite_count": 143,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      " title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (라이브 세트)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin '는 & 번의 움직임으로 당신을 긴장하게 만듭니다. linktr.ee/browniesandlemonade",
        "
          ": {
          "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPomnode6e/640x.jpg",0x2 audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "
        ": 19,
        "follower_count": ""follower_count": "
        "
        ":" ": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https:// Creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "
":
  
    
      } 222
```

<h3 id="get-user's-tracks-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                       |
| --- | -------------------------------------------------------------- | ------ | ---------------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 없음     | [track_response](#schematracks_response) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                       |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                       |

<h1 id="api-playlists">재생 목록</h1>

## 재생 목록 검색

<a id="opIdSearch Playlists"></a>

> 코드 샘플

```shell
curl AUDIUS_API_HOST/v1/playlists/search?query=핫 & 신규 


```

```http
GET AUDIUS_API_HOST/v1/playlists/search?query=핫 & 새 HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/playlists/search?query=Hot & New',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(본문),
});

```

```ruby
'rest-client' 필요
'json' 필요

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/playlists/search',
  매개변수: {
  ' 쿼리' => '문자열'
}, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
헤더 = {
  '수락': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/search', params={
  'query': '인기 & 신규'
} , 헤더 = 헤더)

print(r.json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/playlists/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/playlists/search?query=핫 & 신규");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/playlists/search", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /재생 목록/검색`

*재생 목록 검색*

<h3 id="search-playlists-parameters">쿼리 매개변수</h3>

| 이름           | 유형 | 필수의 | 설명  |
| ------------ | -- | --- | --- |
| 질문           | 끈  | 진실  | 검색어 |
| only_다운로드 가능 | 끈  | 거짓  | 없음  |

> 예시 응답

```json
{
  "데이터": [
    {
      "아트워크": {
        "
        ": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/180",440.jpg" usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg",
        "1000x1000": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg"
      },
      "description": "All the Audius의 최신 핫 새 트랙! 2020년 여름의 절정기에 만들어지는 다양한 사운드를 즐겨보세요.",
      "id": "DOPRl",
      "is_album": true,
      "playlist_name": "Hot & New on Audius 🔥",
      "repost_count" ": 46,
      "favorite_count": 88,
      "user": {
        "album_count": 0,
        "bio": "오디우스 공식 계정! 아티스트, 팬, & 명의 개발자가 제어하는 분산형 오픈 소스 스트리밍 음악 플랫폼 만들기",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count ": 69,
        "follower_count": 6763,
        "handle": "Audius",
        "id": "eJ57D",
        "is_verified": true,
        "location": "SF & LA",
        "이름 ": "오디우스",
        "재생 목록_카운트":
          ,
        "프로필_사진": {
          "150x150": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg41",8UXFUGXfchg4NhL4,7UpbnxF usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f",
          "1000x1000": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f"
        },
        "repost_count": 200,
        "track_count": 0
      }
    }
  ]
}
```

<h3 id="search-playlists-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                                        |
| --- | -------------------------------------------------------------- | ------ | --------------------------------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 없음     | [playlist_search_result](#schemaplaylist_search_result) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                                        |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                                        |

## 인기 있는 재생 목록

<a id="opIdTrending Playlists"></a>

> 코드 샘플

```shell
curl AUDIUS_API_HOST/v1/playlists/trending/string 


```

```http
GET AUDIUS_API_HOST/v1/재생 목록/트렌딩/문자열 HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/playlists/trending/string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (본문),
});

```

```ruby
'rest-client' 필요
'json' 필요

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/playlists/trending/string',
  매개변수: {
  }, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/trending/string', headers = headers)

print(r.json())

```

```php
<?php

은 'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/playlists/trending/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/재생 목록/트렌딩/문자열");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/playlists/trending/string", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /재생 목록/트렌딩/{version}`

*Audius에서 특정 기간 동안 인기 있는 재생 목록을 가져옵니다.*

<h3 id="trending-playlists-parameters">쿼리 매개변수</h3>

| 이름 | 유형 | 필수의 | 설명        |
| -- | -- | --- | --------- |
| 시각 | 끈  | 거짓  | 쿼리할 시간 범위 |
| 버전 | 끈  | 진실  | 없음        |

> 예시 응답

> 200 응답

```json
{
  "데이터": [
    {
      "아트워크": {
        "150x150": "문자열",
        "480x480": "문자열",
        "1000x1000": "문자열"
      },
      "설명": " string",
      "id": "string",
      "is_album": true,
      "playlist_name": "string",
      "repost_count": 0,
      "favorite_count": 0,
      "total_play_count": 0,
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count ": 0,
        "follower_count": 0,
        "handle": "문자열",
        "id": "문자열",
        "is_verified": true,
        "위치": "문자열",
        "이름": "문자열",
        "재생 목록_카운트": 0,
        "프로필_사진": {
          "150x150": "문자열",
          "480x480": "문자열",
          "1000x1000": "문자열"
        },
        "재포스트_카운트" : 0,
        "트랙 수": 0
      }
    }
  ]
}
```

<h3 id="trending-playlists-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                                                  |
| --- | -------------------------------------------------------------- | ------ | ------------------------------------------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 성공     | [trending_playlists_response](#schematrending_playlists_response) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                                                  |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                                                  |

## 재생 목록 가져오기

<a id="opIdGet Playlist"></a>

> 코드 샘플

```shell
curl AUDIUS_API_HOST/v1/playlists/DOPRl 


```

```http
GET AUDIUS_API_HOST/v1/playlists/DOPRl HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/playlists/DOPRl',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body ),
});

```

```ruby
'rest-client' 필요
'json' 필요

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/playlists/DOPRl',
  매개변수: {
  }, 헤더 : 헤더

JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/DOPRl', headers = headers)

print(r.json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

시도 {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/playlists/DOPRl', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/재생 목록/DOPRl");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/playlists/DOPRl", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /재생 목록/{playlist_id}`

*재생 목록 가져오기*

<h3 id="get-playlist-parameters">쿼리 매개변수</h3>

| 이름          | 유형 | 필수의 | 설명       |
| ----------- | -- | --- | -------- |
| playlist_id | 끈  | 진실  | 재생 목록 ID |

> 예시 응답

```json
{
  "데이터": {
    "아트워크": {
      "
      ": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/150x150.jpg":https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3Lmb47q85ZwJJRVYTXPr/150x150.jpg", audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg",
      "1000x1000": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg"
    },
    "description": "All the latest hot Audius의 새로운 트랙! 2020년 여름의 절정기에 만들어지는 다양한 사운드를 즐겨보세요.",
    "id": "DOPRl",
    "is_album": true,
    "playlist_name": "Hot & New on Audius 🔥",
    "repost_count" ": 46,
    "favorite_count": 88,
    "user": {
      "album_count": 0,
      "bio": "오디우스 공식 계정! 아티스트, 팬, & 명의 개발자가 제어하는 분산형 오픈 소스 스트리밍 음악 플랫폼 만들기",
      "cover_photo": {
        "640x": "string",
        "2000x": "string"
      },
      "followee_count ": 69,
      "follower_count": 6763,
      "handle": "Audius",
      "id": "eJ57D",
      "is_verified": true,
      "location": "SF & LA",
      "이름 ": "오디우스",
      "재생 목록_카운트":
        ,
      "프로필_사진": {
        "150x150": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg41",8UXFUGXfchg4NhL4,7UpbnxF usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f",
        "1000x1000": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f"
      },
      "repost_count": 200,
      "track_count": 0
    }
  }
}
```

<h3 id="get-playlist-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                   |
| --- | -------------------------------------------------------------- | ------ | ------------------------------------ |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 없음     | [재생 목록_응답](#schemaplaylist_response) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                   |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                   |

## 재생 목록 트랙 가져오기

<a id="opIdGet Playlist Tracks"></a>

> 코드 샘플

```shell
curl AUDIUS_API_HOST/v1/playlists/DOPRl/tracks 


```

```http
GET AUDIUS_API_HOST/v1/playlists/DOPRl/tracks HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/playlists/DOPRl/tracks',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (본문),
});

```

```ruby
'rest-client' 필요
'json' 필요

헤더 = {
  'Accept' => 'application/json'
}

결과 = RestClient.get 'AUDIUS_API_HOST/v1/playlists/DOPRl/tracks',
  매개변수: {
  }, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/DOPRl/tracks', headers = headers)

print(r.json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/playlists/DOPRl/tracks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/재생 목록/DOPRl/트랙");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/playlists/DOPRl/tracks", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /재생 목록/{playlist_id}/트랙`

*재생 목록 내에서 트랙 가져오기*

<h3 id="get-playlist-tracks-parameters">쿼리 매개변수</h3>

| 이름          | 유형 | 필수의 | 설명       |
| ----------- | -- | --- | -------- |
| playlist_id | 끈  | 진실  | 재생 목록 ID |

> 예시 응답

```json
{
  "데이터": [
    {
      "아트워크": {
        "
        ": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/.jpg"08https://"jpg"x140 creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic 라이브 세트는 The Shrine의 Brownies & Lemonade Block Party LA에서 7.3.19.",
      "장르": "일렉트로닉",
      "id": "D7KyD",
      "mood": "Fiery",
      "release_date": "월 23 2019 12:35:10 GMT-0700",
      "repost_count": 47,
      "favorite_count": 143,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      " title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (라이브 세트)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin '는 & 번의 움직임으로 당신을 긴장하게 만듭니다. linktr.ee/browniesandlemonade",
        "
          ": {
          "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPomnode6e/640x.jpg",0x2 audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "
        ": 19,
        "follower_count": ""follower_count": "
        "
        ":" ": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https:// Creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "
":
  
    
      } 222
```

<h3 id="get-playlist-tracks-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                               |
| --- | -------------------------------------------------------------- | ------ | ------------------------------------------------ |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 없음     | [재생 목록_트랙_응답](#schemaplaylist_tracks_response) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                               |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                               |

<h1 id="api-tracks">트랙</h1>

## 핸들 및 슬러그로 추적하기

<a id="opIdGet Track By Handle and Slug"></a>

> 코드 샘플

```shell
curl AUDIUS_API_HOST/v1/tracks 


```

```http
GET AUDIUS_API_HOST/v1/HTTP/1.1 추적

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/tracks',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
'rest-client' 필요
'json' 필요

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks',
  매개변수: {
  }, 헤더: 헤더

JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks', headers = headers)

print(r.json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/tracks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/tracks", data)
    req.Header = 헤더

    클라이언트 := &http .Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /트랙`

<h3 id="get-track-by-handle-and-slug-parameters">쿼리 매개변수</h3>

| 이름 | 유형 | 필수의 | 설명      |
| -- | -- | --- | ------- |
| 핸들 | 끈  | 거짓  | 사용자의 핸들 |
| 강타 | 끈  | 거짓  | 트랙의 슬러그 |

> 예시 응답

> 200 응답

```json
{
  "데이터": {
    "아트워크": {
      "150x150": "문자열",
      "480x480": "문자열",
      "1000x1000": "문자열"
    },
    "설명": "문자열" ,
    "장르": "문자열",
    "id": "문자열",
    "기분": "문자열",
    "release_date": "문자열",
    "remix_of": {
      "트랙": [
        {
          "parent_track_id": "문자열"
        }
      ]
    },
    "repost_count": 0,
    "favorite_count": 0,
    "태그": "문자열",
    "제목": "문자열",
    " user": {
      "album_count": 0,
      "bio": "string",
      "cover_photo": {
        "640x": "string",
        "2000x": "string"
      },
      "followee_count" : 0,
      "follower_count": 0,
      "handle": "문자열",
      "id": "문자열",
      "is_verified": true,
      "위치": "문자열",
      "이름": " string",
      "playlist_count": 0,
      "profile_picture": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "repost_count": 0,
      "track_count": 0
    },
    "duration": 0,
    "downloadable": true,
    "play_count": 0,
    "permalink": "string"
  }
}
```

<h3 id="get-track-by-handle-and-slug-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                      |
| --- | -------------------------------------------------------------- | ------ | --------------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 성공     | [track_response](#schematrack_response) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                      |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                      |

## 추천 트랙

<a id="opIdRecommended Tracks"></a>

> 코드 샘플

```shell
curl AUDIUS_API_HOST/v1/tracks/recommended/string 


```

```http
GET AUDIUS_API_HOST/v1/tracks/recommended/string HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/tracks/recommended/string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (본문),
});

```

```ruby
'rest-client' 필요
'json' 필요

헤더 = {
  'Accept' => 'application/json'
}

결과 = RestClient.get 'AUDIUS_API_HOST/v1/tracks/recommended/string',
  매개변수: {
  }, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks/recommended/string', headers = headers)

print(r.json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks/recommended/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/tracks/recommended/string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/tracks/recommended/string", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tracks/recommended/{version}`

<h3 id="recommended-tracks-parameters">쿼리 매개변수</h3>

| 이름    | 유형 | 필수의 | 설명                               |
| ----- | -- | --- | -------------------------------- |
| 장르    | 끈  | 거짓  | 특정 장르의 추천 트렌드 트랙                 |
| 한계    | 끈  | 거짓  | 가져올 권장 트랙 수                      |
| 제외 목록 | 끈  | 거짓  | 제외할 트랙 ID 목록                     |
| 시각    | 끈  | 거짓  | 지정된 시간 범위(주, 월, 모든 시간) 동안의 인기 트랙 |
| 버전    | 끈  | 진실  | 없음                               |

> 예시 응답

> 200 응답

```json
{
  "데이터": [
    {
      "아트워크": {
        "150x150": "문자열",
        "480x480": "문자열",
        "1000x1000": "문자열"
      },
      "설명": " string",
      "genre": "string",
      "id": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": "문자열"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "태그": "문자열",
      "제목": "문자열",
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        " Followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name" : "문자열",
        "재생 목록_카운트": 0,
        "프로필_사진": {
          "150x150": "문자열",
          "480x480": "문자열",
          "1000x1000": "문자열"
        },
        "repost_count" ": 0,
        "track_count": 0
      },
      "duration": 0,
      "downloadable": true,
      "play_count": 0,
      "permalink": "string"
    }
  ]
}
```

<h3 id="recommended-tracks-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                       |
| --- | -------------------------------------------------------------- | ------ | ---------------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 성공     | [track_response](#schematracks_response) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                       |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                       |

## 트랙 검색

<a id="opIdSearch Tracks"></a>

> 코드 샘플

```shell
curl AUDIUS_API_HOST/v1/tracks/search?query=baauer b2b 


```

```http
GET AUDIUS_API_HOST/v1/tracks/search?query=baauer b2b HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/tracks/search?query=baauer b2b',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(본문);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/search',
  매개변수: {
  ' query' => 'string'
}, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks/search', params={
  'query': 'baauer b2b'
}, headers = headers)

print(r.json( ))

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/tracks/search?query=baauer b2b");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/tracks/search", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /트랙/검색`

*트랙 검색*

<h3 id="search-tracks-parameters">쿼리 매개변수</h3>

| 이름           | 유형 | 필수의 | 설명              |
| ------------ | -- | --- | --------------- |
| 질문           | 끈  | 진실  | 검색어             |
| only_다운로드 가능 | 끈  | 거짓  | 다운로드 가능한 트랙만 반환 |

> 예시 응답

```json
{
  "데이터": [
    {
      "아트워크": {
        "
        ": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/.jpg"08https://"jpg"x140 creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic 라이브 세트는 The Shrine의 Brownies & Lemonade Block Party LA에서 7.3.19.",
      "장르": "일렉트로닉",
      "id": "D7KyD",
      "mood": "Fiery",
      "release_date": "월 23 2019 12:35:10 GMT-0700",
      "repost_count": 47,
      "favorite_count": 143,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      " title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (라이브 세트)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin '는 & 번의 움직임으로 당신을 긴장하게 만듭니다. linktr.ee/browniesandlemonade",
        "
          ": {
          "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPomnode6e/640x.jpg",0x2 audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "
        ": 19,
        "follower_count": ""follower_count": "
        "
        ":" ": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https:// Creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "
":
  
    
      } 222
```

<h3 id="search-tracks-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                  |
| --- | -------------------------------------------------------------- | ------ | ----------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 없음     | [track_search](#schematrack_search) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                  |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                  |

## 인기 트랙

<a id="opIdTrending Tracks"></a>

> 코드 샘플

```shell
curl AUDIUS_API_HOST/v1/tracks/trending/string 


```

```http
GET AUDIUS_API_HOST/v1/tracks/trending/string HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/tracks/trending/string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (본문),
});

```

```ruby
'rest-client' 필요
'json' 필요

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/trending/string',
  매개변수: {
  }, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks/trending/string', headers = headers)

print(r.json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks/trending/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/tracks/trending/string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/tracks/trending/string", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /트랙/트렌딩/{version}`

*Audius에서 상위 100개의 인기 있는(가장 인기 있는) 트랙을 가져옵니다.*

<h3 id="trending-tracks-parameters">쿼리 매개변수</h3>

| 이름 | 유형 | 필수의 | 설명                               |
| -- | -- | --- | -------------------------------- |
| 장르 | 끈  | 거짓  | 특정 장르의 인기 트랙                     |
| 시각 | 끈  | 거짓  | 지정된 시간 범위(주, 월, 모든 시간) 동안의 인기 트랙 |
| 버전 | 끈  | 진실  | 없음                               |

> 예시 응답

> 200 응답

```json
{
  "데이터": [
    {
      "아트워크": {
        "150x150": "문자열",
        "480x480": "문자열",
        "1000x1000": "문자열"
      },
      "설명": " string",
      "genre": "string",
      "id": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": "문자열"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "태그": "문자열",
      "제목": "문자열",
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        " Followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name" : "문자열",
        "재생 목록_카운트": 0,
        "프로필_사진": {
          "150x150": "문자열",
          "480x480": "문자열",
          "1000x1000": "문자열"
        },
        "repost_count" ": 0,
        "track_count": 0
      },
      "duration": 0,
      "downloadable": true,
      "play_count": 0,
      "permalink": "string"
    }
  ]
}
```

<h3 id="trending-tracks-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                       |
| --- | -------------------------------------------------------------- | ------ | ---------------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 성공     | [track_response](#schematracks_response) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                       |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                       |

## 추적하기

<a id="opIdGet Track"></a>

> 코드 샘플

```shell
컬 AUDIUS_API_HOST/v1/tracks/D7KyD 


```

```http
GET AUDIUS_API_HOST/v1/tracks/D7KyD HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/tracks/D7KyD',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body ),
});

```

```ruby
'rest-client' 필요
'json' 필요

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/D7KyD',
  매개변수: {
  }, 헤더 : 헤더

JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks/D7KyD', headers = headers)

print(r.json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks/D7KyD', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/tracks/D7KyD");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/tracks/D7KyD", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /트랙/{track_id}`

*트랙 가져오기*

<h3 id="get-track-parameters">쿼리 매개변수</h3>

| 이름       | 유형 | 필수의 | 설명    |
| -------- | -- | --- | ----- |
| track_id | 끈  | 진실  | 트랙 ID |

> 예시 응답

```json
{
  "데이터": {
    "아트워크": {
      "
      ": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x1380.jpg" audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
      "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
    },
    "description": "@baauer b2b @ 7.3.19.에 The Shrine의 Brownies & Lemonade Block Party LA에서 partyfavormusic 라이브 세트",
    "장르": "일렉트로닉",
    "id": "D7KyD",
    "mood": "Fiery",
    "release_date ": "월 23 2019 12:35:10 GMT-0700",
    "repost_count": 47,
    "favorite_count": 143,
    "tags": "baauer,partyfavor,browniesandlemonade,live",
    "title" : "Paauer | Baauer B2B Party Favor | B&L Block Party LA (라이브 세트)",
    "duration": 5265,
    "user": {
      "album_count": 0,
      "bio": "Makin' move & 당신의 발끝을 지키십시오. linktr.ee/browniesandlemonade",
      "
        ": {
        "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPomnode6e/640x.jpg",0x2 audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
      },
      "
      ": 19,
      "follower_count": ""follower_count": "
      "
      ":" ": true,
      "location": "Los Angeles, CA",
      "name": "Brownies & Lemonade",
      "playlist_count": 2,
      "profile_picture": {
        "150x150": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
        "1000x1000": "https:// Creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
      },
      "repost_count": 5,
      "
":
  
    } } 222
```

<h3 id="get-track-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                      |
| --- | -------------------------------------------------------------- | ------ | --------------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 없음     | [track_response](#schematrack_response) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                      |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                      |

## 스트림 트랙

<a id="opIdStream Track"></a>

> 코드 샘플

```shell
컬 AUDIUS_API_HOST/v1/tracks/D7KyD/stream

```

```http
GET AUDIUS_API_HOST/v1/tracks/D7KyD/스트림 HTTP/1.1

```

```javascript

fetch('AUDIUS_API_HOST/v1/tracks/D7KyD/stream',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log( 본문),
});

```

```ruby
'rest-client' 필요
'json' 필요

결과 = RestClient.get 'AUDIUS_API_HOST/v1/tracks/D7KyD/stream',
  매개변수: {
  }

p JSON.parse(result)

```

```python
가져오기 요청

r = requests.get('AUDIUS_API_HOST/v1/tracks/D7KyD/stream')

print(r.json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks/D7KyD/stream', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/tracks/D7KyD/stream");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
패키지 메인

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/tracks/D7KyD/stream", data)
    req.Header = 헤더

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /트랙/{track_id}/스트림`

*트랙의 스트리밍 가능한 mp3 파일 가져오기*

이 끝점은 스트리밍을 위해 Range 헤더를 허용합니다. https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests

<h3 id="stream-track-parameters">쿼리 매개변수</h3>

| 이름       | 유형 | 필수의 | 설명    |
| -------- | -- | --- | ----- |
| track_id | 끈  | 진실  | 트랙 ID |

<h3 id="stream-track-responses">응답</h3>

| 상태  | 의미                                                              | 설명               | 개요 |
| --- | --------------------------------------------------------------- | ---------------- | -- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)         | 성공               | 없음 |
| 216 | 알려지지 않은                                                         | 일부 콘텐츠           | 없음 |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)     | 잘못된 요청           | 없음 |
| 416 | [범위가 만족스럽지 않음](https://tools.ietf.org/html/rfc7233#section-4.4) | 콘텐츠 범위가 잘못되었습니다. | 없음 |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1)  | 서버 오류            | 없음 |

<h1 id="api-challenges">도전</h1>

## get_get_undisbursed_challenges

<a id="opIdget_get_undisbursed_challenges"></a>

> 코드 샘플

```shell
curl AUDIUS_API_HOST/v1/challenges/undisbursed 


```

```http
GET AUDIUS_API_HOST/v1/challenges/미지급 HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/challenges/undisbursed',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body ),
});

```

```ruby
'rest-client' 필요
'json' 필요

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/challenges/undisbursed',
  매개변수: {
  }, 헤더 : 헤더

JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/challenges/undisbursed', headers = headers)

print(r.json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

시도 {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/challenges/undisbursed', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/challenges/undisbursed");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/challenges/undisbursed", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /챌린지/미지급`

<h3 id="get_get_undisbursed_challenges-parameters">쿼리 매개변수</h3>

| 이름                    | 유형 | 필수의 | 설명                            |
| --------------------- | -- | --- | ----------------------------- |
| 한계                    | 끈  | 거짓  | 최대 응답 챌린지 수                   |
| 오프셋                   | 끈  | 거짓  | 쿼리에서 처음에 건너뛸 챌린지 수            |
| Completed_blocknumber | 끈  | 거짓  | 완료된 미지급 챌린지를 검색하기 위해 블록 번호 시작 |

> 예시 응답

> 200 응답

```json
{
  "데이터": [
    {
      "challenge_id": "문자열",
      "사용자 ID": "문자열",
      "지정자": "문자열",
      "금액": "문자열",
      "완료_블록번호": 0
    }
  ]
}
```

<h3 id="get_get_undisbursed_challenges-responses">응답</h3>

| 상태  | 의미                                                             | 설명     | 개요                                                      |
| --- | -------------------------------------------------------------- | ------ | ------------------------------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | 성공     | [undisbursed_challenges](#schemaundisbursed_challenges) |
| 400 | [잘못된 요청](https://tools.ietf.org/html/rfc7231#section-6.5.1)    | 잘못된 요청 | 없음                                                      |
| 500 | [인터넷 서버 오류](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 서버 오류  | 없음                                                      |

## get_test

<a id="opIdget_attest"></a>

> 코드 샘플

```shell
curl AUDIUS_API_HOST/v1/challenges/string/attest?user_id=문자열&oracle=문자열&지정자=문자열 


```

```http
GET AUDIUS_API_HOST/v1/challenges/string/attest?user_id=문자열&oracle=문자열&지정자=문자열 HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/challenges/string/attest?user_id=string&oracle=string&specifier=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}) .then(function(body) {
    console.log(body);
});

```

```ruby
'rest-client' 필요
'json' 필요

헤더 = {
  '수락' => 'application/json'
}

결과 = RestClient.get 'AUDIUS_API_HOST/v1/challenges/string/attest',
  매개변수: {
  'user_id' => '문자열',
'oracle' => '문자열',
'지정자' => '문자열'
}, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/challenges/string/attest', params={
  'user_id': 'string',  'oracle': 'string',  'specifier': 'string'
}, headers = headers)

print(r. json())

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/challenges/string/attest', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    인쇄_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/challenges/string/attest?user_id=문자열&oracle=문자열&지정자=문자열");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = 새로운 StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/challenges/string/attest", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /challenges/{challenge_id}/증명`

<h3 id="get_attest-parameters">쿼리 매개변수</h3>

| 이름           | 유형 | 필수의 | 설명 |
| ------------ | -- | --- | -- |
| user_id      | 끈  | 진실  | 없음 |
| 신탁           | 끈  | 진실  | 없음 |
| 지정자          | 끈  | 진실  | 없음 |
| Challenge_id | 끈  | 진실  | 없음 |

> 예시 응답

> 200 응답

```json
{
  "데이터": {
    "소유자_지갑": "문자열",
    "증명": "문자열"
  }
}
```

<h3 id="get_attest-responses">응답</h3>

| 상태  | 의미                                                      | 설명 | 개요                                  |
| --- | ------------------------------------------------------- | -- | ----------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 성공 | [증명_응답](#schemaattestation_reponse) |

<h1 id="api-metrics">측정항목</h1>

## get_trailing_app_name_metrics

<a id="opIdget_trailing_app_name_metrics"></a>

> 코드 샘플

```shell
curl AUDIUS_API_HOST/v1/metrics/app_name/trailing/string 


```

```http
GET AUDIUS_API_HOST/v1/metrics/app_name/trailing/string HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'응용 프로그램/json'
};

fetch('AUDIUS_API_HOST/v1/metrics/app_name/trailing/string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    콘솔 .log(본문);
});

```

```ruby
'rest-client' 필요
'json' 필요

헤더 = {
  '수락' => 'application/json'
}

결과 = RestClient.get 'AUDIUS_API_HOST/v1/metrics/app_name/trailing/string',
  매개변수 : {
  }, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/metrics/app_name/trailing/string', headers = headers)

print(r.json( ))

```

```php
<?php

'vendor/autoload.php'가 필요합니다.

$headers = 배열(
    '수락' => '애플리케이션/json',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

시도 {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/metrics/app_name/trailing/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/metrics/app_name/trailing/string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/metrics/app_name/trailing/string", data)
    req.Header = 헤더

    클라이언트 := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /metrics/app_name/trailing/{time_range}`

*matview에서 후행 앱 이름 메트릭을 가져옵니다.*

<h3 id="get_trailing_app_name_metrics-parameters">쿼리 매개변수</h3>

| 이름    | 유형 | 필수의 | 설명 |
| ----- | -- | --- | -- |
| 시간 범위 | 끈  | 진실  | 없음 |

> 예시 응답

> 200 응답

```json
{
  "데이터": [
    {
      "개수": 0,
      "이름": "문자열"
    }
  ]
}
```

<h3 id="get_trailing_app_name_metrics-responses">응답</h3>

| 상태  | 의미                                                      | 설명 | 개요                                                                |
| --- | ------------------------------------------------------- | -- | ----------------------------------------------------------------- |
| 200 | [확인](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 성공 | [app_name_trailing_response](#schemaapp_name_trailing_response) |

<h1 id="api-resolve">해결하다</h1>

## 해결하다

<a id="opIdResolve"></a>

> 코드 샘플

```shell
컬 AUDIUS_API_HOST/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216 


```

```http
GET AUDIUS_API_HOST/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216 HTTP/1.1

```

```javascript

const 헤더 = {
  '수락':'텍스트/일반'
};

fetch('AUDIUS_API_HOST/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}) .then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/resolve',
  매개변수: {
  'url' => '문자열'
}, 헤더: 헤더

p JSON.parse(결과)

```

```python
가져오기 요청
헤더 = {
  '수락': '텍스트/일반'
}

r = requests.get('AUDIUS_API_HOST/v1/resolve', params={
  'url': 'https://audius.co/ camouflybeats/hypermantra-86216'
}, 헤더 = 헤더)

print(r.json())

```

```php
<?php

은 'vendor/autoload.php'가 필요합니다.

$headers = array(
    '수락' => '텍스트/일반',
);

$client = 새로운 \GuzzleHttp\Client();

// 요청 본문의 배열을 정의합니다.
$request_body = 배열();

시도 {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/resolve', array(
        '헤더' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 예외 또는 API 오류를 처리합니다.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = 새 URL("AUDIUS_API_HOST/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
정수 응답 코드 = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
문자열 입력 라인;
StringBuffer 응답 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/resolve", data)
    req.Header = 헤더

    클라이언트 := &http .Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /해결`

*제공된 Audius 앱 URL을 확인하고 해당 URL이 나타내는 API 리소스 URL로 리디렉션합니다.*

이 끝점을 사용하면 audius.co URL만 알고 있는 경우 API 리소스를 조회하고 액세스할 수 있습니다. 트랙, 재생 목록 및 사용자가 지원됩니다.

<h3 id="resolve-parameters">쿼리 매개변수</h3>

| 이름  | 유형 | 필수의 | 설명                                                   |
| --- | -- | --- | ---------------------------------------------------- |
| URL | 끈  | 진실  | 해결할 URL입니다. 완전한 형식의 URL(https://audius.co) 또는 절대 경로만 |

> 예시 응답

> 내부 리디렉션

```
{"HTTP/1.1 302 찾은 위치":"/v1/tracks/V4W8r"}
```

<h3 id="resolve-responses">응답</h3>

| 상태  | 의미                                                        | 설명      | 개요 |
| --- | --------------------------------------------------------- | ------- | -- |
| 302 | [설립하다](https://tools.ietf.org/html/rfc7231#section-6.4.3) | 내부 리디렉션 | 없음 |

<h3 id="resolve-responseschema">응답 스키마</h3>

# 스키마

다음은 API에서 수신할 것으로 예상되는 응답 형식의 예입니다.

<a id="schemauser_response"></a>
<a id="schema_user_response"></a>
<a id="tocSuser_response"></a>
<a id="tocsuser_response"></a>
<h2 id="tocS_user_response">user_response</h2>

```json
{
  "data": {
    "album_count": 0,
    "bio": "string",
    "cover_photo": {
      "640x": "string",
      "2000x": "string"
    },
    "followee_count": 0,
    "follower_count": 0,
    "handle": "문자열",
    "id": "문자열",
    "is_verified": true,
    "위치": "문자열",
    "이름" ": "문자열",
    "재생 목록_카운트": 0,
    "프로필_사진": {
      "150x150": "문자열",
      "480x480": "문자열",
      "1000x1000": "문자열"
    },
    " 재포스트_카운트": 0,
    "트랙_카운트": 0
  }
}

```

### 속성

| 이름  | 유형                 | 필수의 | 제한 | 설명 |
| --- | ------------------ | --- | -- | -- |
| 데이터 | [사용자](#schemauser) | 거짓  | 없음 | 없음 |

<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>
<h2 id="tocS_user">사용자</h2>

```json
{
  "album_count": 0,
  "bio": "string",
  "cover_photo": {
    "640x": "string",
    "2000x": "string"
  },
  "followee_count": 0,
  "follower_count": 0,
  "handle": "문자열",
  "id": "문자열",
  "is_verified": 참,
  "위치": "문자열",
  "이름": "문자열",
  "playlist_count": 0,
  "profile_picture": {
    "150x150": "문자열",
    "480x480": "문자열",
    "1000x1000": "문자열"
  },
  "repost_count": 0,
  "트랙 수": 0
}

```

### 속성

| 이름             | 유형                               | 필수의 | 제한 | 설명 |
| -------------- | -------------------------------- | --- | -- | -- |
| 앨범_카운트         | 정수                               | 진실  | 없음 | 없음 |
| 바이오            | 끈                                | 거짓  | 없음 | 없음 |
| 표지_사진          | [표지_사진](#schemacover_photo)      | 거짓  | 없음 | 없음 |
| Followee_count | 정수                               | 진실  | 없음 | 없음 |
| 추종자_카운트        | 정수                               | 진실  | 없음 | 없음 |
| 핸들             | 끈                                | 진실  | 없음 | 없음 |
| ID             | 끈                                | 진실  | 없음 | 없음 |
| is_verified    | 부울                               | 진실  | 없음 | 없음 |
| 위치             | 끈                                | 거짓  | 없음 | 없음 |
| 이름             | 끈                                | 진실  | 없음 | 없음 |
| 재생 목록_카운트      | 정수                               | 진실  | 없음 | 없음 |
| 프로필 사진         | [프로필 사진](#schemaprofile_picture) | 거짓  | 없음 | 없음 |
| 재포스트_카운트       | 정수                               | 진실  | 없음 | 없음 |
| track_count    | 정수                               | 진실  | 없음 | 없음 |

<a id="schemacover_photo"></a>
<a id="schema_cover_photo"></a>
<a id="tocScover_photo"></a>
<a id="tocscover_photo"></a>
<h2 id="tocS_cover_photo">표지_사진</h2>

```json
{
  "640x": "문자열",
  "2000x": "문자열"
}

```

### 속성

| 이름    | 유형 | 필수의 | 제한 | 설명 |
| ----- | -- | --- | -- | -- |
| 640x  | 끈  | 거짓  | 없음 | 없음 |
| 2000x | 끈  | 거짓  | 없음 | 없음 |

<a id="schemaprofile_picture"></a>
<a id="schema_profile_picture"></a>
<a id="tocSprofile_picture"></a>
<a id="tocsprofile_picture"></a>
<h2 id="tocS_profile_picture">프로필 사진</h2>

```json
{
  "150x150": "문자열",
  "480x480": "문자열",
  "1000x1000": "문자열"
}

```

### 속성

| 이름        | 유형 | 필수의 | 제한 | 설명 |
| --------- | -- | --- | -- | -- |
| 150x150   | 끈  | 거짓  | 없음 | 없음 |
| 480x480   | 끈  | 거짓  | 없음 | 없음 |
| 1000x1000 | 끈  | 거짓  | 없음 | 없음 |

<a id="schematracks_response"></a>
<a id="schema_tracks_response"></a>
<a id="tocStracks_response"></a>
<a id="tocstracks_response"></a>
<h2 id="tocS_tracks_response">track_response</h2>

```json
{
  "데이터": [
    {
      "아트워크": {
        "150x150": "문자열",
        "480x480": "문자열",
        "1000x1000": "문자열"
      },
      "설명": " string",
      "genre": "string",
      "id": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": "문자열"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "태그": "문자열",
      "제목": "문자열",
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        " Followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name" : "문자열",
        "재생 목록_카운트": 0,
        "프로필_사진": {
          "150x150": "문자열",
          "480x480": "문자열",
          "1000x1000": "문자열"
        },
        "repost_count" ": 0,
        "track_count": 0
      },
      "duration": 0,
      "downloadable": true,
      "play_count": 0,
      "permalink": "string"
    }
  ]
}

```

### 속성

| 이름  | 유형                   | 필수의 | 제한 | 설명 |
| --- | -------------------- | --- | -- | -- |
| 데이터 | [[트랙](#schematrack)] | 거짓  | 없음 | 없음 |

<a id="schematrack"></a>
<a id="schema_Track"></a>
<a id="tocStrack"></a>
<a id="tocstrack"></a>
<h2 id="tocS_Track">길</h2>

```json
{
  "아트워크": {
    "150x150": "문자열",
    "480x480": "문자열",
    "1000x1000": "문자열"
  },
  "설명": "문자열",
  "장르": "문자열",
  "id": "문자열",
  "기분": "문자열",
  "release_date": "문자열",
  "remix_of": {
    "트랙": [
      {
        "parent_track_id": "문자열"
      }
    ]
  },
  "repost_count": 0,
  "favorite_count": 0,
  "태그": "문자열",
  "제목": "문자열",
  "사용자": {
    " Album_count": 0,
    "bio": "string",
    "cover_photo": {
      "640x": "string",
      "2000x": "string"
    },
    "followee_count": 0,
    "follower_count ": 0,
    "handle": "string",
    "id": "string",
    "is_verified": true,
    "location": "string",
    "name": "string",
    "playlist_count ": 0,
    "프로필_사진": {
      "150x150": "문자열",
      "480x480": "문자열",
      "1000x1000": "문자열"
    },
    "재포스트_카운트": 0,
    "트랙_카운트" : 0
  },
  "지속 시간": 0,
  "다운로드 가능": true,
  "play_count": 0,
  "permalink": "문자열"
}

```

### 속성

| 이름         | 유형                                    | 필수의 | 제한 | 설명 |
| ---------- | ------------------------------------- | --- | -- | -- |
| 삽화         | [track_artwork](#schematrack_artwork) | 거짓  | 없음 | 없음 |
| 설명         | 끈                                     | 거짓  | 없음 | 없음 |
| 장르         | 끈                                     | 거짓  | 없음 | 없음 |
| ID         | 끈                                     | 진실  | 없음 | 없음 |
| 분위기        | 끈                                     | 거짓  | 없음 | 없음 |
| 출시일        | 끈                                     | 거짓  | 없음 | 없음 |
| remix_of   | [remix_parent](#schemaremix_parent)   | 거짓  | 없음 | 없음 |
| 재포스트_카운트   | 정수                                    | 진실  | 없음 | 없음 |
| 즐겨찾기_카운트   | 정수                                    | 진실  | 없음 | 없음 |
| 태그         | 끈                                     | 거짓  | 없음 | 없음 |
| 제목         | 끈                                     | 진실  | 없음 | 없음 |
| 사용자        | [사용자](#schemauser)                    | 진실  | 없음 | 없음 |
| 지속         | 정수                                    | 진실  | 없음 | 없음 |
| 다운로드 가능    | 부울                                    | 거짓  | 없음 | 없음 |
| play_count | 정수                                    | 진실  | 없음 | 없음 |
| 영구 링크      | 끈                                     | 거짓  | 없음 | 없음 |

<a id="schematrack_artwork"></a>
<a id="schema_track_artwork"></a>
<a id="tocStrack_artwork"></a>
<a id="tocstrack_artwork"></a>
<h2 id="tocS_track_artwork">track_artwork</h2>

```json
{
  "150x150": "문자열",
  "480x480": "문자열",
  "1000x1000": "문자열"
}

```

### 속성

| 이름        | 유형 | 필수의 | 제한 | 설명 |
| --------- | -- | --- | -- | -- |
| 150x150   | 끈  | 거짓  | 없음 | 없음 |
| 480x480   | 끈  | 거짓  | 없음 | 없음 |
| 1000x1000 | 끈  | 거짓  | 없음 | 없음 |

<a id="schemaremix_parent"></a>
<a id="schema_remix_parent"></a>
<a id="tocSremix_parent"></a>
<a id="tocsremix_parent"></a>
<h2 id="tocS_remix_parent">remix_parent</h2>

```json
{
  "트랙": [
    {
      "parent_track_id": "문자열"
    }
  ]
}

```

### 속성

| 이름 | 유형                              | 필수의 | 제한 | 설명 |
| -- | ------------------------------- | --- | -- | -- |
| 트랙 | [[트랙 요소](#schematrack_element)] | 거짓  | 없음 | 없음 |

<a id="schematrack_element"></a>
<a id="schema_track_element"></a>
<a id="tocStrack_element"></a>
<a id="tocstrack_element"></a>
<h2 id="tocS_track_element">track_element</h2>

```json
{
  "parent_track_id": "문자열"
}

```

### 속성

| 이름                | 유형 | 필수의 | 제한 | 설명 |
| ----------------- | -- | --- | -- | -- |
| parent_track_id | 끈  | 진실  | 없음 | 없음 |

<a id="schemareposts"></a>
<a id="schema_reposts"></a>
<a id="tocSreposts"></a>
<a id="tocsreposts"></a>
<h2 id="tocS_reposts">다시 게시</h2>

```json
{
  "데이터": [
    {
      "타임스탬프": "문자열",
      "항목_유형": {},
      "항목": {}
    }
  ]
}

```

### 속성

| 이름  | 유형                      | 필수의 | 제한 | 설명 |
| --- | ----------------------- | --- | -- | -- |
| 데이터 | [[활동](#schemaactivity)] | 거짓  | 없음 | 없음 |

<a id="schemaactivity"></a>
<a id="schema_activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>
<h2 id="tocS_activity">활동</h2>

```json
{
  "타임스탬프": "문자열",
  "항목_유형": {},
  "항목": {}
}

```

### 속성

| 이름    | 유형 | 필수의 | 제한 | 설명 |
| ----- | -- | --- | -- | -- |
| 타임스탬프 | 끈  | 거짓  | 없음 | 없음 |
| 항목 형식 | 물체 | 거짓  | 없음 | 없음 |
| 안건    | 물체 | 거짓  | 없음 | 없음 |

<a id="schemafavorites_response"></a>
<a id="schema_favorites_response"></a>
<a id="tocSfavorites_response"></a>
<a id="tocsfavorites_response"></a>
<h2 id="tocS_favorites_response">즐겨찾기_응답</h2>

```json
{
  "데이터": [
    {
      "favorite_item_id": "문자열",
      "즐겨찾기_유형": "문자열",
      "사용자 ID": "문자열"
    }
  ]
}

```

### 속성

| 이름  | 유형                        | 필수의 | 제한 | 설명 |
| --- | ------------------------- | --- | -- | -- |
| 데이터 | [[즐겨찾기](#schemafavorite)] | 거짓  | 없음 | 없음 |

<a id="schemafavorite"></a>
<a id="schema_favorite"></a>
<a id="tocSfavorite"></a>
<a id="tocsfavorite"></a>
<h2 id="tocS_favorite">가장 좋아하는</h2>

```json
{
  "favorite_item_id": "문자열",
  "즐겨찾기_유형": "문자열",
  "사용자 ID": "문자열"
}

```

### 속성

| 이름                 | 유형 | 필수의 | 제한 | 설명 |
| ------------------ | -- | --- | -- | -- |
| Favorite_item_id | 끈  | 진실  | 없음 | 없음 |
| 즐겨찾기_유형            | 끈  | 진실  | 없음 | 없음 |
| user_id            | 끈  | 진실  | 없음 | 없음 |

<a id="schematags_response"></a>
<a id="schema_tags_response"></a>
<a id="tocStags_response"></a>
<a id="tocstags_response"></a>
<h2 id="tocS_tags_response">태그_응답</h2>

```json
{
  "데이터": [
    "문자열"
  ]
}

```

### 속성

| 이름  | 유형       | 필수의 | 제한 | 설명 |
| --- | -------- | --- | -- | -- |
| 데이터 | [string] | 거짓  | 없음 | 없음 |

<a id="schemauser_search"></a>
<a id="schema_user_search"></a>
<a id="tocSuser_search"></a>
<a id="tocsuser_search"></a>
<h2 id="tocS_user_search">user_search</h2>

```json
{
  "data": [
    {
      "album_count": 0,
      "bio": "string",
      "cover_photo": {
        "640x": "string",
        "2000x": "string"
      } ,
      "follower_count": 0,
      "follower_count": 0,
      "handle": "문자열",
      "id": "문자열",
      "is_verified": 참,
      "위치": "문자열",
      "이름": "문자열",
      "재생 목록_카운트": 0,
      "프로필_사진": {
        "150x150": "문자열",
        "480x480": "문자열",
        "1000x1000": "문자열"
      },
      "repost_count": 0,
      "track_count": 0
    }
  ]
}

```

### 속성

| 이름  | 유형                   | 필수의 | 제한 | 설명 |
| --- | -------------------- | --- | -- | -- |
| 데이터 | [[사용자](#schemauser)] | 거짓  | 없음 | 없음 |

<a id="schemaassociated_wallets_response"></a>
<a id="schema_associated_wallets_response"></a>
<a id="tocSassociated_wallets_response"></a>
<a id="tocsassociated_wallets_response"></a>
<h2 id="tocS_associated_wallets_response">Associated_wallets_response</h2>

```json
{
  "데이터": {
    "지갑": [
      "문자열"
    ],
    "솔_지갑": [
      "문자열"
    ]
  }
}

```

### 속성

| 이름  | 유형                                  | 필수의 | 제한 | 설명 |
| --- | ----------------------------------- | --- | -- | -- |
| 데이터 | [연관된_지갑](#schemaassociated_wallets) | 거짓  | 없음 | 없음 |

<a id="schemaassociated_wallets"></a>
<a id="schema_associated_wallets"></a>
<a id="tocSassociated_wallets"></a>
<a id="tocsassociated_wallets"></a>
<h2 id="tocS_associated_wallets">연관된_지갑</h2>

```json
{
  "지갑": [
    "문자열"
  ],
  "솔_지갑": [
    "문자열"
  ]
}

```

### 속성

| 이름          | 유형       | 필수의 | 제한 | 설명 |
| ----------- | -------- | --- | -- | -- |
| 지갑          | [string] | 진실  | 없음 | 없음 |
| sol_wallets | [string] | 진실  | 없음 | 없음 |

<a id="schemauser_associated_wallet_response"></a>
<a id="schema_user_associated_wallet_response"></a>
<a id="tocSuser_associated_wallet_response"></a>
<a id="tocsuser_associated_wallet_response"></a>
<h2 id="tocS_user_associated_wallet_response">user_associated_wallet_response</h2>

```json
{
  "데이터": {
    "사용자 ID": "문자열"
  }
}

```

### 속성

| 이름  | 유형                                         | 필수의 | 제한 | 설명 |
| --- | ------------------------------------------ | --- | -- | -- |
| 데이터 | [encode_user_id](#schemaencoded_user_id) | 거짓  | 없음 | 없음 |

<a id="schemaencoded_user_id"></a>
<a id="schema_encoded_user_id"></a>
<a id="tocSencoded_user_id"></a>
<a id="tocsencoded_user_id"></a>
<h2 id="tocS_encoded_user_id">encode_user_id</h2>

```json
{
  "user_id": "문자열"
}

```

### 속성

| 이름      | 유형 | 필수의 | 제한 | 설명 |
| ------- | -- | --- | -- | -- |
| user_id | 끈  | 거짓  | 없음 | 없음 |

<a id="schemaget_challenges"></a>
<a id="schema_get_challenges"></a>
<a id="tocSget_challenges"></a>
<a id="tocsget_challenges"></a>
<h2 id="tocS_get_challenges">get_challenges</h2>

```json
{
  "데이터": [
    {
      "challenge_id": "문자열",
      "user_id": "문자열",
      "지정자": "문자열",
      "is_complete": 참,
      "is_active": 참,
      "is_disbursed": true,
      "current_step_count": 0,
      "max_steps": 0,
      "challenge_type": "문자열",
      "메타데이터": {}
    }
  ]
}

```

### 속성

| 이름  | 유형                                   | 필수의 | 제한 | 설명 |
| --- | ------------------------------------ | --- | -- | -- |
| 데이터 | [[도전_응답](#schemachallenge_response)] | 거짓  | 없음 | 없음 |

<a id="schemachallenge_response"></a>
<a id="schema_challenge_response"></a>
<a id="tocSchallenge_response"></a>
<a id="tocschallenge_response"></a>
<h2 id="tocS_challenge_response">챌린지_응답</h2>

```json
{
  "challenge_id": "문자열",
  "user_id": "문자열",
  "지정자": "문자열",
  "is_complete": 참,
  "is_active": 참,
  "is_disbursed": 참,
  "current_step_count": 0,
  "max_steps": 0,
  "challenge_type": "문자열",
  "메타데이터": {}
}

```

### 속성

| 이름                   | 유형 | 필수의 | 제한 | 설명 |
| -------------------- | -- | --- | -- | -- |
| Challenge_id         | 끈  | 진실  | 없음 | 없음 |
| user_id              | 끈  | 진실  | 없음 | 없음 |
| 지정자                  | 끈  | 거짓  | 없음 | 없음 |
| is_complete          | 부울 | 진실  | 없음 | 없음 |
| 활성                   | 부울 | 진실  | 없음 | 없음 |
| is_disbursed         | 부울 | 진실  | 없음 | 없음 |
| current_step_count | 정수 | 거짓  | 없음 | 없음 |
| max_steps            | 정수 | 거짓  | 없음 | 없음 |
| 챌린지_유형               | 끈  | 진실  | 없음 | 없음 |
| 메타데이터                | 물체 | 진실  | 없음 | 없음 |

<a id="schemaplaylist_response"></a>
<a id="schema_playlist_response"></a>
<a id="tocSplaylist_response"></a>
<a id="tocsplaylist_response"></a>
<h2 id="tocS_playlist_response">재생 목록_응답</h2>

```json
{
  "데이터": [
    {
      "아트워크": {
        "150x150": "문자열",
        "480x480": "문자열",
        "1000x1000": "문자열"
      },
      "설명": " string",
      "id": "string",
      "is_album": true,
      "playlist_name": "string",
      "repost_count": 0,
      "favorite_count": 0,
      "total_play_count": 0,
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count ": 0,
        "follower_count": 0,
        "handle": "문자열",
        "id": "문자열",
        "is_verified": true,
        "위치": "문자열",
        "이름": "문자열",
        "재생 목록_카운트": 0,
        "프로필_사진": {
          "150x150": "문자열",
          "480x480": "문자열",
          "1000x1000": "문자열"
        },
        "재포스트_카운트" : 0,
        "트랙 수": 0
      }
    }
  ]
}

```

### 속성

| 이름  | 유형                         | 필수의 | 제한 | 설명 |
| --- | -------------------------- | --- | -- | -- |
| 데이터 | [[재생 목록](#schemaplaylist)] | 거짓  | 없음 | 없음 |

<a id="schemaplaylist"></a>
<a id="schema_playlist"></a>
<a id="tocSplaylist"></a>
<a id="tocsplaylist"></a>
<h2 id="tocS_playlist">재생 목록</h2>

```json
{
  "아트워크": {
    "150x150": "문자열",
    "480x480": "문자열",
    "1000x1000": "문자열"
  },
  "설명": "문자열",
  "ID": "string",
  "is_album": true,
  "playlist_name": "string",
  "repost_count": 0,
  "favorite_count": 0,
  "total_play_count": 0,
  "user": {
    "album_count ": 0,
    "bio": "string",
    "cover_photo": {
      "640x": "string",
      "2000x": "string"
    },
    "followee_count": 0,
    "follower_count" : 0,
    "handle": "string",
    "id": "string",
    "is_verified": true,
    "location": "string",
    "name": "string",
    "playlist_count" : 0,
    "프로필_사진": {
      "150x150": "문자열",
      "480x480": "문자열",
      "1000x1000": "문자열"
    },
    "repost_count": 0,
    "트랙_카운트": 0
  }
}

```

### 속성

| 이름                 | 유형                                          | 필수의 | 제한 | 설명 |
| ------------------ | ------------------------------------------- | --- | -- | -- |
| 삽화                 | [playlist_artwork](#schemaplaylist_artwork) | 거짓  | 없음 | 없음 |
| 설명                 | 끈                                           | 거짓  | 없음 | 없음 |
| ID                 | 끈                                           | 진실  | 없음 | 없음 |
| is_album           | 부울                                          | 진실  | 없음 | 없음 |
| 재생 목록_이름           | 끈                                           | 진실  | 없음 | 없음 |
| 재포스트_카운트           | 정수                                          | 진실  | 없음 | 없음 |
| 즐겨찾기_카운트           | 정수                                          | 진실  | 없음 | 없음 |
| total_play_count | 정수                                          | 진실  | 없음 | 없음 |
| 사용자                | [사용자](#schemauser)                          | 진실  | 없음 | 없음 |

<a id="schemaplaylist_artwork"></a>
<a id="schema_playlist_artwork"></a>
<a id="tocSplaylist_artwork"></a>
<a id="tocsplaylist_artwork"></a>
<h2 id="tocS_playlist_artwork">playlist_artwork</h2>

```json
{
  "150x150": "문자열",
  "480x480": "문자열",
  "1000x1000": "문자열"
}

```

### 속성

| 이름        | 유형 | 필수의 | 제한 | 설명 |
| --------- | -- | --- | -- | -- |
| 150x150   | 끈  | 거짓  | 없음 | 없음 |
| 480x480   | 끈  | 거짓  | 없음 | 없음 |
| 1000x1000 | 끈  | 거짓  | 없음 | 없음 |

<a id="schemaplaylist_tracks_response"></a>
<a id="schema_playlist_tracks_response"></a>
<a id="tocSplaylist_tracks_response"></a>
<a id="tocsplaylist_tracks_response"></a>
<h2 id="tocS_playlist_tracks_response">재생 목록_트랙_응답</h2>

```json
{
  "데이터": [
    {
      "아트워크": {
        "150x150": "문자열",
        "480x480": "문자열",
        "1000x1000": "문자열"
      },
      "설명": " string",
      "genre": "string",
      "id": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": "문자열"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "태그": "문자열",
      "제목": "문자열",
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        " Followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name" : "문자열",
        "재생 목록_카운트": 0,
        "프로필_사진": {
          "150x150": "문자열",
          "480x480": "문자열",
          "1000x1000": "문자열"
        },
        "repost_count" ": 0,
        "track_count": 0
      },
      "duration": 0,
      "downloadable": true,
      "play_count": 0,
      "permalink": "string"
    }
  ]
}

```

### 속성

| 이름  | 유형                   | 필수의 | 제한 | 설명 |
| --- | -------------------- | --- | -- | -- |
| 데이터 | [[트랙](#schematrack)] | 거짓  | 없음 | 없음 |

<a id="schemaplaylist_search_result"></a>
<a id="schema_playlist_search_result"></a>
<a id="tocSplaylist_search_result"></a>
<a id="tocsplaylist_search_result"></a>
<h2 id="tocS_playlist_search_result">playlist_search_result</h2>

```json
{
  "데이터": [
    {
      "아트워크": {
        "150x150": "문자열",
        "480x480": "문자열",
        "1000x1000": "문자열"
      },
      "설명": " string",
      "id": "string",
      "is_album": true,
      "playlist_name": "string",
      "repost_count": 0,
      "favorite_count": 0,
      "total_play_count": 0,
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count ": 0,
        "follower_count": 0,
        "handle": "문자열",
        "id": "문자열",
        "is_verified": true,
        "위치": "문자열",
        "이름": "문자열",
        "재생 목록_카운트": 0,
        "프로필_사진": {
          "150x150": "문자열",
          "480x480": "문자열",
          "1000x1000": "문자열"
        },
        "재포스트_카운트" : 0,
        "트랙 수": 0
      }
    }
  ]
}

```

### 속성

| 이름  | 유형                         | 필수의 | 제한 | 설명 |
| --- | -------------------------- | --- | -- | -- |
| 데이터 | [[재생 목록](#schemaplaylist)] | 거짓  | 없음 | 없음 |

<a id="schematrending_playlists_response"></a>
<a id="schema_trending_playlists_response"></a>
<a id="tocStrending_playlists_response"></a>
<a id="tocstrending_playlists_response"></a>
<h2 id="tocS_trending_playlists_response">trending_playlists_response</h2>

```json
{
  "데이터": [
    {
      "아트워크": {
        "150x150": "문자열",
        "480x480": "문자열",
        "1000x1000": "문자열"
      },
      "설명": " string",
      "id": "string",
      "is_album": true,
      "playlist_name": "string",
      "repost_count": 0,
      "favorite_count": 0,
      "total_play_count": 0,
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count ": 0,
        "follower_count": 0,
        "handle": "문자열",
        "id": "문자열",
        "is_verified": true,
        "위치": "문자열",
        "이름": "문자열",
        "재생 목록_카운트": 0,
        "프로필_사진": {
          "150x150": "문자열",
          "480x480": "문자열",
          "1000x1000": "문자열"
        },
        "재포스트_카운트" : 0,
        "트랙 수": 0
      }
    }
  ]
}

```

### 속성

| 이름  | 유형                         | 필수의 | 제한 | 설명 |
| --- | -------------------------- | --- | -- | -- |
| 데이터 | [[재생 목록](#schemaplaylist)] | 거짓  | 없음 | 없음 |

<a id="schematrack_response"></a>
<a id="schema_track_response"></a>
<a id="tocStrack_response"></a>
<a id="tocstrack_response"></a>
<h2 id="tocS_track_response">track_response</h2>

```json
{
  "데이터": {
    "아트워크": {
      "150x150": "문자열",
      "480x480": "문자열",
      "1000x1000": "문자열"
    },
    "설명": "문자열" ,
    "장르": "문자열",
    "id": "문자열",
    "기분": "문자열",
    "release_date": "문자열",
    "remix_of": {
      "트랙": [
        {
          "parent_track_id": "문자열"
        }
      ]
    },
    "repost_count": 0,
    "favorite_count": 0,
    "태그": "문자열",
    "제목": "문자열",
    " user": {
      "album_count": 0,
      "bio": "string",
      "cover_photo": {
        "640x": "string",
        "2000x": "string"
      },
      "followee_count" : 0,
      "follower_count": 0,
      "handle": "문자열",
      "id": "문자열",
      "is_verified": true,
      "위치": "문자열",
      "이름": " string",
      "playlist_count": 0,
      "profile_picture": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "repost_count": 0,
      "track_count": 0
    },
    "duration": 0,
    "downloadable": true,
    "play_count": 0,
    "permalink": "string"
  }
}

```

### 속성

| 이름  | 유형                | 필수의 | 제한 | 설명 |
| --- | ----------------- | --- | -- | -- |
| 데이터 | [길](#schematrack) | 거짓  | 없음 | 없음 |

<a id="schematrack_search"></a>
<a id="schema_track_search"></a>
<a id="tocStrack_search"></a>
<a id="tocstrack_search"></a>
<h2 id="tocS_track_search">track_search</h2>

```json
{
  "데이터": [
    {
      "아트워크": {
        "150x150": "문자열",
        "480x480": "문자열",
        "1000x1000": "문자열"
      },
      "설명": " string",
      "genre": "string",
      "id": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": "문자열"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "태그": "문자열",
      "제목": "문자열",
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        " Followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name" : "문자열",
        "재생 목록_카운트": 0,
        "프로필_사진": {
          "150x150": "문자열",
          "480x480": "문자열",
          "1000x1000": "문자열"
        },
        "repost_count" ": 0,
        "track_count": 0
      },
      "duration": 0,
      "downloadable": true,
      "play_count": 0,
      "permalink": "string"
    }
  ]
}

```

### 속성

| 이름  | 유형                   | 필수의 | 제한 | 설명 |
| --- | -------------------- | --- | -- | -- |
| 데이터 | [[트랙](#schematrack)] | 거짓  | 없음 | 없음 |

<a id="schemaattestation_reponse"></a>
<a id="schema_attestation_reponse"></a>
<a id="tocSattestation_reponse"></a>
<a id="tocsattestation_reponse"></a>
<h2 id="tocS_attestation_reponse">증명_응답</h2>

```json
{
  "데이터": {
    "소유자_지갑": "문자열",
    "증명": "문자열"
  }
}

```

### 속성

| 이름  | 유형                       | 필수의 | 제한 | 설명 |
| --- | ------------------------ | --- | -- | -- |
| 데이터 | [증명](#schemaattestation) | 거짓  | 없음 | 없음 |

<a id="schemaattestation"></a>
<a id="schema_attestation"></a>
<a id="tocSattestation"></a>
<a id="tocsattestation"></a>
<h2 id="tocS_attestation">증명</h2>

```json
{
  "소유자_지갑": "문자열",
  "증명": "문자열"
}

```

### 속성

| 이름     | 유형 | 필수의 | 제한 | 설명 |
| ------ | -- | --- | -- | -- |
| 소유자_지갑 | 끈  | 진실  | 없음 | 없음 |
| 증명     | 끈  | 진실  | 없음 | 없음 |

<a id="schemaundisbursed_challenges"></a>
<a id="schema_undisbursed_challenges"></a>
<a id="tocSundisbursed_challenges"></a>
<a id="tocsundisbursed_challenges"></a>
<h2 id="tocS_undisbursed_challenges">undisbursed_challenges</h2>

```json
{
  "데이터": [
    {
      "challenge_id": "문자열",
      "사용자 ID": "문자열",
      "지정자": "문자열",
      "금액": "문자열",
      "완료_블록번호": 0
    }
  ]
}

```

### 속성

| 이름  | 유형                                        | 필수의 | 제한 | 설명 |
| --- | ----------------------------------------- | --- | -- | -- |
| 데이터 | [[미지급_챌린지](#schemaundisbursed_challenge)] | 거짓  | 없음 | 없음 |

<a id="schemaundisbursed_challenge"></a>
<a id="schema_undisbursed_challenge"></a>
<a id="tocSundisbursed_challenge"></a>
<a id="tocsundisbursed_challenge"></a>
<h2 id="tocS_undisbursed_challenge">undisbursed_challenge</h2>

```json
{
  "challenge_id": "문자열",
  "user_id": "문자열",
  "지정자": "문자열",
  "금액": "문자열",
  "완료_블록 번호": 0
}

```

### 속성

| 이름                    | 유형 | 필수의 | 제한 | 설명 |
| --------------------- | -- | --- | -- | -- |
| Challenge_id          | 끈  | 진실  | 없음 | 없음 |
| user_id               | 끈  | 진실  | 없음 | 없음 |
| 지정자                   | 끈  | 진실  | 없음 | 없음 |
| 양                     | 끈  | 진실  | 없음 | 없음 |
| Completed_blocknumber | 정수 | 진실  | 없음 | 없음 |

<a id="schemaapp_name_trailing_response"></a>
<a id="schema_app_name_trailing_response"></a>
<a id="tocSapp_name_trailing_response"></a>
<a id="tocsapp_name_trailing_response"></a>
<h2 id="tocS_app_name_trailing_response">app_name_trailing_response</h2>

```json
{
  "데이터": [
    {
      "개수": 0,
      "이름": "문자열"
    }
  ]
}

```

### 속성

| 이름  | 유형                                                              | 필수의 | 제한 | 설명 |
| --- | --------------------------------------------------------------- | --- | -- | -- |
| 데이터 | [[app_name_trailing_metric](#schemaapp_name_trailing_metric)] | 거짓  | 없음 | 없음 |

<a id="schemaapp_name_trailing_metric"></a>
<a id="schema_app_name_trailing_metric"></a>
<a id="tocSapp_name_trailing_metric"></a>
<a id="tocsapp_name_trailing_metric"></a>
<h2 id="tocS_app_name_trailing_metric">app_name_trailing_metric</h2>

```json
{
  "개수": 0,
  "이름": "문자열"
}

```

### 속성

| 이름 | 유형 | 필수의 | 제한 | 설명 |
| -- | -- | --- | -- | -- |
| 세다 | 정수 | 거짓  | 없음 | 없음 |
| 이름 | 끈  | 거짓  | 없음 | 없음 |

