# ShareMusicVideo


## Parameters

| Property             | Type   | Default Value | Required | Description                                                  |
| -------------------- | ------ | -------------- | -------- | ------------------------------------------------------------ |
| title                | string | -              | Yes      | Webpage title                                                |
| description          | string | -              | Yes      | Webpage description                                          |
| musicUrl             | string | -              | Yes      | Audio link                                                   |
| musicDataUrl         | string | -              | Yes      | Audio data link                                              |
| singerName           | string | -              | Yes      | Singer name                                                  |
| songLyric            | string | -              | No       | Lyrics                                                       |
| albumName            | string | -              | No       | Album name                                                   |
| musicGenre           | string | -              | No       | Music genre                                                  |
| duration             | number | -              | Yes      | Song duration in milliseconds                                |
| issueDate            | long   | -              | No       | Release date as Unix timestamp in seconds                    |
| identification       | string | -              | No       | Music identifier; suggested for unique identification of a song; used when returning to the app from the WeChat music player |
| messageExt           | string | -              | No       | Additional information                                       |
| hdAlbumThumbFilePath | string | -              | No       | Local file path for high-definition album cover              |
| thumbPath            | string | -              | Yes      | Thumbnail for the music card, must be less than 64KB        |
| scene                | number | -              | Yes      | Target scene for sharing, 0=share to chat, 1=share to Moments, 2=share to favorites |

## Example


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