

<h1 id="api-users">utilisateurs</h1>

## Obtenir l'identifiant de l'utilisateur par portefeuille associé

<a id="opIdGet the User's id by associated wallet"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/users/associated_wallets?id=string 


```

```http
GET AUDIUS_API_HOST/v1/users/associated_wallets?id=chaîne HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

fetch('AUDIUS_API_HOST/v1/users/associated_wallets?id=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console .log(corps);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/associated_wallets',
  paramètres : {
  ' id' => 'chaîne'
}, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
demandes d'importation
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

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/associated_wallets', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/users/associated_wallets?id=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/associated_wallets`

<h3 id="get-the-user's-id-by-associated-wallet-parameters">Paramètres de requête</h3>

| Nom         | Taper                | Obligatoire | La description      |
| ----------- | -------------------- | ----------- | ------------------- |
| identifiant | chaîne de caractères | vrai        | ID utilisateur codé |

> Exemple de réponse

> 200 réponses

```json
{
  "data": {
    "wallets": [
      "string"
    ],
    "sol_wallets": [
      "string"
    ]
  }
}
```

<h3 id="get-the-user's-id-by-associated-wallet-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                                                 |
| ------ | ------------------------------------------------------------------------------ | ----------------- | ---------------------------------------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Succès            | [réponse_portefeuilles_associés](#schemaassociated_wallets_response) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                                                  |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                                                  |

## Obtenir l'identifiant de l'utilisateur par portefeuille associé

<a id="opIdGet the User's associated wallets"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/users/id?associated_wallet=string 


```

```http
GET AUDIUS_API_HOST/v1/users/id?associated_wallet=string HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

fetch('AUDIUS_API_HOST/v1/users/id?associated_wallet=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console .log(corps);
});

```

```ruby
requiert 'rest-client'
requiert 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/id',
  params : {
  ' associate_wallet' => 'string'
}, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
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

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/id', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/users/id?associated_wallet=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /utilisateurs/identifiant`

<h3 id="get-the-user's-associated-wallets-parameters">Paramètres de requête</h3>

| Nom                  | Taper                | Obligatoire | La description          |
| -------------------- | -------------------- | ----------- | ----------------------- |
| portefeuille_associé | chaîne de caractères | vrai        | Adresse du portefeuille |

> Exemple de réponse

> 200 réponses

```json
{
  "données": {
    "id_utilisateur": "chaîne"
  }
}
```

<h3 id="get-the-user's-associated-wallets-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                                                      |
| ------ | ------------------------------------------------------------------------------ | ----------------- | --------------------------------------------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Succès            | [user_associated_wallet_response](#schemauser_associated_wallet_response) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                                                       |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                                                       |

## Recherche d'utilisateurs

<a id="opIdSearch Users"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/users/search?query=Brownies 


```

```http
GET AUDIUS_API_HOST/v1/users/search?query=Brownies HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

fetch('AUDIUS_API_HOST/v1/users/search?query=Brownies',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console .log(corps);
});

```

```ruby
requiert 'rest-client'
requiert 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/search',
  paramètres : {
  ' requête' => 'chaîne'
}, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
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

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essayez {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/users/search?query=Brownies");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /utilisateurs/recherche`

*Recherche d'un utilisateur*

<h3 id="search-users-parameters">Paramètres de requête</h3>

| Nom               | Taper                | Obligatoire | La description       |
| ----------------- | -------------------- | ----------- | -------------------- |
| requête           | chaîne de caractères | vrai        | Requête de recherche |
| only_downloadable | chaîne de caractères | faux        | rien                 |

> Exemple de réponse

```json
{
  "data": [
    {
      "album_count": 0,
      "bio": "Faire &  mouvements pour rester éveillé. linktr.ee/browniesandlemonade",
      "cover_photo": {
        "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
        "2000x": "https://creatornode. audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
      },
      "followee_count": 19,
      "follower_count": 11141,
      "handle": "TeamBandL",
      "id": "nlGNe",
      "is_verified " : vrai,
      "location": "Los Angeles, Californie",
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

<h3 id="search-users-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                      |
| ------ | ------------------------------------------------------------------------------ | ----------------- | ------------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | rien              | [recherche_utilisateur](#schemauser_search) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                       |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                       |

## Accéder à un utilisateur

<a id="opIdGet User"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe 


```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

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
requiert 'rest-client'
requiert 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe',
  paramètres : {
  }, headers : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe', headers = headers)

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/users/nlGNe");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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

`GET /utilisateurs/{user_id}`

*Récupérer un seul utilisateur*

<h3 id="get-user-parameters">Paramètres de requête</h3>

| Nom                       | Taper                | Obligatoire | La description    |
| ------------------------- | -------------------- | ----------- | ----------------- |
| identifiant d'utilisateur | chaîne de caractères | vrai        | Un ID utilisateur |

> Exemple de réponse

```json
{
  "data": {
    "album_count": 0,
    "bio": "Faire &  mouvements pour rester vigilant. linktr.ee/browniesandlemonade",
    "cover_photo": {
      "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
      "2000x": "https://creatornode. audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
    },
    "followee_count": 19,
    "follower_count": 11141,
    "handle": "TeamBandL",
    "id": "nlGNe",
    "is_verified " : vrai,
    "location": "Los Angeles, Californie",
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

<h3 id="get-user-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                |
| ------ | ------------------------------------------------------------------------------ | ----------------- | ------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | rien              | [user_response](#schemauser_response) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                 |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                 |

## ID de l'utilisateur

<a id="opIdThe users's ID"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/users/string/challenges 


```

```http
GET AUDIUS_API_HOST/v1/users/string/challenges HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

fetch('AUDIUS_API_HOST/v1/users/string/challenges',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (corps);
});

```

```ruby
requiert 'rest-client'
requiert 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/string/challenges',
  paramètres : {
  }, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/string/challenges', headers = headers)

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/string/challenges', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/users/string/challenges");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = en-têtes

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /utilisateurs/{user_id}/défis`

<h3 id="the-users's-id-parameters">Paramètres de requête</h3>

| Nom                       | Taper                | Obligatoire | La description                                              |
| ------------------------- | -------------------- | ----------- | ----------------------------------------------------------- |
| show_historical           | chaîne de caractères | faux        | Indique s'il faut afficher les défis inactifs mais terminés |
| identifiant d'utilisateur | chaîne de caractères | vrai        | rien                                                        |

> Exemple de réponse

> 200 réponses

```json
{
  "data": [
    {
      "challenge_id": "string",
      "user_id": "string",
      "specifier": "string",
      "is_complete": vrai,
      "is_active": vrai,
      "is_disbursed": vrai,
      "current_step_count": 0,
      "max_steps": 0,
      "challenge_type": "string",
      "metadata": {}
    }
  ]
}
```

<h3 id="the-users's-id-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                  |
| ------ | ------------------------------------------------------------------------------ | ----------------- | --------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Succès            | [get_challenges](#schemaget_challenges) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                   |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                   |

## Obtenez les titres préférés des utilisateurs

<a id="opIdGet User's Favorite Tracks"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe/favoris 


```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe/favorites HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

fetch('AUDIUS_API_HOST/v1/users/nlGNe/favorites',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (corps);
});

```

```ruby
requiert 'rest-client'
requiert 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe/favorites',
  paramètres : {
  }, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe/favorites', headers = headers)

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe/favorites', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/users/nlGNe/favorites");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /utilisateurs/{user_id}/favoris`

*Récupérer les titres favoris d'un utilisateur*

<h3 id="get-user's-favorite-tracks-parameters">Paramètres de requête</h3>

| Nom                       | Taper                | Obligatoire | La description    |
| ------------------------- | -------------------- | ----------- | ----------------- |
| identifiant d'utilisateur | chaîne de caractères | vrai        | Un ID utilisateur |

> Exemple de réponse

```json
{
  "data": [
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

<h3 id="get-user's-favorite-tracks-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                       |
| ------ | ------------------------------------------------------------------------------ | ----------------- | -------------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | rien              | [favoris_réponse](#schemafavorites_response) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                        |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                        |

## Obtenir les publications de l'utilisateur

<a id="opIdGet User's Reposts"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/users/string/reposts 


```

```http
GET AUDIUS_API_HOST/v1/users/string/reposts HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

fetch('AUDIUS_API_HOST/v1/users/string/reposts',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (corps);
});

```

```ruby
requiert 'rest-client'
requiert 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/string/reposts',
  paramètres : {
  }, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/string/reposts', headers = headers)

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/string/reposts', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/users/string/reposts");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = en-têtes

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /utilisateurs/{user_id}/reposts`

<h3 id="get-user's-reposts-parameters">Paramètres de requête</h3>

| Nom                       | Taper                | Obligatoire | La description    |
| ------------------------- | -------------------- | ----------- | ----------------- |
| identifiant d'utilisateur | chaîne de caractères | vrai        | Un ID utilisateur |
| limite                    | chaîne de caractères | faux        | Limite            |
| décalage                  | chaîne de caractères | faux        | Décalage          |

> Exemple de réponse

> 200 réponses

```json
{
  "données": [
    {
      "horodatage": "chaîne",
      "type_élément": {},
      "élément": {}
    }
  ]
}
```

<h3 id="get-user's-reposts-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                    |
| ------ | ------------------------------------------------------------------------------ | ----------------- | ------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Succès            | [reposts](#schemareposts) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                     |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                     |

## Obtenez les marqueurs de suivi les plus utilisés par les utilisateurs

<a id="opIdGet User's Most Used Track Tags"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/users/string/tags?user_id=string 


```

```http
GET AUDIUS_API_HOST/v1/users/string/tags?user_id=string HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

fetch('AUDIUS_API_HOST/v1/users/string/tags?user_id=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(corps);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/string/tags',
  params : {
  'user_id' => 'string'
}, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
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

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/string/tags', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/users/string/tags?user_id=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = en-têtes

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /utilisateurs/{user_id}/tags`

*Récupérer les marqueurs les plus utilisés dans les pistes d'un utilisateur*

<h3 id="get-user's-most-used-track-tags-parameters">Paramètres de requête</h3>

| Nom                       | Taper                | Obligatoire | La description                  |
| ------------------------- | -------------------- | ----------- | ------------------------------- |
| identifiant d'utilisateur | chaîne de caractères | vrai        | Un ID utilisateur               |
| limite                    | entier               | faux        | Limitation du nombre de balises |
| identifiant d'utilisateur | chaîne de caractères | vrai        | rien                            |

> Exemple de réponse

> 200 réponses

```json
{
  "données": [
    "chaîne"
  ]
}
```

<h3 id="get-user's-most-used-track-tags-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                |
| ------ | ------------------------------------------------------------------------------ | ----------------- | ------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Succès            | [tags_response](#schematags_response) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                 |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                 |

## Obtenir les pistes de l'utilisateur

<a id="opIdGet User's Tracks"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe/tracks 


```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe/tracks HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

fetch('AUDIUS_API_HOST/v1/users/nlGNe/tracks',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (corps);
});

```

```ruby
requiert 'rest-client'
requiert 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe/tracks',
  params : {
  }, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe/tracks', headers = headers)

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe/tracks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/users/nlGNe/tracks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = en-têtes

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /utilisateurs/{user_id}/pistes`

*Récupérer une liste de titres pour un utilisateur*

<h3 id="get-user's-tracks-parameters">Paramètres de requête</h3>

| Nom                       | Taper                | Obligatoire | La description    |
| ------------------------- | -------------------- | ----------- | ----------------- |
| identifiant d'utilisateur | chaîne de caractères | vrai        | Un ID utilisateur |
| limite                    | chaîne de caractères | faux        | Limite            |
| décalage                  | chaîne de caractères | faux        | Décalage          |
| trier                     | chaîne de caractères | faux        | Mode tri          |

> Exemple de réponse

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
        "480x480": "https:// creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic en direct au Brownies & Lemonade Block Party LA au Shrine le 7.3.19.",
      "genre": "Electronic",
      "id": "D7KyD",
      "mood": "Fiery",
      "release_date": "Lun 23 septembre 2019 12:35:10 GMT-0700",
      "repost_count": 47,
      "favorite_count": 143,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      " title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin ' se déplace & vous gardant sur vos orteils. linktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
          "2000x": "https://creatornode. audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "followee_count": 19,
        "follower_count": 11141,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified " : vrai,
        "location": "Los Angeles, Californie",
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
  ]
}
```

<h3 id="get-user's-tracks-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                   |
| ------ | ------------------------------------------------------------------------------ | ----------------- | ---------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | rien              | [pistes_réponse](#schematracks_response) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                    |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                    |

<h1 id="api-playlists">playlists</h1>

## Recherche de playlist

<a id="opIdSearch Playlists"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/playlists/search?query=Hot & Nouveau 


```

```http
GET AUDIUS_API_HOST/v1/playlists/search?query=Hot & Nouveau HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

fetch('AUDIUS_API_HOST/v1/playlists/search?query=Hot & New',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(corps );
});

```

```ruby
requiert 'rest-client'
requiert 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/playlists/search',
  paramètres : {
  ' requête' => 'chaîne'
}, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
en-têtes = {
  'Accepter' : 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/search', params={
  'query' : 'Hot & New'
} , en-têtes = en-têtes)

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/playlists/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/playlists/search?query=Hot & New");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
Réponse StringBuffer = nouveau StringBuffer();
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

`OBTENIR /listes de lecture/recherche`

*Rechercher une playlist*

<h3 id="search-playlists-parameters">Paramètres de requête</h3>

| Nom               | Taper                | Obligatoire | La description       |
| ----------------- | -------------------- | ----------- | -------------------- |
| requête           | chaîne de caractères | vrai        | Requête de recherche |
| only_downloadable | chaîne de caractères | faux        | rien                 |

> Exemple de réponse

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/150x150.jpg",
        "480x480": "https:// usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg",
        "1000x1000": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg"
      },
      "description": "All the dernières nouvelles pistes chaudes sur Audius ! Profitez des sons éclectiques créés au plus fort de cet été 2020.",
      "id": "DOPRl",
      "is_album": true,
      "playlist_name": "Hot & New on Audius 🔥",
      "repost_count " : 46,
      "favorite_count": 88,
      "user": {
        "album_count": 0,
        "bio": "Le compte officiel Audius ! Créer une plateforme de musique en streaming décentralisée et open-source contrôlée par des artistes, des fans, & développeurs.",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count " : 69,
        "follower_count": 6763,
        "handle": "Audius",
        "id": "eJ57D",
        "is_verified": vrai,
        "location": "SF & LA",
        "nom " : "Audius",
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

<h3 id="search-playlists-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                                    |
| ------ | ------------------------------------------------------------------------------ | ----------------- | --------------------------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | rien              | [playlist_search_result](#schemaplaylist_search_result) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                                     |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                                     |

## Playlists populaires

<a id="opIdTrending Playlists"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/playlists/tendance/chaîne 


```

```http
OBTENIR AUDIUS_API_HOST/v1/playlists/tendance/chaîne HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

fetch('AUDIUS_API_HOST/v1/playlists/tendance/string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (corps);
});

```

```ruby
requiert 'rest-client'
requiert 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/playlists/trending/string',
  params : {
  }, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/trending/string', headers = headers)

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/playlists/trending/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/playlists/tendance/string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = en-têtes

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OBTENIR /listes de lecture/tendance/{version}`

*Obtenez les playlists les plus populaires pour une période donnée sur Audius*

<h3 id="trending-playlists-parameters">Paramètres de requête</h3>

| Nom     | Taper                | Obligatoire | La description                 |
| ------- | -------------------- | ----------- | ------------------------------ |
| temps   | chaîne de caractères | faux        | plage de temps pour interroger |
| version | chaîne de caractères | vrai        | rien                           |

> Exemple de réponse

> 200 réponses

```json
{
  "données": [
    {
      "oeuvre": {
        "150x150": "chaîne",
        "480x480": "chaîne",
        "1000x1000": "chaîne"
      },
      "description": " chaîne",
      "id": "chaîne",
      "is_album": vrai,
      "playlist_name": "chaîne",
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
        "followee_count " : 0,
        "follower_count": 0,
        "handle": "chaîne",
        "id": "chaîne",
        "is_verified": vrai,
        "location": "chaîne",
        "nom": "chaîne",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "chaîne",
          "480x480": "chaîne",
          "1000x1000": "chaîne"
        },
        "repost_count" : 0,
        "track_count": 0
      }
    }
  ]
}
```

<h3 id="trending-playlists-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                                              |
| ------ | ------------------------------------------------------------------------------ | ----------------- | ------------------------------------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Succès            | [trending_playlists_response](#schematrending_playlists_response) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                                               |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                                               |

## Récupérer la playlist

<a id="opIdGet Playlist"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/playlists/DOPRl 


```

```http
GET AUDIUS_API_HOST/v1/playlists/DOPRl HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

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
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/playlists/DOPRl',
  params: {
  }, headers : en-têtes

p JSON.parse(résultat)

```

```python
demandes d'importation
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/DOPRl', headers = headers)

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/playlists/DOPRl', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/playlists/DOPRl");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OBTENIR /listes de lecture/{playlist_id}`

*Récupérer une playlist*

<h3 id="get-playlist-parameters">Paramètres de requête</h3>

| Nom         | Taper                | Obligatoire | La description                     |
| ----------- | -------------------- | ----------- | ---------------------------------- |
| playlist_id | chaîne de caractères | vrai        | Un identifiant de liste de lecture |

> Exemple de réponse

```json
{
  "data": {
    "artwork": {
      "150x150": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/150x150.jpg",
      "480x480": "https://usermetadata. audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg",
      "1000x1000": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg"
    },
    "description": "All the latest hot de nouveaux titres sur Audius ! Profitez des sons éclectiques créés au plus fort de cet été 2020.",
    "id": "DOPRl",
    "is_album": true,
    "playlist_name": "Hot & New on Audius 🔥",
    "repost_count " : 46,
    "favorite_count": 88,
    "user": {
      "album_count": 0,
      "bio": "Le compte officiel Audius ! Créer une plateforme de musique en streaming décentralisée et open-source contrôlée par des artistes, des fans, & développeurs.",
      "cover_photo": {
        "640x": "string",
        "2000x": "string"
      },
      "followee_count " : 69,
      "follower_count": 6763,
      "handle": "Audius",
      "id": "eJ57D",
      "is_verified": vrai,
      "location": "SF & LA",
      "nom " : "Audius",
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

<h3 id="get-playlist-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                        |
| ------ | ------------------------------------------------------------------------------ | ----------------- | --------------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | rien              | [playlist_response](#schemaplaylist_response) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                         |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                         |

## Obtenir les pistes de la liste de lecture

<a id="opIdGet Playlist Tracks"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/playlists/DOPRl/tracks 


```

```http
GET AUDIUS_API_HOST/v1/playlists/DOPRl/tracks HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

récupérer('AUDIUS_API_HOST/v1/playlists/DOPRl/tracks',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (corps);
});

```

```ruby
requiert 'rest-client'
requiert 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/playlists/DOPRl/tracks',
  paramètres : {
  }, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/DOPRl/tracks', headers = headers)

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/playlists/DOPRl/tracks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/playlists/DOPRl/tracks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = en-têtes

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OBTENIR /playlists/{playlist_id}/pistes`

*Récupérer ls titres dans une playlist*

<h3 id="get-playlist-tracks-parameters">Paramètres de requête</h3>

| Nom         | Taper                | Obligatoire | La description                     |
| ----------- | -------------------- | ----------- | ---------------------------------- |
| playlist_id | chaîne de caractères | vrai        | Un identifiant de liste de lecture |

> Exemple de réponse

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
        "480x480": "https:// creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic en direct au Brownies & Lemonade Block Party LA au Shrine le 7.3.19.",
      "genre": "Electronic",
      "id": "D7KyD",
      "mood": "Fiery",
      "release_date": "Lun 23 septembre 2019 12:35:10 GMT-0700",
      "repost_count": 47,
      "favorite_count": 143,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      " title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin ' se déplace & vous gardant sur vos orteils. linktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
          "2000x": "https://creatornode. audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "followee_count": 19,
        "follower_count": 11141,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified " : vrai,
        "location": "Los Angeles, Californie",
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
  ]
}
```

<h3 id="get-playlist-tracks-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                                        |
| ------ | ------------------------------------------------------------------------------ | ----------------- | ------------------------------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | rien              | [playlist_tracks_response](#schemaplaylist_tracks_response) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                                         |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                                         |

<h1 id="api-tracks">pistes</h1>

## Obtenir la piste By Handle and Slug

<a id="opIdGet Track By Handle and Slug"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/pistes 


```

