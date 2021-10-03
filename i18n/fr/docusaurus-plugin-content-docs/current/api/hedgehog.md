---
sidebar_label: "Hedgehog\n\nConstruire des Dapps comme des applications\n\nGithub 👈\n\nHedgehog est un portefeuille Ethereum open-source côté client, qui utilise un nom d'utilisateur et un mot de passe. Il vise à réduire la barrière d'entrée aux projets de crypto-monnaies pour les utilisateurs qui ne sont pas familiers avec la technologie.\n\nPermettre aux utilisateurs d'interagir avec votre Dapp comme ils le feraient avec n'importe quel autre site web, sans extension, sans centraliser le contrôle des clés.\n\nHedgehog est une alternative à Metamask qui gère la clé privée et le portefeuille d'un utilisateur sur le navigateur. Il expose une Api simple qui vous permet de créer un schéma d'authentification pour que les utilisateurs puissent s'inscrire et se connecter à leur portefeuille sur plusieurs navigateurs et appareils.\n\nToutes les transactions ne sont pas égales\n\nLes portefeuilles Ethereum actuels traitent chaque transaction comme s'il s'agissait de transférer les économies de toute une vie. Hedgehog a été conçu pour des cas d'utilisation impliquant une valeur financière faible à nulle.\n\n Remarque : la principale amélioration de l'expérience de l'utilisateur final est gagnée en masquant \n la complexité du portefeuille et en n'obligeant pas les utilisateurs à confirmer les transactions - le \n contraire de ce que vous souhaitez lorsque vous déplacez des sommes importantes.\n\nPlus de popups 🦊\n\nAujourd'hui, les applications décentralisées nécessitent de nombreuses connaissances techniques pour être configurées et utilisées, ce qui limite votre base d'utilisateurs et réduit votre potentiel de croissance.\n\nInstallation\n\nnpm i --save @audius/hedgehog\n\nDocuments et exemples\n\nConsultez la documentation technique complète et le mode d'emploi de l'Api.\n(missing hypertext link i can't add them)\n\nPour une démonstration rapide côté navigateur, ne cherchez pas plus loin. Pour une démonstration complète de l'authentification de bout en bout, consultez notre dépôt de démonstration.\n(missing hypertext link i can't add them)\n\nPourquoi l'utiliser ?\n\nToutes les transactions ne sont pas identiques\n\nLes portefeuilles actuellement disponibles traitent chaque transaction comme s'il s'agissait des économies d'une vie. Hedgehog a été conçu pour des cas d'utilisation impliquant une valeur financière faible ou nulle.\n\nRemarque : La principale amélioration de l'expérience de l'utilisateur final consiste à masquer la complexité du portefeuille et à ne pas obliger les utilisateurs à confirmer constamment les transactions - le contraire de ce que vous souhaitez lorsque vous déplacez des sommes importantes.\n\nHedgehog est-il la solution idéale pour votre Dapp ?\n\nHedgehog ne convient pas à toutes les applications numériques. Les améliorations massives de l'expérience utilisateur ne sont possibles qu'en faisant des compromis. En règle générale, Hedgehog ne devrait pas être utilisé pour les applications impliquant des sommes d'argent importantes. En guise de passerelle, on pourrait faire démarrer les utilisateurs sur Hedgehog et leur suggérer de migrer vers un portefeuille plus sécurisé si leur valeur stockée augmente au-delà d'un certain seuil ; le paradigme Hedgehog est également interopérable avec les fournisseurs web3 existants.\n\n\\[Bon cas d'utilisation\\]\n\n. Signature des données : Si vous construisez des applications décentralisées qui reposent sur des données signées par l'utilisateur (par exemple, via des schémas de signature de type Eip-712), Hedgehog pourrait simplifier l'expérience si les enjeux sont suffisamment faibles.\n. Dapp de jeu : Rien ne gâche autant le plaisir que de signer des transactions. Si vous construisez une Dapp de jeu qui n'utilise pas d'actifs financiers importants, l'amélioration de l'Ux est essentielle.\n. Lecteur de musique décentralisé : Si vous créez des applications numériques destinées aux consommateurs, Hedgehog améliorera considérablement l'expérience utilisateur et augmentera de façon significative votre base d'utilisateurs potentiels.\n\n\\[Cas d'utilisation incorrect\\]\n\nSi votre Dapp implique le déplacement d'importantes sommes d'argent, le compromis en matière de sécurité n'en vaut probablement pas la peine. La principale amélioration apportée par Hedgehog à l'expérience de l'utilisateur final consiste à masquer le portefeuille et à ne pas obliger les utilisateurs à confirmer les transactions, ce qui est à l'opposé de ce que vous souhaitez lorsque vous déplacez de l'argent. Nous ne recommandons absolument pas l'utilisation de Hedgehog dans des situations comme celles-ci :\n\n. Banque Dapp\n. Prêts décentralisés\n. Marchés prédictifs\n\nUn regard plus approfondi\n\nHedgehog est un paquet qui se trouve dans votre application front-end pour créer et gérer l'entropie d'un utilisateur (à partir de laquelle une clé privée est dérivée). Hedgehog s'appuie sur un nom d'utilisateur et un mot de passe pour créer des artefacts d'authentification. Il est donc capable de simuler un système d'authentification familier qui permet aux utilisateurs de s'inscrire ou de se connecter à partir de plusieurs navigateurs ou appareils et de récupérer leur entropie. Ces artefacts, via hedgehog, sont persistés dans un backend de votre choix.\n\nRemarque : La clé privée est uniquement calculée et disponible côté client et n'est jamais transmise ou stockée ailleurs que dans le navigateur de l'utilisateur.\n\n// Provide getFn, setAuthFn, setUserFn as requests to your database/backend service (more details in docs).\nconst hedgehog = new Hedgehog(getFn, setAuthFn, setUserFn)\nlet wallet\nif (hedgehog. isLoggedIn()) {\n wallet = hedgehog. getWallet()\n} else {\n wallet = await hedgehog. login('username', 'password')\n // or\n wallet = await hedgehog. signUp('username', 'password')\n}\n\nAprès avoir créé ou récupéré le portefeuille d'un utilisateur, vous pouvez soit approvisionner directement son portefeuille pour payer les frais de transaction, soit relayer ses transactions par un relais Eip-712.\n\n👉 Plonger plus profondément dans la documentation 👈\n(missing hypertext link i can't add them)"
sidebar_position: 2
---

