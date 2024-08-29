# 分享文本(shareText)



## 参数



| 属性  | 类型   | 默认值 | 必填 | 说明                                                     |
| ----- | ------ | ------ | ---- | -------------------------------------------------------- |
| text  | string | -      | 是   | 分享的文本                                               |
| scene | number | -      | 否   | 发送的目标场景,0=分享到会话,1=分享到朋友圈，2=分享到收藏 |



## 示例

```javascript
window.Wechat.shareText({
      text: '分享文本',
      scene: 0, 
  }, function(res){
    console.log("share success");
  }, function(err) {
    console.error(err);
  }
);
```