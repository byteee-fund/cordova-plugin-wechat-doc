# ShareText

## Parameters

| Property | Type   | Default Value | Required | Description                         |
| -------- | ------ | -------------- | -------- | ----------------------------------- |
| text     | string | -              | Yes      | Text to be shared                   |
| scene    | number | -              | No       | Target scene for sharing, 0=share to chat, 1=share to Moments, 2=share to favorites |

## Example

```javascript
window.Wechat.shareText({
      text: '分享文本',
      scene: 0, 
  }, function(res){
    console.log("share success");
  }, function(err) {
    console.error(err);
  }
);
```