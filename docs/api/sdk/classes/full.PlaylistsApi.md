---
id: "full.PlaylistsApi"
title: "Playlists"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[full](../namespaces/full.md).Playlists

## Methods

### getPlaylist

**getPlaylist**(`requestParameters`, `initOverrides?`): `Promise`<[`PlaylistFull`](../interfaces/full.PlaylistFull.md)[]\>

Get a playlist by ID

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
| `requestParameters` | [`GetPlaylistRequest`](../interfaces/full.GetPlaylistRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PlaylistFull`](../interfaces/full.PlaylistFull.md)[]\>

___

### getTrendingPlaylists

**getTrendingPlaylists**(`requestParameters?`, `initOverrides?`): `Promise`<[`PlaylistFull`](../interfaces/full.PlaylistFull.md)[]\>

Returns trending playlists for a time period

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
| `requestParameters` | [`GetTrendingPlaylistsRequest`](../interfaces/full.GetTrendingPlaylistsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PlaylistFull`](../interfaces/full.PlaylistFull.md)[]\>

___

### getTrendingPlaylistsWithVersion

**getTrendingPlaylistsWithVersion**(`requestParameters`, `initOverrides?`): `Promise`<[`PlaylistFull`](../interfaces/full.PlaylistFull.md)[]\>

Returns trending playlists for a time period based on the given trending version

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
| `requestParameters` | [`GetTrendingPlaylistsWithVersionRequest`](../interfaces/full.GetTrendingPlaylistsWithVersionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`PlaylistFull`](../interfaces/full.PlaylistFull.md)[]\>

___

### getUsersFromPlaylistFavorites

**getUsersFromPlaylistFavorites**(`requestParameters`, `initOverrides?`): `Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

Get users that favorited a playlist

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
| `requestParameters` | [`GetUsersFromPlaylistFavoritesRequest`](../interfaces/full.GetUsersFromPlaylistFavoritesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

___

### getUsersFromPlaylistReposts

**getUsersFromPlaylistReposts**(`requestParameters`, `initOverrides?`): `Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

Get users that reposted a playlist

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
| `requestParameters` | [`GetUsersFromPlaylistRepostsRequest`](../interfaces/full.GetUsersFromPlaylistRepostsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>
