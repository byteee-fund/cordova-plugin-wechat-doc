# 拉起微信客服(openCustomerServiceChat)





## 参数

| 属性   | 类型   | 默认值 | 必填 | 说明                                                         |
| ------ | ------ | ------ | ---- | ------------------------------------------------------------ |
| corpId | string |        | 是   | 企业id 开发者需前往微信客服官网完成移动应用(appid)和企业id的绑定。 |
| url    | string |        | 是   | 客服URL                                                      |



##  示例

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