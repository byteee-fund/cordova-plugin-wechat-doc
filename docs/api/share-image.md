# 分享图片(shareImage)



## 参数

| 属性      | 类型   | 默认值 | 必填 | 说明                                                         |
| --------- | ------ | ------ | ---- | ------------------------------------------------------------ |
| imagePath | string | -      | 是   | 分享图片，支持网络图片链接，Base64字符串，Assets资源文件，系统文件路径 |
| thumbPath | string | -      | 否   | 分享缩略图，不传则会使用imagePath作为缩略图                  |
| scene     | number | -      | 否   | 发送的目标场景,0=分享到会话,1=分享到朋友圈，2=分享到收藏     |



## 示例

```javascript
window.Wechat.shareImage({
      imagePath: 'www/img/logo.png',
      scene: 0, 
  }, function(res){
    console.log("share success");
  }, function(err) {
    console.error(err);
  }
);
```