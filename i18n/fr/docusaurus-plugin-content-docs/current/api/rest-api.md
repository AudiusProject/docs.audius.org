---
sidebar_label: REST API
sidebar_position: 1
description: >-
  L'API Audius est entièrement libre d'utilisation. Nous vous demandons de respecter les directives contenues dans ce document et de toujours créditer les artistes.
---

# REST API

## Sélection d'un hôte <a id="selecting-a-host"></a>

Audius est un service de streaming de musique décentralisé. Pour utiliser l'API, vous devez d'abord sélectionner un point de terminaison de l'API dans la liste des points de terminaison renvoyés par :

[https://api.audius.co](https://api.audius.co/)

Une fois que vous avez sélectionné un hôte, toutes les demandes d'API peuvent lui être envoyées directement. Nous vous recommandons de sélectionner un hôte chaque fois que votre application démarre, car la disponibilité peut changer au fil du temps.

Pour la documentation suivante, nous en avons sélectionné une pour vous :

`https://discoveryprovider.audius1.prod-us-west-2.staked.cloud`

> Exemple de Code

```javascript

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
const host = await fetch('https://api.audius.co')
  .then(r => r.json())
  .then(j => j.data)
  .then(d => sample(d))

```

## Spécifier le nom de l'application <a id="specifying-app-name"></a>

Si vous intégrez l'API Audius dans une application en développement, nous vous demandons d'inclure un paramètre &app_name=<YOUR-UNIQUE-APP-NAME> (&app_name=<Votre nom d'application unique>) dans chaque requête. Le nom de votre application unique ne dépend que de vous !

## Utilisateurs <a id="api-users"></a>

### Recherche d'utilisateurs <a id="search-users"></a>

`GET /users/search`

_Recherche d'un utilisateur_

#### Get /users/search <a id="search-users-parameters"></a>

| Name                 | Type   | Required | Description   |
|:-------------------- |:------ |:-------- |:------------- |
| query                | string | true     | Search query  |
| only\_downloadable | string | false    | none          |
| app\_name          | string | true     | Your app name |

#### Réponses <a id="search-users-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                   |
|:------ |:-------------------------------------------------------------------------- |:------------ |:---------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [user\_search](https://audiusproject.github.io/api-docs/?javascript#schemauser_search) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                     |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                     |

> Exemple de code

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/users/search?query=Brownies&app_name=EXAMPLEAPP',
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

> Exemple de réponse

```json
{
  "data": [
    {
      "album_count": 0,
      "bio": "Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade",
      "cover_photo": {
        "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
        "2000x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
      },
      "followee_count": 19,
      "follower_count": 11141,
      "handle": "TeamBandL",
      "id": "nlGNe",
      "is_verified": true,
      "location": "Los Angeles, CA",
      "name": "Brownies & Lemonade",
      "playlist_count": 2,
      "profile_picture": {
        "150x150": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
      },
      "repost_count": 5,
      "track_count": 4
    }
  ]
}
```

### Accéder à un utilisateur <a id="get-user"></a>

`GET /users/{user_id}`

_Récupérer un seul utilisateur_

#### Paramètres de requête <a id="get-user-parameters"></a>

| Name        | Type   | Required | Description   |
|:----------- |:------ |:-------- |:------------- |
| user\_id  | string | true     | A User ID     |
| app\_name | string | true     | Your app name |

#### Réponses <a id="get-user-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                       |
|:------ |:-------------------------------------------------------------------------- |:------------ |:-------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [user\_response](https://audiusproject.github.io/api-docs/?javascript#schemauser_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                         |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                         |

> Exemple de code

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/users/nlGNe?app_name=EXAMPLEAPP',
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

> Exemple de réponse

```json
{
  "data": {
    "album_count": 0,
    "bio": "Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade",
    "cover_photo": {
      "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
      "2000x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
    },
    "followee_count": 19,
    "follower_count": 11141,
    "handle": "TeamBandL",
    "id": "nlGNe",
    "is_verified": true,
    "location": "Los Angeles, CA",
    "name": "Brownies & Lemonade",
    "playlist_count": 2,
    "profile_picture": {
      "150x150": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
      "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
      "1000x1000": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
    },
    "repost_count": 5,
    "track_count": 4
  }
}
```

### Obtenez les titres préférés des utilisateurs <a id="get-user-39-s-favorite-tracks"></a>

`GET /users/{user_id}/favorites`

_Récupérer les titres favoris d'un utilisateur_

#### Paramètres de requête <a id="get-user&apos;s-favorite-tracks-parameters"></a>

| Name        | Type   | Required | Description   |
|:----------- |:------ |:-------- |:------------- |
| user\_id  | string | true     | A User ID     |
| app\_name | string | true     | Your app name |

#### Réponses <a id="get-user&apos;s-favorite-tracks-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                                 |
|:------ |:-------------------------------------------------------------------------- |:------------ |:------------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [favorites\_response](https://audiusproject.github.io/api-docs/?javascript#schemafavorites_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                                   |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                                   |

> Exemple de code

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/users/nlGNe/favorites?app_name=EXAMPLEAPP',
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
      "favorite_item_id": "nlv5l",
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

### Obtenir les publications de l'utilisateur <a id="get-user-39-s-reposts"></a>

`GET /users/{user_id}/reposts`

#### Paramètres de requête <a id="get-user&apos;s-reposts-parameters"></a>

| Name        | Type   | Required | Description   |
|:----------- |:------ |:-------- |:------------- |
| user\_id  | string | true     | A User ID     |
| limit       | string | false    | Limit         |
| offset      | string | false    | Offset        |
| app\_name | string | true     | Your app name |

#### Réponses <a id="get-user&apos;s-reposts-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                        |
|:------ |:-------------------------------------------------------------------------- |:------------ |:----------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success      | [reposts](https://audiusproject.github.io/api-docs/?javascript#schemareposts) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                          |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                          |


> Exemple de code

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/users/string/reposts?app_name=EXAMPLEAPP',
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

> Exemple de réponse
> 
> 200 réponses

```json
{
  "data": [
    {
      "timestamp": "string",
      "item_type": {},
      "item": {}
    }
  ]
}
```

### Obtenez les marqueurs de suivi les plus utilisés par les utilisateurs <a id="get-user-39-s-most-used-track-tags"></a>

`GET /users/{user_id}/tags`

_Récupérer les marqueurs les plus utilisés dans les pistes d'un utilisateur_

#### Paramètres de requête <a id="get-user&apos;s-most-used-track-tags-parameters"></a>

| Name        | Type    | Required | Description                 |
|:----------- |:------- |:-------- |:--------------------------- |
| user\_id  | string  | true     | A User ID                   |
| limit       | integer | false    | Limit on the number of tags |
| app\_name | string  | true     | Your app name               |
| user\_id  | string  | true     | none                        |

#### Réponses <a id="get-user&apos;s-most-used-track-tags-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                       |
|:------ |:-------------------------------------------------------------------------- |:------------ |:-------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success      | [tags\_response](https://audiusproject.github.io/api-docs/?javascript#schematags_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                         |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                         |

> Exemple de code

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/users/string/tags?user_id=string&app_name=EXAMPLEAPP',
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

> Exemple de réponse
> 
> 200 réponse

```json
{
  "data": [
    "string"
  ]
}
```

### Obtenir les pistes de l'utilisateur <a id="get-user-39-s-tracks"></a>

`GET /users/{user_id}/tracks`

_Récupérer une liste de titres pour un utilisateur_

#### Paramètres de requête <a id="get-user&apos;s-tracks-parameters"></a>

| Name        | Type   | Required | Description   |
|:----------- |:------ |:-------- |:------------- |
| user\_id  | string | true     | A User ID     |
| limit       | string | false    | Limit         |
| offset      | string | false    | Offset        |
| sort        | string | false    | Sort mode     |
| app\_name | string | true     | Your app name |

#### Réponses <a id="get-user&apos;s-tracks-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                           |
|:------ |:-------------------------------------------------------------------------- |:------------ |:------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [tracks\_response](https://audiusproject.github.io/api-docs/?javascript#schematracks_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                             |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                             |

> Exemple de code

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/users/nlGNe/tracks?app_name=EXAMPLEAPP',
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

> Exemple de réponse

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
      "genre": "Electronic",
      "id": "D7KyD",
      "mood": "Fiery",
      "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
      "repost_count": 47,
      "favorite_count": 143,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
          "2000x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "followee_count": 19,
        "follower_count": 11141,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 4
      }
    }
  ]
}
```

## Playlists <a id="api-playlists"></a>

### Recherche de playlist <a id="search-playlists"></a>

`GET /playlists/search`

_Search for a playlist_

#### Paramètres de requête <a id="search-playlists-parameters"></a>

| Name                 | Type   | Required | Description   |
|:-------------------- |:------ |:-------- |:------------- |
| query                | string | true     | Search Query  |
| only\_downloadable | string | false    | none          |
| app\_name          | string | true     | Your app name |

#### Réponses <a id="search-playlists-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                                            |
|:------ |:-------------------------------------------------------------------------- |:------------ |:----------------------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [playlist\_search\_result](https://audiusproject.github.io/api-docs/?javascript#schemaplaylist_search_result) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                                              |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                                              |

> Exemple de code

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/playlists/search?query=Hot & New&app_name=EXAMPLEAPP',
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

> Exemple de réponse

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/150x150.jpg",
        "480x480": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg",
        "1000x1000": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg"
      },
      "description": "All the latest hot new tracks on Audius! Enjoy the eclectic sounds that are created during the peak of this 2020 Summer.",
      "id": "DOPRl",
      "is_album": true,
      "playlist_name": "Hot & New on Audius 🔥",
      "repost_count": 46,
      "favorite_count": 88,
      "user": {
        "album_count": 0,
        "bio": "The official Audius account! Creating a decentralized and open-source streaming music platform controlled by artists, fans, & developers.",
        "cover_photo": {
          "640x": "string",
          "2000x": "string"
        },
        "followee_count": 69,
        "follower_count": 6763,
        "handle": "Audius",
        "id": "eJ57D",
        "is_verified": true,
        "location": "SF & LA",
        "name": "Audius",
        "playlist_count": 9,
        "profile_picture": {
          "150x150": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f",
          "480x480": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f",
          "1000x1000": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f"
        },
        "repost_count": 200,
        "track_count": 0
      }
    }
  ]
}
```

### Obtenez la playlist <a id="get-playlist"></a>

`GET /playlists/{playlist_id}`

_Récupérer une playlist_

#### Paramètres de requête <a id="get-playlist-parameters"></a>

| Name           | Type   | Required | Description   |
|:-------------- |:------ |:-------- |:------------- |
| playlist\_id | string | true     | A Playlist ID |
| app\_name    | string | true     | Your app name |

#### Réponses <a id="get-playlist-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                               |
|:------ |:-------------------------------------------------------------------------- |:------------ |:---------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [playlist\_response](https://audiusproject.github.io/api-docs/?javascript#schemaplaylist_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                                 |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                                 |


> Exemple de code

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/playlists/DOPRl?app_name=EXAMPLEAPP',
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

> Exemple de réponse

```json
{
  "data": {
    "artwork": {
      "150x150": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/150x150.jpg",
      "480x480": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg",
      "1000x1000": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg"
    },
    "description": "All the latest hot new tracks on Audius! Enjoy the eclectic sounds that are created during the peak of this 2020 Summer.",
    "id": "DOPRl",
    "is_album": true,
    "playlist_name": "Hot & New on Audius 🔥",
    "repost_count": 46,
    "favorite_count": 88,
    "user": {
      "album_count": 0,
      "bio": "The official Audius account! Creating a decentralized and open-source streaming music platform controlled by artists, fans, & developers.",
      "cover_photo": {
        "640x": "string",
        "2000x": "string"
      },
      "followee_count": 69,
      "follower_count": 6763,
      "handle": "Audius",
      "id": "eJ57D",
      "is_verified": true,
      "location": "SF & LA",
      "name": "Audius",
      "playlist_count": 9,
      "profile_picture": {
        "150x150": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f",
        "480x480": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f",
        "1000x1000": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f"
      },
      "repost_count": 200,
      "track_count": 0
    }
  }
}
```

### Obtenir les titres de la playlist <a id="get-playlist-tracks"></a>

`GET /playlists/{playlist_id}/tracks`

_Récupérer ls titres dans une playlist_

#### Paramètres de requête <a id="get-playlist-tracks-parameters"></a>

| Name           | Type   | Required | Description   |
|:-------------- |:------ |:-------- |:------------- |
| playlist\_id | string | true     | A Playlist ID |
| app\_name    | string | true     | Your app name |

#### Réponses <a id="get-playlist-tracks-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                                                |
|:------ |:-------------------------------------------------------------------------- |:------------ |:--------------------------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [playlist\_tracks\_response](https://audiusproject.github.io/api-docs/?javascript#schemaplaylist_tracks_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                                                  |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                                                  |


> Exemple de code

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/playlists/DOPRl/tracks?app_name=EXAMPLEAPP',
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

> Exemple de réponse

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
      "genre": "Electronic",
      "id": "D7KyD",
      "mood": "Fiery",
      "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
      "repost_count": 47,
      "favorite_count": 143,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
          "2000x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "followee_count": 19,
        "follower_count": 11141,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 4
      }
    }
  ]
}
```

## Pistes <a id="api-tracks"></a>

### Recherche de pistes <a id="search-tracks"></a>

`GET /tracks/search`

_Recherche d'une piste_

#### Paramètres de requête <a id="search-tracks-parameters"></a>

| Name                 | Type   | Required | Description                     |
|:-------------------- |:------ |:-------- |:------------------------------- |
| query                | string | true     | Search Query                    |
| only\_downloadable | string | false    | Return only downloadable tracks |
| app\_name          | string | true     | Your app name                   |

#### Réponses <a id="search-tracks-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                     |
|:------ |:-------------------------------------------------------------------------- |:------------ |:------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [track\_search](https://audiusproject.github.io/api-docs/?javascript#schematrack_search) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                       |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                       |



> Exemple de code

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/tracks/search?query=baauer b2b&app_name=EXAMPLEAPP',
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

> Exemple de réponse

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
      "genre": "Electronic",
      "id": "D7KyD",
      "mood": "Fiery",
      "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
      "repost_count": 47,
      "favorite_count": 143,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
          "2000x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "followee_count": 19,
        "follower_count": 11141,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 4
      }
    }
  ]
}
```

### Pistes populaires <a id="trending-tracks"></a>

`GET /tracks/trending`

_Obtenez les 100 titres les plus populaires sur Audius_

#### Paramètres de requête <a id="trending-tracks-parameters"></a>

| Name        | Type   | Required | Description                                                            |
|:----------- |:------ |:-------- |:---------------------------------------------------------------------- |
| genre       | string | false    | Trending tracks for a specified genre                                  |
| time        | string | false    | Trending tracks over a specified time range \(week, month, allTime\) |
| app\_name | string | true     | Your app name                                                          |

#### Réponses <a id="trending-tracks-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                           |
|:------ |:-------------------------------------------------------------------------- |:------------ |:------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [tracks\_response](https://audiusproject.github.io/api-docs/?javascript#schematracks_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                             |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                             |

> Exemple de code

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/tracks/trending?app_name=EXAMPLEAPP',
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

> Exemple de réponse

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavormusic live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
      "genre": "Electronic",
      "id": "D7KyD",
      "mood": "Fiery",
      "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
      "repost_count": 47,
      "favorite_count": 143,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "duration": 5265,
      "user": {
        "album_count": 0,
        "bio": "Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
          "2000x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
        },
        "followee_count": 19,
        "follower_count": 11141,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 4
      }
    }
  ]
}
```

### Obtenir une piste <a id="get-track"></a>

`GET /tracks/{track_id}`

_Récupérer une piste_

#### Paramètres de requête <a id="get-track-parameters"></a>

| Name        | Type   | Required | Description   |
|:----------- |:------ |:-------- |:------------- |
| track\_id | string | true     | A Track ID    |
| app\_name | string | true     | Your app name |

#### Réponses <a id="get-track-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                         |
|:------ |:-------------------------------------------------------------------------- |:------------ |:---------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [track\_response](https://audiusproject.github.io/api-docs/?javascript#schematrack_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                           |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                           |

> Exemple de code

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/tracks/D7KyD?app_name=EXAMPLEAPP',
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

> Exemple de réponse

```json
{
  "data": {
    "artwork": {
      "150x150": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
      "480x480": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
      "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
    },
    "description": "@baauer b2b @partyfavormusic live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
    "genre": "Electronic",
    "id": "D7KyD",
    "mood": "Fiery",
    "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
    "repost_count": 47,
    "favorite_count": 143,
    "tags": "baauer,partyfavor,browniesandlemonade,live",
    "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
    "duration": 5265,
    "user": {
      "album_count": 0,
      "bio": "Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade",
      "cover_photo": {
        "640x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg",
        "2000x": "https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg"
      },
      "followee_count": 19,
      "follower_count": 11141,
      "handle": "TeamBandL",
      "id": "nlGNe",
      "is_verified": true,
      "location": "Los Angeles, CA",
      "name": "Brownies & Lemonade",
      "playlist_count": 2,
      "profile_picture": {
        "150x150": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
      },
      "repost_count": 5,
      "track_count": 4
    }
  }
}
```

### Piste de Stream <a id="stream-track"></a>

`GET /tracks/{track_id}/stream`

_Obtenir le fichier mp3 de la piste en streaming_

Ce endpoint accepte l'en-tête Range pour le streaming. https://developer.mozilla.org/en-US/docs/Web/HTTP/Range\_requests

#### Paramètres de requête <a id="stream-track-parameters"></a>

| Name        | Type   | Required | Description   |
|:----------- |:------ |:-------- |:------------- |
| track\_id | string | true     | A Track ID    |
| app\_name | string | true     | Your app name |

#### Réponses <a id="stream-track-responses"></a>

| Status | Meaning                                                                    | Description           | Schema |
|:------ |:-------------------------------------------------------------------------- |:--------------------- |:------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success               | None   |
| 216    | Unknown                                                                    | Partial content       | None   |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request           | None   |
| 416    | [Range Not Satisfiable](https://tools.ietf.org/html/rfc7233#section-4.4)   | Content range invalid | None   |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error          | None   |

> Exemple de code

```javascript

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

