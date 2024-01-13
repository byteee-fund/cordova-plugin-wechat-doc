# 支付(requestPayment)



## 签名

微信支付的 Api 和签名有 V2 和 V3 两个版本，开发者需使用正确版本的 Api 和对应的签名才可以正常调用，否则会出现「签名不一致」的报错

### API_V2

- 使用 V2 的[下单接口](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1)，需使用 [V2 的签名](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=4_3)

### API_V3

- 使用 V3 的[下单接口](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_2_1.shtml)，需使用 [V3 的签名](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_2_4.shtml)

  

## 参数

| 属性      | 类型   | 默认值 | 必填 | 说明                                                         |
| --------- | ------ | ------ | ---- | ------------------------------------------------------------ |
| mchId     | string |        | 是   | 商户号                                                       |
| prepayId  | string |        | 是   | 预支付交易会话ID                                             |
| nonceStr  | string |        | 是   | 随机字符串                                                   |
| package   | string |        | 是   | 随机字符串，暂填写固定值Sign=WXPay                           |
| timeStamp | string |        | 是   | 时间戳                                                       |
| sign      | string |        | 是   | 签名；注意：签名方式一定要与统一下单接口使用的一致，V2 和 V3 的签名看上文描述 |



## 示例

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

