# Gobernanza

## Cómo funciona la Gobernanza de Audius

La Gobernanza es el proceso mediante el cual los titulares de fichas AUDIO realizan cambios en Audius a través de propuestas en cadena.

Permite a la comunidad dar forma directa a las futuras iteraciones de la plataforma y es el principio básico que impulsa la infraestructura descentralizada de Audius.


En esta publicación, cubriremos cómo funciona la gobernanza en Audius, y lo que puedes hacer como titular de AUDIO para participar.


### **Portal de gobernanza**

La única fuente de verdad para la gobernanza de Audius se puede encontrar en el panel de control de protocolos en la pestaña [Gobernanza](https://dashboard.audius.org/governance).


Aquí puede ver una lista de todas las propuestas activas y resueltas en orden cronológico junto con si han pasado o han fracasado.


Cada propuesta de gobernanza incluye un desglose de los siguientes parámetros:


* _Proponedor_ - La dirección responsable del envío de la propuesta
* _Descripción_ - Una síntesis rápida de lo que la propuesta de gobernanza implica
* _Por_ - La cantidad de votos a favor de la propuesta
* _Contra_ - La cantidad de votos en contra de la propuesta

**Todas las propuestas están sujetas al 5% del quórum $AUDIO en stake y a la mayoría del 50%.**


Esto significa que para que una propuesta se apruebe, por lo menos el 5% de todos los $AUDIO en stake deben votar en la propuesta y más del 50% de los votos deben ser "a favor" de la propuesta.


Hoy en día, sólo quienes tienen un nodo pueden hacer una propuesta en cadena. En el futuro, el conjunto de proponentes permitidos podría ampliarse de cualquier forma que la comunidad considere oportuna.


### **Proceso de gobernanza**

La gobernanza efectiva es mucho más que la votación de propuestas en cadena y algo que queremos hacer aún más accesible en Audius.


Here’s a breakdown of Audius’s evolving governance ecosystem, including the tools, processes and logistics behind AUDIO voting.


_Discord feedback &gt; Forum post &gt; Submit to Governance Portal &gt; On-chain Vote &gt; Execute_


Please note that some users may be more inclined than others to facilitate the duration of this process, and we recommend anyone interested in shaping Audius to contribute in whatever ways possible, even if that means just starting a conversation around a topic on Discord!


#### **Governance Discord**

In the [AUDIOphile Discord](https://discord.gg/ah5CcqW), you’ll notice a channel called \#governance. This is where early iterations and ideas for proposals can be submitted for community feedback.


Getting feedback on a proposal in Discord is not required, but a great way to get a general feeling of whether or not a topic is worth fleshing out in detail prior to submitting on the forum for a more formal discussion.


Governance topics can be seen as a means of signalling, where proposers receive very high level feedback from other community members to see whether or not their ideas will be received well in principle.


#### **Audius Forum**

The Audius [governance forum](https://gov.audius.org/) is the primary place to discuss in-depth details around proposals.


All proposals are recommended to cover the following topics:


* _Title_ - What is this proposal about?
* _Summary_ - What is a brief explanation / EIL5 of this proposal?
* _Abstract_ - What will be done if this proposal is implemented? What additional context and information can you offer?
* _Motivation_ - What is the reasoning behind why this proposal and its benefit to Audius?
* _Specification_ - What does voting For or Against this proposal mean?
* _Poll_ - Would you vote For or Against this proposal?

While in its infancy, the Audius governance forum is the best place to formalize thoughts before putting it to an on-chain vote.

On-chain votes require a lot of signal and coordination, so the governance forum offers a nice way to finalize the finer details of a proposal prior to tossing it on-chain for a community vote.


#### **Governance Portal**

After receiving feedback, node operators can submit that proposal on-chain through the Governance portal.

Please note that proposition power is correlated to the amount of AUDIO staked or delegated for network security, meaning node operators are the primary candidates for on-chain proposals.

A list of all on-chain proposals can be found [here](https://dashboard.audius.org/#/governance).


The details of the proposal should map to the specifications outlined in the forum post, including details and implementations around any technical changes required for the proposal to be implemented.


#### **On-chain Voting**

Using Figment’s [most recent governance proposal](https://dashboard.audius.org/#/governance/proposal/9) as an example, you can see that different node operators and delegators voted in favor of extending the voting time from 48 to 72 hours.


![](https://assets.website-files.com/6024b69839b1b7fd3787991c/607d16049feb3a126f852b57_H6OK09A-2szawbI66mlGi7489J5aj-x604boPIeDUs6zhfZB7Fs77rIsaskaMGslMNWdGrTfm2ZM_sLalkwBvLCn-I0aUm7g9aSIYr11qC0b2t5WHELcyUtSlK21OaD5UgB9mnRN.png)


Given that the total number of votes \(1 AUDIO, 1 vote\) was above the quorum requirement of ~11M $AUDIO and the 50% majority \(100% voted in favor\) the proposal passed!


In doing so, the changes [from this proposal](https://etherscan.io/tx/0xd4e14895b2a22b48469a43923ab7b30bee75f9a688941933430b3dae9510b8a6) were [executed through the governance contract](https://etherscan.io/tx/0x4396652fb9c1116cec5900f412608dfba7a3ec1b9967f4109a8ec3e09d3a75af), changing the voting window from 48 hours to 72 hours!


#### **Community Multisig**

Once a vote has been passed, the governance contract executes the proposal.


However, Audius also features a community multisig as a veto of last resort, referenced in the whitepaper in the “short-circuiting” subsection of the governance section.


This means that a set of 9 Audius community members have the ability to stop a malicious proposal from passing. In the event the multisig is used, 6 of the 9 signers must sign a transaction to nullify the proposal.


As Audius continues to mature, the community can at any time vote to remove this veto ability from the system as well.


More details on the signers of this multisig as well as the intent for its use will be shared in a future blog post.


### **Evolving Governance**

Audius governance is an evolving process geared at giving all $AUDIO holders a voice of future iterations of the platform.


The process detailed above is likely to change in line with new tools, product upgrades and onramps to allow for all token users to easily review and participate in governance decisions, regardless of their technical knowledge.


We’re excited to share more details around governance in the near future and look forward to building out the community-owned streaming protocol that is Audius!