## Métriques <a id="api-metrics"></a>

### get\_trailing\_app\_name\_metrics <a id="get_trailing_app_name_metrics"></a>

`GET /metrics/app_name/trailing/{time_range}`

_Récupère les métriques de nom de l'application depuis matview_

#### Paramètres de requête <a id="get_trailing_app_name_metrics-parameters"></a>

| Name          | Type   | Required | Description   |
|:------------- |:------ |:-------- |:------------- |
| app\_name   | string | true     | Your app name |
| time\_range | string | true     | none          |

#### Réponses <a id="get_trailing_app_name_metrics-responses"></a>

| Status | Meaning                                                 | Description | Schema                                                                                                                       |
|:------ |:------------------------------------------------------- |:----------- |:---------------------------------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Success     | [app\_name\_trailing\_response](https://audiusproject.github.io/api-docs/?javascript#schemaapp_name_trailing_response) |

> Exemple de code

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/metrics/app_name/trailing/string?app_name=EXAMPLEAPP',
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

> Exemple de réponse
> 
> 200 réponses

```json
{
  "data": [
    {
      "count": 0,
      "name": "string"
    }
  ]
}
```

## Résoudre <a id="api-resolve"></a>

### Résoudre <a id="resolve"></a>

> Exemple de code

`GET /resolve`

_Résout et redirige une URL d'application Audius fournie vers l'URL de ressource API qu'elle représente_

Ce endpoint vous permet de rechercher et d'accéder aux ressources de l'API lorsque vous ne connaissez que l'URL audius.co. Les pistes, les listes de lecture et les utilisateurs sont pris en charge.

#### Paramètres de requête <a id="resolve-parameters"></a>

| Name        | Type   | Required | Description                                                                               |
|:----------- |:------ |:-------- |:----------------------------------------------------------------------------------------- |
| url         | string | true     | URL to resolve. Either fully formed URL \(https://audius.co\) or just the absolute path |
| app\_name | string | true     | Your app name                                                                             |

> Exemple de réponse
> 
> Redirection interne

```text
{"HTTP/1.1 302 Found Location":"/v1/tracks/V4W8r"}
```

#### Réponses <a id="resolve-responses"></a>

| Status | Meaning                                                    | Description       | Schema |
|:------ |:---------------------------------------------------------- |:----------------- |:------ |
| 302    | [Found](https://tools.ietf.org/html/rfc7231#section-6.4.3) | Internal redirect | None   |

#### Schéma de réponse <a id="resolve-responseschema"></a>

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216&app_name=EXAMPLEAPP',
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


## Schémas <a id="schemas"></a>

Voici des exemples de formats de réponse que vous pouvez vous attendre à recevoir de l'API.

### user\_response <a id="tocS_user_response"></a>

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
    "track_count": 0
  }
}

```

#### Propriétés <a id="properties"></a>

| Name | Type                                                                    | Required | Restrictions | Description |
|:---- |:----------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| data | [user](https://audiusproject.github.io/api-docs/?javascript#schemauser) | false    | none         | none        |

### utilisateur <a id="tocS_user"></a>

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
  "track_count": 0
}

```

#### Propriétés <a id="properties-2"></a>

| Name               | Type                                                                                             | Required | Restrictions | Description |
|:------------------ |:------------------------------------------------------------------------------------------------ |:-------- |:------------ |:----------- |
| album\_count     | integer                                                                                          | true     | none         | none        |
| bio                | string                                                                                           | false    | none         | none        |
| cover\_photo     | [cover\_photo](https://audiusproject.github.io/api-docs/?javascript#schemacover_photo)         | false    | none         | none        |
| followee\_count  | integer                                                                                          | true     | none         | none        |
| follower\_count  | integer                                                                                          | true     | none         | none        |
| handle             | string                                                                                           | true     | none         | none        |
| id                 | string                                                                                           | true     | none         | none        |
| is\_verified     | boolean                                                                                          | true     | none         | none        |
| location           | string                                                                                           | false    | none         | none        |
| name               | string                                                                                           | true     | none         | none        |
| playlist\_count  | integer                                                                                          | true     | none         | none        |
| profile\_picture | [profile\_picture](https://audiusproject.github.io/api-docs/?javascript#schemaprofile_picture) | false    | none         | none        |
| repost\_count    | integer                                                                                          | true     | none         | none        |
| track\_count     | integer                                                                                          | true     | none         | none        |

### cover\_photo <a id="tocS_cover_photo"></a>

```json
{
  "640x": "string",
  "2000x": "string"
}

```

#### Propriétés <a id="properties-3"></a>

| Name  | Type   | Required | Restrictions | Description |
|:----- |:------ |:-------- |:------------ |:----------- |
| 640x  | string | false    | none         | none        |
| 2000x | string | false    | none         | none        |

### remix\_parent <a id="tocS_profile_picture"></a>

```json
{
  "150x150": "string",
  "480x480": "string",
  "1000x1000": "string"
}

```

#### Propriétés <a id="properties-4"></a>

| Name      | Type   | Required | Restrictions | Description |
|:--------- |:------ |:-------- |:------------ |:----------- |
| 150x150   | string | false    | none         | none        |
| 480x480   | string | false    | none         | none        |
| 1000x1000 | string | false    | none         | none        |

### tracks\_response <a id="tocS_tracks_response"></a>

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "description": "string",
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
        "track_count": 0
      },
      "duration": 0,
      "downloadable": true,
      "play_count": 0
    }
  ]
}

