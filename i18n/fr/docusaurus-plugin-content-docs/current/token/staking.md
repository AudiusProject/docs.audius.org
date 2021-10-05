---
sidebar_label: Staking
sidebar_position: 2
---

# Staking

### Qu'est-ce que le Stacking?

Construit comme un protocole décentralisé sur Ethereum, tout le contenu, les informations et les données sur Audius sont stockés et indexés par un réseau croissant d'opérateurs de nœuds tiers, plutôt que par l'équipe Audius.

Pour garantir la fiabilité et la maintenance de ce contenu, les opérateurs de nœuds sont tenus de fournir une garantie ou une " sake " comme caution pour le service du protocole. Cette mise, exprimée en $AUDIO, garantit que les opérateurs de nœuds disposent de jetons à risque qui peuvent être supprimés, ou pris, en cas de comportement malveillant ou médiocre.

En utilisant des jetons $AUDIO comme collatéral, toute personne disposant du matériel adéquat peut devenir opérateur de nœud sans aucune autorisation. Plus le nombre de $AUDIO mis en jeu dans le protocole est élevé, plus le réseau est sécurisé et moins il est vulnérable aux attaques extérieures.

En récompense des services rendus au réseau, les opérateurs de nœuds peuvent gagner des $AUDIO grâce à l'émission automatique sur la chaîne, ou à la création continue de nouveaux jetons distribués aux acteurs à valeur ajoutée.

Ceux qui misent plus d' $AUDIO ont la possibilité de gagner une plus grande partie de l'émission en échange de la sécurisation du réseau.

### Comment fonctionne Audius

Sur Audius, le contenu est acheminé vers deux types de nœuds différents :

* _Content Nodes_ - Pour stocker et relayer le contenu audio (pistes, mixages, etc.) diffusé sur Audius
* _Discovery Nodes_ - Pour indexer et trier les données telles que les profils d'utilisateurs, les listes de lecture et les abonnés.

En tant qu'artiste, le téléchargement sur Audius n'est pas différent du téléchargement sur une plateforme comme Soundcloud. Mais ce qui se passe dans les coulisses, c'est ce qui rend l'Audius si unique.

Quand un artiste télécharge une piste sur Audius :

1. Ce contenu est téléchargé vers Content Node.
2. Les données sont transcodées et renvoient un code de référence utilisé pour identifier la piste.
3. Les données liées par le code de référence sont répliquées vers deux autres nœuds de contenu du réseau.
4. Une transaction onchain est publiée, signifiant que la piste existe sur Audius et que les métadonnées sont attachées au profil qui a téléchargé la piste.
5. La transaction est récupérée et indexée vers Discovery Node
6. Le client indique que la piste a été publiée avec succès lorsqu'elle apparaît sur le nœud Discovery Node, marquant ainsi la fin du téléchargement !

Super simple right! C'est là que le Stacking entre en jeu.

Sur d'autres plateformes, un processus similaire est mis en œuvre par la société mère, ce qui en fait le véritable propriétaire du contenu. Si cette société cesse d'exister, il en va de même pour tout le contenu stocké dans sa base de données. Avec Audius, la piste est maintenue par le réseau et contrôlée par des opérateurs de nœuds tiers et décentralisés. **Audius ne dépend pas d'une entreprise pour continuer à fonctionner.**.

**Avec le stacking de $AUDIO, vous contribuez à protéger et à renforcer le protocole.**

Cette conception permet à Audius de fonctionner en s'appuyant sur un réseau mondial d'opérateurs de nœuds tiers, plutôt que sur la seule équipe d'Audius.

La décision d'utiliser deux types de nœuds permet à Audius d'évoluer en fonction de différentes mesures, ce qui signifie que si le nombre d'auditeurs devait connaître un pic par rapport au catalogue Audius, les nœuds Discovery Node pourraient prendre le relais tandis que les nœuds de contenu Content Node continueraient à fonctionner normalement. De même, le réseau pourrait choisir d'ajuster les incitations en fonction de l'endroit où la bande passante est nécessaire pour répondre à la demande à un moment donné.

