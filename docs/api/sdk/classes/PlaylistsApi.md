---
id: "PlaylistsApi"
title: "Playlists"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Methods

### getPlaylist

**getPlaylist**(`requestParameters`, `initOverrides?`): `Promise`<[`Playlist`](../interfaces/Playlist.md)[]\>

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
| `requestParameters` | [`GetPlaylistRequest`](../interfaces/GetPlaylistRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Playlist`](../interfaces/Playlist.md)[]\>

___

### getPlaylistTracks

**getPlaylistTracks**(`requestParameters`, `initOverrides?`): `Promise`<[`Track`](../interfaces/Track.md)[]\>

Fetch tracks within a playlist.

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
| `requestParameters` | [`GetPlaylistTracksRequest`](../interfaces/GetPlaylistTracksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Track`](../interfaces/Track.md)[]\>

___

### getTrendingPlaylists

**getTrendingPlaylists**(`requestParameters?`, `initOverrides?`): `Promise`<[`Playlist`](../interfaces/Playlist.md)[]\>

Gets trending playlists for a time period

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
| `requestParameters` | [`GetTrendingPlaylistsRequest`](../interfaces/GetTrendingPlaylistsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Playlist`](../interfaces/Playlist.md)[]\>

___

### searchPlaylists

**searchPlaylists**(`requestParameters`, `initOverrides?`): `Promise`<[`Playlist`](../interfaces/Playlist.md)[]\>

Search for a playlist

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
| `requestParameters` | [`SearchPlaylistsRequest`](../interfaces/SearchPlaylistsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Playlist`](../interfaces/Playlist.md)[]\>
