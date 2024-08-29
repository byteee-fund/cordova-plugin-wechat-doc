# ShareWebpage


## Parameters

| Property      | Type   | Default Value | Required | Description                                                   |
| ------------- | ------ | -------------- | -------- | ------------------------------------------------------------- |
| title         | string | -              | No       | Title                                                         |
| description   | string | -              | No       | Description                                                   |
| thumbPath     | string | -              | Yes      | Thumbnail for sharing, supports network image links, Base64 strings, Assets resources, or system file paths |
| webpageUrl    | string | -              | Yes      | URL of the webpage to share                                  |
| scene         | number | -              | No       | Target scene for sharing, 0=share to chat, 1=share to Moments, 2=share to favorites |

## Example


```javascript
window.Wechat.shareWebpage({
      videoUrl: 'https://byteee.fund',
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