```

#### Propriétés <a id="properties-5"></a>

| Name | Type                                                                            | Required | Restrictions | Description |
|:---- |:------------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| data | \[[Track](https://audiusproject.github.io/api-docs/?javascript#schematrack)\] | false    | none         | none        |

### Pistes <a id="tocS_Track"></a>

```json
{
  "artwork": {
    "150x150": "string",
    "480x480": "string",
    "1000x1000": "string"
  },
  "description": "string",
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
    "track_count": 0
  },
  "duration": 0,
  "downloadable": true,
  "play_count": 0
}

```

#### Propriétés <a id="properties-6"></a>

| Name              | Type                                                                                         | Required | Restrictions | Description |
|:----------------- |:-------------------------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| artwork           | [track\_artwork](https://audiusproject.github.io/api-docs/?javascript#schematrack_artwork) | false    | none         | none        |
| description       | string                                                                                       | false    | none         | none        |
| genre             | string                                                                                       | false    | none         | none        |
| id                | string                                                                                       | true     | none         | none        |
| mood              | string                                                                                       | false    | none         | none        |
| release\_date   | string                                                                                       | false    | none         | none        |
| remix\_of       | [remix\_parent](https://audiusproject.github.io/api-docs/?javascript#schemaremix_parent)   | false    | none         | none        |
| repost\_count   | integer                                                                                      | true     | none         | none        |
| favorite\_count | integer                                                                                      | true     | none         | none        |
| tags              | string                                                                                       | false    | none         | none        |
| title             | string                                                                                       | true     | none         | none        |
| user              | [user](https://audiusproject.github.io/api-docs/?javascript#schemauser)                      | true     | none         | none        |
| duration          | integer                                                                                      | true     | none         | none        |
| downloadable      | boolean                                                                                      | false    | none         | none        |
| play\_count     | integer                                                                                      | true     | none         | none        |

### track\_artwork <a id="tocS_track_artwork"></a>

```json
{
  "150x150": "string",
  "480x480": "string",
  "1000x1000": "string"
}