Une plateforme qui s'adapte aux besoins de ses utilisateurs !

### **Staking sur Audius**

Pour miser sur Audius, les opérateurs de nœuds peuvent mettre en place des nœuds de contenu Content Node et/ou Discovery Node en utilisant ces ressources.

https://twitter.com/Figment\_io/status/1324763638729740288?s=20

Une liste de tous les opérateurs de nœuds actifs se trouve sous l'onglet [Service du tableau](https://dashboard.audius.org/services) du protocole Audius.

Les détenteurs de $AUDIO peuvent déléguer un minimum de 100 jetons à l'un de ces opérateurs de nœuds en se connectant à MetaMask ou en utilisant un coffre-fort Gnosis. Plus de détails sur la délégation seront bientôt publiés !

Les opérateurs de nœuds peuvent choisir d'exploiter un Content Node, un Discovery Node ou une combinaison des deux. La quantité de $AUDIO mise en jeu pour un opérateur donné peut être considérée comme sa bande passante économique pour faire fonctionner un ou une combinaison de services sur le réseau.

All node operators are required to post a **minimum self-bond of 200,000 $AUDIO tokens per node**. Alors que les Content Node et Discovery Node utilisent la même machine, les Content Node nécessitent plus de stockage et coûtent donc un peu plus cher à exploiter.

To this effect, the staking parameters of each node is as follows:

_Discovery Node_

* Minimum Bond (Stake): 200,000 AUDIO
* Maximum Bond (Stake): 7,000,000 AUDIO

_Content Node_

* Minimum Bond (Stake): 200,000 AUDIO
* Maximum Bond (Stake): 10,000,0000 AUDIO

Le stacking minimale garantit une participation suffisante au jeu, tandis que le maximum empêche le protocole de devenir trop centralisé. Les nœuds de contenu ont des exigences minimales légèrement plus élevées, c'est pourquoi ils sont en mesure d'accepter plus de stacking que les nœuds de découverte.

Each Operator is given a unique profile, allowing users to identify their address, timeline of votes, and the different nodes they maintain. Other key parameters include:

* _Staked $AUDIO_ - The total amount of $AUDIO staked across all the operator’s nodes, measured as a combination of tokens staked or delegated to a given address.
* _Deployer Cut_ - The percentage of staking rewards that delegates pay to node operators for staking $AUDIO on their node. This is configurable by the node operator.
* _Services_ - The number of unique nodes run by a given operator.
* _Delegators_ - The total number of unique addresses delegating tokens to the Operator.

Node operators can also populate their information via [3Box](https://3box.io/), displaying a profile image, title and website link to allow delegates to more easily distinguish themselves from others on the network.

Audius features a 7 day cooldown period to undelegate or unstake in order to provide adequate time for nodes to be slashed in the event of malicious behavior. During the genesis staking period, nodes operated by the Audius foundation will have their Deployer Cut set to 100%, with all proceeds being routed to a community treasury to be governed by $AUDIO tokenholders. These nodes will be retired in the near future.

### **$AUDIO Staking Rewards**

Audius features a 7% automatic annual issuance rate distributed on-chain and on a weekly basis. $AUDIO rewards are distributed directly on-chain to node operators, with the on-chain system deducting their Delegator Cut and routing the remaining rewards to those who delegated their tokens.

Service providers are expected to run one transaction per week to distribute issuance for the network, where tokens can be claimed in real time by individual node operators.

In the near future, $AUDIO issuance will begin to be computed from the call of the reward function. Moving forward, anyone in the network can call the reward function, with tokens being distributed on a weekly cadence and claimable at any time.

The rate, duration and parameters of $AUDIO staking are controlled entirely by governance.
