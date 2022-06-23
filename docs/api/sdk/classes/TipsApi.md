---
id: "TipsApi"
title: "Tips"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Methods

### getTips

**getTips**(`requestParameters?`, `initOverrides?`): `Promise`<[`Tip`](../interfaces/Tip.md)[]\>

Gets the most recent tips on the network

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
| `requestParameters` | [`GetTipsRequest`](../interfaces/GetTipsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Tip`](../interfaces/Tip.md)[]\>