```

#### Propriétés <a id="properties-7"></a>

| Name      | Type   | Required | Restrictions | Description |
|:--------- |:------ |:-------- |:------------ |:----------- |
| 150x150   | string | false    | none         | none        |
| 480x480   | string | false    | none         | none        |
| 1000x1000 | string | false    | none         | none        |

### remix\_parent <a id="tocS_remix_parent"></a>

```json
{
  "tracks": [
    {
      "parent_track_id": "string"
    }
  ]
}

```

#### Propriétés <a id="properties-8"></a>

| Name   | Type                                                                                               | Required | Restrictions | Description |
|:------ |:-------------------------------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| tracks | \[[track\_element](https://audiusproject.github.io/api-docs/?javascript#schematrack_element)\] | false    | none         | none        |

### track\_element <a id="tocS_track_element"></a>

```json
{
  "parent_track_id": "string"
}

```

#### Propriétés <a id="properties-9"></a>

| Name                  | Type   | Required | Restrictions | Description |
|:--------------------- |:------ |:-------- |:------------ |:----------- |
| parent\_track\_id | string | true     | none         | none        |

### repostes <a id="tocS_reposts"></a>

```json
{
  "data": [
    {
      "timestamp": "string",
      "item_type": {},
      "item": {}
    }
  ]
}

