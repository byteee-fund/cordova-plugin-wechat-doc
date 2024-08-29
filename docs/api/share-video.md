# ShareVideo

## Parameters

| Property         | Type   | Default Value | Required | Description                                                   |
| ---------------- | ------ | -------------- | -------- | ------------------------------------------------------------- |
| videoUrl         | string | -              | Yes      | Video URL, limited to 10KB in length                         |
| videoLowBandUrl  | string | -              | No       | Video URL for low bandwidth environments, limited to 10KB in length |
| title            | string | -              | No       | Video title                                                   |
| description      | string | -              | No       | Video description                                             |
| thumbPath        | string | -              | Yes      | Thumbnail for sharing, supports network image links, Base64 strings, Assets resources, or system file paths |
| scene            | number | -              | No       | Target scene for sharing, 0=share to chat, 1=share to Moments, 2=share to favorites |

> Note: `videoUrl` and `videoLowBandUrl` cannot both be empty

## Example


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