```http
GET AUDIUS_API_HOST/v1/tracks HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

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
requiert 'rest-client'
requiert 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks',
  paramètres : {
  }, headers : headers

p JSON.parse (résultat)

```

```python
requêtes d'importation
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks', headers = headers)

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/tracks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = headers

    client := &http .Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pistes`

<h3 id="get-track-by-handle-and-slug-parameters">Paramètres de requête</h3>

| Nom       | Taper                | Obligatoire | La description               |
| --------- | -------------------- | ----------- | ---------------------------- |
| manipuler | chaîne de caractères | faux        | Un identifiant d'utilisateur |
| limace    | chaîne de caractères | faux        | La limace de la piste        |

> Exemple de réponse

> 200 réponses

```json
{
  "data": {
    "artwork": {
      "150x150": "string",
      "480x480": "string",
      "1000x1000": "string"
    },
    "description": "string" ,
    "genre": "string",
    "id": "string",
    "mood": "string",
    "release_date": "string",
    "remix_of": {
      "tracks": [
        {
          "parent_track_id": "chaîne"
        }
      ]
    },
    "repost_count": 0,
    "favorite_count": 0,
    "tags": "chaîne",
    "title": "chaîne",
    " user": {
      "album_count": 0,
      "bio": "string",
      "cover_photo": {
        "640x": "string",
        "2000x": "string"
      },
      "followee_count" : 0,
      "follower_count": 0,
      "handle": "chaîne",
      "id": "chaîne",
      "is_verified": vrai,
      "location": "chaîne",
      "name": " chaîne",
      "playlist_count": 0,
      "profile_picture": {
        "150x150": "chaîne",
        "480x480": "chaîne",
        "1000x1000": "chaîne"
      },
      "repost_count": 0,
      "track_count": 0
    },
    "duration": 0,
    "téléchargeable": vrai,
    "play_count": 0,
    "permalink": "string"
  }
}
```

