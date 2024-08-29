# 分享音乐视频(shareMusicVideo)



## 参数

| 属性                 | 类型   | 默认值 | 必填 | 说明                                                         |
| -------------------- | ------ | ------ | ---- | ------------------------------------------------------------ |
| title                | string | -      | 是   | 网页标题                                                     |
| description          | string | -      | 是   | 网页描述                                                     |
| musicUrl             | string | -      | 是   | 音频链接                                                     |
| musicDataUrl         | string |        | 是   | 音频数据链接                                                 |
| singerName           | string |        | 是   | 歌手名称                                                     |
| songLyric            | string |        | 否   | 歌词                                                         |
| albumName            | string |        | 否   | 专辑名称                                                     |
| musicGenre           | string |        | 否   | 音乐流派                                                     |
| duration             | number |        | 是   | 歌曲时长 单位毫秒                                            |
| issueDate            | long   |        | 否   | 发行时间Unix时间戳 单位秒                                    |
| identification       | string |        | 否   | 音乐标识符 建议填写，用户在微信音乐播放器跳回应用时会携带该参数，可用于唯一标识一首歌，微信侧不理解 |
| messageExt           | string |        | 否   | 额外信息                                                     |
| hdAlbumThumbFilePath | string |        | 否   | 高清专辑图本地文件路径                                       |
| thumbPath            | string |        | 是   | 音乐卡片缩略图，不超过64KB                                   |
| scene                | number | -      | 是   | 发送的目标场景,0=分享到会话,1=分享到朋友圈，2=分享到收藏     |



## 示例

```javascript
window.Wechat.shareMusicVideo({
  		title: '分享音乐视频',
  		description: '这是一个音乐视频',
  		singerName: '张学友',
  		musicUrl: '',
  	  musicDataUrl: '',
  		duration: 120000,
  		thumbPath: 'www/img/logo.png',
      scene: 0, 
  }, function(res){
    console.log("share success");
  }, function(err) {
    console.error(err);
  }
);
```