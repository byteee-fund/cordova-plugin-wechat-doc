# 分享表情(shareMotion)



## 参数

| 属性        | 类型   | 默认值 | 必填 | 说明                                                         |
| ----------- | ------ | ------ | ---- | ------------------------------------------------------------ |
| title       | string | -      | 否   | 标题                                                         |
| description | string | -      | 否   | 描述                                                         |
| emojiPath   | string | -      | 是   | 表情路径，支持网络图片链接，Base64字符串，Assets资源文件，系统文件路径 |
| scene       | number | -      | 否   | 发送的目标场景,0=分享到会话,1=分享到朋友圈，2=分享到收藏     |



## 示例

```javascript
window.Wechat.shareMotion({
  		title: '分享表情',
  		description: '这是一个表情',
  		filePath: 'www/img/logo.png',
      scene: 0, 
  }, function(res){
    console.log("share success");
  }, function(err) {
    console.error(err);
  }
);
```