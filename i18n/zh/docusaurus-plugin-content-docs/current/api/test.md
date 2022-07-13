

<h1 id="api-users">用户</h1>

## 通过关联钱包获取用户id

<a id="opIdGet the User's id by associated wallet"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/users/associated_wallets?id=string 


```

```http
GET AUDIUS_API_HOST/v1/users/associated_wallets?id=string HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/associated_wallets?id=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    控制台.log(body);
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

结果 = RestClient.get 'AUDIUS_API_HOST/v1/users/associated_wallets',
  参数：{
  ' id' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
导入请求
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

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）；

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/associated_wallets', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/associated_wallets?id=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取 /users/associated_wallets`

<h3 id="get-the-user's-id-by-associated-wallet-parameters">查询参数</h3>

| 姓名 | 类型 | 必需的 | 描述       |
| -- | -- | --- | -------- |
| ID | 细绳 | 真的  | 编码的用户 ID |

> 示例响应

> 200 响应

```json
{
  “数据”：{
    “钱包”：[
      “字符串”
    ]，
    “sol_wallets”：[
      “字符串”
    ]
  }
}
```

<h3 id="get-the-user's-id-by-associated-wallet-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                                           |
| --- | ------------------------------------------------------------ | ----- | -------------------------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 成功    | [关联钱包响应](#schemaassociated_wallets_response) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                                         |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                                         |

## 获取用户的关联钱包

<a id="opIdGet the User's associated wallets"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/users/id?associated_wallet=string 


```

```http
GET AUDIUS_API_HOST/v1/users/id?associated_wallet=string HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/id?associated_wallet=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    控制台.log(body);
});

```

```ruby
需要'rest-client'
需要'json'

标头 = {
  'Accept' => 'application/json'
}