```

#### Propriétés <a id="properties-10"></a>

| Name | Type                                                                                  | Required | Restrictions | Description |
|:---- |:------------------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| data | \[[activity](https://audiusproject.github.io/api-docs/?javascript#schemaactivity)\] | false    | none         | none        |

### activité <a id="tocS_activity"></a>

```json
{
  "timestamp": "string",
  "item_type": {},
  "item": {}
}

```

#### Propriétés <a id="properties-11"></a>

| Name         | Type   | Required | Restrictions | Description |
|:------------ |:------ |:-------- |:------------ |:----------- |
| timestamp    | string | false    | none         | none        |
| item\_type | object | false    | none         | none        |
| item         | object | false    | none         | none        |

### favorites\_response <a id="tocS_favorites_response"></a>

```json
{
  "data": [
    {
      "favorite_item_id": "string",
      "favorite_type": "string",
      "user_id": "string"
    }
  ]
}

```

#### Propriétés <a id="properties-12"></a>

| Name | Type                                                                                  | Required | Restrictions | Description |
|:---- |:------------------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| data | \[[favorite](https://audiusproject.github.io/api-docs/?javascript#schemafavorite)\] | false    | none         | none        |

### favoris <a id="tocS_favorite"></a>

```json
{
  "favorite_item_id": "string",
  "favorite_type": "string",
  "user_id": "string"
}

