# ChooseInvoiceCard




## Parameters

| Property  | Type   | Default | Required | Description    |
| --------- | ------ | ------- | -------- | -------------- |
| nonceStr  | string |         | Yes      | Random string  |
| signType  | string |         | Yes      | Signature type |
| timeStamp | string |         | Yes      | Timestamp      |
| cardSign  | string |         | Yes      | Signature      |



## Example

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