结果 = RestClient.get 'AUDIUS_API_HOST/v1/users/id'，
  参数：{
  ' associated_wallet' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
导入请求
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

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）;

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/users/id', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/id?associated_wallet=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取 /users/id`

<h3 id="get-the-user's-associated-wallets-parameters">查询参数</h3>

| 姓名   | 类型 | 必需的 | 描述   |
| ---- | -- | --- | ---- |
| 关联钱包 | 细绳 | 真的  | 钱包地址 |

> 示例响应

> 200 响应

```json
{
  “数据”：{
    “用户ID”：“字符串”
  }
}
```

<h3 id="get-the-user's-associated-wallets-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                                                                          |
| --- | ------------------------------------------------------------ | ----- | --------------------------------------------------------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 成功    | [user_associated_wallet_response](#schemauser_associated_wallet_response) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                                                                        |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                                                                        |

## 搜索用户

<a id="opIdSearch Users"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/users/search?query=Brownies 


```

```http
GET AUDIUS_API_HOST/v1/users/search?query=布朗尼 HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/search?query=Brownies',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    控制台.log(body);
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/search'，
  参数：{
  ' query' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
导入请求
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

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）;

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/users/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/search?query=Brownies");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取/用户/搜索`

*搜索用户*

<h3 id="search-users-parameters">查询参数</h3>

| 姓名                | 类型 | 必需的 | 描述   |
| ----------------- | -- | --- | ---- |
| 询问                | 细绳 | 真的  | 搜索查询 |
| only_downloadable | 细绳 | 错误的 | 没有任何 |

> 示例响应

```json
{
  "data": [
    {
      "album_count": 0,
      "bio": "Makin' 移动 & 让你保持警觉。 
        

        audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
      },
      "followee_count": 19,
      "follower_count": 11141,
      "handle": "TeamBandL",
      "id": "nlGNe",
      ": true,
      "location": "Los Angeles, CA",
      "name": "Brownies & Lemonade",
      "playlist_count": 2,
      "profile_picture": {
        "150x150": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
        "1000x1000": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
      },
      "repost_count": 5,
      "track_count": 4
    }
  ]
}
```

<h3 id="search-users-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                         |
| --- | ------------------------------------------------------------ | ----- | -------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 没有任何  | [用户搜索](#schemauser_search) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                       |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                       |

## 获取用户

<a id="opIdGet User"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe 


```

```http
获取 AUDIUS_API_HOST/v1/users/nlGNe HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body );
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe',
  params: {
  }, headers : 标题

p JSON.parse(result)

```

```python
导入请求
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe', headers = headers)

print(r.json())

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）；

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/users/nlGNe', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/nlGNe");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取/用户/{user_id}`

*获取单个用户*

<h3 id="get-user-parameters">查询参数</h3>

| 姓名   | 类型 | 必需的 | 描述    |
| ---- | -- | --- | ----- |
| 用户身份 | 细绳 | 真的  | 用户 ID |

> 示例响应

```json
{
  "data": {
    "album_count": 0,
    "bio": "Makin' move & 让你保持警觉。 
      

      audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
    },
    "followee_count": 19,
    "follower_count": 11141,
    "handle": "TeamBandL",
    "id": "nlGNe",
    ": true,
    "location": "Los Angeles, CA",
    "name": "Brownies & Lemonade",
    "playlist_count": 2,
    "profile_picture": {
      "150x150": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
      "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
      "1000x1000": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
    },
    "repost_count": 5,
    "track_count": 4
  }
}
```

<h3 id="get-user-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                           |
| --- | ------------------------------------------------------------ | ----- | ---------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 没有任何  | [用户响应](#schemauser_response) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                         |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                         |

## 用户ID

<a id="opIdThe users's ID"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/users/string/challenges 


```

```http
GET AUDIUS_API_HOST/v1/users/string/挑战 HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/string/challenges',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (正文);
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  ' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/string/challenges'，
  参数： {
  }, headers: headers

p JSON.parse(result)

```

```python
导入请求
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/string/challenges', headers = headers)

print(r.json())

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）;

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/users/string/challenges', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/string/challenge");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取/用户/{user_id}/挑战`

<h3 id="the-users's-id-parameters">查询参数</h3>

| 姓名   | 类型 | 必需的 | 描述             |
| ---- | -- | --- | -------------- |
| 显示历史 | 细绳 | 错误的 | 是否显示未激活但已完成的挑战 |
| 用户身份 | 细绳 | 真的  | 没有任何           |

> 示例响应

> 200 响应

```json
{
  “数据”：[
    {
      “挑战ID”：“字符串”，
      “用户ID”：“字符串”，
      “说明符”：“字符串”，
      “is_complete”：真，
      “is_active”：真，
      "is_disbursed": true,
      "current_step_count": 0,
      "max_steps": 0,
      "challenge_type": "string",
      "metadata": {}
    }
  ]
}
```

<h3 id="the-users's-id-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                            |
| --- | ------------------------------------------------------------ | ----- | ----------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 成功    | [获得挑战](#schemaget_challenges) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                          |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                          |

## 获取用户最喜欢的曲目

<a id="opIdGet User's Favorite Tracks"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe/favorites 


```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe/favorites HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe/favorites',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (正文);
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe/favorites',
  参数： {
  }, headers: headers

p JSON.parse(result)

```

```python
导入请求
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe/favorites', headers = headers)

print(r.json())

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）；

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/users/nlGNe/favorites', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/nlGNe/favorites");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取 /users/{user_id}/favorites`

*获取用户收藏的曲目*

<h3 id="get-user's-favorite-tracks-parameters">查询参数</h3>

| 姓名   | 类型 | 必需的 | 描述    |
| ---- | -- | --- | ----- |
| 用户身份 | 细绳 | 真的  | 用户 ID |

> 示例响应

```json
{
  “数据”：[
    {
      “favorite_item_id”：“n3yVD”，
      “favorite_type”：“SaveType.track”，
      “user_id”：“nlGNe”
    }，
    {
      “favorite_item_id”：“nlv5l” ,
      "favorite_type": "SaveType.track",
      "user_id": "nlGNe"
    },
    {
      "favorite_item_id": "ezYKz",
      "favorite_type": "SaveType.track",
      "user_id": “nlGNe”
    }
  ]
}
```

<h3 id="get-user's-favorite-tracks-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                                 |
| --- | ------------------------------------------------------------ | ----- | ---------------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 没有任何  | [收藏夹响应](#schemafavorites_response) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                               |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                               |

## 获取用户的转发

<a id="opIdGet User's Reposts"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/users/string/reposts 


```

```http
GET AUDIUS_API_HOST/v1/users/string/reposts HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/string/reposts',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (正文);
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/string/reposts',
  参数： {
  }, headers: headers

p JSON.parse(result)

```

```python
导入请求
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/string/reposts', headers = headers)

print(r.json())

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）;

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/users/string/reposts', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/string/reposts");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取 /users/{user_id}/reposts`

<h3 id="get-user's-reposts-parameters">查询参数</h3>

| 姓名   | 类型 | 必需的 | 描述    |
| ---- | -- | --- | ----- |
| 用户身份 | 细绳 | 真的  | 用户 ID |
| 限制   | 细绳 | 错误的 | 限制    |
| 抵消   | 细绳 | 错误的 | 抵消    |

> 示例响应

> 200 响应

```json
{
  “数据”：[
    {
      “时间戳”：“字符串”，
      “项目类型”：{}，
      “项目”：{}
    }
  ]
}
```

<h3 id="get-user's-reposts-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                   |
| --- | ------------------------------------------------------------ | ----- | -------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 成功    | [转发](#schemareposts) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                 |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                 |

## 获取用户最常用的曲目标签

<a id="opIdGet User's Most Used Track Tags"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/users/string/tags?user_id=string 


```

```http
GET AUDIUS_API_HOST/v1/users/string/tags?user_id=string HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/string/tags?user_id=string',
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
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/string/tags'，
  参数：{
  'user_id' => 'string'
}，标头：标头

p JSON.parse(result)

```

```python
导入请求
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

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）；

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/users/string/tags', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/string/tags?user_id=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取 /users/{user_id}/标签`

*获取用户轨迹中最常用的标签*

<h3 id="get-user's-most-used-track-tags-parameters">查询参数</h3>

| 姓名   | 类型 | 必需的 | 描述     |
| ---- | -- | --- | ------ |
| 用户身份 | 细绳 | 真的  | 用户 ID  |
| 限制   | 整数 | 错误的 | 标签数量限制 |
| 用户身份 | 细绳 | 真的  | 没有任何   |

> 示例响应

> 200 响应

```json
{
  “数据”：[
    “字符串”
  ]
}
```

<h3 id="get-user's-most-used-track-tags-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                           |
| --- | ------------------------------------------------------------ | ----- | ---------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 成功    | [标签响应](#schematags_response) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                         |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                         |

## 获取用户的轨迹

<a id="opIdGet User's Tracks"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe/tracks 


```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe/tracks HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe/tracks',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (正文);
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe/tracks',
  参数： {
  }, headers: headers

p JSON.parse(result)

```

```python
导入请求
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe/tracks', headers = headers)

print(r.json())

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）;

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/users/nlGNe/tracks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/nlGNe/tracks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取 /users/{user_id}/tracks`

*获取用户的曲目列表*

<h3 id="get-user's-tracks-parameters">查询参数</h3>

| 姓名   | 类型 | 必需的 | 描述    |
| ---- | -- | --- | ----- |
| 用户身份 | 细绳 | 真的  | 用户 ID |
| 限制   | 细绳 | 错误的 | 限制    |
| 抵消   | 细绳 | 错误的 | 抵消    |
| 种类   | 细绳 | 错误的 | 排序模式  |

> 示例响应

```json
{
  “数据”：[
    {
      “艺术品”：{
        “150x150”：“https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg”，
        “480x480”：“https:// creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic 于 19 年 3 月 7 日在 The Shrine 的 Brownies & Lemonade Block Party LA 现场演出。”，
      “流派”：“电子”，
      “id”：“D7KyD”，
      “心情”：“火热”，
      “release_date”：“2019 年 9 月 23 日星期一 12:35:10 GMT-0700”，
      “repost_count”：
      “favorite_count”：
      “标签”：“baauer，partyfavor，browniesandlemonade，live”，
      “ title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin ' 移动 & 让你保持警觉。 
          

          audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "followee_count": 19,
        "follower_count": 11141,
        "handle": "TeamBandL",
        "id": "nlGNe",
        ": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 4
      }
    }
  ]
}
```

<h3 id="get-user's-tracks-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                             |
| --- | ------------------------------------------------------------ | ----- | ------------------------------ |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 没有任何  | [轨道响应](#schematracks_response) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                           |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                           |

<h1 id="api-playlists">播放列表</h1>

## 搜索播放列表

<a id="opIdSearch Playlists"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/playlists/search?query=Hot & 新 


```

```http
GET AUDIUS_API_HOST/v1/playlists/search?query=Hot & 新 HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/playlists/search?query=Hot & New',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    控制台.log(正文);
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/playlists/search',
  参数：{
  ' query' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
导入请求
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/search', params={
  'query': 'Hot & New'
} , 标头 = 标头)

打印(r.json())

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）;

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/playlists/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/playlists/search?query=Hot & New");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取/播放列表/搜索`

*搜索播放列表*

<h3 id="search-playlists-parameters">查询参数</h3>

| 姓名                | 类型 | 必需的 | 描述   |
| ----------------- | -- | --- | ---- |
| 询问                | 细绳 | 真的  | 搜索查询 |
| only_downloadable | 细绳 | 错误的 | 没有任何 |

> 示例响应

```json
{
  “数据”：[
    {
      “艺术品”：{
        “150x150”：“https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/150x150.jpg”，
        “480x480”：“https:// usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg",
        "1000x1000": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg"
      },
      "description": "All the Audius 最新热门新歌！ 享受在 2020 年夏季高峰期间创造的不拘一格的声音。”，
      “id”：“DOPRl”，
      “is_album”：true，
      “playlist_name”：“Hot & New on Audius 🔥”，
      “repost_count ": 46,
      "favorite_count": 88,
      "user": {
        "album_count": 0,
        "bio": "Audius 官方账号！ 创建一个由艺术家、粉丝、 & 个开发者控制的去中心化和开源的流媒体音乐平台。",
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
        "name ": "Audius",
        "playlist_count": 9,
        "profile_picture": {
          "150x150": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f",
          "480x480": "https:// usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f",
          "1000x1000": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f"
        },
        "repost_count": 200,
        "track_count": 0
      }
    }
  ]
}
```

<h3 id="search-playlists-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                                        |
| --- | ------------------------------------------------------------ | ----- | ----------------------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 没有任何  | [播放列表搜索结果](#schemaplaylist_search_result) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                                      |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                                      |

## 热门播放列表

<a id="opIdTrending Playlists"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/playlists/trending/string 


```

```http
GET AUDIUS_API_HOST/v1/playlists/trending/string HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/playlists/trending/string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (正文);
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/playlists/trending/string',
  参数： {
  }, headers: headers

p JSON.parse(result)

```

```python
导入请求
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/trending/string', headers = headers)

print(r.json())

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）；

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/playlists/trending/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/playlists/trending/string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取/播放列表/趋势/{version}`

*在 Audius 上获取时间段内最热门的播放列表*

<h3 id="trending-playlists-parameters">查询参数</h3>

| 姓名 | 类型 | 必需的 | 描述     |
| -- | -- | --- | ------ |
| 时间 | 细绳 | 错误的 | 查询时间范围 |
| 版本 | 细绳 | 真的  | 没有任何   |

> 示例响应

> 200 响应

```json
{
  “数据”：[
    {
      “艺术品”：{
        “150x150”：“字符串”，
        “480x480”：“字符串”，
        “1000x1000”：“字符串”
      }，
      “描述”：“ string",
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
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count" : 0,
        "track_count": 0
      }
    }
  ]
}
```

<h3 id="trending-playlists-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                                             |
| --- | ------------------------------------------------------------ | ----- | ---------------------------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 成功    | [趋势播放列表响应](#schematrending_playlists_response) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                                           |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                                           |

## 获取播放列表

<a id="opIdGet Playlist"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/playlists/DOPRl 


```

```http
GET AUDIUS_API_HOST/v1/playlists/DOPRl HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/playlists/DOPRl',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body );
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/playlists/DOPRl',
  params: {
  }, headers : 标题

p JSON.parse(result)

```

```python
导入请求
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/DOPRl', headers = headers)

print(r.json())

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）;

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/playlists/DOPRl', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/playlists/DOPRl");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取/播放列表/{playlist_id}`

*获取播放列表*

<h3 id="get-playlist-parameters">查询参数</h3>

| 姓名          | 类型 | 必需的 | 描述      |
| ----------- | -- | --- | ------- |
| playlist_id | 细绳 | 真的  | 播放列表 ID |

> 示例响应

```json
{
  “数据”：{
    “艺术作品”：{
      “150x150”：“https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/150x150.jpg”，
      “480x480”：“https://usermetadata. audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg",
      "1000x1000": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg"
    },
    "description": "All the latest hot Audius 上的新曲目！ 享受在 2020 年夏季高峰期间创造的不拘一格的声音。”，
    “id”：“DOPRl”，
    “is_album”：true，
    “playlist_name”：“Hot & New on Audius 🔥”，
    “repost_count ": 46,
    "favorite_count": 88,
    "user": {
      "album_count": 0,
      "bio": "Audius 官方账号！ 创建一个由艺术家、粉丝、 & 个开发者控制的去中心化和开源的流媒体音乐平台。",
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
      "name ": "Audius",
      "playlist_count": 9,
      "profile_picture": {
        "150x150": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f",
        "480x480": "https:// usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f",
        "1000x1000": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f"
      },
      "repost_count": 200,
      "track_count": 0
    }
  }
}
```

<h3 id="get-playlist-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                                 |
| --- | ------------------------------------------------------------ | ----- | ---------------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 没有任何  | [播放列表响应](#schemaplaylist_response) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                               |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                               |

## 获取播放列表曲目

<a id="opIdGet Playlist Tracks"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/playlists/DOPRl/tracks 


```

```http
GET AUDIUS_API_HOST/v1/playlists/DOPRl/tracks HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/playlists/DOPRl/tracks',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (正文);
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/playlists/DOPRl/tracks',
  参数： {
  }, headers: headers

p JSON.parse(result)

```

```python
导入请求
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/DOPRl/tracks', headers = headers)

print(r.json())

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）;

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/playlists/DOPRl/tracks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/playlists/DOPRl/tracks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取 /播放列表/{playlist_id}/曲目`

*获取播放列表中的曲目*

<h3 id="get-playlist-tracks-parameters">查询参数</h3>

| 姓名          | 类型 | 必需的 | 描述      |
| ----------- | -- | --- | ------- |
| playlist_id | 细绳 | 真的  | 播放列表 ID |

> 示例响应

```json
{
  “数据”：[
    {
      “艺术品”：{
        “150x150”：“https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg”，
        “480x480”：“https:// creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic 于 19 年 3 月 7 日在 The Shrine 的 Brownies & Lemonade Block Party LA 现场演出。”，
      “流派”：“电子”，
      “id”：“D7KyD”，
      “心情”：“火热”，
      “release_date”：“2019 年 9 月 23 日星期一 12:35:10 GMT-0700”，
      “repost_count”：
      “favorite_count”：
      “标签”：“baauer，partyfavor，browniesandlemonade，live”，
      “ title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin ' 移动 & 让你保持警觉。 
          

          audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "followee_count": 19,
        "follower_count": 11141,
        "handle": "TeamBandL",
        "id": "nlGNe",
        ": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 4
      }
    }
  ]
}
```

<h3 id="get-playlist-tracks-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                                                            |
| --- | ------------------------------------------------------------ | ----- | ------------------------------------------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 没有任何  | [playlist_tracks_response](#schemaplaylist_tracks_response) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                                                          |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                                                          |

<h1 id="api-tracks">轨道</h1>

## 通过句柄和蛞蝓获取跟踪

<a id="opIdGet Track By Handle and Slug"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/tracks 


```

```http
GET AUDIUS_API_HOST/v1/tracks HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
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
需要'rest-client'
需要'json'

headers = {
  ' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks',
  params: {
  }, headers: headers

p JSON.parse(结果)

```

```python
导入请求
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks', headers = headers)

print(r.json())

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）;

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/tracks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/tracks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http .Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取/曲目`

<h3 id="get-track-by-handle-and-slug-parameters">查询参数</h3>

| 姓名 | 类型 | 必需的 | 描述      |
| -- | -- | --- | ------- |
| 处理 | 细绳 | 错误的 | 一个用户的句柄 |
| 蛞蝓 | 细绳 | 错误的 | 赛道的蛞蝓   |

> 示例响应

> 200 响应

```json
{
  “数据”：{
    “艺术品”：{
      “150x150”：“字符串”，
      “480x480”：“字符串”，
      “1000x1000”：“字符串”
    }，
    “描述”：“字符串” ，
    “流派”：“字符串”，
    “id”：“字符串”，
    “心情”：“字符串”，
    “发布日期”：“字符串”，
    “remix_of”：{
      “曲目”：[
        {
          "parent_track_id": "string"
        }
      ]
    },
    "repost_count": 0,
    "favorite_count": 0,
    "tags": "string",
    "title": "string",
    "用户”：{
      “album_count”：0、24“bio”：“string”、
      “cover_photo”：{
        “640x”：“string”、
      “2000x”：“string”
      }、
        “
      ” : 0,
      "follower_count": 0,
      "handle": "string",
      "id": "string",
      "is_verified": true,
      "location": "string",
      "name": "字符串”，
      “播放列表计数”：
      “profile_picture”：{
        “150x150”：“字符串”，
        “480x480”：“字符串”，
        “1000x1000”：“字符串”
      }，
      “repost_count”： 0,
      "track_count": 0
    },
    "duration": 0,
    "downloadable": true,
    "play_count": 0,
    "permalink": "string"
  }
}
```

<h3 id="get-track-by-handle-and-slug-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                            |
| --- | ------------------------------------------------------------ | ----- | ----------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 成功    | [跟踪响应](#schematrack_response) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                          |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                          |

## 推荐曲目

<a id="opIdRecommended Tracks"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/tracks/recommended/string 


```

```http
GET AUDIUS_API_HOST/v1/tracks/recommended/string HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/tracks/recommended/string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (正文);
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/recommended/string',
  参数： {
  }, headers: headers

p JSON.parse(result)

```

```python
导入请求
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks/recommended/string', headers = headers)

print(r.json())

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）;

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/tracks/recommended/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/tracks/recommended/string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取/曲目/推荐/{version}`

<h3 id="recommended-tracks-parameters">查询参数</h3>

| 姓名   | 类型 | 必需的 | 描述                     |
| ---- | -- | --- | ---------------------- |
| 类型   | 细绳 | 错误的 | 指定流派的推荐热门曲目            |
| 限制   | 细绳 | 错误的 | 要获取的推荐曲目数              |
| 排除列表 | 细绳 | 错误的 | 要排除的轨道 ID 列表           |
| 时间   | 细绳 | 错误的 | 指定时间范围（周、月、所有时间）内的趋势跟踪 |
| 版本   | 细绳 | 真的  | 没有任何                   |

> 示例响应

> 200 响应

```json
{
  “数据”：[
    {
      “艺术品”：{
        “150x150”：“字符串”，
        “480x480”：“字符串”，
        “1000x1000”：“字符串”
      }，
      “描述”：“字符串”，
      “流派”：“字符串”，
      “id”：“字符串”，
      “心情”：“字符串”，
      “发布日期”：“字符串”，
      “remix_of”：{
        “曲目”： [
          {
            "parent_track_id": "string"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "tags": "string",
      "title": "string",
      “用户”：{
        “专辑计数”：0、25“简历”：“字符串”、
        “封面照片”：{
          “640x”：“字符串”、
        “
        ”：“字符串”
          }、
        “ followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name" : "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count ": 0,
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

<h3 id="recommended-tracks-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                             |
| --- | ------------------------------------------------------------ | ----- | ------------------------------ |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 成功    | [轨道响应](#schematracks_response) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                           |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                           |

## 搜索曲目

<a id="opIdSearch Tracks"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/tracks/search?query=baauer b2b 


```

```http
GET AUDIUS_API_HOST/v1/tracks/search?query=baauer b2b HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/tracks/search?query=baauer b2b',
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
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/search',
  params: {
  ' query' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
导入请求
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

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）;

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/tracks/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/tracks/search?query=baauer b2b");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取/曲目/搜索`

*搜索曲目*

<h3 id="search-tracks-parameters">查询参数</h3>

| 姓名                | 类型 | 必需的 | 描述        |
| ----------------- | -- | --- | --------- |
| 询问                | 细绳 | 真的  | 搜索查询      |
| only_downloadable | 细绳 | 错误的 | 仅返回可下载的曲目 |

> 示例响应

```json
{
  “数据”：[
    {
      “艺术品”：{
        “150x150”：“https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg”，
        “480x480”：“https:// creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic 于 19 年 3 月 7 日在 The Shrine 的 Brownies & Lemonade Block Party LA 现场演出。”，
      “流派”：“电子”，
      “id”：“D7KyD”，
      “心情”：“火热”，
      “release_date”：“2019 年 9 月 23 日星期一 12:35:10 GMT-0700”，
      “repost_count”：
      “favorite_count”：
      “标签”：“baauer，partyfavor，browniesandlemonade，live”，
      “ title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin ' 移动 & 让你保持警觉。 
          

          audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "followee_count": 19,
        "follower_count": 11141,
        "handle": "TeamBandL",
        "id": "nlGNe",
        ": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 4
      }
    }
  ]
}
```

<h3 id="search-tracks-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                          |
| --- | ------------------------------------------------------------ | ----- | --------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 没有任何  | [跟踪搜索](#schematrack_search) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                        |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                        |

## 热门曲目

<a id="opIdTrending Tracks"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/tracks/trending/string 


```

```http
GET AUDIUS_API_HOST/v1/tracks/trending/string HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/tracks/trending/string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (正文);
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/trending/string',
  参数： {
  }, headers: headers

p JSON.parse(result)

```

```python
导入请求
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks/trending/string', headers = headers)

print(r.json())

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）；

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/tracks/trending/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/tracks/trending/string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取 /tracks/trending/{version}`

*获取 Audius 上的前 100 首热门（最受欢迎）曲目*

<h3 id="trending-tracks-parameters">查询参数</h3>

| 姓名 | 类型 | 必需的 | 描述                     |
| -- | -- | --- | ---------------------- |
| 类型 | 细绳 | 错误的 | 指定流派的热门曲目              |
| 时间 | 细绳 | 错误的 | 指定时间范围（周、月、所有时间）内的趋势跟踪 |
| 版本 | 细绳 | 真的  | 没有任何                   |

> 示例响应

> 200 响应

```json
{
  “数据”：[
    {
      “艺术品”：{
        “150x150”：“字符串”，
        “480x480”：“字符串”，
        “1000x1000”：“字符串”
      }，
      “描述”：“字符串”，
      “流派”：“字符串”，
      “id”：“字符串”，
      “心情”：“字符串”，
      “发布日期”：“字符串”，
      “remix_of”：{
        “曲目”： [
          {
            "parent_track_id": "string"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "tags": "string",
      "title": "string",
      “用户”：{
        “专辑计数”：0、25“简历”：“字符串”、
        “封面照片”：{
          “640x”：“字符串”、
        “
        ”：“字符串”
          }、
        “ followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name" : "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count ": 0,
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

<h3 id="trending-tracks-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                             |
| --- | ------------------------------------------------------------ | ----- | ------------------------------ |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 成功    | [轨道响应](#schematracks_response) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                           |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                           |

## 获取跟踪

<a id="opIdGet Track"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/tracks/D7KyD 


```

```http
获取 AUDIUS_API_HOST/v1/tracks/D7KyD HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/tracks/D7KyD',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body );
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/D7KyD',
  params: {
  }, headers : 标题

p JSON.parse(result)

```

```python
导入请求
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks/D7KyD', headers = headers)

print(r.json())

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）；

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/tracks/D7KyD', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/tracks/D7KyD");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取/轨道/{track_id}`

*获取曲目*

<h3 id="get-track-parameters">查询参数</h3>

| 姓名       | 类型 | 必需的 | 描述    |
| -------- | -- | --- | ----- |
| track_id | 细绳 | 真的  | 曲目 ID |

> 示例响应

```json
{
  “数据”：{
    “艺术品”：{
      “150x150”：“https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg”，
      “480x480”：“https://creatornode. audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
      "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
    },
    "description": "@baauer b2b @ 19 年 3 月 19 日，在 Brownies & Lemonade Block Party LA 在 The Shrine 的partyfavormusic 现场演出。”，
    个“流派”：“电子”，
    “id”：“D7KyD”，
    “心情”：“火热”，
    “release_date” ": "Mon Sep 23 2019 12:35:10 GMT-0700",
    "repost_count": 47,
    "favorite_count": 143,
    "tags": "baauer,partyfavor,browniesandlemonade,live",
    "title" : "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
    "duration": 5265,
    "user": {
      "album_count": 0,
      "bio": "Makin' move & 让你保持警觉。 
        

        audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
      },
      "followee_count": 19,
      "follower_count": 11141,
      "handle": "TeamBandL",
      "id": "nlGNe",
      ": true,
      "location": "Los Angeles, CA",
      "name": "Brownies & Lemonade",
      "playlist_count": 2,
      "profile_picture": {
        "150x150": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
        "1000x1000": "https:// creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
      },
      "repost_count": 5,
      "track_count": 4
    }
  }
}
```

<h3 id="get-track-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                            |
| --- | ------------------------------------------------------------ | ----- | ----------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 没有任何  | [跟踪响应](#schematrack_response) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                          |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                          |

## 流轨道

<a id="opIdStream Track"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/tracks/D7KyD/stream

```

```http
GET AUDIUS_API_HOST/v1/tracks/D7KyD/stream HTTP/1.1

```

```javascript

fetch('AUDIUS_API_HOST/v1/tracks/D7KyD/stream',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(正文);
});

```

```ruby
需要 'rest-client'
需要 'json'

结果 = RestClient.get 'AUDIUS_API_HOST/v1/tracks/D7KyD/stream'，
  参数： {
  }

p JSON.parse(result)

```

```python
导入请求

r = requests.get('AUDIUS_API_HOST/v1/tracks/D7KyD/stream')

print(r.json())

```

```php
<?php

需要'vendor/autoload.php'；

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/tracks/D7KyD/stream', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/tracks/D7KyD/stream");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/tracks/D7KyD/stream", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取 /tracks/{track_id}/stream`

*获取曲目的可流式 mp3 文件*

此端点接受 Range 标头进行流式传输。 https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests

<h3 id="stream-track-parameters">查询参数</h3>

| 姓名       | 类型 | 必需的 | 描述    |
| -------- | -- | --- | ----- |
| track_id | 细绳 | 真的  | 曲目 ID |

<h3 id="stream-track-responses">回应</h3>

| 地位  | 意义                                                           | 描述     | 架构   |
| --- | ------------------------------------------------------------ | ------ | ---- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 成功     | 没有任何 |
| 216 | 未知                                                           | 部分内容   | 没有任何 |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求  | 没有任何 |
| 416 | [范围不满足](https://tools.ietf.org/html/rfc7233#section-4.4)     | 内容范围无效 | 没有任何 |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误  | 没有任何 |

<h1 id="api-challenges">挑战</h1>

## get_get_undisbursed_challenges

<a id="opIdget_get_undisbursed_challenges"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/挑战/未支付 


```

```http
获取 AUDIUS_API_HOST/v1/challenges/未支付的 HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/challenges/undisbursed',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body );
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/challenges/undisbursed',
  参数: {
  }, headers : 标题

p JSON.parse(result)

```

```python
导入请求
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/challenges/undisbursed', headers = headers)

print(r.json())

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）;

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/challenges/undisbursed', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/challenges/undisbursed");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取/挑战/未支付`

<h3 id="get_get_undisbursed_challenges-parameters">查询参数</h3>

| 姓名      | 类型 | 必需的 | 描述                |
| ------- | -- | --- | ----------------- |
| 限制      | 细绳 | 错误的 | 最大响应挑战数           |
| 抵消      | 细绳 | 错误的 | 查询中最初跳过的挑战数       |
| 完成的区块编号 | 细绳 | 错误的 | 起始区块号以检索已完成的未支付挑战 |

> 示例响应

> 200 响应

```json
{
  “数据”：[
    {
      “挑战ID”：“字符串”，
      “用户ID”：“字符串”，
      “说明符”：“字符串”，
      “数量”：“字符串”，
      “完成的区块编号”： 0
    }
  ]
}
```

<h3 id="get_get_undisbursed_challenges-responses">回应</h3>

| 地位  | 意义                                                           | 描述    | 架构                                      |
| --- | ------------------------------------------------------------ | ----- | --------------------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1)      | 成功    | [未支付的挑战](#schemaundisbursed_challenges) |
| 400 | [错误的请求](https://tools.ietf.org/html/rfc7231#section-6.5.1)   | 错误的请求 | 没有任何                                    |
| 500 | [内部服务器错误](https://tools.ietf.org/html/rfc7231#section-6.6.1) | 服务器错误 | 没有任何                                    |

## 获取证明

<a id="opIdget_attest"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/challenges/string/attest?user_id=string&oracle=string&说明符=string 


```

```http
GET AUDIUS_API_HOST/v1/challenges/string/attest?user_id=string&oracle=string&specifier=string HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
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
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/challenges/string/attest',
  参数：{
  'user_id' => 'string',
'oracle' => 'string',
'specifier' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
导入请求
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

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）；

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/challenges/string/attest', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/challenges/string/attest?user_id=string&oracle=string&specifier=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取/挑战/{challenge_id}/证明`

<h3 id="get_attest-parameters">查询参数</h3>

| 姓名   | 类型 | 必需的 | 描述   |
| ---- | -- | --- | ---- |
| 用户身份 | 细绳 | 真的  | 没有任何 |
| 甲骨文  | 细绳 | 真的  | 没有任何 |
| 说明符  | 细绳 | 真的  | 没有任何 |
| 挑战ID | 细绳 | 真的  | 没有任何 |

> 示例响应

> 200 响应

```json
{
  “数据”：{
    “所有者钱包”：“字符串”，
    “证明”：“字符串”
  }
}
```

<h3 id="get_attest-responses">回应</h3>

| 地位  | 意义                                                      | 描述 | 架构                                                |
| --- | ------------------------------------------------------- | -- | ------------------------------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | [attestation_reponse](#schemaattestation_reponse) |

<h1 id="api-metrics">指标</h1>

## get_trailing_app_name_metrics

<a id="opIdget_trailing_app_name_metrics"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/metrics/app_name/trailing/string 


```

```http
GET AUDIUS_API_HOST/v1/metrics/app_name/trailing/string HTTP/1.1

```

```javascript

const headers = {
  '接受':'application/json'
};

fetch('AUDIUS_API_HOST/v1/metrics/app_name/trailing/string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    控制台.log(body);
});

```

```ruby
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/metrics/app_name/trailing/string',
  参数: {
  }，标头：标头

p JSON.parse(result)

```

```python
导入请求
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/metrics/app_name/trailing/string', headers = headers)

print(r.json( ))

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '应用程序/json',
）;

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/metrics/app_name/trailing/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/metrics/app_name/trailing/string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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

    数据 := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/metrics/app_name/trailing/string", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取 /metrics/app_name/trailing/{time_range}`

*从 matview 获取尾随应用名称指标*

<h3 id="get_trailing_app_name_metrics-parameters">查询参数</h3>

| 姓名   | 类型 | 必需的 | 描述   |
| ---- | -- | --- | ---- |
| 时间范围 | 细绳 | 真的  | 没有任何 |

> 示例响应

> 200 响应

```json
{
  "数据": [
    {
      "计数": 0,
      "名称": "字符串"
    }
  ]
}
```

<h3 id="get_trailing_app_name_metrics-responses">回应</h3>

| 地位  | 意义                                                      | 描述 | 架构                                                                |
| --- | ------------------------------------------------------- | -- | ----------------------------------------------------------------- |
| 200 | [好的](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | [app_name_trailing_response](#schemaapp_name_trailing_response) |

<h1 id="api-resolve">解决</h1>

## 解决

<a id="opIdResolve"></a>

> 代码示例

```shell
curl AUDIUS_API_HOST/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216 


```

```http
GET AUDIUS_API_HOST/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216 HTTP/1.1

```

```javascript

const headers = {
  '接受':'text/plain'
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
需要'rest-client'
需要'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/resolve',
  params: {
  'url' => 'string'
}，标头：标头

p JSON.parse(result)

```

```python
导入请求
headers = {
  'Accept': 'text/plain'
}

r = requests.get('AUDIUS_API_HOST/v1/resolve', params={
  'url': 'https://audius.co/ camouflybeats/hypermantra-86216'
}，标题 = 标题）

打印（r.json（））

```

```php
<?php

需要'vendor/autoload.php'；

$headers = 数组（
    '接受' => '文本/纯文本',
）;

$client = 新 \GuzzleHttp\Client();

// 定义请求体数组。
$request_body = 数组（）；

次尝试 {
    $response = $client->请求('GET','AUDIUS_API_HOST/v1/resolve', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // 处理异常或 api 错误。
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
字符串输入线；
StringBuffer 响应 = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
英寸关闭（）；
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
    req.Header = headers

    client := &http .Client{}
    resp, err := client.Do(req)
    // ...
}

```

`获取/解决`

*解析提供的 Audius 应用 URL 并将其重定向到它所代表的 API 资源 URL*

当您只知道 audius.co URL 时，此端点允许您查找和访问 API 资源。 支持曲目、播放列表和用户。

<h3 id="resolve-parameters">查询参数</h3>

| 姓名 | 类型 | 必需的 | 描述                                        |
| -- | -- | --- | ----------------------------------------- |
| 网址 | 细绳 | 真的  | 要解析的网址。 完整的 URL (https://audius.co) 或绝对路径 |

> 示例响应

> 内部重定向

```
{"HTTP/1.1 302 找到位置":"/v1/tracks/V4W8r"}
```

<h3 id="resolve-responses">回应</h3>

| 地位  | 意义                                                      | 描述    | 架构   |
| --- | ------------------------------------------------------- | ----- | ---- |
| 302 | [成立](https://tools.ietf.org/html/rfc7231#section-6.4.3) | 内部重定向 | 没有任何 |

<h3 id="resolve-responseschema">响应模式</h3>

# 模式

以下是您可以期望从 API 接收的响应格式示例。

<a id="schemauser_response"></a>
<a id="schema_user_response"></a>
<a id="tocSuser_response"></a>
<a id="tocsuser_response"></a>
<h2 id="tocS_user_response">用户响应</h2>

```json
{
  “数据”：{
    “专辑计数”：
    “生物”：“字符串”、
    “封面照片”：{
      “640x”：“字符串”、
      “2000x”：“字符串”
    }、
    "followee_count": 0,
    "followee_count": 0,
    "handle": "string",
    "id": "string",
    "is_verified": true,
    "location": "string",
    "name ": "string",
    "playlist_count": 0,
    "profile_picture": {
      "150x150": "string",
      "480x480": "string",
      "1000x1000": "string"
    },
    " repost_count": 0,
    "track_count": 0
  }
}

```

### 特性

| 姓名 | 类型                | 必需的 | 限制   | 描述   |
| -- | ----------------- | --- | ---- | ---- |
| 数据 | [用户](#schemauser) | 错误的 | 没有任何 | 没有任何 |

<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>
<h2 id="tocS_user">用户</h2>

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
  "handle": "string",
  "id": "string",
  "is_verified": true,
  "location": "string",
  "name": "string",
  "playlist_count": 0,
  "profile_picture": {
    "150x150": "string",
    "480x480": "string",
    "1000x1000": "string"
  },
  "repost_count": 0,
  “track_count”：0
}

```

### 特性

| 姓名              | 类型                                        | 必需的 | 限制   | 描述   |
| --------------- | ----------------------------------------- | --- | ---- | ---- |
| 专辑计数            | 整数                                        | 真的  | 没有任何 | 没有任何 |
| 生物              | 细绳                                        | 错误的 | 没有任何 | 没有任何 |
| 封面照片            | [封面照片](#schemacover_photo)                | 错误的 | 没有任何 | 没有任何 |
| followee_count  | 整数                                        | 真的  | 没有任何 | 没有任何 |
| 追随者计数           | 整数                                        | 真的  | 没有任何 | 没有任何 |
| 处理              | 细绳                                        | 真的  | 没有任何 | 没有任何 |
| ID              | 细绳                                        | 真的  | 没有任何 | 没有任何 |
| is_verified     | 布尔值                                       | 真的  | 没有任何 | 没有任何 |
| 地点              | 细绳                                        | 错误的 | 没有任何 | 没有任何 |
| 姓名              | 细绳                                        | 真的  | 没有任何 | 没有任何 |
| 播放列表计数          | 整数                                        | 真的  | 没有任何 | 没有任何 |
| profile_picture | [profile_picture](#schemaprofile_picture) | 错误的 | 没有任何 | 没有任何 |
| repost_count    | 整数                                        | 真的  | 没有任何 | 没有任何 |
| track_count     | 整数                                        | 真的  | 没有任何 | 没有任何 |

<a id="schemacover_photo"></a>
<a id="schema_cover_photo"></a>
<a id="tocScover_photo"></a>
<a id="tocscover_photo"></a>
<h2 id="tocS_cover_photo">封面照片</h2>

```json
{
  “640x”：“字符串”，
  “2000x”：“字符串”
}

```

### 特性

| 姓名     | 类型 | 必需的 | 限制   | 描述   |
| ------ | -- | --- | ---- | ---- |
| 640x   | 细绳 | 错误的 | 没有任何 | 没有任何 |
| 2000 倍 | 细绳 | 错误的 | 没有任何 | 没有任何 |

<a id="schemaprofile_picture"></a>
<a id="schema_profile_picture"></a>
<a id="tocSprofile_picture"></a>
<a id="tocsprofile_picture"></a>
<h2 id="tocS_profile_picture">profile_picture</h2>

```json
{
  “150x150”：“字符串”，
  “480x480”：“字符串”，
  “1000x1000”：“字符串”
}

```

### 特性

| 姓名        | 类型 | 必需的 | 限制   | 描述   |
| --------- | -- | --- | ---- | ---- |
| 150x150   | 细绳 | 错误的 | 没有任何 | 没有任何 |
| 480x480   | 细绳 | 错误的 | 没有任何 | 没有任何 |
| 1000x1000 | 细绳 | 错误的 | 没有任何 | 没有任何 |

<a id="schematracks_response"></a>
<a id="schema_tracks_response"></a>
<a id="tocStracks_response"></a>
<a id="tocstracks_response"></a>
<h2 id="tocS_tracks_response">轨道响应</h2>

```json
{
  “数据”：[
    {
      “艺术品”：{
        “150x150”：“字符串”，
        “480x480”：“字符串”，
        “1000x1000”：“字符串”
      }，
      “描述”：“字符串”，
      “流派”：“字符串”，
      “id”：“字符串”，
      “心情”：“字符串”，
      “发布日期”：“字符串”，
      “remix_of”：{
        “曲目”： [
          {
            "parent_track_id": "string"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "tags": "string",
      "title": "string",
      “用户”：{
        “专辑计数”：0、25“简历”：“字符串”、
        “封面照片”：{
          “640x”：“字符串”、
        “
        ”：“字符串”
          }、
        “ followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name" : "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count ": 0,
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

### 特性

| 姓名 | 类型                   | 必需的 | 限制   | 描述   |
| -- | -------------------- | --- | ---- | ---- |
| 数据 | [[曲目](#schematrack)] | 错误的 | 没有任何 | 没有任何 |

<a id="schematrack"></a>
<a id="schema_Track"></a>
<a id="tocStrack"></a>
<a id="tocstrack"></a>
<h2 id="tocS_Track">追踪</h2>

```json
{
  “艺术品”：{
    “150x150”：“字符串”，
    “480x480”：“字符串”，
    “1000x1000”：“字符串”
  }，
  “描述”：“字符串”，
  “类型”： “字符串”，
  “id”：“字符串”，
  “心情”：“字符串”，
  “发布日期”：“字符串”，
  “remix_of”：{
    “曲目”：[
      {
        “parent_track_id”： "string"
      }
    ]
  },
  "repost_count": 0,
  "favorite_count": 0,
  "tags": "string",
  "title": "string",
  "user": {
    "专辑计数”：
    “简历”：“字符串”、
    “封面照片”：{
      “640x”：“字符串”、
      “2000x”：“字符串”
    }、
    “
    ”：0、29“follower_count” ": 0,
    "handle": "string",
    "id": "string",
    "is_verified": true,
    "location": "string",
    "name": "string",
    "playlist_count ": 0,
    "profile_picture": {
      "150x150": "string",
      "480x480": "string",
      "1000x1000": "string"
    },
    "repost_count": 0,
    "track_count" : 0
  },
  "持续时间": 0,
  "可下载": true,
  "play_count": 0,
  "permalink": "string"
}

```

### 特性

| 姓名           | 类型                                    | 必需的 | 限制   | 描述   |
| ------------ | ------------------------------------- | --- | ---- | ---- |
| 艺术品          | [track_artwork](#schematrack_artwork) | 错误的 | 没有任何 | 没有任何 |
| 描述           | 细绳                                    | 错误的 | 没有任何 | 没有任何 |
| 类型           | 细绳                                    | 错误的 | 没有任何 | 没有任何 |
| ID           | 细绳                                    | 真的  | 没有任何 | 没有任何 |
| 情绪           | 细绳                                    | 错误的 | 没有任何 | 没有任何 |
| 发布日期         | 细绳                                    | 错误的 | 没有任何 | 没有任何 |
| 混音           | [remix_parent](#schemaremix_parent)   | 错误的 | 没有任何 | 没有任何 |
| repost_count | 整数                                    | 真的  | 没有任何 | 没有任何 |
| 最喜欢的计数       | 整数                                    | 真的  | 没有任何 | 没有任何 |
| 标签           | 细绳                                    | 错误的 | 没有任何 | 没有任何 |
| 标题           | 细绳                                    | 真的  | 没有任何 | 没有任何 |
| 用户           | [用户](#schemauser)                     | 真的  | 没有任何 | 没有任何 |
| 期间           | 整数                                    | 真的  | 没有任何 | 没有任何 |
| 可下载          | 布尔值                                   | 错误的 | 没有任何 | 没有任何 |
| 播放计数         | 整数                                    | 真的  | 没有任何 | 没有任何 |
| 永久链接         | 细绳                                    | 错误的 | 没有任何 | 没有任何 |

<a id="schematrack_artwork"></a>
<a id="schema_track_artwork"></a>
<a id="tocStrack_artwork"></a>
<a id="tocstrack_artwork"></a>
<h2 id="tocS_track_artwork">track_artwork</h2>

```json
{
  “150x150”：“字符串”，
  “480x480”：“字符串”，
  “1000x1000”：“字符串”
}

```

### 特性

| 姓名        | 类型 | 必需的 | 限制   | 描述   |
| --------- | -- | --- | ---- | ---- |
| 150x150   | 细绳 | 错误的 | 没有任何 | 没有任何 |
| 480x480   | 细绳 | 错误的 | 没有任何 | 没有任何 |
| 1000x1000 | 细绳 | 错误的 | 没有任何 | 没有任何 |

<a id="schemaremix_parent"></a>
<a id="schema_remix_parent"></a>
<a id="tocSremix_parent"></a>
<a id="tocsremix_parent"></a>
<h2 id="tocS_remix_parent">remix_parent</h2>

```json
{
  “轨道”：[
    {
      “parent_track_id”：“字符串”
    }
  ]
}

```

### 特性

| 姓名 | 类型                             | 必需的 | 限制   | 描述   |
| -- | ------------------------------ | --- | ---- | ---- |
| 轨道 | [[轨道元素](#schematrack_element)] | 错误的 | 没有任何 | 没有任何 |

<a id="schematrack_element"></a>
<a id="schema_track_element"></a>
<a id="tocStrack_element"></a>
<a id="tocstrack_element"></a>
<h2 id="tocS_track_element">轨道元素</h2>

```json
{
  "parent_track_id": "字符串"
}

```

### 特性

| 姓名                | 类型 | 必需的 | 限制   | 描述   |
| ----------------- | -- | --- | ---- | ---- |
| parent_track_id | 细绳 | 真的  | 没有任何 | 没有任何 |

<a id="schemareposts"></a>
<a id="schema_reposts"></a>
<a id="tocSreposts"></a>
<a id="tocsreposts"></a>
<h2 id="tocS_reposts">转发</h2>

```json
{
  “数据”：[
    {
      “时间戳”：“字符串”，
      “项目类型”：{}，
      “项目”：{}
    }
  ]
}

```

### 特性

| 姓名 | 类型                      | 必需的 | 限制   | 描述   |
| -- | ----------------------- | --- | ---- | ---- |
| 数据 | [[活动](#schemaactivity)] | 错误的 | 没有任何 | 没有任何 |

<a id="schemaactivity"></a>
<a id="schema_activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>
<h2 id="tocS_activity">活动</h2>

```json
{
  “时间戳”：“字符串”，
  “项目类型”：{}，
  “项目”：{}
}

```

### 特性

| 姓名   | 类型 | 必需的 | 限制   | 描述   |
| ---- | -- | --- | ---- | ---- |
| 时间戳  | 细绳 | 错误的 | 没有任何 | 没有任何 |
| 物品种类 | 目的 | 错误的 | 没有任何 | 没有任何 |
| 物品   | 目的 | 错误的 | 没有任何 | 没有任何 |

<a id="schemafavorites_response"></a>
<a id="schema_favorites_response"></a>
<a id="tocSfavorites_response"></a>
<a id="tocsfavorites_response"></a>
<h2 id="tocS_favorites_response">收藏夹响应</h2>

```json
{
  “数据”：[
    {
      “favorite_item_id”：“string”，
      “favorite_type”：“string”，
      “user_id”：“string”
    }
  ]
}

```

### 特性

| 姓名 | 类型                      | 必需的 | 限制   | 描述   |
| -- | ----------------------- | --- | ---- | ---- |
| 数据 | [[喜欢](#schemafavorite)] | 错误的 | 没有任何 | 没有任何 |

<a id="schemafavorite"></a>
<a id="schema_favorite"></a>
<a id="tocSfavorite"></a>
<a id="tocsfavorite"></a>
<h2 id="tocS_favorite">最喜欢的</h2>

```json
{
  "favorite_item_id": "string",
  "favorite_type": "string",
  "user_id": "string"
}

```

### 特性

| 姓名          | 类型 | 必需的 | 限制   | 描述   |
| ----------- | -- | --- | ---- | ---- |
| 最喜欢的item_id | 细绳 | 真的  | 没有任何 | 没有任何 |
| 最喜欢的类型      | 细绳 | 真的  | 没有任何 | 没有任何 |
| 用户身份        | 细绳 | 真的  | 没有任何 | 没有任何 |

<a id="schematags_response"></a>
<a id="schema_tags_response"></a>
<a id="tocStags_response"></a>
<a id="tocstags_response"></a>
<h2 id="tocS_tags_response">标签响应</h2>

```json
{
  “数据”：[
    “字符串”
  ]
}

```

### 特性

| 姓名 | 类型       | 必需的 | 限制   | 描述   |
| -- | -------- | --- | ---- | ---- |
| 数据 | [string] | 错误的 | 没有任何 | 没有任何 |

<a id="schemauser_search"></a>
<a id="schema_user_search"></a>
<a id="tocSuser_search"></a>
<a id="tocsuser_search"></a>
<h2 id="tocS_user_search">用户搜索</h2>

```json
{
  “数据”：[
    {
      “专辑计数”：
      “生物”：“字符串”，
      “封面照片”：{
        “640x”：“字符串”，
        “2000x”：“字符串”
      } ,
      "followee_count": 0,
      "followee_count": 0,
      "handle": "string",
      "id": "string",
      "is_verified": true,
      "location": "string",
      “名称”：“字符串”，
      “播放列表计数”：
      “profile_picture”：{
        “150x150”：“字符串”，
        “480x480”：“字符串”，
        “1000x1000”：“字符串”
      }，
      "repost_count": 0,
      "track_count": 0
    }
  ]
}

```

### 特性

| 姓名 | 类型                  | 必需的 | 限制   | 描述   |
| -- | ------------------- | --- | ---- | ---- |
| 数据 | [[用户](#schemauser)] | 错误的 | 没有任何 | 没有任何 |

<a id="schemaassociated_wallets_response"></a>
<a id="schema_associated_wallets_response"></a>
<a id="tocSassociated_wallets_response"></a>
<a id="tocsassociated_wallets_response"></a>
<h2 id="tocS_associated_wallets_response">关联钱包响应</h2>

```json
{
  “数据”：{
    “钱包”：[
      “字符串”
    ]，
    “sol_wallets”：[
      “字符串”
    ]
  }
}

```

### 特性

| 姓名 | 类型                                | 必需的 | 限制   | 描述   |
| -- | --------------------------------- | --- | ---- | ---- |
| 数据 | [关联钱包](#schemaassociated_wallets) | 错误的 | 没有任何 | 没有任何 |

<a id="schemaassociated_wallets"></a>
<a id="schema_associated_wallets"></a>
<a id="tocSassociated_wallets"></a>
<a id="tocsassociated_wallets"></a>
<h2 id="tocS_associated_wallets">关联钱包</h2>

```json
{
  “钱包”：[
    “字符串”
  ]，
  “sol_wallets”：[
    “字符串”
  ]
}

```

### 特性

| 姓名          | 类型       | 必需的 | 限制   | 描述   |
| ----------- | -------- | --- | ---- | ---- |
| 钱包          | [string] | 真的  | 没有任何 | 没有任何 |
| sol_wallets | [string] | 真的  | 没有任何 | 没有任何 |

<a id="schemauser_associated_wallet_response"></a>
<a id="schema_user_associated_wallet_response"></a>
<a id="tocSuser_associated_wallet_response"></a>
<a id="tocsuser_associated_wallet_response"></a>
<h2 id="tocS_user_associated_wallet_response">user_associated_wallet_response</h2>

```json
{
  “数据”：{
    “用户ID”：“字符串”
  }
}

```

### 特性

| 姓名 | 类型                                | 必需的 | 限制   | 描述   |
| -- | --------------------------------- | --- | ---- | ---- |
| 数据 | [编码的用户ID](#schemaencoded_user_id) | 错误的 | 没有任何 | 没有任何 |

<a id="schemaencoded_user_id"></a>
<a id="schema_encoded_user_id"></a>
<a id="tocSencoded_user_id"></a>
<a id="tocsencoded_user_id"></a>
<h2 id="tocS_encoded_user_id">编码的用户ID</h2>

```json
{
  "user_id": "字符串"
}

```

### 特性

| 姓名   | 类型 | 必需的 | 限制   | 描述   |
| ---- | -- | --- | ---- | ---- |
| 用户身份 | 细绳 | 错误的 | 没有任何 | 没有任何 |

<a id="schemaget_challenges"></a>
<a id="schema_get_challenges"></a>
<a id="tocSget_challenges"></a>
<a id="tocsget_challenges"></a>
<h2 id="tocS_get_challenges">获得挑战</h2>

```json
{
  “数据”：[
    {
      “挑战ID”：“字符串”，
      “用户ID”：“字符串”，
      “说明符”：“字符串”，
      “is_complete”：真，
      “is_active”：真，
      "is_disbursed": true,
      "current_step_count": 0,
      "max_steps": 0,
      "challenge_type": "string",
      "metadata": {}
    }
  ]
}

```

### 特性

| 姓名 | 类型                                  | 必需的 | 限制   | 描述   |
| -- | ----------------------------------- | --- | ---- | ---- |
| 数据 | [[挑战响应](#schemachallenge_response)] | 错误的 | 没有任何 | 没有任何 |

<a id="schemachallenge_response"></a>
<a id="schema_challenge_response"></a>
<a id="tocSchallenge_response"></a>
<a id="tocschallenge_response"></a>
<h2 id="tocS_challenge_response">挑战响应</h2>

```json
{
  “challenge_id”：“string”，
  “user_id”：“string”，
  “说明符”：“string”，
  “is_complete”：true，
  “is_active”：true，
  “is_disbursed”：true，
  "current_step_count": 0,
  "max_steps": 0,
  "challenge_type": "string",
  "metadata": {}
}

```

### 特性

| 姓名                   | 类型  | 必需的 | 限制   | 描述   |
| -------------------- | --- | --- | ---- | ---- |
| 挑战ID                 | 细绳  | 真的  | 没有任何 | 没有任何 |
| 用户身份                 | 细绳  | 真的  | 没有任何 | 没有任何 |
| 说明符                  | 细绳  | 错误的 | 没有任何 | 没有任何 |
| 已经完成                 | 布尔值 | 真的  | 没有任何 | 没有任何 |
| 活跃                   | 布尔值 | 真的  | 没有任何 | 没有任何 |
| is_disbursed         | 布尔值 | 真的  | 没有任何 | 没有任何 |
| current_step_count | 整数  | 错误的 | 没有任何 | 没有任何 |
| 最大步数                 | 整数  | 错误的 | 没有任何 | 没有任何 |
| 挑战类型                 | 细绳  | 真的  | 没有任何 | 没有任何 |
| 元数据                  | 目的  | 真的  | 没有任何 | 没有任何 |

<a id="schemaplaylist_response"></a>
<a id="schema_playlist_response"></a>
<a id="tocSplaylist_response"></a>
<a id="tocsplaylist_response"></a>
<h2 id="tocS_playlist_response">播放列表响应</h2>

```json
{
  “数据”：[
    {
      “艺术品”：{
        “150x150”：“字符串”，
        “480x480”：“字符串”，
        “1000x1000”：“字符串”
      }，
      “描述”：“ string",
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
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count" : 0,
        "track_count": 0
      }
    }
  ]
}

```

### 特性

| 姓名 | 类型                        | 必需的 | 限制   | 描述   |
| -- | ------------------------- | --- | ---- | ---- |
| 数据 | [[播放列表](#schemaplaylist)] | 错误的 | 没有任何 | 没有任何 |

<a id="schemaplaylist"></a>
<a id="schema_playlist"></a>
<a id="tocSplaylist"></a>
<a id="tocsplaylist"></a>
<h2 id="tocS_playlist">播放列表</h2>

```json
{
  “艺术品”：{
    “150x150”：“字符串”，
    “480x480”：“字符串”，
    “1000x1000”：“字符串”
  }，
  “描述”：“字符串”，
  “id”： "string",
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
    "profile_picture": {
      "150x150": "string",
      "480x480": "string",
      "1000x1000": "string"
    },
    "repost_count": 0,
    "track_count": 0
  }
}

```

### 特性

| 姓名                 | 类型                                  | 必需的 | 限制   | 描述   |
| ------------------ | ----------------------------------- | --- | ---- | ---- |
| 艺术品                | [播放列表_艺术品](#schemaplaylist_artwork) | 错误的 | 没有任何 | 没有任何 |
| 描述                 | 细绳                                  | 错误的 | 没有任何 | 没有任何 |
| ID                 | 细绳                                  | 真的  | 没有任何 | 没有任何 |
| 是专辑                | 布尔值                                 | 真的  | 没有任何 | 没有任何 |
| 播放列表名称             | 细绳                                  | 真的  | 没有任何 | 没有任何 |
| repost_count       | 整数                                  | 真的  | 没有任何 | 没有任何 |
| 最喜欢的计数             | 整数                                  | 真的  | 没有任何 | 没有任何 |
| total_play_count | 整数                                  | 真的  | 没有任何 | 没有任何 |
| 用户                 | [用户](#schemauser)                   | 真的  | 没有任何 | 没有任何 |

<a id="schemaplaylist_artwork"></a>
<a id="schema_playlist_artwork"></a>
<a id="tocSplaylist_artwork"></a>
<a id="tocsplaylist_artwork"></a>
<h2 id="tocS_playlist_artwork">播放列表_艺术品</h2>

```json
{
  “150x150”：“字符串”，
  “480x480”：“字符串”，
  “1000x1000”：“字符串”
}

```

### 特性

| 姓名        | 类型 | 必需的 | 限制   | 描述   |
| --------- | -- | --- | ---- | ---- |
| 150x150   | 细绳 | 错误的 | 没有任何 | 没有任何 |
| 480x480   | 细绳 | 错误的 | 没有任何 | 没有任何 |
| 1000x1000 | 细绳 | 错误的 | 没有任何 | 没有任何 |

<a id="schemaplaylist_tracks_response"></a>
<a id="schema_playlist_tracks_response"></a>
<a id="tocSplaylist_tracks_response"></a>
<a id="tocsplaylist_tracks_response"></a>
<h2 id="tocS_playlist_tracks_response">playlist_tracks_response</h2>

```json
{
  “数据”：[
    {
      “艺术品”：{
        “150x150”：“字符串”，
        “480x480”：“字符串”，
        “1000x1000”：“字符串”
      }，
      “描述”：“字符串”，
      “流派”：“字符串”，
      “id”：“字符串”，
      “心情”：“字符串”，
      “发布日期”：“字符串”，
      “remix_of”：{
        “曲目”： [
          {
            "parent_track_id": "string"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "tags": "string",
      "title": "string",
      “用户”：{
        “专辑计数”：0、25“简历”：“字符串”、
        “封面照片”：{
          “640x”：“字符串”、
        “
        ”：“字符串”
          }、
        “ followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name" : "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count ": 0,
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

### 特性

| 姓名 | 类型                   | 必需的 | 限制   | 描述   |
| -- | -------------------- | --- | ---- | ---- |
| 数据 | [[曲目](#schematrack)] | 错误的 | 没有任何 | 没有任何 |

<a id="schemaplaylist_search_result"></a>
<a id="schema_playlist_search_result"></a>
<a id="tocSplaylist_search_result"></a>
<a id="tocsplaylist_search_result"></a>
<h2 id="tocS_playlist_search_result">播放列表搜索结果</h2>

```json
{
  “数据”：[
    {
      “艺术品”：{
        “150x150”：“字符串”，
        “480x480”：“字符串”，
        “1000x1000”：“字符串”
      }，
      “描述”：“ string",
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
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count" : 0,
        "track_count": 0
      }
    }
  ]
}

```

### 特性

| 姓名 | 类型                        | 必需的 | 限制   | 描述   |
| -- | ------------------------- | --- | ---- | ---- |
| 数据 | [[播放列表](#schemaplaylist)] | 错误的 | 没有任何 | 没有任何 |

<a id="schematrending_playlists_response"></a>
<a id="schema_trending_playlists_response"></a>
<a id="tocStrending_playlists_response"></a>
<a id="tocstrending_playlists_response"></a>
<h2 id="tocS_trending_playlists_response">趋势播放列表响应</h2>

```json
{
  “数据”：[
    {
      “艺术品”：{
        “150x150”：“字符串”，
        “480x480”：“字符串”，
        “1000x1000”：“字符串”
      }，
      “描述”：“ string",
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
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count" : 0,
        "track_count": 0
      }
    }
  ]
}

```

### 特性

| 姓名 | 类型                        | 必需的 | 限制   | 描述   |
| -- | ------------------------- | --- | ---- | ---- |
| 数据 | [[播放列表](#schemaplaylist)] | 错误的 | 没有任何 | 没有任何 |

<a id="schematrack_response"></a>
<a id="schema_track_response"></a>
<a id="tocStrack_response"></a>
<a id="tocstrack_response"></a>
<h2 id="tocS_track_response">跟踪响应</h2>

```json
{
  “数据”：{
    “艺术品”：{
      “150x150”：“字符串”，
      “480x480”：“字符串”，
      “1000x1000”：“字符串”
    }，
    “描述”：“字符串” ，
    “流派”：“字符串”，
    “id”：“字符串”，
    “心情”：“字符串”，
    “发布日期”：“字符串”，
    “remix_of”：{
      “曲目”：[
        {
          "parent_track_id": "string"
        }
      ]
    },
    "repost_count": 0,
    "favorite_count": 0,
    "tags": "string",
    "title": "string",
    "用户”：{
      “album_count”：0、24“bio”：“string”、
      “cover_photo”：{
        “640x”：“string”、
      “2000x”：“string”
      }、
        “
      ” : 0,
      "follower_count": 0,
      "handle": "string",
      "id": "string",
      "is_verified": true,
      "location": "string",
      "name": "字符串”，
      “播放列表计数”：
      “profile_picture”：{
        “150x150”：“字符串”，
        “480x480”：“字符串”，
        “1000x1000”：“字符串”
      }，
      “repost_count”： 0,
      "track_count": 0
    },
    "duration": 0,
    "downloadable": true,
    "play_count": 0,
    "permalink": "string"
  }
}

```

### 特性

| 姓名 | 类型                 | 必需的 | 限制   | 描述   |
| -- | ------------------ | --- | ---- | ---- |
| 数据 | [追踪](#schematrack) | 错误的 | 没有任何 | 没有任何 |

<a id="schematrack_search"></a>
<a id="schema_track_search"></a>
<a id="tocStrack_search"></a>
<a id="tocstrack_search"></a>
<h2 id="tocS_track_search">跟踪搜索</h2>

```json
{
  “数据”：[
    {
      “艺术品”：{
        “150x150”：“字符串”，
        “480x480”：“字符串”，
        “1000x1000”：“字符串”
      }，
      “描述”：“字符串”，
      “流派”：“字符串”，
      “id”：“字符串”，
      “心情”：“字符串”，
      “发布日期”：“字符串”，
      “remix_of”：{
        “曲目”： [
          {
            "parent_track_id": "string"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "tags": "string",
      "title": "string",
      “用户”：{
        “专辑计数”：0、25“简历”：“字符串”、
        “封面照片”：{
          “640x”：“字符串”、
        “
        ”：“字符串”
          }、
        “ followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "id": "string",
        "is_verified": true,
        "location": "string",
        "name" : "string",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "string",
          "480x480": "string",
          "1000x1000": "string"
        },
        "repost_count ": 0,
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

### 特性

| 姓名 | 类型                   | 必需的 | 限制   | 描述   |
| -- | -------------------- | --- | ---- | ---- |
| 数据 | [[曲目](#schematrack)] | 错误的 | 没有任何 | 没有任何 |

<a id="schemaattestation_reponse"></a>
<a id="schema_attestation_reponse"></a>
<a id="tocSattestation_reponse"></a>
<a id="tocsattestation_reponse"></a>
<h2 id="tocS_attestation_reponse">attestation_reponse</h2>

```json
{
  “数据”：{
    “所有者钱包”：“字符串”，
    “证明”：“字符串”
  }
}

```

### 特性

| 姓名 | 类型                       | 必需的 | 限制   | 描述   |
| -- | ------------------------ | --- | ---- | ---- |
| 数据 | [证明](#schemaattestation) | 错误的 | 没有任何 | 没有任何 |

<a id="schemaattestation"></a>
<a id="schema_attestation"></a>
<a id="tocSattestation"></a>
<a id="tocsattestation"></a>
<h2 id="tocS_attestation">证明</h2>

```json
{
  "owner_wallet": "string",
  "attestation": "string"
}

```

### 特性

| 姓名           | 类型 | 必需的 | 限制   | 描述   |
| ------------ | -- | --- | ---- | ---- |
| owner_wallet | 细绳 | 真的  | 没有任何 | 没有任何 |
| 证明           | 细绳 | 真的  | 没有任何 | 没有任何 |

<a id="schemaundisbursed_challenges"></a>
<a id="schema_undisbursed_challenges"></a>
<a id="tocSundisbursed_challenges"></a>
<a id="tocsundisbursed_challenges"></a>
<h2 id="tocS_undisbursed_challenges">未支付的挑战</h2>

```json
{
  “数据”：[
    {
      “挑战ID”：“字符串”，
      “用户ID”：“字符串”，
      “说明符”：“字符串”，
      “数量”：“字符串”，
      “完成的区块编号”： 0
    }
  ]
}

```

### 特性

| 姓名 | 类型                                       | 必需的 | 限制   | 描述   |
| -- | ---------------------------------------- | --- | ---- | ---- |
| 数据 | [[未支付的挑战](#schemaundisbursed_challenge)] | 错误的 | 没有任何 | 没有任何 |

<a id="schemaundisbursed_challenge"></a>
<a id="schema_undisbursed_challenge"></a>
<a id="tocSundisbursed_challenge"></a>
<a id="tocsundisbursed_challenge"></a>
<h2 id="tocS_undisbursed_challenge">未支付的挑战</h2>

```json
{
  "challenge_id": "string",
  "user_id": "string",
  "specifier": "string",
  "amount": "string",
  "completed_blocknumber": 0
}

```

### 特性

| 姓名      | 类型 | 必需的 | 限制   | 描述   |
| ------- | -- | --- | ---- | ---- |
| 挑战ID    | 细绳 | 真的  | 没有任何 | 没有任何 |
| 用户身份    | 细绳 | 真的  | 没有任何 | 没有任何 |
| 说明符     | 细绳 | 真的  | 没有任何 | 没有任何 |
| 数量      | 细绳 | 真的  | 没有任何 | 没有任何 |
| 完成的区块编号 | 整数 | 真的  | 没有任何 | 没有任何 |

<a id="schemaapp_name_trailing_response"></a>
<a id="schema_app_name_trailing_response"></a>
<a id="tocSapp_name_trailing_response"></a>
<a id="tocsapp_name_trailing_response"></a>
<h2 id="tocS_app_name_trailing_response">app_name_trailing_response</h2>

```json
{
  "数据": [
    {
      "计数": 0,
      "名称": "字符串"
    }
  ]
}

```

### 特性

| 姓名 | 类型                                                              | 必需的 | 限制   | 描述   |
| -- | --------------------------------------------------------------- | --- | ---- | ---- |
| 数据 | [[app_name_trailing_metric](#schemaapp_name_trailing_metric)] | 错误的 | 没有任何 | 没有任何 |

<a id="schemaapp_name_trailing_metric"></a>
<a id="schema_app_name_trailing_metric"></a>
<a id="tocSapp_name_trailing_metric"></a>
<a id="tocsapp_name_trailing_metric"></a>
<h2 id="tocS_app_name_trailing_metric">app_name_trailing_metric</h2>

```json
{
  "计数": 0,
  "名称": "字符串"
}

```

### 特性

| 姓名 | 类型 | 必需的 | 限制   | 描述   |
| -- | -- | --- | ---- | ---- |
| 数数 | 整数 | 错误的 | 没有任何 | 没有任何 |
| 姓名 | 细绳 | 错误的 | 没有任何 | 没有任何 |

