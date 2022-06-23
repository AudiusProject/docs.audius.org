---
id: "UsersApi"
title: "Users"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Methods

### getConnectedWallets

**getConnectedWallets**(`requestParameters`, `initOverrides?`): `Promise`<[`ConnectedWallets`](../interfaces/ConnectedWallets.md)\>

Get the User\'s ERC and SPL connected wallets

Example:

```typescript
const track = await audiusSdk.tracks.getTrack({
  trackId: "D7KyD",
});
```

**`throws`** Error

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetConnectedWalletsRequest`](../interfaces/GetConnectedWalletsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ConnectedWallets`](../interfaces/ConnectedWallets.md)\>

___

### getFavorites

**getFavorites**(`requestParameters`, `initOverrides?`): `Promise`<[`Favorite`](../interfaces/Favorite.md)[]\>

Gets a user\'s favorite tracks

Example:

```typescript
const track = await audiusSdk.tracks.getTrack({
  trackId: "D7KyD",
});
```

**`throws`** Error

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetFavoritesRequest`](../interfaces/GetFavoritesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Favorite`](../interfaces/Favorite.md)[]\>

___

### getReposts

**getReposts**(`requestParameters`, `initOverrides?`): `Promise`<[`Activity`](../interfaces/Activity.md)[]\>

Gets the given user\'s reposts

Example:

```typescript
const track = await audiusSdk.tracks.getTrack({
  trackId: "D7KyD",
});
```

**`throws`** Error

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetRepostsRequest`](../interfaces/GetRepostsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Activity`](../interfaces/Activity.md)[]\>

___

### getSupporters

**getSupporters**(`requestParameters`, `initOverrides?`): `Promise`<[`Supporter`](../interfaces/Supporter.md)[]\>

Gets the supporters of the given user

Example:

```typescript
const track = await audiusSdk.tracks.getTrack({
  trackId: "D7KyD",
});
```

**`throws`** Error

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSupportersRequest`](../interfaces/GetSupportersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Supporter`](../interfaces/Supporter.md)[]\>

___

### getSupportings

**getSupportings**(`requestParameters`, `initOverrides?`): `Promise`<[`Supporting`](../interfaces/Supporting.md)[]\>

Gets the users that the given user supports

Example:

```typescript
const track = await audiusSdk.tracks.getTrack({
  trackId: "D7KyD",
});
```

**`throws`** Error

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetSupportingsRequest`](../interfaces/GetSupportingsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Supporting`](../interfaces/Supporting.md)[]\>

___

### getTopTrackTags

**getTopTrackTags**(`requestParameters`, `initOverrides?`): `Promise`<`string`[]\>

Gets the most used track tags by a user.
Fetch most used tags in a user\'s tracks

Example:

```typescript
const track = await audiusSdk.tracks.getTrack({
  trackId: "D7KyD",
});
```

**`throws`** Error

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTopTrackTagsRequest`](../interfaces/GetTopTrackTagsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`string`[]\>

___

### getTracksByUser

**getTracksByUser**(`requestParameters`, `initOverrides?`): `Promise`<[`Track`](../interfaces/Track.md)[]\>

Gets the tracks created by a user using their user ID

Example:

```typescript
const track = await audiusSdk.tracks.getTrack({
  trackId: "D7KyD",
});
```

**`throws`** Error

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetTracksByUserRequest`](../interfaces/GetTracksByUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Track`](../interfaces/Track.md)[]\>

___

### getUser

**getUser**(`requestParameters`, `initOverrides?`): `Promise`<[`User`](../interfaces/User.md)\>

Gets a single user by their user ID

Example:

```typescript
const track = await audiusSdk.tracks.getTrack({
  trackId: "D7KyD",
});
```

**`throws`** Error

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetUserRequest`](../interfaces/GetUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`User`](../interfaces/User.md)\>

___

### getUserIDFromWallet

**getUserIDFromWallet**(`requestParameters`, `initOverrides?`): `Promise`<[`EncodedUserId`](../interfaces/EncodedUserId.md)\>

Gets a User ID from an associated wallet address

Example:

```typescript
const track = await audiusSdk.tracks.getTrack({
  trackId: "D7KyD",
});
```

**`throws`** Error

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetUserIDFromWalletRequest`](../interfaces/GetUserIDFromWalletRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`EncodedUserId`](../interfaces/EncodedUserId.md)\>

___

### searchUsers

**searchUsers**(`requestParameters`, `initOverrides?`): `Promise`<[`User`](../interfaces/User.md)[]\>

Search for users that match the given query

Example:

```typescript
const track = await audiusSdk.tracks.getTrack({
  trackId: "D7KyD",
});
```

**`throws`** Error

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`SearchUsersRequest`](../interfaces/SearchUsersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`User`](../interfaces/User.md)[]\>

___

### verifyIDToken

**verifyIDToken**(`requestParameters`, `initOverrides?`): `Promise`<[`DecodedUserToken`](../interfaces/DecodedUserToken.md)\>

Verify if the given jwt ID token was signed by the subject (user) in the payload

Example:

```typescript
const track = await audiusSdk.tracks.getTrack({
  trackId: "D7KyD",
});
```

**`throws`** Error

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`VerifyIDTokenRequest`](../interfaces/VerifyIDTokenRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`DecodedUserToken`](../interfaces/DecodedUserToken.md)\>
