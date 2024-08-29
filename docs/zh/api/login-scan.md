# 扫码登录(auth)





## 参数

| 属性       | 类型   | 是否必须 | 默认值 | 说明                                                         |
| ---------- | ------ | -------- | ------ | ------------------------------------------------------------ |
| scope      | string | 是       |        | 应用授权作用域，拥有多个作用域用逗号（,）分隔，APP 所拥有的 scope |
| nonceStr   | string | 是       |        | 一个随机的尽量不重复的字符串，用来使得每次的 signature 不同  |
| timeStamp  | string | 是       |        | 时间戳                                                       |
| signature  | string | 是       |        | 签名                                                         |
| schemeData | string | 否       |        | 会在扫码后拼在 scheme 后                                     |



## 返回

| 属性   | 类型   | 说明               |
| ------ | ------ | ------------------ |
| qrcode | string | 二维码对应的base64 |



##  示例

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