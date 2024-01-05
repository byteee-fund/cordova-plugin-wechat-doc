# 分享音乐



## 参数

| 属性                | 类型   | 默认值 | 必填 | 说明                                                     |
| ------------------- | ------ | ------ | ---- | -------------------------------------------------------- |
| title               | string | -      | 是   | 网页标题                                                 |
| description         | string | -      | 是   | 网页描述                                                 |
| musicUrl            | string | -      | 是   | 音频链接                                                 |
| musicLowBandUrl     | string |        | 否   | 供低带宽的环境下使用的音乐链接                           |
| musicDataUrl        | string |        | 是   | 音频数据链接                                             |
| musicLowBandDataUrl | string |        | 否   | 供低带宽的环境下使用的音乐数据链接                       |
| songLyric           | string |        | 否   | 歌词                                                     |
| songAlbumUrl        | string |        | 否   | 专辑                                                     |
| scene               | number | -      | 是   | 发送的目标场景,0=分享到会话,1=分享到朋友圈，2=分享到收藏 |



## 示例

```javascript
window.Wechat.shareMusicMessage({
  		title: '分享音乐',
  		description: '这是一个音乐',
  		musicUrl: '',
  	  musicDataUrl: '',
      scene: 0, 
  }, function(res){
    console.log("share success");
  }, function(err) {
    console.error(err);
  }
);
```