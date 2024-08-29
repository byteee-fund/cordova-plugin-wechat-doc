# 选取发票(chooseInvoiceCard)





## 参数

| 属性      | 类型   | 默认值 | 必填 | 说明       |
| --------- | ------ | ------ | ---- | ---------- |
| nonceStr  | string |        | 是   | 随机字符串 |
| signType  | string |        | 是   | 签名类型   |
| timeStamp | string |        | 是   | 时间戳     |
| cardSign  | string |        | 是   | 签名       |



##  示例

```javascript
window.Wechat.chooseInvoiceCard({
   timeStamp: '1510198391', 
   signType: 'SHA1',
   cardSign: 'dff450eeeed08120159d285e79737173aec3df94',
   nonceStr: '5598190f-5fb3-4bff-8314-fd189ab4e4b8',
}, function(res) {
     console.log('launch mini program success!');
}, function(err) {
     console.error(err);
  }
);
```