<h3 id="get-track-by-handle-and-slug-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                  |
| ------ | ------------------------------------------------------------------------------ | ----------------- | --------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Succès            | [track_response](#schematrack_response) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                   |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                   |

## Pistes recommandées

<a id="opIdRecommended Tracks"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/tracks/recommended/string 


```

```http
GET AUDIUS_API_HOST/v1/tracks/recommended/string HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

fetch('AUDIUS_API_HOST/v1/tracks/recommended/string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (corps);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/recommended/string',
  params : {
  }, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks/recommended/string', headers = headers)

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks/recommended/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/tracks/recommended/string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = en-têtes

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pistes/recommandé/{version}`

<h3 id="recommended-tracks-parameters">Paramètres de requête</h3>

| Nom               | Taper                | Obligatoire | La description                                                                      |
| ----------------- | -------------------- | ----------- | ----------------------------------------------------------------------------------- |
| genre             | chaîne de caractères | faux        | Pistes tendance recommandées pour un genre spécifié                                 |
| limite            | chaîne de caractères | faux        | Nombre de pistes recommandées à récupérer                                           |
| liste d'exclusion | chaîne de caractères | faux        | Liste des ID de piste à exclure                                                     |
| temps             | chaîne de caractères | faux        | Suivi des tendances sur une plage de temps spécifiée (semaine, mois, tout le temps) |
| version           | chaîne de caractères | vrai        | rien                                                                                |

> Exemple de réponse

> 200 réponses

```json
{
  "données": [
    {
      "oeuvre": {
        "150x150": "chaîne",
        "480x480": "chaîne",
        "1000x1000": "chaîne"
      },
      "description": " string",
      "genre": "string",
      "id": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": "chaîne"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "tags": "chaîne",
      "title": "chaîne",
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        " followee_count": 0,
        "follower_count": 0,
        "handle": "chaîne",
        "id": "chaîne",
        "is_verified": vrai,
        "location": "chaîne",
        "nom" : "chaîne",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "chaîne",
          "480x480": "chaîne",
          "1000x1000": "chaîne"
        },
        "repost_count " : 0,
        "track_count": 0
      },
      "duration": 0,
      "téléchargeable": vrai,
      "play_count": 0,
      "permalink": "string"
    }
  ]
}
```

<h3 id="recommended-tracks-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                   |
| ------ | ------------------------------------------------------------------------------ | ----------------- | ---------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Succès            | [pistes_réponse](#schematracks_response) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                    |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                    |

## Recherche de pistes

<a id="opIdSearch Tracks"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/tracks/search?query=baauer b2b 


```

```http
GET AUDIUS_API_HOST/v1/tracks/search?query=baauer b2b HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

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
requiert 'rest-client'
requiert 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/search',
  paramètres : {
  ' requête' => 'chaîne'
}, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
demandes d'importation
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

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/tracks/search?query=baauer b2b");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = en-têtes

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pistes/recherche`

*Recherche d'une piste*

<h3 id="search-tracks-parameters">Paramètres de requête</h3>

| Nom               | Taper                | Obligatoire | La description                                 |
| ----------------- | -------------------- | ----------- | ---------------------------------------------- |
| requête           | chaîne de caractères | vrai        | Requête de recherche                           |
| only_downloadable | chaîne de caractères | faux        | Renvoyer uniquement les pistes téléchargeables |

> Exemple de réponse

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
        "480x480": "https:// creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic en direct au Brownies & Lemonade Block Party LA au Shrine le 7.3.19.",
      "genre": "Electronic",
      "id": "D7KyD",
      "mood": "Fiery",
      "release_date": "Lun 23 septembre 2019 12:35:10 GMT-0700",
      "repost_count": 47,
      "favorite_count": 143,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      " title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin ' se déplace & vous gardant sur vos orteils. linktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
          "2000x": "https://creatornode. audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "followee_count": 19,
        "follower_count": 11141,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified " : vrai,
        "location": "Los Angeles, Californie",
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
  ]
}
```

<h3 id="search-tracks-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                              |
| ------ | ------------------------------------------------------------------------------ | ----------------- | ----------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | rien              | [track_search](#schematrack_search) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                               |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                               |

## Pistes populaires

<a id="opIdTrending Tracks"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/tracks/tendance/chaîne 


```

```http
OBTENIR AUDIUS_API_HOST/v1/tracks/tendance/chaîne HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

fetch('AUDIUS_API_HOST/v1/tracks/trending/string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log (corps);
});

```

```ruby
requiert 'rest-client'
requiert 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/trending/string',
  params : {
  }, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks/trending/string', headers = headers)

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks/trending/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/tracks/tendance/string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = en-têtes

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pistes/tendance/{version}`

*Obtenez les 100 pistes les plus populaires sur Audius*

<h3 id="trending-tracks-parameters">Paramètres de requête</h3>

