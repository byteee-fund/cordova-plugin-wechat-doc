# Auth

## Parameters

| Property   | Type   | Required | Default Value | Description                                                   |
| ---------- | ------ | -------- | ------------- | ------------------------------------------------------------- |
| scope      | string | Yes      |               | The application authorization scope, with multiple scopes separated by commas (,) representing the scopes owned by the APP |
| nonceStr   | string | Yes      |               | A random, preferably non-repeating string used to ensure that each signature is unique |
| timeStamp  | string | Yes      |               | Timestamp                                                     |
| signature  | string | Yes      |               | Signature                                                     |
| schemeData | string | No       |               | Data appended to the scheme after scanning                   |

## Returns

| Property | Type   | Description                    |
| -------- | ------ | ------------------------------ |
| qrcode   | string | Base64 of the QR code          |

## Example

```javascript
window.Wechat.auth({
  scope: "snsapi_userinfo", 
  nonceStr: "wechat_sdk_demo_test",
  timeStamp: "1111111111",
  signature: "1111"
}, function(res) {
     console.log('get qrocde success:', res.qrcode);
}, function(err) {
     console.error(err);
  }
);
```