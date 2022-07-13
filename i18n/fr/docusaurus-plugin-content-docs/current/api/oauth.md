---
sidebar_label: Connectez-vous avec Audius
sidebar_position: 3
---

# Se connecter avec Audius

## Table des matières

- [Aperçu](#overview)
  - [Authentification, pas d'autorisation](#authentication-not-authorization)
- [Workflow](#workflow)
  - [Démo](#demo)
  - [Liens rapides](#quick-links)
- [Comment mettre en œuvre la connexion à Audius avec le SDK Javascript](#how-to-implement-log-in-with-audius-with-the-javascript-sdk)
  - [1. Initialiser la fonctionnalité `oauth` du SDK](#1-initialize-the-sdk-oauth-feature)
    - [<ins>**oauth.init(loginSuccessCallback, errorCallback)**</ins>](#insoauthinitloginsuccesscallback-errorcallbackins)
  - [2. Afficher le bouton Connexion avec Audius](#2-render-the-log-in-with-audius-button)
    - [<ins>**oauth.renderButton(element, personnalisations)**</ins>](#insoauthrenderbuttonelement-customizationsins)
    - [_💡 **Astuce**: Détecte quand le bouton a été rendu et affiche un chargeur jusqu'à ce que_:](#-tip-detect-when-the-button-has-rendered-and-show-a-loader-until-then)
    - [<ins>**oauth.login()**</ins>](#insoauthloginins)
  - [3. Terminé !](#3-done)
  - [Addendum: Une note rapide sur l'e-mail](#addendum-a-quick-note-on-email)
  - [Exemple de code complet utilisant le paquet React et npm](#full-code-example-using-react-and-npm-package)
  - [Exemple de code complet en utilisant JS vanilla et SDK dist](#full-code-example-using-vanilla-js-and-sdk-dist)
- [Comment implémenter manuellement la connexion avec Audius](#how-to-implement-log-in-with-audius-manually)
  - [1. Ouvrir la page de connexion avec l'invite Audius](#1-open-the-log-in-with-audius-prompt-page)
  - [1.5 N'oubliez pas de gérer la sortie anticipée (c'est-à-dire l'échec) du flux d'authentification](#15-remember-to-handle-early-exiting-ie-failure-of-the-authentication-flow)
  - [2. Procédez et vérifiez la réponse](#2-process-and-verify-the-response)
    - [**Si vous avez utilisé une URI de redirection**:](#if-you-used-a-redirect-uri)
    - [**Si vous avez utilisé `redirectURI=postmessage`**:](#if-you-used-redirecturipostmessage)
    - [**Traitement de la réponse**](#handling-the-response)
  - [3. Terminé !](#3-done-1)
  - [Addendum: Une note rapide sur l'e-mail](#addendum-a-quick-note-on-email-1)

## Aperçu

La fonction "Log in with Audius" permet à votre application de récupérer et de vérifier les informations du profil Audius d'un utilisateur sans que celui-ci ait à vous communiquer son mot de passe Audius.

Vous pouvez tirer parti de ce flux pour une variété de cas d'utilisation, par exemple :

- Fournir un moyen sécurisé et pratique pour les utilisateurs de s'inscrire et/ou de se connecter à votre application sans avoir à définir un mot de passe ou remplir un formulaire de profil
- Associer un utilisateur à son compte Audius pour que vous puissiez récupérer leurs données Audius (par exemple récupérer leurs traces)
- Confirmez si un utilisateur est un artiste Audius "Vérifié"

Cependant, notez que ce flux **NE PEUT PAS**:

- Gérer la session de connexion de l'utilisateur sur votre application
- Donnez à votre application la permission d'effectuer des actions sur Audius au nom de l'utilisateur (voir plus bas).  
  <br />

### Authentification, pas d'autorisation

Veuillez noter que la connexion avec Audius est en mesure de fournir une authentification, mais pas d'autorisation (encore!). C'est-à-dire que ce flux ne fournit pas encore la possibilité d'obtenir les autorisations pour effectuer des actions au nom de l'utilisateur (par exemple, télécharger une piste).

<br />

<img src="../../static/img/oauthpopup.png" height="488" width="252" alt="Connectez-vous avec la fenêtre contextuelle Audius" />

_Se connecter avec Audius_

<br />

## Workflow

Le flux "Log in with Audius" ressemble à ceci :

1. Vous fournissez un bouton sur votre application ou votre site Web pour lancer le flux d'authentification.
2. Lorsque l'utilisateur clique sur le bouton, il ouvre une popup contenant une page de connexion Audius qui invite l'utilisateur à se connecter avec ses identifiants Audius (alternativement, votre app/site web peut rediriger vers la page de connexion Audius au lieu d'utiliser une popup)
3. Une fois que l'utilisateur se connecte avec succès, Audius fournit à votre application/site Web le profil de l'utilisateur à l'aide d'un jeton Web JSON (JWT)
4. Votre application vérifie et décode le JWT

Le bloc JWT contient les informations suivantes à propos de l'utilisateur :

- Identifiant unique (ID utilisateur Audius)
- E-mail
- Nom affiché
- Poignée Audius
- Si l'utilisateur est un artiste vérifié (c'est-à-dire a une coche violette)
- URL de la photo de profil, le cas échéant

### Démo

Découvrez une démo rapide du flux Oauth [ici](https://codesandbox.io/s/log-in-with-audius-demo-j2jx6f)!

### Liens rapides

- Démo avec React - [Application de démo](https://j2jx6f.csb.app/) | [Code](https://codesandbox.io/s/log-in-with-audius-demo-j2jx6f?file=/src/App.js)
- Démo avec React - [Application de démo](https://xkogl3.csb.app/) | [Code](https://codesandbox.io/s/log-in-with-audius-demo-vanilla-js-xkogl3?file=/index.html)
- [Configurateur de bouton](https://9ncjui.csb.app/)

<br />

## Comment mettre en œuvre la connexion à Audius avec le SDK Javascript

Le moyen le plus simple d'ajouter la connexion avec Audius à votre application consiste à utiliser le SDK Javascript. Si vous ne parvenez pas à utiliser le SDK Javascript (par exemple, si vous développez une application mobile), passez à "Comment mettre en œuvre manuellement la connexion avec Audius".

Conditions préalables:

- [Configurer et initialiser le SDK Audius sur votre application](./sdk.md#installation)

### 1. Initialiser la fonctionnalité SDK `oauth`

Tout d'abord, vous devez appeler `oauth.init` et lui fournir le nom de votre application, un rappel de réussite de connexion et un rappel d'erreur facultatif :

#### <ins>**oauth.init(loginSuccessCallback, errorCallback)**</ins>

active la fonctionnalité Se connecter avec Audius.

**Paramètres**

- loginSuccessCallback `(profil : UserProfile) => void` - fonction à appeler lorsque l'utilisateur s'authentifie avec succès auprès d'Audius. Cette fonction sera appelée avec les informations de profil de l'utilisateur, qui est un objet ayant la forme suivante :

  ```typescript
  // type UserProfile =
  {
    userId : nombre ; // identifiant unique de l'utilisateur Audius
    e-mail : chaîne ;
    nom : chaîne ; // poignée du nom d'affichage de l'utilisateur
     : chaîne ;
    vérifié : booléen ; // si l'utilisateur a la coche Audius "vérifié"

    /** URL pour la photo de profil de l'utilisateur, le cas échéant.
     * Dans la grande majorité des cas, trois tailles seront disponibles : 150 x 150, 480 x 480 et 1 000 x 1 000.
    * Dans de rares cas, seule une taille inconnue "misc" sera disponible.
    * Si l'utilisateur n'a pas de photo de profil, ce champ sera vide.
    */
    profilePicture : {"150x150": chaîne, "480x480": chaîne, "1000x1000": chaîne } | { misc: string } | non défini | null
    sub : nombre ; // alias pour userId
    iat : chaîne ; // horodatage du moment où l'authentification a été effectuée
}
  ```

- errorSuccessCallback _optionnel_ `(errorMessage : string) => void` - fonction à appeler lorsqu'une erreur se produit pendant le flux d'authentification. Cette fonction sera appelée avec une chaîne décrivant l'erreur.

**Renvoie**: Rien

Exemple:

```javascript
audiusSdk.oauth.init(
  (res) => {
    console.log("Connexion réussie!", res);
  },
  (err) => {
    console.log("Erreur :(", err );
  }
);
```

<br />

### 2. Afficher le bouton Se connecter avec Audius

Vous pouvez soit utiliser la méthode `oauth.renderButton` soit implémenter vous-même un bouton de connexion et invoquer la fenêtre contextuelle de connexion avec `oauth.login`.

**En utilisant `oauth.renderButton` (recommandé)** :

#### <ins>**oauth.renderButton(élément, personnalisations)**</ins>

remplace l'élément passé en premier paramètre par le bouton Se connecter avec Audius

**Paramètres**

- element `HTMLElement` - Elément HTML à remplacer par le bouton Se connecter avec Audius
- personnalisations _en option_ `ButtonOptions` - objet facultatif contenant les paramètres de personnalisation du bouton à rendre. Voici les options disponibles :

  ```typescript
  // type ButtonOptions =
  {
    // Taille du bouton :
    taille ? : 'small' | 'moyen' | 'large'

    // Style de coin du bouton :
    coins ? : 'default' | 'pill'

    // Votre propre texte pour le bouton ; la valeur par défaut est "Connexion avec Audius":
    customText?: string

    // Si l'animation "grow" du bouton doit être désactivée au survol :
    disableHoverGrow?: boolean

    // Si le bouton doit occuper toute la largeur de son élément parent :
    fullWidth? : booléen
}
  ```

  Utilisez [ce terrain de jeu](https://9ncjui.csb.app/) pour voir comment ces personnalisations affectent l'apparence du bouton et déterminer quelle configuration fonctionne le mieux pour votre application.

**Renvoie**: Rien

Exemple:

```javascript
<!-- Javascript -->
audiusSdk.oauth.renderButton(document.getElementById('audiusLogInButton'), {
  size: 'large',
  corners: 'pill',
  customText: 'Continue with Audius'
})

<!-- HTML -->
<div id="audiusLogInButton"></div>
```

<br />

#### _💡 **Astuce**: Détecter quand le bouton s'est rendu et afficher un loader jusque-là_:

Le chargement du bouton peut prendre jusqu'à quelques secondes. Vous pouvez afficher un indicateur de chargement jusqu'à ce que le bouton soit chargé pour une expérience utilisateur optimale.

Le bouton de connexion sera rendu avec un identifiant de `audius-login-button`. Vous pouvez détecter quand l'élément a été ajouté à l'aide d'un MutationObserver :

Exemple:

```HTML
<!-- Dans votre HTML -->
<!-- Entourez votre élément qui sera remplacé par le bouton Se connecter avec Audius d'un parent, par exemple : -->
<div id="parent">
  <div id="audiusLogInButton"></div>
  <!-- Vous Je veux un meilleur indicateur de chargement que celui-ci :P -->
  <div id="loading">Chargement...</div>
</div>

```

```JS
// Dans votre JS
const observer = new MutationObserver(function(mutations_list) {
    mutations_list.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(added_node) {
            if (added_node.id == 'audius- login-button') {
        // Le bouton de connexion a rendu
        document.querySelector('#loading').remove()
        observer.disconnect();
            }
        });
    });
});

observer.observe(document.querySelector("#parent"), { subtree: false, childList: true });

```

<br />

**En utilisant votre propre bouton et `oauth.login`**:

#### <ins>**oauth.login()**</ins>

ouvre la fenêtre contextuelle Se connecter avec Audius, qui lance le processus d'authentification

**Paramètres**

None

**Renvoie**: Rien

Exemple:

```javascript
<!-- Javascript -->
function logInWithAudius() {
  audiusSdk.oauth.login()
}

<!-- HTML -->
<button onclick="logInWithAudius()">Connectez-vous avec Audius !</button>
```

<br />

### 3. Fait!

C'est ça! Voir ci-dessous pour des exemples de code complet.

### Addendum : Une note rapide sur le courrier électronique

Une fois que vous connaissez l'ID utilisateur Audius de votre utilisateur, vous pouvez récupérer ses informations Audius à tout moment à l'aide de notre SDK ou de nos API Web. Cependant, la seule information de profil qui n'est pas disponible en dehors de la réponse Se connecter avec Audius est l'adresse e-mail de l'utilisateur. Si vous ne stockez pas l'adresse e-mail de l'utilisateur après l'avoir reçue dans la réponse Connexion réussie avec Audius, vous ne pouvez récupérer l'e-mail qu'en demandant à l'utilisateur de compléter à nouveau le flux Se connecter avec Audius.

### Exemple de code complet utilisant React et le package npm

[Voir le bac à sable ici](https://codesandbox.io/s/log-in-with-audius-demo-j2jx6f)

### Exemple de code complet utilisant vanilla JS et SDK dist

[Voir le bac à sable ici](https://codesandbox.io/s/log-in-with-audius-demo-vanilla-js-xkogl3?file=/index.html)

<br />
<br />

## Comment implémenter manuellement la connexion avec Audius

Si vous n'êtes pas en mesure d'utiliser le SDK Audius Javascript, vous pouvez implémenter la connexion avec Audius manuellement en suivant les étapes ci-dessous.

### 1. Ouvrez la page d'invite Se connecter avec Audius

Créez un bouton "Connexion avec Audius" sur votre application. Si vous utilisez HTML (ou un balisage de type HTML) et CSS, vous pouvez utiliser [ce terrain de jeu](https://j2jx6f.csb.app/) pour personnaliser et générer facilement du code pour un bouton de connexion de marque Audius.

Le fait de cliquer sur votre bouton de connexion devrait lancer le flux d'authentification en dirigeant l'utilisateur vers la page d'invite Se connecter avec Audius.

Sur une application native, le bouton de connexion doit ouvrir un navigateur Web sécurisé dans l'application (par exemple ASWebAuthenticationSession ou SFSafariViewController sur les applications iOS, et "Onglets personnalisés" sur les applications mobiles Android) qui charge la page de connexion Audius. Une application Web, quant à elle, devrait ouvrir la page de connexion Audius dans une fenêtre contextuelle ou simplement rediriger vers celle-ci.

La page d'invite Se connecter avec Audius se trouve à l'URL suivante :

`https://audius.co/oauth/auth?scope=read&app_name={YourAppName}&redirect_uri={YourRedirectURI}&origin={YourAppOrigin}&state={YourStateValue}&response_mode={query|fragment}`

Vous devez ouvrir cette page avec les paramètres d'URL requis, décrits ci-dessous.

**Paramètres**

- scope `"read"` - la portée de la demande d'authentification. Seul `"lire"` est disponible (c'est-à-dire ne le changez pas).
- app_name `chaîne` - le nom de votre application. Cela sera affiché à l'utilisateur dans la page d'invite de connexion.
- redirect_uri `string` - l'emplacement vers lequel la page de connexion Audius doit être redirigée une fois que l'utilisateur s'est authentifié avec succès. Les schémas d'URL personnalisés sont autorisés et pris en charge. Vous pouvez utiliser la valeur spéciale `postmessage` ici si vous souhaitez que la page de connexion renvoie la réponse à son ouvreur en utilisant `window.postMessage` au lieu d'utiliser une redirection. Sinon, les règles de validation suivantes s'appliquent :

  - Les hôtes ne peuvent pas être des adresses IP brutes SAUF si ce sont des adresses IP d'hôte local
  - Ne peut pas contenir le composant fragment (`#`)
  - Ne peut pas contenir le composant `userinfo`
  - Ne peut pas contenir de traversée de chemin (contient `/..` ou `\..`)
  - Doit contenir des caractères et un format d'URI valides

- origin _facultatif_ `chaîne` uniquement applicable et requis si `redirect_uri` est défini sur `postmessage`. Si tel est le cas, cette valeur doit être définie sur l'origine [](https://developer.mozilla.org/en-US/docs/Web/API/URL/origin) de la fenêtre qui a ouvert la fenêtre contextuelle Se connecter avec Audius.
- état _facultatif mais fortement recommandé_ - `chaîne` n'importe quelle chaîne. Lorsque l'utilisateur est redirigé vers votre application, la valeur exacte `état` que vous fournissez ici sera incluse dans la redirection (dans le paramètre de fragment URI `état`). **Ce champ doit être exploité comme un mécanisme de protection CSRF** (en savoir plus [ici](https://auth0.com/docs/secure/attack-protection/state-parameters) ou [ici](https://security.stackexchange.com/questions/20187/oauth2-cross-site-request-forgery-and-state-parameter)), et peut également être utilisé comme un moyen de conserver toutes les données utiles pour votre application entre l'endroit où la valeur `état` est générée et où va la redirection.
- `response_mode` _facultatif, déconseillé si possible_ - `"fragment" | "query"` spécifie si les paramètres de réponse du flux d'authentification seront encodés dans la chaîne de requête ou dans le composant de fragment de redirect_uri lors de la redirection vers votre application. Le comportement par défaut est équivalent à "fragmenter". Nous vous recommandons de NE PAS changer cela si possible.

**Exemple**

```HTML
<a href="https://audius.co/oauth/auth?scope=read&app_name=My%20Demo%20App&redirect_uri=https://mydemoapp.com/oauth/receive-token&state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9">Cliquez sur moi pour vous connecter avec Audius !</a>
```

### 1.5 N'oubliez pas de gérer la sortie précoce (c'est-à-dire l'échec) du flux d'authentification

Si l'utilisateur quitte le flux d'authentification avant de l'avoir terminé, par exemple en fermant la fenêtre, votre application doit le détecter et faire en sorte que l'interface utilisateur réponde en conséquence.

<br />

### 2. Traiter et vérifier la réponse

#### **Si vous avez utilisé un URI de redirection**:

Lorsque l'utilisateur s'est authentifié avec succès, la page Se connecter avec Audius sera redirigée vers l'URI de redirection que vous avez spécifié, **avec 1) le JWT contenant le profil de l'utilisateur et 2) la valeur d'état d'origine que vous avez fournie (le cas échéant) incluse dans le Fragment d'URI** (ou chaîne de requête, si `response_mode` a été défini sur `query`). Pour illustrer, en partant de l'exemple ci-dessus où nous avons ouvert la page de connexion avec l'URL suivante : `https://audius.co/oauth/auth?scope=read&app_name=My%20Demo%20App&redirect_uri=https:/ /mydemoapp.com/oauth/receive-token&état=a4e0761e-8c21-4e20-819d-5a4daeab4ea9`

... lorsque l'utilisateur s'authentifie avec succès, la page de connexion redirige vers... : `https://mydemoapp.com/oauth/receive-token#state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9&token={JWT}` où `{JWT}` est un jeton Web [JSON](https://jwt.io/introduction) contenant les informations de profil codées de l'utilisateur et une signature.

> Si vous avez spécifié `response_mode=query` lors de l'ouverture de la page de connexion, la page de connexion serait plutôt redirigée vers... :
> 
> `https://mydemoapp.com/oauth/receive-token?state=a4e0761e-8c21-4e20-819d-5a4daeab4ea9&token={JWT}`

Voir "**Traitement de la réponse**" ci-dessous pour savoir quoi faire ensuite.

<br />

#### **Si vous avez utilisé `redirectURI=postmessage`**:

Lorsque l'utilisateur s'est authentifié avec succès, la page Se connecter avec Audius enverra un message via `window.postMessage` à la fenêtre qui l'a ouverte. Le message contiendra un JWT contenant le profil utilisateur ainsi que la valeur `état` que vous avez initialement spécifiée dans le paramètre d'URL correspondant, le cas échéant. Par exemple, si votre application a ouvert la page de connexion à l'aide de l'URL suivante : `https://audius.co/oauth/auth?scope=read&app_name=My%20Demo%20App&redirect_uri=https://mydemoapp.com/ oauth/receive-token&état=a4e0761e-8c21-4e20-819d-5a4daeab4ea9`

... le message ressemblerait à ceci :

```
{
  jeton : <JWT>,
  état : 'a4e0761e-8c21-4e20-819d-5a4daeab4ea9'
}
```

où `<JWT>` est un jeton Web [JSON](https://jwt.io/introduction) contenant les informations de profil codées de l'utilisateur et une signature.

Rappel rapide - assurez-vous que votre écouteur d'événement `postMessage` valide que l'origine de l'événement entrant est `https://audius.co`!

<br />

#### **Gérer la réponse**

Extrayez le JWT (`token`) du fragment d'URI ou de la chaîne de requête (si vous avez utilisé une redirection) ou du message d'événement (si vous avez utilisé `postmessage`).

Une fois que vous avez le jeton, vous devez l'envoyer au point de terminaison suivant de l'API Audius afin de vérifier que a) la signature a été signée par l'utilisateur Audius qui a terminé l'authentification, et b) le contenu du jeton n'a pas été falsifié . Lors de la vérification de la validité du JWT, le point de terminaison renverra les informations de profil décodées de l'utilisateur authentifié.

<ins>GET `/v1/users/verify_token?token=[JWT]`</ins>

**Paramètres**

- jeton `chaîne` - le JWT du flux d'authentification que vous souhaitez vérifier

**Envoi de la demande**

Pour utiliser l'API, vous devez d'abord sélectionner un point de terminaison de l'API dans la liste des points de terminaison renvoyés par :

`OBTENIR https://api.audius.co`

Une fois que vous avez sélectionné un hôte, toutes les demandes d'API peuvent lui être envoyées directement. Par exemple, si vous avez choisi cet hôte : `https://audius-dp.singapore.creatorseed.com`, vous enverriez la demande de jeton de vérification à `https://audius-dp.singapore.creatorseed.com/v1 /users/verify_token?token=<JWT>`, où `<JWT>` est remplacé par le JWT que vous avez récupéré dans le flux d'authentification.

Nous vous recommandons de sélectionner un hôte chaque fois que votre application démarre, car la disponibilité peut changer au fil du temps.

**Réponse réussie**

- Code : 200OK
- Contenu : la charge utile JWT décodée, qui contient les informations de profil de l'utilisateur :

```typescript
{
  userId : nombre, // identifiant unique de l'utilisateur Audius
  e-mail : chaîne,
  nom : chaîne, // nom d'affichage de l'utilisateur
   handle : chaîne,
  vérifié : booléen, // si l'utilisateur a la coche Audius « vérifié »

  /** URL de la photo de profil de l'utilisateur, le cas échéant.
   * Dans la grande majorité des cas, trois tailles seront disponibles : 150 x 150, 480 x 480 et 1 000 x 1 000.
  * Dans de rares cas, seule une taille inconnue "misc" sera disponible.
  * Si l'utilisateur n'a pas de photo de profil, ce champ sera vide.
  */
  profilePicture : {"150x150": chaîne, "480x480": chaîne, "1000x1000": chaîne } | { misc: string } | non défini | null
  sub : nombre, // alias pour userId
  iat : chaîne, // horodatage du moment où l'authentification a été effectuée
}
```

**Réponses d'erreur**

<ins>Signature invalide</ins>:

- Code : `404` Introuvable
- Contenu : message d'erreur décrivant le problème qui s'est produit, par exemple "La signature JWT n'est pas valide - le portefeuille n'a pas pu être récupéré."

<ins>Problème avec l'entrée `token`</ins> :

- Code : `400` Mauvaise requête
- Contenu : message d'erreur, par exemple "la signature JWT n'a pas pu être décodée".

<br />

### 3. Fait!

Une fois que vous avez vérifié le JWT, le flux d'authentification est terminé et vous disposez maintenant des informations de profil Audius de votre utilisateur.

### Addendum : Une note rapide sur le courrier électronique

Une fois que vous connaissez l'ID utilisateur Audius de votre utilisateur, vous pouvez récupérer ses informations Audius à tout moment à l'aide de notre SDK ou de nos API Web. Cependant, la seule information de profil qui n'est pas disponible en dehors de la réponse Se connecter avec Audius est l'adresse e-mail de l'utilisateur. Si vous ne stockez pas l'adresse e-mail de l'utilisateur après l'avoir reçue dans la réponse Connexion réussie avec Audius, vous ne pouvez récupérer l'e-mail qu'en demandant à l'utilisateur de compléter à nouveau le flux Se connecter avec Audius.
