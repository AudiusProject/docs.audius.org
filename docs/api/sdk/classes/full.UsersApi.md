---
id: "full.UsersApi"
title: "Users"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[full](../namespaces/full.md).Users

## Methods

### getFavorites

**getFavorites**(`requestParameters`, `initOverrides?`): `Promise`<[`ActivityFull`](../interfaces/full.ActivityFull.md)[]\>

Gets a user\'s favorite tracks
Fetch favorited tracks for a user

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
| `requestParameters` | [`GetFavoritesRequest`](../interfaces/full.GetFavoritesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ActivityFull`](../interfaces/full.ActivityFull.md)[]\>

___

### getFollowers

**getFollowers**(`requestParameters`, `initOverrides?`): `Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

All users that follow the provided user

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
| `requestParameters` | [`GetFollowersRequest`](../interfaces/full.GetFollowersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

___

### getFollowings

**getFollowings**(`requestParameters`, `initOverrides?`): `Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

All users that the provided user follows

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
| `requestParameters` | [`GetFollowingsRequest`](../interfaces/full.GetFollowingsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

___

### getRelatedUsers

**getRelatedUsers**(`requestParameters`, `initOverrides?`): `Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

Gets a list of users that might be of interest to followers of this user.

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
| `requestParameters` | [`GetRelatedUsersRequest`](../interfaces/full.GetRelatedUsersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

___

### getReposts

**getReposts**(`requestParameters`, `initOverrides?`): `Promise`<[`ActivityFull`](../interfaces/full.ActivityFull.md)[]\>

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
| `requestParameters` | [`GetRepostsRequest`](../interfaces/full.GetRepostsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ActivityFull`](../interfaces/full.ActivityFull.md)[]\>

___

### getRepostsByHandle

**getRepostsByHandle**(`requestParameters`, `initOverrides?`): `Promise`<[`ActivityFull`](../interfaces/full.ActivityFull.md)[]\>

Gets the user\'s reposts by the user handle

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
| `requestParameters` | [`GetRepostsByHandleRequest`](../interfaces/full.GetRepostsByHandleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ActivityFull`](../interfaces/full.ActivityFull.md)[]\>

___

### getSupporter

**getSupporter**(`requestParameters`, `initOverrides?`): `Promise`<[`FullSupporter`](../interfaces/full.FullSupporter.md)\>

Gets the specified supporter of the given user

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
| `requestParameters` | [`GetSupporterRequest`](../interfaces/full.GetSupporterRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`FullSupporter`](../interfaces/full.FullSupporter.md)\>

___

### getSupporters

**getSupporters**(`requestParameters`, `initOverrides?`): `Promise`<[`FullSupporter`](../interfaces/full.FullSupporter.md)[]\>

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
| `requestParameters` | [`GetSupportersRequest`](../interfaces/full.GetSupportersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`FullSupporter`](../interfaces/full.FullSupporter.md)[]\>

___

### getSupporting

**getSupporting**(`requestParameters`, `initOverrides?`): `Promise`<[`FullSupporting`](../interfaces/full.FullSupporting.md)\>

Gets the support from the given user to the supported user

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
| `requestParameters` | [`GetSupportingRequest`](../interfaces/full.GetSupportingRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`FullSupporting`](../interfaces/full.FullSupporting.md)\>

___

### getSupportings

**getSupportings**(`requestParameters`, `initOverrides?`): `Promise`<[`FullSupporting`](../interfaces/full.FullSupporting.md)\>

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
| `requestParameters` | [`GetSupportingsRequest`](../interfaces/full.GetSupportingsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`FullSupporting`](../interfaces/full.FullSupporting.md)\>

___

### getTopUsers

**getTopUsers**(`requestParameters?`, `initOverrides?`): `Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

Get the Top Users having at least one track by follower count

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
| `requestParameters` | [`GetTopUsersRequest`](../interfaces/full.GetTopUsersRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

___

### getTopUsersInGenre

**getTopUsersInGenre**(`requestParameters?`, `initOverrides?`): `Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

Get the Top Users for a Given Genre

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
| `requestParameters` | [`GetTopUsersInGenreRequest`](../interfaces/full.GetTopUsersInGenreRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

___

### getTracksByUser

**getTracksByUser**(`requestParameters`, `initOverrides?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

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
| `requestParameters` | [`GetTracksByUserRequest`](../interfaces/full.GetTracksByUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

___

### getTracksByUserHandle

**getTracksByUserHandle**(`requestParameters`, `initOverrides?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets the tracks created by a user using the user\'s handle

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
| `requestParameters` | [`GetTracksByUserHandleRequest`](../interfaces/full.GetTracksByUserHandleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

___

### getUser

**getUser**(`requestParameters`, `initOverrides?`): `Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

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
| `requestParameters` | [`GetUserRequest`](../interfaces/full.GetUserRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

___

### getUserByHandle

**getUserByHandle**(`requestParameters`, `initOverrides?`): `Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

Gets a single user by their handle

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
| `requestParameters` | [`GetUserByHandleRequest`](../interfaces/full.GetUserByHandleRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

___

### getUsersTrackHistory

**getUsersTrackHistory**(`requestParameters`, `initOverrides?`): `Promise`<[`ActivityFull`](../interfaces/full.ActivityFull.md)[]\>

Get the tracks the user recently listened to.

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
| `requestParameters` | [`GetUsersTrackHistoryRequest`](../interfaces/full.GetUsersTrackHistoryRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ActivityFull`](../interfaces/full.ActivityFull.md)[]\>