```

#### Propriétés <a id="properties-13"></a>

| Name                   | Type   | Required | Restrictions | Description |
|:---------------------- |:------ |:-------- |:------------ |:----------- |
| favorite\_item\_id | string | true     | none         | none        |
| favorite\_type       | string | true     | none         | none        |
| user\_id             | string | true     | none         | none        |

### tags\_response <a id="tocS_tags_response"></a>

```json
{
  "data": [
    "string"
  ]
}

```

#### Propriétés <a id="properties-14"></a>

| Name | Type         | Required | Restrictions | Description |
|:---- |:------------ |:-------- |:------------ |:----------- |
| data | \[string\] | false    | none         | none        |

### user\_search <a id="tocS_user_search"></a>

```json
{
  "data": [
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
      "track_count": 0
    }
  ]
}

```

#### Propriétés <a id="properties-15"></a>

| Name | Type                                                                          | Required | Restrictions | Description |
|:---- |:----------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| data | \[[user](https://audiusproject.github.io/api-docs/?javascript#schemauser)\] | false    | none         | none        |

### playlist\_response <a id="tocS_playlist_response"></a>

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "description": "string",
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
        "track_count": 0
      }
    }
  ]
}

```

#### Propriétés <a id="properties-16"></a>

| Name | Type                                                                                  | Required | Restrictions | Description |
|:---- |:------------------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| data | \[[playlist](https://audiusproject.github.io/api-docs/?javascript#schemaplaylist)\] | false    | none         | none        |

### playlists <a id="tocS_playlist"></a>

```json
{
  "artwork": {
    "150x150": "string",
    "480x480": "string",
    "1000x1000": "string"
  },
  "description": "string",
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
    "track_count": 0
  }
}

```

#### Propriétés <a id="properties-17"></a>

| Name                   | Type                                                                                               | Required | Restrictions | Description |
|:---------------------- |:-------------------------------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| artwork                | [playlist\_artwork](https://audiusproject.github.io/api-docs/?javascript#schemaplaylist_artwork) | false    | none         | none        |
| description            | string                                                                                             | false    | none         | none        |
| id                     | string                                                                                             | true     | none         | none        |
| is\_album            | boolean                                                                                            | true     | none         | none        |
| playlist\_name       | string                                                                                             | true     | none         | none        |
| repost\_count        | integer                                                                                            | true     | none         | none        |
| favorite\_count      | integer                                                                                            | true     | none         | none        |
| total\_play\_count | integer                                                                                            | true     | none         | none        |
| user                   | [user](https://audiusproject.github.io/api-docs/?javascript#schemauser)                            | true     | none         | none        |

### playlist\_search\_result <a id="tocS_playlist_artwork"></a>

```json
{
  "150x150": "string",
  "480x480": "string",
  "1000x1000": "string"
}

```

#### Propriétés <a id="properties-18"></a>

| Name      | Type   | Required | Restrictions | Description |
|:--------- |:------ |:-------- |:------------ |:----------- |
| 150x150   | string | false    | none         | none        |
| 480x480   | string | false    | none         | none        |
| 1000x1000 | string | false    | none         | none        |

### playlist\_search\_result <a id="tocS_playlist_tracks_response"></a>

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "description": "string",
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
        "track_count": 0
      },
      "duration": 0,
      "downloadable": true,
      "play_count": 0
    }
  ]
}

