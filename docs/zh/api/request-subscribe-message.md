# 一次性订阅消息(requestSubscribeMessage)

跳转微信获取一次性订阅消息





## 参数

| 属性       | 类型   | 默认值 | 必填 | 说明                                                         |
| ---------- | ------ | ------ | ---- | ------------------------------------------------------------ |
| templateId | string | -      | 否   | 订阅消息模板 ID，在微信开放平台提交应用审核通过后获得。查看模板id的路径为：微信开放平台 - 移动应用 - 能力专区 - 一次性订阅消息 |
| reserved   | string | -      | 否   | 用于保持请求和回调的状态，授权请后原样带回给第三方。该参数可用于防止 csrf 攻击（跨站请求伪造攻击），建议第三方带上该参数，可设置为简单的随机数加 session 进行校验，开发者可以填写 a-zA-Z0-9 的参数值，最多 128 字节，要求做 urlencode |
| scene      | number | -      | 否   | 场景值                                                       |



##  示例

```javascript
window.Wechat.requestSubscribeMessage({
  templateId: "xxxx", 
}, function(res) {
     console.log('request share');
}, function(err) {
     console.error(err);
  }
);
```