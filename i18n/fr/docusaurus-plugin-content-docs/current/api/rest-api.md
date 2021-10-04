---
sidebar_label: "\"REST API\"\n\nSélection d'un hôte\n\nAudius est un service de streaming de musique décentralisé. Pour utiliser l'API, vous devez d'abord sélectionner un point de terminaison de l'API dans la liste des points de terminaison renvoyés par :\n\nhttps://api.audius.co\n\nUne fois que vous avez sélectionné un hôte, toutes les demandes d'API peuvent lui être envoyées directement. Nous vous recommandons de sélectionner un hôte chaque fois que votre application démarre, car la disponibilité peut changer au fil du temps.\n\nPour la documentation suivante, nous en avons sélectionné une pour vous :\n\nhttps://discoveryprovider.audius1.prod-us-west-2.staked.cloud\n\nExemple de code\n\nconst sample = (arr) => arr[Math.floor(Math.random() * arr.length)]\nconst host = await fetch('https://api.audius.co')\n  .then(r => r.json())\n  .then(j => j.data)\n  .then(d => sample(d))\n\nSpécifier le nom de l'application\n\nSi vous intégrez l'API Audius dans une application en développement, nous vous demandons d'inclure un paramètre &app_name=<YOUR-UNIQUE-APP-NAME> (&app_name=<Votre nom d'application unique>) dans chaque requête. Le nom de votre application unique ne dépend que de vous !\n\nUtilisateurs\n\nRecherche d'utilisateurs\n\nGET /users/search\n\nRecherche d'un utilisateur\n\nName	Type	Required	Description\nquery	string	true	Search query\nonly\\_downloadable	string	false	none\napp\\_name	string	true	Your app name\n\nRéponses\n\n\nStatus	Meaning	Description	Schema\n200	OK	none	user\\_search\n400	Bad Request	Bad request	None\n500	Internal Server Error	Server error	None\n\nExemple de code\n\nconst headers = {\n  'Accept':'application/json'\n};\n\nfetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/users/search?query=Brownies&app_name=EXAMPLEAPP',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\nExemple de réponse\n\n{\n  \"data\": [\n    {\n      \"album_count\": 0,\n      \"bio\": \"Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade\",\n      \"cover_photo\": {\n        \"640x\": \"https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg\",\n        \"2000x\": \"https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg\"\n      },\n      \"followee_count\": 19,\n      \"follower_count\": 11141,\n      \"handle\": \"TeamBandL\",\n      \"id\": \"nlGNe\",\n      \"is_verified\": true,\n      \"location\": \"Los Angeles, CA\",\n      \"name\": \"Brownies & Lemonade\",\n      \"playlist_count\": 2,\n      \"profile_picture\": {\n        \"150x150\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg\",\n        \"480x480\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg\",\n        \"1000x1000\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg\"\n      },\n      \"repost_count\": 5,\n      \"track_count\": 4\n    }\n  ]\n}\n\nobtenir l'utilisateur\n\nGET /users/{user_id}\n\nRécupérer un seul utilisateur\n\nParamètres d'interrogation\n\n\nName	Type	Required	Description\nuser\\_id	string	true	A User ID\napp\\_name	string	true	Your app name\n\nRéponses\n\n\nStatus	Meaning	Description	Schema\n200	OK	none	user\\_response\n400	Bad Request	Bad request	None\n500	Internal Server Error	Server error	None\n\nExemple de code:\n\nconst headers = {\n  'Accept':'application/json'\n};\n\nfetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/users/nlGNe?app_name=EXAMPLEAPP',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\nExemple de réponses\n\n{\n  \"data\": {\n    \"album_count\": 0,\n    \"bio\": \"Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade\",\n    \"cover_photo\": {\n      \"640x\": \"https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg\",\n      \"2000x\": \"https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg\"\n    },\n    \"followee_count\": 19,\n    \"follower_count\": 11141,\n    \"handle\": \"TeamBandL\",\n    \"id\": \"nlGNe\",\n    \"is_verified\": true,\n    \"location\": \"Los Angeles, CA\",\n    \"name\": \"Brownies & Lemonade\",\n    \"playlist_count\": 2,\n    \"profile_picture\": {\n      \"150x150\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg\",\n      \"480x480\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg\",\n      \"1000x1000\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg\"\n    },\n    \"repost_count\": 5,\n    \"track_count\": 4\n  }\n}\n\nObtenez les pistes préférées des utilisateurs\n\nGET /users/{user_id}/favorites\n\nRécupérer les pistes favorites d'un utilisateur\n\nParamètres d'interrogation\n\n\nName	Type	Required	Description\nuser\\_id	string	true	A User ID\napp\\_name	string	true	Your app name\n\nRéponses\n\n\nStatus	Meaning	Description	Schema\n200	OK	none	favorites\\_response\n400	Bad Request	Bad request	None\n500	Internal Server Error	Server error	None\n\nExemple de code\n\nconst headers = {\n  'Accept':'application/json'\n};\n\nfetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/users/nlGNe/favorites?app_name=EXAMPLEAPP',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\nExemple de réponse\n\n{\n  \"data\": [\n    {\n      \"favorite_item_id\": \"n3yVD\",\n      \"favorite_type\": \"SaveType.track\",\n      \"user_id\": \"nlGNe\"\n    },\n    {\n      \"favorite_item_id\": \"nlv5l\",\n      \"favorite_type\": \"SaveType.track\",\n      \"user_id\": \"nlGNe\"\n    },\n    {\n      \"favorite_item_id\": \"ezYKz\",\n      \"favorite_type\": \"SaveType.track\",\n      \"user_id\": \"nlGNe\"\n    }\n  ]\n}\n\nObtenir les publications de l'utilisateur\n\nGET /users/{user_id}/reposts\n\nParamètres d'interrogation\n\n\nName	Type	Required	Description\nuser\\_id	string	true	A User ID\nlimit	string	false	Limit\noffset	string	false	Offset\napp\\_name	string	true	Your app name\n\nRéponses\n\nStatus	Meaning	Description	Schema\n200	OK	Success	reposts\n400	Bad Request	Bad request	None\n500	Internal Server Error	Server error	None\n\nExemple de code\n\nconst headers = {\n  'Accept':'application/json'\n};\n\nfetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/users/string/reposts?app_name=EXAMPLEAPP',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\nExemple de réponse\n\n200 Réponses\n\n{\n  \"data\": [\n    {\n      \"timestamp\": \"string\",\n      \"item_type\": {},\n      \"item\": {}\n    }\n  ]\n}\n\nObtenez les marqueurs de suivi les plus utilisés par les utilisateurs\n\nGET /users/{user_id}/tags\n\nRécupérer les marqueurs les plus utilisés dans les pistes d'un utilisateur\n\nParamètres d'interrogation\n\n\nName	Type	Required	Description\nuser\\_id	string	true	A User ID\nlimit	integer	false	Limit on the number of tags\napp\\_name	string	true	Your app name\nuser\\_id	string	true	none\n\nRéponses\n\n\nStatus	Meaning	Description	Schema\n200	OK	Success	tags\\_response\n400	Bad Request	Bad request	None\n500	Internal Server Error	Server error	None\n\nExemple de code\n\nconst headers = {\n  'Accept':'application/json'\n};\n\nfetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/users/string/tags?user_id=string&app_name=EXAMPLEAPP',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n Exemple de réponses\n200 Réponses\n\n{\n  \"data\": [\n    \"string\"\n  ]\n}\n\nObtenir les pistes de l'utilisateur\n\nGET /users/{user_id}/tracks\n\nRécupérer une liste de pistes pour un utilisateur\n\nParamètres d'interrogation\n\n\nName	Type	Required	Description\nuser\\_id	string	true	A User ID\nlimit	string	false	Limit\noffset	string	false	Offset\nsort	string	false	Sort mode\napp\\_name	string	true	Your app name\n\nRéponses\n\n\nStatus	Meaning	Description	Schema\n200	OK	none	tracks\\_response\n400	Bad Request	Bad request	None\n500	Internal Server Error	Server error	None\n\nExemple de code\n\nconst headers = {\n  'Accept':'application/json'\n};\n\nfetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/users/nlGNe/tracks?app_name=EXAMPLEAPP',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\nExemple de réponse\n\n{\n  \"data\": [\n    {\n      \"artwork\": {\n        \"150x150\": \"https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg\",\n        \"480x480\": \"https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg\",\n        \"1000x1000\": \"https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg\"\n      },\n      \"description\": \"@baauer b2b @partyfavormusic live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.\",\n      \"genre\": \"Electronic\",\n      \"id\": \"D7KyD\",\n      \"mood\": \"Fiery\",\n      \"release_date\": \"Mon Sep 23 2019 12:35:10 GMT-0700\",\n      \"repost_count\": 47,\n      \"favorite_count\": 143,\n      \"tags\": \"baauer,partyfavor,browniesandlemonade,live\",\n      \"title\": \"Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)\",\n      \"duration\": 5265,\n      \"user\": {\n        \"album_count\": 0,\n        \"bio\": \"Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade\",\n        \"cover_photo\": {\n          \"640x\": \"https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg\",\n          \"2000x\": \"https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg\"\n        },\n        \"followee_count\": 19,\n        \"follower_count\": 11141,\n        \"handle\": \"TeamBandL\",\n        \"id\": \"nlGNe\",\n        \"is_verified\": true,\n        \"location\": \"Los Angeles, CA\",\n        \"name\": \"Brownies & Lemonade\",\n        \"playlist_count\": 2,\n        \"profile_picture\": {\n          \"150x150\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg\",\n          \"480x480\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg\",\n          \"1000x1000\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg\"\n        },\n        \"repost_count\": 5,\n        \"track_count\": 4\n      }\n    }\n  ]\n}\n\nPlaylists / Listes d'écoute\n\nRecherche de listes de lecture\n\nGET /playlists/search\n\nRecherche pour une liste de lecture\n\nParamètres d'interrogation \n\n\nName	Type	Required	Description\nquery	string	true	Search Query\nonly\\_downloadable	string	false	none\napp\\_name	string	true	Your app name\n\nRéponse\n\n\nStatus	Meaning	Description	Schema\n200	OK	none	playlist\\_search\\_result\n400	Bad Request	Bad request	None\n500	Internal Server Error	Server error	None\n\nExemple de code\n\n\nconst headers = {\n  'Accept':'application/json'\n};\n\nfetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/playlists/search?query=Hot & New&app_name=EXAMPLEAPP',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\nExemple de réponse\n\n{\n  \"data\": [\n    {\n      \"artwork\": {\n        \"150x150\": \"https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/150x150.jpg\",\n        \"480x480\": \"https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg\",\n        \"1000x1000\": \"https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg\"\n      },\n      \"description\": \"All the latest hot new tracks on Audius! Enjoy the eclectic sounds that are created during the peak of this 2020 Summer.\",\n      \"id\": \"DOPRl\",\n      \"is_album\": true,\n      \"playlist_name\": \"Hot & New on Audius 🔥\",\n      \"repost_count\": 46,\n      \"favorite_count\": 88,\n      \"user\": {\n        \"album_count\": 0,\n        \"bio\": \"The official Audius account! Creating a decentralized and open-source streaming music platform controlled by artists, fans, & developers.\",\n        \"cover_photo\": {\n          \"640x\": \"string\",\n          \"2000x\": \"string\"\n        },\n        \"followee_count\": 69,\n        \"follower_count\": 6763,\n        \"handle\": \"Audius\",\n        \"id\": \"eJ57D\",\n        \"is_verified\": true,\n        \"location\": \"SF & LA\",\n        \"name\": \"Audius\",\n        \"playlist_count\": 9,\n        \"profile_picture\": {\n          \"150x150\": \"https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f\",\n          \"480x480\": \"https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f\",\n          \"1000x1000\": \"https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f\"\n        },\n        \"repost_count\": 200,\n        \"track_count\": 0\n      }\n    }\n  ]\n}\n\nObtenir la playlist\n\nGET /playlists/{playlist_id}\n\nrécupérer une Playlist\n\nParamètres d'interrogation\n\n\nName	Type	Required	Description\nplaylist\\_id	string	true	A Playlist ID\napp\\_name	string	true	Your app name\n\nRéponse\n\n\nStatus	Meaning	Description	Schema\n200	OK	none	playlist\\_response\n400	Bad Request	Bad request	None\n500	Internal Server Error	Server error	None\n\nExemple de code\n\nconst headers = {\n  'Accept':'application/json'\n};\n\nfetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/playlists/DOPRl?app_name=EXAMPLEAPP',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\nExemple de réponse\n\n{\n  \"data\": {\n    \"artwork\": {\n      \"150x150\": \"https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/150x150.jpg\",\n      \"480x480\": \"https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg\",\n      \"1000x1000\": \"https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg\"\n    },\n    \"description\": \"All the latest hot new tracks on Audius! Enjoy the eclectic sounds that are created during the peak of this 2020 Summer.\",\n    \"id\": \"DOPRl\",\n    \"is_album\": true,\n    \"playlist_name\": \"Hot & New on Audius 🔥\",\n    \"repost_count\": 46,\n    \"favorite_count\": 88,\n    \"user\": {\n      \"album_count\": 0,\n      \"bio\": \"The official Audius account! Creating a decentralized and open-source streaming music platform controlled by artists, fans, & developers.\",\n      \"cover_photo\": {\n        \"640x\": \"string\",\n        \"2000x\": \"string\"\n      },\n      \"followee_count\": 69,\n      \"follower_count\": 6763,\n      \"handle\": \"Audius\",\n      \"id\": \"eJ57D\",\n      \"is_verified\": true,\n      \"location\": \"SF & LA\",\n      \"name\": \"Audius\",\n      \"playlist_count\": 9,\n      \"profile_picture\": {\n        \"150x150\": \"https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f\",\n        \"480x480\": \"https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f\",\n        \"1000x1000\": \"https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f\"\n      },\n      \"repost_count\": 200,\n      \"track_count\": 0\n    }\n  }\n}\n\nObtenir les pistes de la liste de lecture\n\nGET /playlists/{playlist_id}/tracks\n\nRécupérer les pistes dans une playlist\n\nParamètres d'interrogation\n\nName	Type	Required	Description\nplaylist\\_id	string	true	A Playlist ID\napp\\_name	string	true	Your app name\n\nRéponse\n\n\nStatus	Meaning	Description	Schema\n200	OK	none	playlist\\_tracks\\_response\n400	Bad Request	Bad request	None\n500	Internal Server Error	Server error	None\n\nExemple de code\n\nconst headers = {\n  'Accept':'application/json'\n};\n\nfetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/playlists/DOPRl/tracks?app_name=EXAMPLEAPP',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\nExemple de réponse\n\n{\n  \"data\": [\n    {\n      \"artwork\": {\n        \"150x150\": \"https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg\",\n        \"480x480\": \"https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg\",\n        \"1000x1000\": \"https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg\"\n      },\n      \"description\": \"@baauer b2b @partyfavormusic live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.\",\n      \"genre\": \"Electronic\",\n      \"id\": \"D7KyD\",\n      \"mood\": \"Fiery\",\n      \"release_date\": \"Mon Sep 23 2019 12:35:10 GMT-0700\",\n      \"repost_count\": 47,\n      \"favorite_count\": 143,\n      \"tags\": \"baauer,partyfavor,browniesandlemonade,live\",\n      \"title\": \"Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)\",\n      \"duration\": 5265,\n      \"user\": {\n        \"album_count\": 0,\n        \"bio\": \"Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade\",\n        \"cover_photo\": {\n          \"640x\": \"https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg\",\n          \"2000x\": \"https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg\"\n        },\n        \"followee_count\": 19,\n        \"follower_count\": 11141,\n        \"handle\": \"TeamBandL\",\n        \"id\": \"nlGNe\",\n        \"is_verified\": true,\n        \"location\": \"Los Angeles, CA\",\n        \"name\": \"Brownies & Lemonade\",\n        \"playlist_count\": 2,\n        \"profile_picture\": {\n          \"150x150\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg\",\n          \"480x480\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg\",\n          \"1000x1000\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg\"\n        },\n        \"repost_count\": 5,\n        \"track_count\": 4\n      }\n    }\n  ]\n}\n\nPistes\n\nRecherche de pistes\n\nGET /tracks/search\n\nRecherche d'une piste\n\nParamètres d'interrogation\n\n\nName	Type	Required	Description\nquery	string	true	Search Query\nonly\\_downloadable	string	false	Return only downloadable tracks\napp\\_name	string	true	Your app name\n\nRéponse\n\n\nStatus	Meaning	Description	Schema\n200	OK	none	track\\_search\n400	Bad Request	Bad request	None\n500	Internal Server Error	Server error	None\n\nExemple de code\n\n\nconst headers = {\n  'Accept':'application/json'\n};\n\nfetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/tracks/search?query=baauer b2b&app_name=EXAMPLEAPP',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\nExemple de réponse\n\n{\n  \"data\": [\n    {\n      \"artwork\": {\n        \"150x150\": \"https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg\",\n        \"480x480\": \"https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg\",\n        \"1000x1000\": \"https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg\"\n      },\n      \"description\": \"@baauer b2b @partyfavormusic live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.\",\n      \"genre\": \"Electronic\",\n      \"id\": \"D7KyD\",\n      \"mood\": \"Fiery\",\n      \"release_date\": \"Mon Sep 23 2019 12:35:10 GMT-0700\",\n      \"repost_count\": 47,\n      \"favorite_count\": 143,\n      \"tags\": \"baauer,partyfavor,browniesandlemonade,live\",\n      \"title\": \"Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)\",\n      \"duration\": 5265,\n      \"user\": {\n        \"album_count\": 0,\n        \"bio\": \"Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade\",\n        \"cover_photo\": {\n          \"640x\": \"https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg\",\n          \"2000x\": \"https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg\"\n        },\n        \"followee_count\": 19,\n        \"follower_count\": 11141,\n        \"handle\": \"TeamBandL\",\n        \"id\": \"nlGNe\",\n        \"is_verified\": true,\n        \"location\": \"Los Angeles, CA\",\n        \"name\": \"Brownies & Lemonade\",\n        \"playlist_count\": 2,\n        \"profile_picture\": {\n          \"150x150\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg\",\n          \"480x480\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg\",\n          \"1000x1000\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg\"\n        },\n        \"repost_count\": 5,\n        \"track_count\": 4\n      }\n    }\n  ]\n}\n\nTendance des pistes\n\nGET /tracks/trending\n\nObtenez les 100 titres les plus populaires sur Audius\n\nParamètres d'interrogation\n\n\nName	Type	Required	Description\ngenre	string	false	Trending tracks for a specified genre\ntime	string	false	Trending tracks over a specified time range \\(week, month, allTime\\)\napp\\_name	string	true	Your app name\n\nRéponse\n\n\nStatus	Meaning	Description	Schema\n200	OK	none	tracks\\_response\n400	Bad Request	Bad request	None\n500	Internal Server Error	Server error	None\n\nExemple de code\n\nconst headers = {\n  'Accept':'application/json'\n};\n\nfetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/tracks/trending?app_name=EXAMPLEAPP',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\nExemple de réponse\n\n{\n  \"data\": [\n    {\n      \"artwork\": {\n        \"150x150\": \"https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg\",\n        \"480x480\": \"https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg\",\n        \"1000x1000\": \"https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg\"\n      },\n      \"description\": \"@baauer b2b @partyfavormusic live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.\",\n      \"genre\": \"Electronic\",\n      \"id\": \"D7KyD\",\n      \"mood\": \"Fiery\",\n      \"release_date\": \"Mon Sep 23 2019 12:35:10 GMT-0700\",\n      \"repost_count\": 47,\n      \"favorite_count\": 143,\n      \"tags\": \"baauer,partyfavor,browniesandlemonade,live\",\n      \"title\": \"Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)\",\n      \"duration\": 5265,\n      \"user\": {\n        \"album_count\": 0,\n        \"bio\": \"Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade\",\n        \"cover_photo\": {\n          \"640x\": \"https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg\",\n          \"2000x\": \"https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg\"\n        },\n        \"followee_count\": 19,\n        \"follower_count\": 11141,\n        \"handle\": \"TeamBandL\",\n        \"id\": \"nlGNe\",\n        \"is_verified\": true,\n        \"location\": \"Los Angeles, CA\",\n        \"name\": \"Brownies & Lemonade\",\n        \"playlist_count\": 2,\n        \"profile_picture\": {\n          \"150x150\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg\",\n          \"480x480\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg\",\n          \"1000x1000\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg\"\n        },\n        \"repost_count\": 5,\n        \"track_count\": 4\n      }\n    }\n  ]\n}\n\nObtenir une piste\n\nGET /tracks/{track_id}\n\nRécupérer une piste\n\nParamètres d'interrogation\n\nName	Type	Required	Description\ntrack\\_id	string	true	A Track ID\napp\\_name	string	true	Your app name\n\nRéponse\n\n\nStatus	Meaning	Description	Schema\n200	OK	none	track\\_response\n400	Bad Request	Bad request	None\n500	Internal Server Error	Server error	None\n\nExemple de code\n\nconst headers = {\n  'Accept':'application/json'\n};\n\nfetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/tracks/D7KyD?app_name=EXAMPLEAPP',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\nExemple de réponse\n\n{\n  \"data\": {\n    \"artwork\": {\n      \"150x150\": \"https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg\",\n      \"480x480\": \"https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg\",\n      \"1000x1000\": \"https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg\"\n    },\n    \"description\": \"@baauer b2b @partyfavormusic live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.\",\n    \"genre\": \"Electronic\",\n    \"id\": \"D7KyD\",\n    \"mood\": \"Fiery\",\n    \"release_date\": \"Mon Sep 23 2019 12:35:10 GMT-0700\",\n    \"repost_count\": 47,\n    \"favorite_count\": 143,\n    \"tags\": \"baauer,partyfavor,browniesandlemonade,live\",\n    \"title\": \"Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)\",\n    \"duration\": 5265,\n    \"user\": {\n      \"album_count\": 0,\n      \"bio\": \"Makin' moves & keeping you on your toes. linktr.ee/browniesandlemonade\",\n      \"cover_photo\": {\n        \"640x\": \"https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/640x.jpg\",\n        \"2000x\": \"https://creatornode.audius.co/ipfs/QmXVMM1RVqP6EFKuDq49HYq5aNSKXd24S7vcxR7qcPom6e/2000x.jpg\"\n      },\n      \"followee_count\": 19,\n      \"follower_count\": 11141,\n      \"handle\": \"TeamBandL\",\n      \"id\": \"nlGNe\",\n      \"is_verified\": true,\n      \"location\": \"Los Angeles, CA\",\n      \"name\": \"Brownies & Lemonade\",\n      \"playlist_count\": 2,\n      \"profile_picture\": {\n        \"150x150\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg\",\n        \"480x480\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg\",\n        \"1000x1000\": \"https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg\"\n      },\n      \"repost_count\": 5,\n      \"track_count\": 4\n    }\n  }\n}\n\nPiste de Stream\n\nGET /tracks/{track_id}/stream\n\nObtenir le fichier mp3 de la piste en streaming\n\nCe endpoint accepte l'en-tête Range pour le streaming.  https://developer.mozilla.org/en-US/docs/Web/HTTP/Range\\_requests\n\nParamètres d'interrogation\n\nName	Type	Required	Description\ntrack\\_id	string	true	A Track ID\napp\\_name	string	true	Your app name\n\nRéponse\n\n\nStatus	Meaning	Description	Schema\n200	OK	Success	None\n216	Unknown	Partial content	None\n400	Bad Request	Bad request	None\n416	Range Not Satisfiable	Content range invalid	None\n500	Internal Server Error	Server error	None\n\nExemple de code\n\nfetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP',\n{\n  method: 'GET'\n\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\nMétriques\n\nget\\_trailing\\_app\\_name\\_metrics\n\nGET /metrics/app_name/trailing/{time_range}\n\nRécupère les métriques du nom de l'application en fin  à partir de matview.\n\nParamètres d'interrogation\n\n\nName	Type	Required	Description\napp\\_name	string	true	Your app name\ntime\\_range	string	true	none\n\nRéponse\n\nStatus	Meaning	Description	Schema\n200	OK	Success	app\\_name\\_trailing\\_response\n\nExemple de code\n\nconst headers = {\n  'Accept':'application/json'\n};\n\nfetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/metrics/app_name/trailing/string?app_name=EXAMPLEAPP',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\nExemple de réponse\n\n200 Response\n{\n  \"data\": [\n    {\n      \"count\": 0,\n      \"name\": \"string\"\n    }\n  ]\n}\n\nRésoudre\n\nRésoudre\n\nExemple de code \n\nGET /resolve\n\nRésout et redirige une URL d'application Audius fournie vers l'URL de ressource API qu'elle représente.\n\nCe point endpoint vous permet de rechercher et d'accéder aux ressources de l'API lorsque vous ne connaissez que l'URL audius.co. Les pistes, les listes de lecture et les utilisateurs sont pris en charge.\n\nParamètres d'interrogation\n\nName	Type	Required	Description\nurl	string	true	URL to resolve. Either fully formed URL \\(https://audius.co\\) or just the absolute path\napp\\_name	string	true	Your app name\n\nExemple de réponse\n\nInternal redirect\n\n{\"HTTP/1.1 302 Found Location\":\"/v1/tracks/V4W8r\"}\n\nRéponse\n\n\nconst headers = {\n  'Accept':'text/plain'\n};\n\nfetch('https://discoveryprovider.audius1.prod-us-west-2.staked.cloud/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216&app_name=EXAMPLEAPP',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\nSchémas\n\nVoici des exemples de formats de réponse que vous pouvez vous attendre à recevoir de l'API.\n\nuser\\_response\n\n{\n  \"data\": {\n    \"album_count\": 0,\n    \"bio\": \"string\",\n    \"cover_photo\": {\n      \"640x\": \"string\",\n      \"2000x\": \"string\"\n    },\n    \"followee_count\": 0,\n    \"follower_count\": 0,\n    \"handle\": \"string\",\n    \"id\": \"string\",\n    \"is_verified\": true,\n    \"location\": \"string\",\n    \"name\": \"string\",\n    \"playlist_count\": 0,\n    \"profile_picture\": {\n      \"150x150\": \"string\",\n      \"480x480\": \"string\",\n      \"1000x1000\": \"string\"\n    },\n    \"repost_count\": 0,\n    \"track_count\": 0\n  }\n}\n\nPropriétés\n\nName	Type	Required	Restrictions	Description\ndata	user	false	none	none\n\nUtilisateur\n\n{\n  \"album_count\": 0,\n  \"bio\": \"string\",\n  \"cover_photo\": {\n    \"640x\": \"string\",\n    \"2000x\": \"string\"\n  },\n  \"followee_count\": 0,\n  \"follower_count\": 0,\n  \"handle\": \"string\",\n  \"id\": \"string\",\n  \"is_verified\": true,\n  \"location\": \"string\",\n  \"name\": \"string\",\n  \"playlist_count\": 0,\n  \"profile_picture\": {\n    \"150x150\": \"string\",\n    \"480x480\": \"string\",\n    \"1000x1000\": \"string\"\n  },\n  \"repost_count\": 0,\n  \"track_count\": 0\n}\n\nPropriétés\n\n\nName	Type	Required	Restrictions	Description\nalbum\\_count	integer	true	none	none\nbio	string	false	none	none\ncover\\_photo	cover\\_photo	false	none	none\nfollowee\\_count	integer	true	none	none\nfollower\\_count	integer	true	none	none\nhandle	string	true	none	none\nid	string	true	none	none\nis\\_verified	boolean	true	none	none\nlocation	string	false	none	none\nname	string	true	none	none\nplaylist\\_count	integer	true	none	none\nprofile\\_picture	profile\\_picture	false	none	none\nrepost\\_count	integer	true	none	none\ntrack\\_count	integer	true	none	none\n\ncover\\_photo\n\n{\n  \"640x\": \"string\",\n  \"2000x\": \"string\"\n}\n\nPropriétés\n\nName	Type	Required	Restrictions	Description\n640x	string	false	none	none\n2000x	string	false	none	none\n\nprofile\\_picture\n\n{\n  \"150x150\": \"string\",\n  \"480x480\": \"string\",\n  \"1000x1000\": \"string\"\n}\n\nPropiétés\n\n\nName	Type	Required	Restrictions	Description\n150x150	string	false	none	none\n480x480	string	false	none	none\n1000x1000	string	false	none	none\n\ntracks\\_response\n\n{\n  \"data\": [\n    {\n      \"artwork\": {\n        \"150x150\": \"string\",\n        \"480x480\": \"string\",\n        \"1000x1000\": \"string\"\n      },\n      \"description\": \"string\",\n      \"genre\": \"string\",\n      \"id\": \"string\",\n      \"mood\": \"string\",\n      \"release_date\": \"string\",\n      \"remix_of\": {\n        \"tracks\": [\n          {\n            \"parent_track_id\": \"string\"\n          }\n        ]\n      },\n      \"repost_count\": 0,\n      \"favorite_count\": 0,\n      \"tags\": \"string\",\n      \"title\": \"string\",\n      \"user\": {\n        \"album_count\": 0,\n        \"bio\": \"string\",\n        \"cover_photo\": {\n          \"640x\": \"string\",\n          \"2000x\": \"string\"\n        },\n        \"followee_count\": 0,\n        \"follower_count\": 0,\n        \"handle\": \"string\",\n        \"id\": \"string\",\n        \"is_verified\": true,\n        \"location\": \"string\",\n        \"name\": \"string\",\n        \"playlist_count\": 0,\n        \"profile_picture\": {\n          \"150x150\": \"string\",\n          \"480x480\": \"string\",\n          \"1000x1000\": \"string\"\n        },\n        \"repost_count\": 0,\n        \"track_count\": 0\n      },\n      \"duration\": 0,\n      \"downloadable\": true,\n      \"play_count\": 0\n    }\n  ]\n}\n\nPropriétés\n\nName	Type	Required	Restrictions	Description\ndata	\\[Track\\]	false	none	none\n\nPiste (Track)\n\n{\n  \"artwork\": {\n    \"150x150\": \"string\",\n    \"480x480\": \"string\",\n    \"1000x1000\": \"string\"\n  },\n  \"description\": \"string\",\n  \"genre\": \"string\",\n  \"id\": \"string\",\n  \"mood\": \"string\",\n  \"release_date\": \"string\",\n  \"remix_of\": {\n    \"tracks\": [\n      {\n        \"parent_track_id\": \"string\"\n      }\n    ]\n  },\n  \"repost_count\": 0,\n  \"favorite_count\": 0,\n  \"tags\": \"string\",\n  \"title\": \"string\",\n  \"user\": {\n    \"album_count\": 0,\n    \"bio\": \"string\",\n    \"cover_photo\": {\n      \"640x\": \"string\",\n      \"2000x\": \"string\"\n    },\n    \"followee_count\": 0,\n    \"follower_count\": 0,\n    \"handle\": \"string\",\n    \"id\": \"string\",\n    \"is_verified\": true,\n    \"location\": \"string\",\n    \"name\": \"string\",\n    \"playlist_count\": 0,\n    \"profile_picture\": {\n      \"150x150\": \"string\",\n      \"480x480\": \"string\",\n      \"1000x1000\": \"string\"\n    },\n    \"repost_count\": 0,\n    \"track_count\": 0\n  },\n  \"duration\": 0,\n  \"downloadable\": true,\n  \"play_count\": 0\n}\n\nPropriétés\n\n\nName	Type	Required	Restrictions	Description\nartwork	track\\_artwork	false	none	none\ndescription	string	false	none	none\ngenre	string	false	none	none\nid	string	true	none	none\nmood	string	false	none	none\nrelease\\_date	string	false	none	none\nremix\\_of	remix\\_parent	false	none	none\nrepost\\_count	integer	true	none	none\nfavorite\\_count	integer	true	none	none\ntags	string	false	none	none\ntitle	string	true	none	none\nuser	user	true	none	none\nduration	integer	true	none	none\ndownloadable	boolean	false	none	none\nplay\\_count	integer	true	none	none\n\ntrack\\_artwork\n\n{\n  \"150x150\": \"string\",\n  \"480x480\": \"string\",\n  \"1000x1000\": \"string\"\n}\n\nPropriétés\n\n\nName	Type	Required	Restrictions	Description\n150x150	string	false	none	none\n480x480	string	false	none	none\n1000x1000	string	false	none	none\n\nremix\\_parent\n\n{\n  \"tracks\": [\n    {\n      \"parent_track_id\": \"string\"\n    }\n  ]\n}\n\nPropriétés\n\nName	Type	Required	Restrictions	Description\ntracks	\\[track\\_element\\]	false	none	none\n\ntrack\\_element\n\n{\n  \"parent_track_id\": \"string\"\n}\n\nPropriétés\n\nName	Type	Required	Restrictions	Description\nparent\\_track\\_id	string	true	none	none\n\nreposts\n\n{\n  \"data\": [\n    {\n      \"timestamp\": \"string\",\n      \"item_type\": {},\n      \"item\": {}\n    }\n  ]\n}\n\nPropriétés\n\nName	Type	Required	Restrictions	Description\ndata	\\[activity\\]	false	none	none\n\n\nactivité\n\n{\n  \"timestamp\": \"string\",\n  \"item_type\": {},\n  \"item\": {}\n}\n\nPropriétés\n\nName	Type	Required	Restrictions	Description\ntimestamp	string	false	none	none\nitem\\_type	object	false	none	none\nitem	object	false	none	none\n\nfavorites\\_response\n\n{\n  \"data\": [\n    {\n      \"favorite_item_id\": \"string\",\n      \"favorite_type\": \"string\",\n      \"user_id\": \"string\"\n    }\n  ]\n}\n\nPropriétés\n\n\nName	Type	Required	Restrictions	Description\ndata	\\[favorite\\]	false	none	none\n\nfavorite/favori\n\n{\n  \"favorite_item_id\": \"string\",\n  \"favorite_type\": \"string\",\n  \"user_id\": \"string\"\n}\n\nPropriétés\n\nName	Type	Required	Restrictions	Description\nfavorite\\_item\\_id	string	true	none	none\nfavorite\\_type	string	true	none	none\nuser\\_id	string	true	none	none\n\ntags\\_response\n\n{\n  \"data\": [\n    \"string\"\n  ]\n}\n\nPropriétés\n\nName	Type	Required	Restrictions	Description\ndata	\\[string\\]	false	none	none\n\nuser\\_search\n\n{\n  \"data\": [\n    {\n      \"album_count\": 0,\n      \"bio\": \"string\",\n      \"cover_photo\": {\n        \"640x\": \"string\",\n        \"2000x\": \"string\"\n      },\n      \"followee_count\": 0,\n      \"follower_count\": 0,\n      \"handle\": \"string\",\n      \"id\": \"string\",\n      \"is_verified\": true,\n      \"location\": \"string\",\n      \"name\": \"string\",\n      \"playlist_count\": 0,\n      \"profile_picture\": {\n        \"150x150\": \"string\",\n        \"480x480\": \"string\",\n        \"1000x1000\": \"string\"\n      },\n      \"repost_count\": 0,\n      \"track_count\": 0\n    }\n  ]\n}\n\nPropriétés\n\nName	Type	Required	Restrictions	Description\ndata	\\[user\\]	false	none	none\n\nplaylist\\_response\n\n{\n  \"data\": [\n    {\n      \"artwork\": {\n        \"150x150\": \"string\",\n        \"480x480\": \"string\",\n        \"1000x1000\": \"string\"\n      },\n      \"description\": \"string\",\n      \"id\": \"string\",\n      \"is_album\": true,\n      \"playlist_name\": \"string\",\n      \"repost_count\": 0,\n      \"favorite_count\": 0,\n      \"total_play_count\": 0,\n      \"user\": {\n        \"album_count\": 0,\n        \"bio\": \"string\",\n        \"cover_photo\": {\n          \"640x\": \"string\",\n          \"2000x\": \"string\"\n        },\n        \"followee_count\": 0,\n        \"follower_count\": 0,\n        \"handle\": \"string\",\n        \"id\": \"string\",\n        \"is_verified\": true,\n        \"location\": \"string\",\n        \"name\": \"string\",\n        \"playlist_count\": 0,\n        \"profile_picture\": {\n          \"150x150\": \"string\",\n          \"480x480\": \"string\",\n          \"1000x1000\": \"string\"\n        },\n        \"repost_count\": 0,\n        \"track_count\": 0\n      }\n    }\n  ]\n}\n\nPropriétés\n\n\nName	Type	Required	Restrictions	Description\ndata	\\[playlist\\]	false	none	none\n\nplaylist\n\n{\n  \"artwork\": {\n    \"150x150\": \"string\",\n    \"480x480\": \"string\",\n    \"1000x1000\": \"string\"\n  },\n  \"description\": \"string\",\n  \"id\": \"string\",\n  \"is_album\": true,\n  \"playlist_name\": \"string\",\n  \"repost_count\": 0,\n  \"favorite_count\": 0,\n  \"total_play_count\": 0,\n  \"user\": {\n    \"album_count\": 0,\n    \"bio\": \"string\",\n    \"cover_photo\": {\n      \"640x\": \"string\",\n      \"2000x\": \"string\"\n    },\n    \"followee_count\": 0,\n    \"follower_count\": 0,\n    \"handle\": \"string\",\n    \"id\": \"string\",\n    \"is_verified\": true,\n    \"location\": \"string\",\n    \"name\": \"string\",\n    \"playlist_count\": 0,\n    \"profile_picture\": {\n      \"150x150\": \"string\",\n      \"480x480\": \"string\",\n      \"1000x1000\": \"string\"\n    },\n    \"repost_count\": 0,\n    \"track_count\": 0\n  }\n}\n\nPropriétés\n\n\nName	Type	Required	Restrictions	Description\nartwork	playlist\\_artwork	false	none	none\ndescription	string	false	none	none\nid	string	true	none	none\nis\\_album	boolean	true	none	none\nplaylist\\_name	string	true	none	none\nrepost\\_count	integer	true	none	none\nfavorite\\_count	integer	true	none	none\ntotal\\_play\\_count	integer	true	none	none\nuser	user	true	none	none\n\nplaylist\\_artwork\n\n{\n  \"150x150\": \"string\",\n  \"480x480\": \"string\",\n  \"1000x1000\": \"string\"\n}\n\nPropriétés\n\n\nName	Type	Required	Restrictions	Description\n150x150	string	false	none	none\n480x480	string	false	none	none\n1000x1000	string	false	none	none\n\nplaylist\\_tracks\\_response\n\n{\n  \"data\": [\n    {\n      \"artwork\": {\n        \"150x150\": \"string\",\n        \"480x480\": \"string\",\n        \"1000x1000\": \"string\"\n      },\n      \"description\": \"string\",\n      \"genre\": \"string\",\n      \"id\": \"string\",\n      \"mood\": \"string\",\n      \"release_date\": \"string\",\n      \"remix_of\": {\n        \"tracks\": [\n          {\n            \"parent_track_id\": \"string\"\n          }\n        ]\n      },\n      \"repost_count\": 0,\n      \"favorite_count\": 0,\n      \"tags\": \"string\",\n      \"title\": \"string\",\n      \"user\": {\n        \"album_count\": 0,\n        \"bio\": \"string\",\n        \"cover_photo\": {\n          \"640x\": \"string\",\n          \"2000x\": \"string\"\n        },\n        \"followee_count\": 0,\n        \"follower_count\": 0,\n        \"handle\": \"string\",\n        \"id\": \"string\",\n        \"is_verified\": true,\n        \"location\": \"string\",\n        \"name\": \"string\",\n        \"playlist_count\": 0,\n        \"profile_picture\": {\n          \"150x150\": \"string\",\n          \"480x480\": \"string\",\n          \"1000x1000\": \"string\"\n        },\n        \"repost_count\": 0,\n        \"track_count\": 0\n      },\n      \"duration\": 0,\n      \"downloadable\": true,\n      \"play_count\": 0\n    }\n  ]\n}\n\nPropriétés\n\nName	Type	Required	Restrictions	Description\ndata	\\[Track\\]	false	none	none\n\nplaylist\\_search\\_result\n\n{\n  \"data\": [\n    {\n      \"artwork\": {\n        \"150x150\": \"string\",\n        \"480x480\": \"string\",\n        \"1000x1000\": \"string\"\n      },\n      \"description\": \"string\",\n      \"id\": \"string\",\n      \"is_album\": true,\n      \"playlist_name\": \"string\",\n      \"repost_count\": 0,\n      \"favorite_count\": 0,\n      \"total_play_count\": 0,\n      \"user\": {\n        \"album_count\": 0,\n        \"bio\": \"string\",\n        \"cover_photo\": {\n          \"640x\": \"string\",\n          \"2000x\": \"string\"\n        },\n        \"followee_count\": 0,\n        \"follower_count\": 0,\n        \"handle\": \"string\",\n        \"id\": \"string\",\n        \"is_verified\": true,\n        \"location\": \"string\",\n        \"name\": \"string\",\n        \"playlist_count\": 0,\n        \"profile_picture\": {\n          \"150x150\": \"string\",\n          \"480x480\": \"string\",\n          \"1000x1000\": \"string\"\n        },\n        \"repost_count\": 0,\n        \"track_count\": 0\n      }\n    }\n  ]\n}\n\nPropriétés\n\n\nName	Type	Required	Restrictions	Description\ndata	\\[playlist\\]	false	none	none\n\ntrack\\_response\n\n{\n  \"data\": {\n    \"artwork\": {\n      \"150x150\": \"string\",\n      \"480x480\": \"string\",\n      \"1000x1000\": \"string\"\n    },\n    \"description\": \"string\",\n    \"genre\": \"string\",\n    \"id\": \"string\",\n    \"mood\": \"string\",\n    \"release_date\": \"string\",\n    \"remix_of\": {\n      \"tracks\": [\n        {\n          \"parent_track_id\": \"string\"\n        }\n      ]\n    },\n    \"repost_count\": 0,\n    \"favorite_count\": 0,\n    \"tags\": \"string\",\n    \"title\": \"string\",\n    \"user\": {\n      \"album_count\": 0,\n      \"bio\": \"string\",\n      \"cover_photo\": {\n        \"640x\": \"string\",\n        \"2000x\": \"string\"\n      },\n      \"followee_count\": 0,\n      \"follower_count\": 0,\n      \"handle\": \"string\",\n      \"id\": \"string\",\n      \"is_verified\": true,\n      \"location\": \"string\",\n      \"name\": \"string\",\n      \"playlist_count\": 0,\n      \"profile_picture\": {\n        \"150x150\": \"string\",\n        \"480x480\": \"string\",\n        \"1000x1000\": \"string\"\n      },\n      \"repost_count\": 0,\n      \"track_count\": 0\n    },\n    \"duration\": 0,\n    \"downloadable\": true,\n    \"play_count\": 0\n  }\n}\n\nPropriétés\n\nName	Type	Required	Restrictions	Description\ndata	Track	false	none	none\n\ntrack\\_search\n\n{\n  \"data\": [\n    {\n      \"artwork\": {\n        \"150x150\": \"string\",\n        \"480x480\": \"string\",\n        \"1000x1000\": \"string\"\n      },\n      \"description\": \"string\",\n      \"genre\": \"string\",\n      \"id\": \"string\",\n      \"mood\": \"string\",\n      \"release_date\": \"string\",\n      \"remix_of\": {\n        \"tracks\": [\n          {\n            \"parent_track_id\": \"string\"\n          }\n        ]\n      },\n      \"repost_count\": 0,\n      \"favorite_count\": 0,\n      \"tags\": \"string\",\n      \"title\": \"string\",\n      \"user\": {\n        \"album_count\": 0,\n        \"bio\": \"string\",\n        \"cover_photo\": {\n          \"640x\": \"string\",\n          \"2000x\": \"string\"\n        },\n        \"followee_count\": 0,\n        \"follower_count\": 0,\n        \"handle\": \"string\",\n        \"id\": \"string\",\n        \"is_verified\": true,\n        \"location\": \"string\",\n        \"name\": \"string\",\n        \"playlist_count\": 0,\n        \"profile_picture\": {\n          \"150x150\": \"string\",\n          \"480x480\": \"string\",\n          \"1000x1000\": \"string\"\n        },\n        \"repost_count\": 0,\n        \"track_count\": 0\n      },\n      \"duration\": 0,\n      \"downloadable\": true,\n      \"play_count\": 0\n    }\n  ]\n}\n\nPropriétés\n\n\nName	Type	Required	Restrictions	Description\ndata	\\[Track\\]	false	none	none\napp\\_name\\_trailing\\_response\n{\n  \"data\": [\n    {\n      \"count\": 0,\n      \"name\": \"string\"\n    }\n  ]\n}\n\nPropriétés\n\n\nName	Type	Required	Restrictions	Description\ndata	\\[app\\_name\\_trailing\\_metric\\]	false	none	none\napp\\_name\\_trailing\\_metric\n{\n  \"count\": 0,\n  \"name\": \"string\"\n}\n\nProperties\nName	Type	Required	Restrictions	Description\ncount	integer	false	none	none\nname	string	false	none	none\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n liste de lecture"
sidebar_position: 1
description: >-
  The Audius API is entirely free to use. We ask that you adhere to the guidelines in this doc and always credit artists.
