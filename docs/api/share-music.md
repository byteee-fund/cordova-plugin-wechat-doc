# ShareMusic


## Parameters

| Property              | Type   | Default Value | Required | Description                                                   |
| --------------------- | ------ | -------------- | -------- | ------------------------------------------------------------- |
| title                 | string | -              | No       | Title                                                         |
| description           | string | -              | No       | Description                                                   |
| musicUrl              | string | -              | Yes      | Audio link                                                    |
| musicLowBandUrl       | string | -              | No       | Music link for low bandwidth environments                     |
| musicDataUrl          | string | -              | Yes      | Audio data link                                               |
| musicLowBandDataUrl   | string | -              | No       | Music data link for low bandwidth environments                |
| songLyric             | string | -              | No       | Lyrics                                                        |
| songAlbumUrl          | string | -              | No       | Album                                                         |
| scene                 | number | -              | No       | Target scene for sharing, 0=share to chat, 1=share to Moments, 2=share to favorites |

## Example


```javascript
window.Wechat.shareMusic({
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