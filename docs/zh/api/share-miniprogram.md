# 分享小程序(shareMiniProgram)



## 参数

| 属性            | 类型   | 默认值 | 必填 | 说明                                                         |
| --------------- | ------ | ------ | ---- | ------------------------------------------------------------ |
| userName        | string | -      | 是   | 小程序原始ID，如 gh_d43f693ca31f                             |
| path            | string | -      | 是   | 小程序页面路径；对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar" |
| title           | string | -      | 否   | 小程序标题                                                   |
| description     | string | -      | 否   | 小程序描述                                                   |
| imagePath       | string | -      | 是   | 分享小程序相关缩略图，支持代码包图片资源路径或者本地临时、缓存、用户文件；不支持网络图片路径 |
| webpageUrl      | string | -      | 是   | 兼容低版本的网页链接 url                                     |
| withShareTicket | string | -      | 是   | 通常开发者希望分享出去的小程序被二次打开时可以获取到更多信息，例如群的标识。可以设置 withShareTicket 为 true，当分享卡片在群聊中被其他用户打开时，可以获取到 shareTicket，用于获取更多分享信息。详见小程序获取更多分享信息 ，最低客户端版本要求：6.5.13 |
| miniprogramType | number | -      | 是   | 0-正式版，1-体验版，2-预览版                                 |
| scene           | number | -      | 否   | 发送的目标场景, 只支持会话，0=分享到会话                     |

## 示例

```javascript
window.Wechat.shareMiniProgram({
     webpageUrl: "https://byteee.fund",
     title: "XX小程序",
     description: "这是一个小程序",
     imagePath: "www/img/logo.png",
     userName: "gh_67210fc11b59",
     path: "/pages/index",
     miniprogramType: 0,
     withShareTicket: true,
  }, function(res){
    console.log("share success");
  }, function(err) {
    console.error(err);
  }
);
```