---

# REST API

## Selecting a Host <a id="selecting-a-host"></a>

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

#### Responses <a id="search-users-responses"></a>

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

_Fetch a single user_

#### Query Parameters <a id="get-user-parameters"></a>

| Name        | Type   | Required | Description   |
|:----------- |:------ |:-------- |:------------- |
| user\_id  | string | true     | A User ID     |
| app\_name | string | true     | Your app name |

#### Responses <a id="get-user-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                       |
|:------ |:-------------------------------------------------------------------------- |:------------ |:-------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [user\_response](https://audiusproject.github.io/api-docs/?javascript#schemauser_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                         |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                         |

> Code Sample

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

> Example Response

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

### Get User's Favorite Tracks <a id="get-user-39-s-favorite-tracks"></a>

`GET /users/{user_id}/favorites`

_Fetch favorited tracks for a user_

#### Query Parameters <a id="get-user&apos;s-favorite-tracks-parameters"></a>

| Name        | Type   | Required | Description   |
|:----------- |:------ |:-------- |:------------- |
| user\_id  | string | true     | A User ID     |
| app\_name | string | true     | Your app name |

#### Responses <a id="get-user&apos;s-favorite-tracks-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                                 |
|:------ |:-------------------------------------------------------------------------- |:------------ |:------------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [favorites\_response](https://audiusproject.github.io/api-docs/?javascript#schemafavorites_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                                   |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                                   |

> Code Sample

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

> Example Response

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

### Get User's Reposts <a id="get-user-39-s-reposts"></a>

`GET /users/{user_id}/reposts`

#### Query Parameters <a id="get-user&apos;s-reposts-parameters"></a>

| Name        | Type   | Required | Description   |
|:----------- |:------ |:-------- |:------------- |
| user\_id  | string | true     | A User ID     |
| limit       | string | false    | Limit         |
| offset      | string | false    | Offset        |
| app\_name | string | true     | Your app name |

#### Responses <a id="get-user&apos;s-reposts-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                        |
|:------ |:-------------------------------------------------------------------------- |:------------ |:----------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success      | [reposts](https://audiusproject.github.io/api-docs/?javascript#schemareposts) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                          |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                          |


> Code Sample

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

> Example Response
> 
> 200 Response

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

### Get User's Most Used Track Tags <a id="get-user-39-s-most-used-track-tags"></a>

`GET /users/{user_id}/tags`

_Fetch most used tags in a user's tracks_

#### Query Parameters <a id="get-user&apos;s-most-used-track-tags-parameters"></a>

| Name        | Type    | Required | Description                 |
|:----------- |:------- |:-------- |:--------------------------- |
| user\_id  | string  | true     | A User ID                   |
| limit       | integer | false    | Limit on the number of tags |
| app\_name | string  | true     | Your app name               |
| user\_id  | string  | true     | none                        |

#### Responses <a id="get-user&apos;s-most-used-track-tags-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                       |
|:------ |:-------------------------------------------------------------------------- |:------------ |:-------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success      | [tags\_response](https://audiusproject.github.io/api-docs/?javascript#schematags_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                         |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                         |

> Code Sample

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

> Example Response
> 
> 200 Response

```json
{
  "data": [
    "string"
  ]
}
```

### Get User's Tracks <a id="get-user-39-s-tracks"></a>

`GET /users/{user_id}/tracks`

_Fetch a list of tracks for a user_

#### Query Parameters <a id="get-user&apos;s-tracks-parameters"></a>

| Name        | Type   | Required | Description   |
|:----------- |:------ |:-------- |:------------- |
| user\_id  | string | true     | A User ID     |
| limit       | string | false    | Limit         |
| offset      | string | false    | Offset        |
| sort        | string | false    | Sort mode     |
| app\_name | string | true     | Your app name |

#### Responses <a id="get-user&apos;s-tracks-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                           |
|:------ |:-------------------------------------------------------------------------- |:------------ |:------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [tracks\_response](https://audiusproject.github.io/api-docs/?javascript#schematracks_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                             |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                             |

> Code Sample

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

> Example Response

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

### Search Playlists <a id="search-playlists"></a>

`GET /playlists/search`

_Search for a playlist_

#### Query Parameters <a id="search-playlists-parameters"></a>

| Name                 | Type   | Required | Description   |
|:-------------------- |:------ |:-------- |:------------- |
| query                | string | true     | Search Query  |
| only\_downloadable | string | false    | none          |
| app\_name          | string | true     | Your app name |

#### Responses <a id="search-playlists-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                                            |
|:------ |:-------------------------------------------------------------------------- |:------------ |:----------------------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [playlist\_search\_result](https://audiusproject.github.io/api-docs/?javascript#schemaplaylist_search_result) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                                              |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                                              |

> Code Sample

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

> Example Response

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

### Get Playlist <a id="get-playlist"></a>

`GET /playlists/{playlist_id}`

_Fetch a playlist_

#### Query Parameters <a id="get-playlist-parameters"></a>

| Name           | Type   | Required | Description   |
|:-------------- |:------ |:-------- |:------------- |
| playlist\_id | string | true     | A Playlist ID |
| app\_name    | string | true     | Your app name |

#### Responses <a id="get-playlist-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                               |
|:------ |:-------------------------------------------------------------------------- |:------------ |:---------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [playlist\_response](https://audiusproject.github.io/api-docs/?javascript#schemaplaylist_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                                 |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                                 |


> Code Sample

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

> Example Response

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

### Get Playlist Tracks <a id="get-playlist-tracks"></a>

`GET /playlists/{playlist_id}/tracks`

_Fetch tracks within a playlist_

#### Query Parameters <a id="get-playlist-tracks-parameters"></a>

| Name           | Type   | Required | Description   |
|:-------------- |:------ |:-------- |:------------- |
| playlist\_id | string | true     | A Playlist ID |
| app\_name    | string | true     | Your app name |

#### Responses <a id="get-playlist-tracks-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                                                |
|:------ |:-------------------------------------------------------------------------- |:------------ |:--------------------------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [playlist\_tracks\_response](https://audiusproject.github.io/api-docs/?javascript#schemaplaylist_tracks_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                                                  |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                                                  |


> Code Sample

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

> Example Response

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

## Tracks <a id="api-tracks"></a>

### Search Tracks <a id="search-tracks"></a>

`GET /tracks/search`

_Search for a track_

#### Query Parameters <a id="search-tracks-parameters"></a>

| Name                 | Type   | Required | Description                     |
|:-------------------- |:------ |:-------- |:------------------------------- |
| query                | string | true     | Search Query                    |
| only\_downloadable | string | false    | Return only downloadable tracks |
| app\_name          | string | true     | Your app name                   |

#### Responses <a id="search-tracks-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                     |
|:------ |:-------------------------------------------------------------------------- |:------------ |:------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [track\_search](https://audiusproject.github.io/api-docs/?javascript#schematrack_search) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                       |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                       |



> Code Sample

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

> Example Response

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

### Trending Tracks <a id="trending-tracks"></a>

`GET /tracks/trending`

_Gets the top 100 trending \(most popular\) tracks on Audius_

#### Query Parameters <a id="trending-tracks-parameters"></a>

| Name        | Type   | Required | Description                                                            |
|:----------- |:------ |:-------- |:---------------------------------------------------------------------- |
| genre       | string | false    | Trending tracks for a specified genre                                  |
| time        | string | false    | Trending tracks over a specified time range \(week, month, allTime\) |
| app\_name | string | true     | Your app name                                                          |

#### Responses <a id="trending-tracks-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                           |
|:------ |:-------------------------------------------------------------------------- |:------------ |:------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [tracks\_response](https://audiusproject.github.io/api-docs/?javascript#schematracks_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                             |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                             |

> Code Sample

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

> Example Response

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

### Get Track <a id="get-track"></a>

`GET /tracks/{track_id}`

_Fetch a track_

#### Query Parameters <a id="get-track-parameters"></a>

| Name        | Type   | Required | Description   |
|:----------- |:------ |:-------- |:------------- |
| track\_id | string | true     | A Track ID    |
| app\_name | string | true     | Your app name |

#### Responses <a id="get-track-responses"></a>

| Status | Meaning                                                                    | Description  | Schema                                                                                         |
|:------ |:-------------------------------------------------------------------------- |:------------ |:---------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | none         | [track\_response](https://audiusproject.github.io/api-docs/?javascript#schematrack_response) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request  | None                                                                                           |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error | None                                                                                           |

> Code Sample

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

> Example Response

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

### Stream Track <a id="stream-track"></a>

`GET /tracks/{track_id}/stream`

_Get the track's streamable mp3 file_

This endpoint accepts the Range header for streaming. https://developer.mozilla.org/en-US/docs/Web/HTTP/Range\_requests

#### Query Parameters <a id="stream-track-parameters"></a>

| Name        | Type   | Required | Description   |
|:----------- |:------ |:-------- |:------------- |
| track\_id | string | true     | A Track ID    |
| app\_name | string | true     | Your app name |

#### Responses <a id="stream-track-responses"></a>

| Status | Meaning                                                                    | Description           | Schema |
|:------ |:-------------------------------------------------------------------------- |:--------------------- |:------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Success               | None   |
| 216    | Unknown                                                                    | Partial content       | None   |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request           | None   |
| 416    | [Range Not Satisfiable](https://tools.ietf.org/html/rfc7233#section-4.4)   | Content range invalid | None   |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error          | None   |

> Code Sample

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

## Metrics <a id="api-metrics"></a>

### get\_trailing\_app\_name\_metrics <a id="get_trailing_app_name_metrics"></a>

`GET /metrics/app_name/trailing/{time_range}`

_Gets trailing app name metrics from matview_

#### Query Parameters <a id="get_trailing_app_name_metrics-parameters"></a>

| Name          | Type   | Required | Description   |
|:------------- |:------ |:-------- |:------------- |
| app\_name   | string | true     | Your app name |
| time\_range | string | true     | none          |

#### Responses <a id="get_trailing_app_name_metrics-responses"></a>

| Status | Meaning                                                 | Description | Schema                                                                                                                       |
|:------ |:------------------------------------------------------- |:----------- |:---------------------------------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Success     | [app\_name\_trailing\_response](https://audiusproject.github.io/api-docs/?javascript#schemaapp_name_trailing_response) |

> Code Sample

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

> Example Response
> 
> 200 Response

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

## Resolve <a id="api-resolve"></a>

### Resolve <a id="resolve"></a>

> Code Sample

`GET /resolve`

_Resolves and redirects a provided Audius app URL to the API resource URL it represents_

This endpoint allows you to lookup and access API resources when you only know the audius.co URL. Tracks, Playlists, and Users are supported.

#### Query Parameters <a id="resolve-parameters"></a>

| Name        | Type   | Required | Description                                                                               |
|:----------- |:------ |:-------- |:----------------------------------------------------------------------------------------- |
| url         | string | true     | URL to resolve. Either fully formed URL \(https://audius.co\) or just the absolute path |
| app\_name | string | true     | Your app name                                                                             |

> Example Response
> 
> Internal redirect

```text
{"HTTP/1.1 302 Found Location":"/v1/tracks/V4W8r"}
```

#### Responses <a id="resolve-responses"></a>

| Status | Meaning                                                    | Description       | Schema |
|:------ |:---------------------------------------------------------- |:----------------- |:------ |
| 302    | [Found](https://tools.ietf.org/html/rfc7231#section-6.4.3) | Internal redirect | None   |

#### Response Schema <a id="resolve-responseschema"></a>

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


## Schemas <a id="schemas"></a>

The following are examples of response formats you can expect to receive from the API.

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

#### Properties <a id="properties"></a>

| Name | Type                                                                    | Required | Restrictions | Description |
|:---- |:----------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| data | [user](https://audiusproject.github.io/api-docs/?javascript#schemauser) | false    | none         | none        |

### user <a id="tocS_user"></a>

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

#### Properties <a id="properties-2"></a>

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

#### Properties <a id="properties-3"></a>

| Name  | Type   | Required | Restrictions | Description |
|:----- |:------ |:-------- |:------------ |:----------- |
| 640x  | string | false    | none         | none        |
| 2000x | string | false    | none         | none        |

### profile\_picture <a id="tocS_profile_picture"></a>

```json
{
  "150x150": "string",
  "480x480": "string",
  "1000x1000": "string"
}

```

#### Properties <a id="properties-4"></a>

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

#### Properties <a id="properties-5"></a>

| Name | Type                                                                            | Required | Restrictions | Description |
|:---- |:------------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| data | \[[Track](https://audiusproject.github.io/api-docs/?javascript#schematrack)\] | false    | none         | none        |

### Track <a id="tocS_Track"></a>

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

#### Properties <a id="properties-6"></a>

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

#### Properties <a id="properties-7"></a>

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

#### Properties <a id="properties-8"></a>

| Name   | Type                                                                                               | Required | Restrictions | Description |
|:------ |:-------------------------------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| tracks | \[[track\_element](https://audiusproject.github.io/api-docs/?javascript#schematrack_element)\] | false    | none         | none        |

### track\_element <a id="tocS_track_element"></a>

```json
{
  "parent_track_id": "string"
}

```

#### Properties <a id="properties-9"></a>

| Name                  | Type   | Required | Restrictions | Description |
|:--------------------- |:------ |:-------- |:------------ |:----------- |
| parent\_track\_id | string | true     | none         | none        |

### reposts <a id="tocS_reposts"></a>

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

#### Properties <a id="properties-10"></a>

| Name | Type                                                                                  | Required | Restrictions | Description |
|:---- |:------------------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| data | \[[activity](https://audiusproject.github.io/api-docs/?javascript#schemaactivity)\] | false    | none         | none        |

### activity <a id="tocS_activity"></a>

```json
{
  "timestamp": "string",
  "item_type": {},
  "item": {}
}

```

#### Properties <a id="properties-11"></a>

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

#### Properties <a id="properties-12"></a>

| Name | Type                                                                                  | Required | Restrictions | Description |
|:---- |:------------------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| data | \[[favorite](https://audiusproject.github.io/api-docs/?javascript#schemafavorite)\] | false    | none         | none        |

### favorite <a id="tocS_favorite"></a>

```json
{
  "favorite_item_id": "string",
  "favorite_type": "string",
  "user_id": "string"
}

```

#### Properties <a id="properties-13"></a>

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

#### Properties <a id="properties-14"></a>

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

#### Properties <a id="properties-15"></a>

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

#### Properties <a id="properties-16"></a>

| Name | Type                                                                                  | Required | Restrictions | Description |
|:---- |:------------------------------------------------------------------------------------- |:-------- |:------------ |:----------- |
| data | \[[playlist](https://audiusproject.github.io/api-docs/?javascript#schemaplaylist)\] | false    | none         | none        |

### playlist <a id="tocS_playlist"></a>

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

#### Properties <a id="properties-17"></a>

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

### playlist\_artwork <a id="tocS_playlist_artwork"></a>

```json
{
  "150x150": "string",
  "480x480": "string",
  "1000x1000": "string"
}

```

#### Properties <a id="properties-18"></a>

| Name      | Type   | Required | Restrictions | Description |
|:--------- |:------ |:-------- |:------------ |:----------- |
| 150x150   | string | false    | none         | none        |
| 480x480   | string | false    | none         | none        |
| 1000x1000 | string | false    | none         | none        |

### playlist\_tracks\_response <a id="tocS_playlist_tracks_response"></a>

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

#### Properties <a id="properties-19"></a>

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

#### Properties <a id="properties-20"></a>

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

#### Properties <a id="properties-21"></a>

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

#### Properties <a id="properties-22"></a>

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

#### Properties <a id="properties-23"></a>

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

#### Properties <a id="properties-24"></a>

| Name  | Type    | Required | Restrictions | Description |
|:----- |:------- |:-------- |:------------ |:----------- |
| count | integer | false    | none         | none        |
| name  | string  | false    | none         | none        |