# Hedgehog

Build DApps Like Apps

[Github](https://github.com/AudiusProject/hedgehog) 👈

Hedgehog is an open-source, client-side Ethereum wallet that uses a username and password. It aims to lower the barrier of entry to crypto projects for non tech-savvy users.

Allow users to interact with your DApp just like they would any other website, no extensions required, without centralizing control of keys.

**Hedgehog** is alternative to Metamask that manages a user's private key and wallet on the browser. It exposes a simple API to allow you to create an authentication scheme to let users sign up and login to their wallet across multiple browsers and devices.

### Not All Transactions Are Created Equal

Current Ethereum wallets treat every transaction as if it were moving your life’s savings. Hedgehog was built for use-cases involving low-to-no financial value.

> Note: The primary improvement to end-user experience is gained by hiding wallet complexity and not forcing users to confirm transactions - the opposite of what you’d want when moving significant money around.

#### No More Popups 🦊

Decentralized apps today require lots of technical knowledge to configure and use, limiting your user base and reducing the potential for growth.

### Installation

```bash
npm i --save @audius/hedgehog
```

### Docs & Examples

Check out our full technical [docs](http://audiusproject.github.io/hedgehog-docs) and [api how-to](http://audiusproject.github.io/hedgehog-docs#how-to).

For a quick browser-side demo, [look no further](https://codesandbox.io/embed/pp9zzv2n00). For a full end-to-end auth demonstration, see our [demo repo](https://github.com/AudiusProject/audius-hedgehog-demo).

### Why Use This?

#### Not All Transactions Are Created Equal

Currently available wallets treat every transaction as if it were moving around your life’s savings. Hedgehog was built for use-cases involving low-to-no financial value.

**NOTE**: The primary improvement to end-user experience is by hiding wallet complexity and not forcing users to constantly confirm transactions - The opposite of what you’d want when moving significant money around.

#### Is Hedgehog Right for your DApp?

Hedgehog isn’t right for every DApp. Massive improvements in user experience are only possible through tradeoffs. As a general rule Hedgehog should not be used for apps involving significant sums of money. As a bridge, one could start users on Hedgehog and suggest migrating to a more secure wallet if their stored value increases beyond a certain threshold; the Hedgehog paradigm is interoperable with existing web3 providers too.

_\[Good use cases\]_

* **Signing data**: If you’re building decentralized applications that rely on user signed data \(eg. via EIP-712-esque signing schemes\), Hedgehog could help simplify the experience if the stakes are low enough.
* **Gaming DApp**: Nothing ruins fun as much as signing transactions. If you’re building a gaming DApp that doesn’t use significant financial assets, improving UX is key.
* **Decentralized Music Player**: If you’re building consumer-facing DApps, Hedgehog will dramatically improve user experience and significantly increase your potential userbase.

_\[Bad use cases\]_

If your DApp involves moving around significant sums of money, then the tradeoff in security is most likely not worth it. Hedgehog’s primary improvement to end-user experience is by hiding the wallet and not forcing users to confirm transactions - The opposite of what you’d want when moving money around. We absolutely don’t recommend using Hedgehog in situations like these:

* **Banking DApp**
* **Decentralized Lending**
* **Prediction Markets**

### A Closer Look

Hedgehog is a package that lives in your front end application to create and manage a user's entropy \(from which a private key is derived\). Hedgehog relies on a username and password to create auth artifacts, so it's able to simulate a familiar authentication system that allows users to sign up or login from multiple browsers or devices and retrieve their entropy. Those artifacts, through hedgehog, are persisted to a backend of your choosing.

**NOTE**: A private key is only computed and available client side and is never transmitted or stored anywhere besides the user's browser.

```javascript
// Provide getFn, setAuthFn, setUserFn as requests to your database/backend service (more details in docs).
const hedgehog = new Hedgehog(getFn, setAuthFn, setUserFn)
let wallet
if (hedgehog.isLoggedIn()) {
  wallet = hedgehog.getWallet()
} else {
  wallet = await hedgehog.login('username', 'password')
  // or
  wallet = await hedgehog.signUp('username', 'password')
}
```

After creating or retrieving a user's wallet, you can either **fund their wallet directly** to pay transaction fees or **relay their transactions through a EIP-712 relayer**.


### 👉 [Take a deeper dive into the docs](https://audiusproject.github.io/hedgehog-docs/#installation) 👈
