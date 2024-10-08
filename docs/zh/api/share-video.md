# 分享视频(shareVideo)



## 参数

| 属性            | 类型   | 默认值 | 必填 | 说明                                                         |
| --------------- | ------ | ------ | ---- | ------------------------------------------------------------ |
| videoUrl        | string | -      | 是   | 视频链接 url， 限制长度不超过 10KB                           |
| videoLowBandUrl | string | -      | 否   | 供低带宽的环境下使用的视频链接，限制长度不超过 10KB          |
| title           | string | -      | 否   | 视频标题                                                     |
| description     | string | -      | 否   | 视频描述                                                     |
| thumbPath       | string | -      | 是   | 分享缩略图，支持网络图片链接，Base64字符串，Assets资源文件，系统文件路径 |
| scene           | number | -      | 否   | 发送的目标场景,0=分享到会话,1=分享到朋友圈，2=分享到收藏     |

> 注意：videoUrl 和 videoLowBandUrl 不能同时为空



## 示例

```javascript
window.Wechat.shareVideo({
      videoUrl: 'http://vjs.zencdn.net/v/oceans.mp4',
  		title: '分享视频',
  		description: '这是一个视频',
  		thumbPath: 'www/img/logo.png',
      scene: 0, 
  }, function(res){
    console.log("share success");
  }, function(err) {
    console.error(err);
  }
);
```