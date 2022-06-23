---
id: "ResolveApi"
title: "Resolve"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

This class extends from the generated ResolveApi to
implement the custom logic for the `resolve` endpoint

## Methods

### resolve

**resolve**<`T`\>(`requestParameters`): `Promise`<`T`\>

Resolves and redirects a provided Audius app URL to the API resource URL it represents

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Track`](../interfaces/Track.md) \| [`Playlist`](../interfaces/Playlist.md) \| [`User`](../interfaces/User.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ResolveRequest`](../interfaces/ResolveRequest.md) |

#### Returns

`Promise`<`T`\>
