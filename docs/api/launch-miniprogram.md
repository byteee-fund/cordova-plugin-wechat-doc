# 拉起微信小程序(launchMiniProgram)





## 参数

| 属性            | 类型   | 默认值             | 必填 | 说明                                                         |
| --------------- | ------ | ------------------ | ---- | ------------------------------------------------------------ |
| userName        | string |                    | 是   | 小程序原始ID，如 gh_d43f693ca31f，[点击查看获取方式](https://dev.weixin.qq.com/docs/framework/faq/dev.html#_1、如何获取小程序原始-id) |
| path            | string | 默认拉起小程序首页 | 否   | 拉起小程序页面的可带参路径，如：传入 "?foo=bar"。            |
| miniprogramType | number | 默认为正式版       | 否   | 可选打开 0-正式版，1-开发版，2-体验版                        |



##  示例

```javascript
window.Wechat.launchMiniProgram({
  userName: "gh_67210fc11b59", 
}, function(res) {
     console.log('launch mini program success!');
}, function(err) {
     console.error(err);
  }
);
```