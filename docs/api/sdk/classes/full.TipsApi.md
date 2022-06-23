---
id: "full.TipsApi"
title: "Tips"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[full](../namespaces/full.md).Tips

## Methods

### getTips

**getTips**(`requestParameters?`, `initOverrides?`): `Promise`<[`FullTip`](../interfaces/full.FullTip.md)[]\>

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
| `requestParameters` | [`GetTipsRequest`](../interfaces/full.GetTipsRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`FullTip`](../interfaces/full.FullTip.md)[]\>
