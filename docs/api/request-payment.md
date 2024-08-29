# RequestPayment



## Signature

WeChat Pay APIs have two versions of signature: V2 and V3. Developers must use the correct version of the API and the corresponding signature to avoid errors like "Signature Mismatch".

### API_V2

- For the V2 [Order API](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1), use the [V2 Signature](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=4_3).

### API_V3

- For the V3 [Order API](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_2_1.shtml), use the [V3 Signature](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_2_4.shtml).

## Parameters

| Property   | Type   | Default Value | Required | Description                                                |
| ---------- | ------ | ------------- | -------- | ---------------------------------------------------------- |
| mchId      | string |               | Yes      | Merchant ID                                               |
| prepayId   | string |               | Yes      | Prepayment transaction session ID                         |
| nonceStr   | string |               | Yes      | Random string                                             |
| package    | string |               | Yes      | Random string, usually fixed value: Sign=WXPay            |
| timeStamp  | string |               | Yes      | Timestamp                                                 |
| sign       | string |               | Yes      | Signature; Note: The signature method must match the one used in the unified order interface. V2 and V3 signatures are described above. |

## Example


```javascript
window.Wechat.requestPayment({
    timeStamp: '1667792176',
    mchId: '1800009365',
    prepayId: 'wx07113616363804b19dde94884922030000',
    package: 'Sign=WXPay',
    nonceStr: '8ne443gjxxg',
    sign: '4FF5900870B5C5BCB089789BC004156426C46512CE566DB17C131747E09ADEBA'
  },
  function(res) {
    console.warn('requestPayment success:', res);
  },
  function(err) {
    console.error(err);
  }
);
```

