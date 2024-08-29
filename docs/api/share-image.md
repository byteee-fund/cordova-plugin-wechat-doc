# ShareImage

## Parameters

| Property  | Type   | Default Value | Required | Description                                                      |
| --------- | ------ | -------------- | -------- | ---------------------------------------------------------------- |
| imagePath | string | -              | Yes      | Image to be shared, supports network image links, Base64 strings, asset files, and system file paths |
| thumbPath | string | -              | No       | Thumbnail for the shared image; if not provided, `imagePath` will be used as the thumbnail |
| scene     | number | -              | No       | Target scene for sharing: 0=share to chat, 1=share to moments, 2=share to favorites |

## Example

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