```

#### Propriétés <a id="properties-19"></a>

| Name | Type                                                                            | Required | Restrictions | Description |
|:---- |:------------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| data | \[[Track](https://audiusproject.github.io/api-docs/?javascript#schematrack)\] | false    | none         | none        |

### playlist\_search\_result <a id="tocS_playlist_search_result"></a>

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "description": "string",
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
        "track_count": 0
      }
    }
  ]
}

```

#### Propriétés <a id="properties-20"></a>

| Name | Type                                                                                  | Required | Restrictions | Description |
|:---- |:------------------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| data | \[[playlist](https://audiusproject.github.io/api-docs/?javascript#schemaplaylist)\] | false    | none         | none        |

### track\_response <a id="tocS_track_response"></a>

```json
{
  "data": {
    "artwork": {
      "150x150": "string",
      "480x480": "string",
      "1000x1000": "string"
    },
    "description": "string",
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
      "track_count": 0
    },
    "duration": 0,
    "downloadable": true,
    "play_count": 0
  }
}

```

#### Propriétés <a id="properties-21"></a>

| Name | Type                                                                      | Required | Restrictions | Description |
|:---- |:------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| data | [Track](https://audiusproject.github.io/api-docs/?javascript#schematrack) | false    | none         | none        |

### track\_search <a id="tocS_track_search"></a>

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "string",
        "480x480": "string",
        "1000x1000": "string"
      },
      "description": "string",
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
        "track_count": 0
      },
      "duration": 0,
      "downloadable": true,
      "play_count": 0
    }
  ]
}

```

#### Propriétés <a id="properties-22"></a>

| Name | Type                                                                            | Required | Restrictions | Description |
|:---- |:------------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| data | \[[Track](https://audiusproject.github.io/api-docs/?javascript#schematrack)\] | false    | none         | none        |

### app\_name\_trailing\_response <a id="tocS_app_name_trailing_response"></a>

```json
{
  "data": [
    {
      "count": 0,
      "name": "string"
    }
  ]
}

```

#### Propriétés <a id="properties-23"></a>

| Name | Type                                                                                                                           | Required | Restrictions | Description |
|:---- |:------------------------------------------------------------------------------------------------------------------------------ |:-------- |:------------ |:----------- |
| data | \[[app\_name\_trailing\_metric](https://audiusproject.github.io/api-docs/?javascript#schemaapp_name_trailing_metric)\] | false    | none         | none        |

### app\_name\_trailing\_metric <a id="tocS_app_name_trailing_metric"></a>

```json
{
  "count": 0,
  "name": "string"
}

```

#### Propriétés <a id="properties-24"></a>

| Name  | Type    | Required | Restrictions | Description |
|:----- |:------- |:-------- |:------------ |:----------- |
| count | integer | false    | none         | none        |
| name  | string  | false    | none         | none        |