| Nom     | Taper                | Obligatoire | La description                                                                      |
| ------- | -------------------- | ----------- | ----------------------------------------------------------------------------------- |
| genre   | chaîne de caractères | faux        | Pistes tendance pour un genre spécifié                                              |
| temps   | chaîne de caractères | faux        | Suivi des tendances sur une plage de temps spécifiée (semaine, mois, tout le temps) |
| version | chaîne de caractères | vrai        | rien                                                                                |

> Exemple de réponse

> 200 réponses

```json
{
  "données": [
    {
      "oeuvre": {
        "150x150": "chaîne",
        "480x480": "chaîne",
        "1000x1000": "chaîne"
      },
      "description": " string",
      "genre": "string",
      "id": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": "chaîne"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "tags": "chaîne",
      "title": "chaîne",
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        " followee_count": 0,
        "follower_count": 0,
        "handle": "chaîne",
        "id": "chaîne",
        "is_verified": vrai,
        "location": "chaîne",
        "nom" : "chaîne",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "chaîne",
          "480x480": "chaîne",
          "1000x1000": "chaîne"
        },
        "repost_count " : 0,
        "track_count": 0
      },
      "duration": 0,
      "téléchargeable": vrai,
      "play_count": 0,
      "permalink": "string"
    }
  ]
}
```

