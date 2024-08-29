# OpenCustomerServiceChat

## Parameters

| Property | Type   | Default Value | Required | Description                                                   |
| -------- | ------ | ------------- | -------- | ------------------------------------------------------------- |
| corpId   | string |               | Yes      | The enterprise ID. Developers need to bind the mobile app (appid) with the enterprise ID on the WeChat customer service website. |
| url      | string |               | Yes      | Customer service URL                                          |

## Example


```javascript
window.Wechat.openCustomerServiceChat({
  corpId: "xxxx", 
  url: "https://work.weixin.qq.com/kfid/kfcxxxxx"
}, function(res) {
     console.log('open success');
}, function(err) {
     console.error(err);
  }
);
```