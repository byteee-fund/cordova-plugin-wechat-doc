# ShareFile



## Parameters

| Property     | Type   | Default Value | Required | Description                                                      |
| ------------ | ------ | -------------- | -------- | ---------------------------------------------------------------- |
| title        | string | -              | No       | Title                                                            |
| description  | string | -              | No       | Description                                                      |
| filePath     | string | -              | Yes      | File to be shared, supports network image links, Base64 strings, asset files, and system file paths |
| scene        | number | -              | No       | Target scene for sharing: 0=share to chat, 1=share to moments, 2=share to favorites |

## Example


```javascript
window.Wechat.shareFile({
  		title: '分享文件',
  		description: '这是一个文件',
  		filePath: 'www/img/logo.png',
      scene: 0, 
  }, function(res){
    console.log("share success");
  }, function(err) {
    console.error(err);
  }
);
```