<h3 id="trending-tracks-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                   |
| ------ | ------------------------------------------------------------------------------ | ----------------- | ---------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Succès            | [pistes_réponse](#schematracks_response) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                    |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                    |

## Obtenir une piste

<a id="opIdGet Track"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/tracks/D7KyD 


```

```http
GET AUDIUS_API_HOST/v1/tracks/D7KyD HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

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
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/D7KyD',
  params: {
  }, headers : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks/D7KyD', headers = headers)

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks/D7KyD', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/tracks/D7KyD");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = en-têtes

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pistes/{track_id}`

*Récupérer une piste*

<h3 id="get-track-parameters">Paramètres de requête</h3>

| Nom      | Taper                | Obligatoire | La description |
| -------- | -------------------- | ----------- | -------------- |
| track_id | chaîne de caractères | vrai        | Un ID de piste |

> Exemple de réponse

```json
{
  "data": {
    "artwork": {
      "150x150": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
      "480x480": "https://creatornode. audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
      "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
    },
    "description": "@baauer b2b @ partyfavormusic live au Brownies & Lemonade Block Party LA au Shrine le 7.3.19.",
    "genre": "Electronic",
    "id": "D7KyD",
    "mood": "Fiery",
    "release_date " : "Lun 23 septembre 2019 12:35:10 GMT-0700",
    "repost_count": 47,
    "favorite_count": 143,
    "tags": "baauer, partyfavor, browniesandlemonade, live",
    "title" : "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
    "duration": 5265,
    "user": {
      "album_count": 0,
      "bio": "Faire des mouvements & vous garder sur vos orteils. linktr.ee/browniesandlemonade",
      "cover_photo": {
        "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
        "2000x": "https://creatornode. audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
      },
      "followee_count": 19,
      "follower_count": 11141,
      "handle": "TeamBandL",
      "id": "nlGNe",
      "is_verified " : vrai,
      "location": "Los Angeles, Californie",
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
}
```

<h3 id="get-track-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                  |
| ------ | ------------------------------------------------------------------------------ | ----------------- | --------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | rien              | [track_response](#schematrack_response) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                   |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                   |

## Piste de streaming

<a id="opIdStream Track"></a>

> Exemple de code

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
    console.log( corps);
});

```

```ruby
nécessite 'rest-client'
nécessite 'json'

résultat = RestClient.get 'AUDIUS_API_HOST/v1/tracks/D7KyD/stream',
  paramètres : {
  }

p JSON.parse (résultat)

```

```python
demandes d'importation

r = requests.get('AUDIUS_API_HOST/v1/tracks/D7KyD/stream')

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks/D7KyD/stream', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/tracks/D7KyD/stream");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/tracks/D7KyD/stream", données)
    req.Header = en-têtes

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pistes/{track_id}/flux`

*Obtenir le fichier mp3 de la piste en streaming*

Ce endpoint accepte l'en-tête Range pour le streaming. https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests

<h3 id="stream-track-parameters">Paramètres de requête</h3>

| Nom      | Taper                | Obligatoire | La description |
| -------- | -------------------- | ----------- | -------------- |
| track_id | chaîne de caractères | vrai        | Un ID de piste |

<h3 id="stream-track-responses">Réponses</h3>

| Statut | Sens                                                                           | La description            | Schéma |
| ------ | ------------------------------------------------------------------------------ | ------------------------- | ------ |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Succès                    | Aucun  |
| 216    | Inconnue                                                                       | Contenu partiel           | Aucun  |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande          | Aucun  |
| 416    | [Plage non satisfaisante](https://tools.ietf.org/html/rfc7233#section-4.4)     | Plage de contenu invalide | Aucun  |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur         | Aucun  |

<h1 id="api-challenges">challenges</h1>

## get_undisbursed_challenges

<a id="opIdget_get_undisbursed_challenges"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/challenges/non décaissé 


```

```http
OBTENIR AUDIUS_API_HOST/v1/challenges/non décaissé HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

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
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/challenges/undisbursed',
  params: {
  }, headers : en-têtes

p JSON.parse(résultat)

```

```python
demandes d'importation
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/challenges/undisbursed', headers = headers)

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/challenges/undisbursed', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/challenges/undisbursed");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = en-têtes

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /défis/non décaissé`

<h3 id="get_get_undisbursed_challenges-parameters">Paramètres de requête</h3>

| Nom                  | Taper                | Obligatoire | La description                                                           |
| -------------------- | -------------------- | ----------- | ------------------------------------------------------------------------ |
| limite               | chaîne de caractères | faux        | Le nombre maximum de défis de réponse                                    |
| décalage             | chaîne de caractères | faux        | Le nombre de défis à ignorer initialement dans la requête                |
| complete_blocknumber | chaîne de caractères | faux        | Numéro de bloc de départ pour récupérer les défis non décaissés terminés |

> Exemple de réponse

> 200 réponses

```json
{
  "data": [
    {
      "challenge_id": "string",
      "user_id": "string",
      "specifier": "string",
      "amount": "string",
      "completed_blocknumber": 0
    }
  ]
}
```

<h3 id="get_get_undisbursed_challenges-responses">Réponses</h3>

| Statut | Sens                                                                           | La description    | Schéma                                               |
| ------ | ------------------------------------------------------------------------------ | ----------------- | ---------------------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | Succès            | [défis_non décaissés](#schemaundisbursed_challenges) |
| 400    | [Mauvaise demande](https://tools.ietf.org/html/rfc7231#section-6.5.1)          | Mauvaise demande  | Aucun                                                |
| 500    | [Erreur interne du serveur](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Erreur du serveur | Aucun                                                |

## get_attest

<a id="opIdget_attest"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/challenges/string/attest?user_id=string&oracle=string&specifier=string 


```

```http
GET AUDIUS_API_HOST/v1/challenges/string/attest?user_id=string&oracle=string&specifier=string HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

récupérer('AUDIUS_API_HOST/v1/challenges/string/attest?user_id=string&oracle=string&specifier=string',
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
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/challenges/string/attest',
  params : {
  'user_id' => 'string',
'oracle' => 'string',
'specifier' => 'string'
}, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
demandes d'importation
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

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/challenges/string/attest', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/challenges/string/attest?user_id=string&oracle=string&specifier=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = en-têtes

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OBTENIR /défis/{challenge_id}/attester`

<h3 id="get_attest-parameters">Paramètres de requête</h3>

| Nom                       | Taper                | Obligatoire | La description |
| ------------------------- | -------------------- | ----------- | -------------- |
| identifiant d'utilisateur | chaîne de caractères | vrai        | rien           |
| oracle                    | chaîne de caractères | vrai        | rien           |
| spécificateur             | chaîne de caractères | vrai        | rien           |
| challenge_id              | chaîne de caractères | vrai        | rien           |

> Exemple de réponse

> 200 réponses

```json
{
  "data": {
    "owner_wallet": "chaîne",
    "attestation": "chaîne"
  }
}
```

<h3 id="get_attest-responses">Réponses</h3>

| Statut | Sens                                                          | La description | Schéma                                            |
| ------ | ------------------------------------------------------------- | -------------- | ------------------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Succès         | [attestation_reponse](#schemaattestation_reponse) |

<h1 id="api-metrics">métriques</h1>

## get_trailing_app_name_metrics

<a id="opIdget_trailing_app_name_metrics"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/metrics/app_name/trailing/string 


```

```http
GET AUDIUS_API_HOST/v1/metrics/app_name/trailing/string HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'application/json'
} ;

fetch('AUDIUS_API_HOST/v1/metrics/app_name/trailing/string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console .log(corps);
});

```

```ruby
nécessite 'rest-client'
nécessite 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/metrics/app_name/trailing/string',
  params : {
  }, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/metrics/app_name/trailing/string', headers = headers)

print(r.json( ))

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'application/json',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/metrics/app_name/trailing/string', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/metrics/app_name/trailing/string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = en-têtes

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /metrics/app_name/trailing/{time_range}`

*Récupère les métriques de nom de l'application depuis matview*

<h3 id="get_trailing_app_name_metrics-parameters">Paramètres de requête</h3>

| Nom                 | Taper                | Obligatoire | La description |
| ------------------- | -------------------- | ----------- | -------------- |
| intervalle de temps | chaîne de caractères | vrai        | rien           |

> Exemple de réponse

> 200 réponses

```json
{
  "données": [
    {
      "compte": 0,
      "nom": "chaîne"
    }
  ]
}
```

<h3 id="get_trailing_app_name_metrics-responses">Réponses</h3>

| Statut | Sens                                                          | La description | Schéma                                                            |
| ------ | ------------------------------------------------------------- | -------------- | ----------------------------------------------------------------- |
| 200    | [D'ACCORD](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Succès         | [app_name_trailing_response](#schemaapp_name_trailing_response) |

<h1 id="api-resolve">résoudre</h1>

## Résoudre

<a id="opIdResolve"></a>

> Exemple de code

```shell
curl AUDIUS_API_HOST/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216 


```

```http
GET AUDIUS_API_HOST/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216 HTTP/1.1

```

```javascript

en-têtes const = {
  'Accepter':'text/plain'
} ;

chercher('AUDIUS_API_HOST/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216',
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
nécessite 'rest-client'
nécessite 'json'

en-têtes = {
  'Accept' => 'text/plain'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/resolve',
  paramètres : {
  'url' => 'chaîne'
}, en-têtes : en-têtes

p JSON.parse(résultat)

```

```python
requêtes d'importation
en-têtes = {
  'Accepter' : 'text/plain'
}

r = requests.get('AUDIUS_API_HOST/v1/resolve', params={
  'url' : 'https://audius.co/ camouflybeats/hypermantra-86216'
}, en-têtes = en-têtes)

print(r.json())

```

```php
<?php

requiert 'vendor/autoload.php';

$headers = array(
    'Accepter' => 'text/plain',
);

$client = nouveau \GuzzleHttp\Client();

// Définit le tableau du corps de la requête.
$request_body = tableau();

essai {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/resolve', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // gère les erreurs d'exception ou d'api.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = nouvelle URL("AUDIUS_API_HOST/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
Ligne d'entrée de chaîne ;
réponse StringBuffer = nouveau StringBuffer();
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
    req.Header = headers

    client := &http .Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OBTENIR / résoudre`

*Résout et redirige l'URL de l'application Audius fournie vers l'URL de la ressource API qu'elle représente*

Ce endpoint vous permet de rechercher et d'accéder aux ressources de l'API lorsque vous ne connaissez que l'URL audius.co. Les pistes, les listes de lecture et les utilisateurs sont pris en charge.

<h3 id="resolve-parameters">Paramètres de requête</h3>

| Nom | Taper                | Obligatoire | La description                                                                                |
| --- | -------------------- | ----------- | --------------------------------------------------------------------------------------------- |
| URL | chaîne de caractères | vrai        | URL à résoudre. Soit une URL entièrement formée (https://audius.co) ou juste le chemin absolu |

> Exemple de réponse

> Redirection interne

```
{"HTTP/1.1 302 Emplacement trouvé":"/v1/tracks/V4W8r"}
```

<h3 id="resolve-responses">Réponses</h3>

| Statut | Sens                                                        | La description      | Schéma |
| ------ | ----------------------------------------------------------- | ------------------- | ------ |
| 302    | [Trouvé](https://tools.ietf.org/html/rfc7231#section-6.4.3) | Redirection interne | Aucun  |

<h3 id="resolve-responseschema">Schéma de réponse</h3>

# Schémas

Voici des exemples de formats de réponse que vous pouvez vous attendre à recevoir de l'API.

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
    "handle": "chaîne",
    "id": "chaîne",
    "is_verified": vrai,
    "location": "chaîne",
    "nom " : "chaîne",
    "playlist_count": 0,
    "profile_picture": {
      "150x150": "chaîne",
      "480x480": "chaîne",
      "1000x1000": "chaîne"
    },
    " repost_count": 0,
    "track_count": 0
  }
}

```

### Propriétés

| Nom         | Taper                      | Obligatoire | Restrictions | La description |
| ----------- | -------------------------- | ----------- | ------------ | -------------- |
| Les données | [utilisateur](#schemauser) | faux        | rien         | rien           |

<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>
<h2 id="tocS_user">utilisateur</h2>

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
  "handle": "chaîne",
  "id": "chaîne",
  "is_verified": vrai,
  "location": "chaîne",
  "name": "chaîne",
  "playlist_count": 0,
  "profile_picture": {
    "150x150": "chaîne",
    "480x480": "chaîne",
    "1000x1000": "chaîne"
  },
  "repost_count": 0,
  "track_count": 0
}

```

### Propriétés

| Nom                 | Taper                                     | Obligatoire | Restrictions | La description |
| ------------------- | ----------------------------------------- | ----------- | ------------ | -------------- |
| album_count         | entier                                    | vrai        | rien         | rien           |
| biologique          | chaîne de caractères                      | faux        | rien         | rien           |
| photo de couverture | [photo de couverture](#schemacover_photo) | faux        | rien         | rien           |
| followee_count      | entier                                    | vrai        | rien         | rien           |
| follower_count      | entier                                    | vrai        | rien         | rien           |
| manipuler           | chaîne de caractères                      | vrai        | rien         | rien           |
| identifiant         | chaîne de caractères                      | vrai        | rien         | rien           |
| est_vérifié         | booléen                                   | vrai        | rien         | rien           |
| emplacement         | chaîne de caractères                      | faux        | rien         | rien           |
| Nom                 | chaîne de caractères                      | vrai        | rien         | rien           |
| playlist_count      | entier                                    | vrai        | rien         | rien           |
| image de profil     | [image de profil](#schemaprofile_picture) | faux        | rien         | rien           |
| repost_count        | entier                                    | vrai        | rien         | rien           |
| track_count         | entier                                    | vrai        | rien         | rien           |

<a id="schemacover_photo"></a>
<a id="schema_cover_photo"></a>
<a id="tocScover_photo"></a>
<a id="tocscover_photo"></a>
<h2 id="tocS_cover_photo">cover_photo</h2>

```json
{
  "640x": "chaîne",
  "2000x": "chaîne"
}

```

### Propriétés

| Nom   | Taper                | Obligatoire | Restrictions | La description |
| ----- | -------------------- | ----------- | ------------ | -------------- |
| 640x  | chaîne de caractères | faux        | rien         | rien           |
| 2000x | chaîne de caractères | faux        | rien         | rien           |

<a id="schemaprofile_picture"></a>
<a id="schema_profile_picture"></a>
<a id="tocSprofile_picture"></a>
<a id="tocsprofile_picture"></a>
<h2 id="tocS_profile_picture">profile_picture</h2>

```json
{
  "150x150": "chaîne",
  "480x480": "chaîne",
  "1000x1000": "chaîne"
}

```

### Propriétés

| Nom       | Taper                | Obligatoire | Restrictions | La description |
| --------- | -------------------- | ----------- | ------------ | -------------- |
| 150x150   | chaîne de caractères | faux        | rien         | rien           |
| 480x480   | chaîne de caractères | faux        | rien         | rien           |
| 1000x1000 | chaîne de caractères | faux        | rien         | rien           |

<a id="schematracks_response"></a>
<a id="schema_tracks_response"></a>
<a id="tocStracks_response"></a>
<a id="tocstracks_response"></a>
<h2 id="tocS_tracks_response">tracks_response</h2>

```json
{
  "données": [
    {
      "oeuvre": {
        "150x150": "chaîne",
        "480x480": "chaîne",
        "1000x1000": "chaîne"
      },
      "description": " string",
      "genre": "string",
      "id": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": "chaîne"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "tags": "chaîne",
      "title": "chaîne",
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        " followee_count": 0,
        "follower_count": 0,
        "handle": "chaîne",
        "id": "chaîne",
        "is_verified": vrai,
        "location": "chaîne",
        "nom" : "chaîne",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "chaîne",
          "480x480": "chaîne",
          "1000x1000": "chaîne"
        },
        "repost_count " : 0,
        "track_count": 0
      },
      "duration": 0,
      "téléchargeable": vrai,
      "play_count": 0,
      "permalink": "string"
    }
  ]
}

```

### Propriétés

| Nom         | Taper                   | Obligatoire | Restrictions | La description |
| ----------- | ----------------------- | ----------- | ------------ | -------------- |
| Les données | [[Piste](#schematrack)] | faux        | rien         | rien           |

<a id="schematrack"></a>
<a id="schema_Track"></a>
<a id="tocStrack"></a>
<a id="tocstrack"></a>
<h2 id="tocS_Track">Pistes</h2>

```json
{
  "illustration": {
    "150x150": "chaîne",
    "480x480": "chaîne",
    "1000x1000": "chaîne"
  },
  "description": "chaîne",
  "genre": "string",
  "id": "string",
  "mood": "string",
  "release_date": "string",
  "remix_of": {
    "tracks": [
      {
        "parent_track_id": "string"
      }
    ]
  },
  "repost_count": 0,
  "favorite_count": 0,
  "tags": "string",
  "title": "string",
  "user": {
    " album_count": 0,
    "bio": "chaîne",
    "cover_photo": {
      "640x": "chaîne",
      "2000x": "chaîne"
    },
    "followee_count": 0,
    "follower_count " : 0,
    "handle": "string",
    "id": "string",
    "is_verified": vrai,
    "location": "string",
    "name": "string",
    "playlist_count " : 0,
    "profile_picture": {
      "150x150": "chaîne",
      "480x480": "chaîne",
      "1000x1000": "chaîne"
    },
    "repost_count": 0,
    "track_count" : 0
  },
  "duration": 0,
  "téléchargeable": vrai,
  "play_count": 0,
  "permalink": "string"
}

```

### Propriétés

| Nom            | Taper                                 | Obligatoire | Restrictions | La description |
| -------------- | ------------------------------------- | ----------- | ------------ | -------------- |
| ouvrages d'art | [track_artwork](#schematrack_artwork) | faux        | rien         | rien           |
| la description | chaîne de caractères                  | faux        | rien         | rien           |
| genre          | chaîne de caractères                  | faux        | rien         | rien           |
| identifiant    | chaîne de caractères                  | vrai        | rien         | rien           |
| ambiance       | chaîne de caractères                  | faux        | rien         | rien           |
| date de sortie | chaîne de caractères                  | faux        | rien         | rien           |
| remix_de       | [remix_parent](#schemaremix_parent)   | faux        | rien         | rien           |
| repost_count   | entier                                | vrai        | rien         | rien           |
| nombre_favoris | entier                                | vrai        | rien         | rien           |
| Mots clés      | chaîne de caractères                  | faux        | rien         | rien           |
| Titre          | chaîne de caractères                  | vrai        | rien         | rien           |
| utilisateur    | [utilisateur](#schemauser)            | vrai        | rien         | rien           |
| durée          | entier                                | vrai        | rien         | rien           |
| téléchargeable | booléen                               | faux        | rien         | rien           |
| play_count     | entier                                | vrai        | rien         | rien           |
| lien permanent | chaîne de caractères                  | faux        | rien         | rien           |

<a id="schematrack_artwork"></a>
<a id="schema_track_artwork"></a>
<a id="tocStrack_artwork"></a>
<a id="tocstrack_artwork"></a>
<h2 id="tocS_track_artwork">track_artwork</h2>

```json
{
  "150x150": "chaîne",
  "480x480": "chaîne",
  "1000x1000": "chaîne"
}

```

### Propriétés

| Nom       | Taper                | Obligatoire | Restrictions | La description |
| --------- | -------------------- | ----------- | ------------ | -------------- |
| 150x150   | chaîne de caractères | faux        | rien         | rien           |
| 480x480   | chaîne de caractères | faux        | rien         | rien           |
| 1000x1000 | chaîne de caractères | faux        | rien         | rien           |

<a id="schemaremix_parent"></a>
<a id="schema_remix_parent"></a>
<a id="tocSremix_parent"></a>
<a id="tocsremix_parent"></a>
<h2 id="tocS_remix_parent">remix_parent</h2>

```json
{
  "pistes": [
    {
      "parent_track_id": "chaîne"
    }
  ]
}

```

### Propriétés

| Nom        | Taper                                   | Obligatoire | Restrictions | La description |
| ---------- | --------------------------------------- | ----------- | ------------ | -------------- |
| des pistes | [[track_element](#schematrack_element)] | faux        | rien         | rien           |

<a id="schematrack_element"></a>
<a id="schema_track_element"></a>
<a id="tocStrack_element"></a>
<a id="tocstrack_element"></a>
<h2 id="tocS_track_element">track_element</h2>

```json
{
  "id_piste_parent": "chaîne"
}

```

### Propriétés

| Nom               | Taper                | Obligatoire | Restrictions | La description |
| ----------------- | -------------------- | ----------- | ------------ | -------------- |
| parent_track_id | chaîne de caractères | vrai        | rien         | rien           |

<a id="schemareposts"></a>
<a id="schema_reposts"></a>
<a id="tocSreposts"></a>
<a id="tocsreposts"></a>
<h2 id="tocS_reposts">repostes</h2>

```json
{
  "données": [
    {
      "horodatage": "chaîne",
      "type_élément": {},
      "élément": {}
    }
  ]
}

```

### Propriétés

| Nom         | Taper                         | Obligatoire | Restrictions | La description |
| ----------- | ----------------------------- | ----------- | ------------ | -------------- |
| Les données | [[activité](#schemaactivity)] | faux        | rien         | rien           |

<a id="schemaactivity"></a>
<a id="schema_activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>
<h2 id="tocS_activity">activité</h2>

```json
{
  "timestamp": "string",
  "item_type": {},
  "item": {}
}

```

### Propriétés

| Nom            | Taper                | Obligatoire | Restrictions | La description |
| -------------- | -------------------- | ----------- | ------------ | -------------- |
| horodatage     | chaîne de caractères | faux        | rien         | rien           |
| type d'élément | objet                | faux        | rien         | rien           |
| Objet          | objet                | faux        | rien         | rien           |

<a id="schemafavorites_response"></a>
<a id="schema_favorites_response"></a>
<a id="tocSfavorites_response"></a>
<a id="tocsfavorites_response"></a>
<h2 id="tocS_favorites_response">favoris_réponse</h2>

```json
{
  "data": [
    {
      "favorite_item_id": "chaîne",
      "favorite_type": "chaîne",
      "user_id": "chaîne"
    }
  ]
}

```

### Propriétés

| Nom         | Taper                       | Obligatoire | Restrictions | La description |
| ----------- | --------------------------- | ----------- | ------------ | -------------- |
| Les données | [[favori](#schemafavorite)] | faux        | rien         | rien           |

<a id="schemafavorite"></a>
<a id="schema_favorite"></a>
<a id="tocSfavorite"></a>
<a id="tocsfavorite"></a>
<h2 id="tocS_favorite">favoris</h2>

```json
{
  "favorite_item_id": "chaîne",
  "favorite_type": "chaîne",
  "user_id": "chaîne"
}

```

### Propriétés

| Nom                       | Taper                | Obligatoire | Restrictions | La description |
| ------------------------- | -------------------- | ----------- | ------------ | -------------- |
| favori_item_id          | chaîne de caractères | vrai        | rien         | rien           |
| type_favori               | chaîne de caractères | vrai        | rien         | rien           |
| identifiant d'utilisateur | chaîne de caractères | vrai        | rien         | rien           |

<a id="schematags_response"></a>
<a id="schema_tags_response"></a>
<a id="tocStags_response"></a>
<a id="tocstags_response"></a>
<h2 id="tocS_tags_response">tags_response</h2>

```json
{
  "données": [
    "chaîne"
  ]
}

```

### Propriétés

| Nom         | Taper    | Obligatoire | Restrictions | La description |
| ----------- | -------- | ----------- | ------------ | -------------- |
| Les données | [string] | faux        | rien         | rien           |

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
      "followee_count": 0,
      "follower_count": 0,
      "handle": "chaîne",
      "id": "chaîne",
      "is_verified": vrai,
      "location": "chaîne",
      "name": "chaîne",
      "playlist_count": 0,
      "profile_picture": {
        "150x150": "chaîne",
        "480x480": "chaîne",
        "1000x1000": "chaîne"
      },
      "repost_count": 0,
      "track_count": 0
    }
  ]
}

```

### Propriétés

| Nom         | Taper                        | Obligatoire | Restrictions | La description |
| ----------- | ---------------------------- | ----------- | ------------ | -------------- |
| Les données | [[utilisateur](#schemauser)] | faux        | rien         | rien           |

<a id="schemaassociated_wallets_response"></a>
<a id="schema_associated_wallets_response"></a>
<a id="tocSassociated_wallets_response"></a>
<a id="tocsassociated_wallets_response"></a>
<h2 id="tocS_associated_wallets_response">associated_wallets_response</h2>

```json
{
  "data": {
    "wallets": [
      "string"
    ],
    "sol_wallets": [
      "string"
    ]
  }
}

```

### Propriétés

| Nom         | Taper                                               | Obligatoire | Restrictions | La description |
| ----------- | --------------------------------------------------- | ----------- | ------------ | -------------- |
| Les données | [associés_portefeuilles](#schemaassociated_wallets) | faux        | rien         | rien           |

<a id="schemaassociated_wallets"></a>
<a id="schema_associated_wallets"></a>
<a id="tocSassociated_wallets"></a>
<a id="tocsassociated_wallets"></a>
<h2 id="tocS_associated_wallets">associated_wallets</h2>

```json
{
  "portefeuilles": [
    "chaîne"
  ],
  "sol_wallets": [
    "chaîne"
  ]
}

```

### Propriétés

| Nom               | Taper    | Obligatoire | Restrictions | La description |
| ----------------- | -------- | ----------- | ------------ | -------------- |
| portefeuilles     | [string] | vrai        | rien         | rien           |
| sol_portefeuilles | [string] | vrai        | rien         | rien           |

<a id="schemauser_associated_wallet_response"></a>
<a id="schema_user_associated_wallet_response"></a>
<a id="tocSuser_associated_wallet_response"></a>
<a id="tocsuser_associated_wallet_response"></a>
<h2 id="tocS_user_associated_wallet_response">user_associated_wallet_response</h2>

```json
{
  "données": {
    "id_utilisateur": "chaîne"
  }
}

```

### Propriétés

| Nom         | Taper                                             | Obligatoire | Restrictions | La description |
| ----------- | ------------------------------------------------- | ----------- | ------------ | -------------- |
| Les données | [id_utilisateur_encodé](#schemaencoded_user_id) | faux        | rien         | rien           |

<a id="schemaencoded_user_id"></a>
<a id="schema_encoded_user_id"></a>
<a id="tocSencoded_user_id"></a>
<a id="tocsencoded_user_id"></a>
<h2 id="tocS_encoded_user_id">id_utilisateur_encodé</h2>

```json
{
  "id_utilisateur": "chaîne"
}

```

### Propriétés

| Nom                       | Taper                | Obligatoire | Restrictions | La description |
| ------------------------- | -------------------- | ----------- | ------------ | -------------- |
| identifiant d'utilisateur | chaîne de caractères | faux        | rien         | rien           |

<a id="schemaget_challenges"></a>
<a id="schema_get_challenges"></a>
<a id="tocSget_challenges"></a>
<a id="tocsget_challenges"></a>
<h2 id="tocS_get_challenges">get_challenges</h2>

```json
{
  "data": [
    {
      "challenge_id": "string",
      "user_id": "string",
      "specifier": "string",
      "is_complete": vrai,
      "is_active": vrai,
      "is_disbursed": vrai,
      "current_step_count": 0,
      "max_steps": 0,
      "challenge_type": "string",
      "metadata": {}
    }
  ]
}

```

### Propriétés

| Nom         | Taper                                       | Obligatoire | Restrictions | La description |
| ----------- | ------------------------------------------- | ----------- | ------------ | -------------- |
| Les données | [[défi_réponse](#schemachallenge_response)] | faux        | rien         | rien           |

<a id="schemachallenge_response"></a>
<a id="schema_challenge_response"></a>
<a id="tocSchallenge_response"></a>
<a id="tocschallenge_response"></a>
<h2 id="tocS_challenge_response">challenge_response</h2>

```json
{
  "challenge_id": "chaîne",
  "user_id": "chaîne",
  "specifier": "chaîne",
  "is_complete": vrai,
  "is_active": vrai,
  "is_disbursed": vrai,
  "current_step_count": 0,
  "max_steps": 0,
  "challenge_type": "string",
  "metadata": {}
}

```

### Propriétés

| Nom                       | Taper                | Obligatoire | Restrictions | La description |
| ------------------------- | -------------------- | ----------- | ------------ | -------------- |
| challenge_id              | chaîne de caractères | vrai        | rien         | rien           |
| identifiant d'utilisateur | chaîne de caractères | vrai        | rien         | rien           |
| spécificateur             | chaîne de caractères | faux        | rien         | rien           |
| est complet               | booléen              | vrai        | rien         | rien           |
| c'est actif               | booléen              | vrai        | rien         | rien           |
| est_décaissé              | booléen              | vrai        | rien         | rien           |
| current_step_count      | entier               | faux        | rien         | rien           |
| max_steps                 | entier               | faux        | rien         | rien           |
| défi_type                 | chaîne de caractères | vrai        | rien         | rien           |
| métadonnées               | objet                | vrai        | rien         | rien           |

<a id="schemaplaylist_response"></a>
<a id="schema_playlist_response"></a>
<a id="tocSplaylist_response"></a>
<a id="tocsplaylist_response"></a>
<h2 id="tocS_playlist_response">playlist_response</h2>

```json
{
  "données": [
    {
      "oeuvre": {
        "150x150": "chaîne",
        "480x480": "chaîne",
        "1000x1000": "chaîne"
      },
      "description": " chaîne",
      "id": "chaîne",
      "is_album": vrai,
      "playlist_name": "chaîne",
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
        "followee_count " : 0,
        "follower_count": 0,
        "handle": "chaîne",
        "id": "chaîne",
        "is_verified": vrai,
        "location": "chaîne",
        "nom": "chaîne",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "chaîne",
          "480x480": "chaîne",
          "1000x1000": "chaîne"
        },
        "repost_count" : 0,
        "track_count": 0
      }
    }
  ]
}

```

### Propriétés

| Nom         | Taper                                 | Obligatoire | Restrictions | La description |
| ----------- | ------------------------------------- | ----------- | ------------ | -------------- |
| Les données | [[liste de lecture](#schemaplaylist)] | faux        | rien         | rien           |

<a id="schemaplaylist"></a>
<a id="schema_playlist"></a>
<a id="tocSplaylist"></a>
<a id="tocsplaylist"></a>
<h2 id="tocS_playlist">playlists</h2>

```json
{
  "illustration": {
    "150x150": "chaîne",
    "480x480": "chaîne",
    "1000x1000": "chaîne"
  },
  "description": "chaîne",
  "id": "string",
  "is_album": vrai,
  "playlist_name": "string",
  "repost_count": 0,
  "favorite_count": 0,
  "total_play_count": 0,
  "user": {
    "album_count" " : 0,
    "bio": "chaîne",
    "cover_photo": {
      "640x": "chaîne",
      "2000x": "chaîne"
    },
    "followee_count": 0,
    "follower_count" : 0,
    "handle": "string",
    "id": "string",
    "is_verified": vrai,
    "location": "string",
    "name": "string",
    "playlist_count" : 0,
    "profile_picture": {
      "150x150": "chaîne",
      "480x480": "chaîne",
      "1000x1000": "chaîne"
    },
    "repost_count": 0,
    "track_count": 0
  }
}

```

### Propriétés

| Nom                  | Taper                                       | Obligatoire | Restrictions | La description |
| -------------------- | ------------------------------------------- | ----------- | ------------ | -------------- |
| ouvrages d'art       | [playlist_artwork](#schemaplaylist_artwork) | faux        | rien         | rien           |
| la description       | chaîne de caractères                        | faux        | rien         | rien           |
| identifiant          | chaîne de caractères                        | vrai        | rien         | rien           |
| est_album            | booléen                                     | vrai        | rien         | rien           |
| nom_liste_de_liste | chaîne de caractères                        | vrai        | rien         | rien           |
| repost_count         | entier                                      | vrai        | rien         | rien           |
| nombre_favoris       | entier                                      | vrai        | rien         | rien           |
| total_play_count   | entier                                      | vrai        | rien         | rien           |
| utilisateur          | [utilisateur](#schemauser)                  | vrai        | rien         | rien           |

<a id="schemaplaylist_artwork"></a>
<a id="schema_playlist_artwork"></a>
<a id="tocSplaylist_artwork"></a>
<a id="tocsplaylist_artwork"></a>
<h2 id="tocS_playlist_artwork">playlist_artwork</h2>

```json
{
  "150x150": "chaîne",
  "480x480": "chaîne",
  "1000x1000": "chaîne"
}

```

### Propriétés

| Nom       | Taper                | Obligatoire | Restrictions | La description |
| --------- | -------------------- | ----------- | ------------ | -------------- |
| 150x150   | chaîne de caractères | faux        | rien         | rien           |
| 480x480   | chaîne de caractères | faux        | rien         | rien           |
| 1000x1000 | chaîne de caractères | faux        | rien         | rien           |

<a id="schemaplaylist_tracks_response"></a>
<a id="schema_playlist_tracks_response"></a>
<a id="tocSplaylist_tracks_response"></a>
<a id="tocsplaylist_tracks_response"></a>
<h2 id="tocS_playlist_tracks_response">playlist_tracks_response</h2>

```json
{
  "données": [
    {
      "oeuvre": {
        "150x150": "chaîne",
        "480x480": "chaîne",
        "1000x1000": "chaîne"
      },
      "description": " string",
      "genre": "string",
      "id": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": "chaîne"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "tags": "chaîne",
      "title": "chaîne",
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        " followee_count": 0,
        "follower_count": 0,
        "handle": "chaîne",
        "id": "chaîne",
        "is_verified": vrai,
        "location": "chaîne",
        "nom" : "chaîne",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "chaîne",
          "480x480": "chaîne",
          "1000x1000": "chaîne"
        },
        "repost_count " : 0,
        "track_count": 0
      },
      "duration": 0,
      "téléchargeable": vrai,
      "play_count": 0,
      "permalink": "string"
    }
  ]
}

```

### Propriétés

| Nom         | Taper                   | Obligatoire | Restrictions | La description |
| ----------- | ----------------------- | ----------- | ------------ | -------------- |
| Les données | [[Piste](#schematrack)] | faux        | rien         | rien           |

<a id="schemaplaylist_search_result"></a>
<a id="schema_playlist_search_result"></a>
<a id="tocSplaylist_search_result"></a>
<a id="tocsplaylist_search_result"></a>
<h2 id="tocS_playlist_search_result">playlist_search_result</h2>

```json
{
  "données": [
    {
      "oeuvre": {
        "150x150": "chaîne",
        "480x480": "chaîne",
        "1000x1000": "chaîne"
      },
      "description": " chaîne",
      "id": "chaîne",
      "is_album": vrai,
      "playlist_name": "chaîne",
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
        "followee_count " : 0,
        "follower_count": 0,
        "handle": "chaîne",
        "id": "chaîne",
        "is_verified": vrai,
        "location": "chaîne",
        "nom": "chaîne",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "chaîne",
          "480x480": "chaîne",
          "1000x1000": "chaîne"
        },
        "repost_count" : 0,
        "track_count": 0
      }
    }
  ]
}

```

### Propriétés

| Nom         | Taper                                 | Obligatoire | Restrictions | La description |
| ----------- | ------------------------------------- | ----------- | ------------ | -------------- |
| Les données | [[liste de lecture](#schemaplaylist)] | faux        | rien         | rien           |

<a id="schematrending_playlists_response"></a>
<a id="schema_trending_playlists_response"></a>
<a id="tocStrending_playlists_response"></a>
<a id="tocstrending_playlists_response"></a>
<h2 id="tocS_trending_playlists_response">trending_playlists_response</h2>

```json
{
  "données": [
    {
      "oeuvre": {
        "150x150": "chaîne",
        "480x480": "chaîne",
        "1000x1000": "chaîne"
      },
      "description": " chaîne",
      "id": "chaîne",
      "is_album": vrai,
      "playlist_name": "chaîne",
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
        "followee_count " : 0,
        "follower_count": 0,
        "handle": "chaîne",
        "id": "chaîne",
        "is_verified": vrai,
        "location": "chaîne",
        "nom": "chaîne",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "chaîne",
          "480x480": "chaîne",
          "1000x1000": "chaîne"
        },
        "repost_count" : 0,
        "track_count": 0
      }
    }
  ]
}

```

### Propriétés

| Nom         | Taper                                 | Obligatoire | Restrictions | La description |
| ----------- | ------------------------------------- | ----------- | ------------ | -------------- |
| Les données | [[liste de lecture](#schemaplaylist)] | faux        | rien         | rien           |

<a id="schematrack_response"></a>
<a id="schema_track_response"></a>
<a id="tocStrack_response"></a>
<a id="tocstrack_response"></a>
<h2 id="tocS_track_response">track_response</h2>

```json
{
  "data": {
    "artwork": {
      "150x150": "string",
      "480x480": "string",
      "1000x1000": "string"
    },
    "description": "string" ,
    "genre": "string",
    "id": "string",
    "mood": "string",
    "release_date": "string",
    "remix_of": {
      "tracks": [
        {
          "parent_track_id": "chaîne"
        }
      ]
    },
    "repost_count": 0,
    "favorite_count": 0,
    "tags": "chaîne",
    "title": "chaîne",
    " user": {
      "album_count": 0,
      "bio": "string",
      "cover_photo": {
        "640x": "string",
        "2000x": "string"
      },
      "followee_count" : 0,
      "follower_count": 0,
      "handle": "chaîne",
      "id": "chaîne",
      "is_verified": vrai,
      "location": "chaîne",
      "name": " chaîne",
      "playlist_count": 0,
      "profile_picture": {
        "150x150": "chaîne",
        "480x480": "chaîne",
        "1000x1000": "chaîne"
      },
      "repost_count": 0,
      "track_count": 0
    },
    "duration": 0,
    "téléchargeable": vrai,
    "play_count": 0,
    "permalink": "string"
  }
}

```

### Propriétés

| Nom         | Taper                  | Obligatoire | Restrictions | La description |
| ----------- | ---------------------- | ----------- | ------------ | -------------- |
| Les données | [Pister](#schematrack) | faux        | rien         | rien           |

<a id="schematrack_search"></a>
<a id="schema_track_search"></a>
<a id="tocStrack_search"></a>
<a id="tocstrack_search"></a>
<h2 id="tocS_track_search">track_search</h2>

```json
{
  "données": [
    {
      "oeuvre": {
        "150x150": "chaîne",
        "480x480": "chaîne",
        "1000x1000": "chaîne"
      },
      "description": " string",
      "genre": "string",
      "id": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": "chaîne"
          }
        ]
      },
      "repost_count": 0,
      "favorite_count": 0,
      "tags": "chaîne",
      "title": "chaîne",
      "user": {
        "album_count": 0,
        "bio": "string",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        " followee_count": 0,
        "follower_count": 0,
        "handle": "chaîne",
        "id": "chaîne",
        "is_verified": vrai,
        "location": "chaîne",
        "nom" : "chaîne",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "chaîne",
          "480x480": "chaîne",
          "1000x1000": "chaîne"
        },
        "repost_count " : 0,
        "track_count": 0
      },
      "duration": 0,
      "téléchargeable": vrai,
      "play_count": 0,
      "permalink": "string"
    }
  ]
}

```

### Propriétés

| Nom         | Taper                   | Obligatoire | Restrictions | La description |
| ----------- | ----------------------- | ----------- | ------------ | -------------- |
| Les données | [[Piste](#schematrack)] | faux        | rien         | rien           |

<a id="schemaattestation_reponse"></a>
<a id="schema_attestation_reponse"></a>
<a id="tocSattestation_reponse"></a>
<a id="tocsattestation_reponse"></a>
<h2 id="tocS_attestation_reponse">attestation_reponse</h2>

```json
{
  "data": {
    "owner_wallet": "chaîne",
    "attestation": "chaîne"
  }
}

```

### Propriétés

| Nom         | Taper                             | Obligatoire | Restrictions | La description |
| ----------- | --------------------------------- | ----------- | ------------ | -------------- |
| Les données | [attestation](#schemaattestation) | faux        | rien         | rien           |

<a id="schemaattestation"></a>
<a id="schema_attestation"></a>
<a id="tocSattestation"></a>
<a id="tocsattestation"></a>
<h2 id="tocS_attestation">attestation</h2>

```json
{
  "owner_wallet": "chaîne",
  "attestation": "chaîne"
}

```

### Propriétés

| Nom          | Taper                | Obligatoire | Restrictions | La description |
| ------------ | -------------------- | ----------- | ------------ | -------------- |
| owner_wallet | chaîne de caractères | vrai        | rien         | rien           |
| attestation  | chaîne de caractères | vrai        | rien         | rien           |

<a id="schemaundisbursed_challenges"></a>
<a id="schema_undisbursed_challenges"></a>
<a id="tocSundisbursed_challenges"></a>
<a id="tocsundisbursed_challenges"></a>
<h2 id="tocS_undisbursed_challenges">défis_non décaissés</h2>

```json
{
  "data": [
    {
      "challenge_id": "string",
      "user_id": "string",
      "specifier": "string",
      "amount": "string",
      "completed_blocknumber": 0
    }
  ]
}

```

### Propriétés

| Nom         | Taper                                                  | Obligatoire | Restrictions | La description |
| ----------- | ------------------------------------------------------ | ----------- | ------------ | -------------- |
| Les données | [[undisbured_challenge](#schemaundisbursed_challenge)] | faux        | rien         | rien           |

<a id="schemaundisbursed_challenge"></a>
<a id="schema_undisbursed_challenge"></a>
<a id="tocSundisbursed_challenge"></a>
<a id="tocsundisbursed_challenge"></a>
<h2 id="tocS_undisbursed_challenge">undisbured_challenge</h2>

```json
{
  "challenge_id": "string",
  "user_id": "string",
  "specifier": "string",
  "amount": "string",
  "completed_blocknumber": 0
}

```

### Propriétés

| Nom                       | Taper                | Obligatoire | Restrictions | La description |
| ------------------------- | -------------------- | ----------- | ------------ | -------------- |
| challenge_id              | chaîne de caractères | vrai        | rien         | rien           |
| identifiant d'utilisateur | chaîne de caractères | vrai        | rien         | rien           |
| spécificateur             | chaîne de caractères | vrai        | rien         | rien           |
| montant                   | chaîne de caractères | vrai        | rien         | rien           |
| complete_blocknumber      | entier               | vrai        | rien         | rien           |

<a id="schemaapp_name_trailing_response"></a>
<a id="schema_app_name_trailing_response"></a>
<a id="tocSapp_name_trailing_response"></a>
<a id="tocsapp_name_trailing_response"></a>
<h2 id="tocS_app_name_trailing_response">app_name_trailing_response</h2>

```json
{
  "données": [
    {
      "compte": 0,
      "nom": "chaîne"
    }
  ]
}

```

### Propriétés

| Nom         | Taper                                                           | Obligatoire | Restrictions | La description |
| ----------- | --------------------------------------------------------------- | ----------- | ------------ | -------------- |
| Les données | [[app_name_trailing_metric](#schemaapp_name_trailing_metric)] | faux        | rien         | rien           |

<a id="schemaapp_name_trailing_metric"></a>
<a id="schema_app_name_trailing_metric"></a>
<a id="tocSapp_name_trailing_metric"></a>
<a id="tocsapp_name_trailing_metric"></a>
<h2 id="tocS_app_name_trailing_metric">app_name_trailing_metric</h2>

```json
{
  "compte": 0,
  "nom": "chaîne"
}

```

### Propriétés

| Nom     | Taper                | Obligatoire | Restrictions | La description |
| ------- | -------------------- | ----------- | ------------ | -------------- |
| compter | entier               | faux        | rien         | rien           |
| Nom     | chaîne de caractères | faux        | rien         | rien           |

