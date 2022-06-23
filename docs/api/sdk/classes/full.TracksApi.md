---
id: "full.TracksApi"
title: "Tracks"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[full](../namespaces/full.md).Tracks

## Methods

### bestNewReleases

**bestNewReleases**(`initOverrides?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets the tracks found on the \"Best New Releases\" smart playlist

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
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

___

### getBulkTracks

**getBulkTracks**(`requestParameters?`, `initOverrides?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)\>

Gets a list of tracks using their IDs or permalinks

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
| `requestParameters` | [`GetBulkTracksRequest`](../interfaces/full.GetBulkTracksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)\>

___

### getMostLovedTracks

**getMostLovedTracks**(`requestParameters?`, `initOverrides?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets the tracks found on the \"Most Loved\" smart playlist

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
| `requestParameters` | [`GetMostLovedTracksRequest`](../interfaces/full.GetMostLovedTracksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

___

### getRecommendedTracks

**getRecommendedTracks**(`requestParameters?`, `initOverrides?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Get recommended tracks

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
| `requestParameters` | [`GetRecommendedTracksRequest`](../interfaces/full.GetRecommendedTracksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

___

### getRecommendedTracksWithVersion

**getRecommendedTracksWithVersion**(`requestParameters`, `initOverrides?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Get recommended tracks using the given trending strategy version

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
| `requestParameters` | [`GetRecommendedTracksWithVersionRequest`](../interfaces/full.GetRecommendedTracksWithVersionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

___

### getRemixableTracks

**getRemixableTracks**(`requestParameters?`, `initOverrides?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)\>

Gets a list of tracks that have stems available for remixing

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
| `requestParameters` | [`GetRemixableTracksRequest`](../interfaces/full.GetRemixableTracksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)\>

___

### getTrack

**getTrack**(`requestParameters`, `initOverrides?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)\>

Gets a track by ID. If `show_unlisted` is true, then `handle` and `url_title` are required.

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
| `requestParameters` | [`GetTrackRequest`](../interfaces/full.GetTrackRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)\>

___

### getTrackRemixParents

**getTrackRemixParents**(`requestParameters`, `initOverrides?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets all the tracks that the given track remixes

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
| `requestParameters` | [`GetTrackRemixParentsRequest`](../interfaces/full.GetTrackRemixParentsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

___

### getTrackRemixes

**getTrackRemixes**(`requestParameters`, `initOverrides?`): `Promise`<[`RemixesResponse`](../interfaces/full.RemixesResponse.md)\>

Get all tracks that remix the given track

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
| `requestParameters` | [`GetTrackRemixesRequest`](../interfaces/full.GetTrackRemixesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`RemixesResponse`](../interfaces/full.RemixesResponse.md)\>

___

### getTrackStems

**getTrackStems**(`requestParameters`, `initOverrides?`): `Promise`<[`StemFull`](../interfaces/full.StemFull.md)[]\>

Get the remixable stems of a track

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
| `requestParameters` | [`GetTrackStemsRequest`](../interfaces/full.GetTrackStemsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`StemFull`](../interfaces/full.StemFull.md)[]\>

___

### getTrendingTrackIDs

**getTrendingTrackIDs**(`requestParameters?`, `initOverrides?`): `Promise`<[`TrendingTimesIds`](../interfaces/full.TrendingTimesIds.md)\>

Gets the track IDs of the top trending tracks on Audius

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
| `requestParameters` | [`GetTrendingTrackIDsRequest`](../interfaces/full.GetTrendingTrackIDsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrendingTimesIds`](../interfaces/full.TrendingTimesIds.md)\>

___

### getTrendingTracks

**getTrendingTracks**(`requestParameters?`, `initOverrides?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets the top 100 trending (most popular) tracks on Audius

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
| `requestParameters` | [`GetTrendingTracksRequest`](../interfaces/full.GetTrendingTracksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

___

### getTrendingTracksIDsWithVersion

**getTrendingTracksIDsWithVersion**(`requestParameters`, `initOverrides?`): `Promise`<[`TrendingTimesIds`](../interfaces/full.TrendingTimesIds.md)\>

Gets the track IDs of the top trending tracks on Audius based on the given trending strategy version

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
| `requestParameters` | [`GetTrendingTracksIDsWithVersionRequest`](../interfaces/full.GetTrendingTracksIDsWithVersionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrendingTimesIds`](../interfaces/full.TrendingTimesIds.md)\>

___

### getTrendingTracksWithVersion

**getTrendingTracksWithVersion**(`requestParameters`, `initOverrides?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets the top 100 trending (most popular tracks on Audius using a given trending strategy version

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
| `requestParameters` | [`GetTrendingTracksWithVersionRequest`](../interfaces/full.GetTrendingTracksWithVersionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

___

### getUnderTheRadarTracks

**getUnderTheRadarTracks**(`requestParameters?`, `initOverrides?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets the tracks found on the \"Under the Radar\" smart playlist

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
| `requestParameters` | [`GetUnderTheRadarTracksRequest`](../interfaces/full.GetUnderTheRadarTracksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

___

### getUndergroundTrendingTracks

**getUndergroundTrendingTracks**(`requestParameters?`, `initOverrides?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets the top 100 trending underground tracks on Audius

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
| `requestParameters` | [`GetUndergroundTrendingTracksRequest`](../interfaces/full.GetUndergroundTrendingTracksRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

___

### getUndergroundTrendingTracksWithVersion

**getUndergroundTrendingTracksWithVersion**(`requestParameters`, `initOverrides?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets the top 100 trending underground tracks on Audius using a given trending strategy version

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
| `requestParameters` | [`GetUndergroundTrendingTracksWithVersionRequest`](../interfaces/full.GetUndergroundTrendingTracksWithVersionRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

___

### getUsersFromFavorites

**getUsersFromFavorites**(`requestParameters`, `initOverrides?`): `Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

Get users that favorited a track

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
| `requestParameters` | [`GetUsersFromFavoritesRequest`](../interfaces/full.GetUsersFromFavoritesRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

___

### getUsersFromReposts

**getUsersFromReposts**(`requestParameters`, `initOverrides?`): `Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

Get the users that reposted a track

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
| `requestParameters` | [`GetUsersFromRepostsRequest`](../interfaces/full.GetUsersFromRepostsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>
