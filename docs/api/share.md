# Share

This method is a convenient way to share, allowing you to use this interface to share all types of content by simply providing an additional `type` parameter.

## Parameters

| Property    | Type   | Default Value | Required | Description                          |
| ----------- | ------ | -------------- | -------- | ------------------------------------ |
| type        | string | -              | Yes      | Share type: 1 for text, 2 for images, etc. Refer to Share for details |
| Other Params|        |                |          | Parameters required for other share types |

## Example


```javascript
window.Wechat.share({
        type: 1,
        text: '分享文本',
        scene: 0,
    }, function(res){
        console.log("share success");
    }, function(err) {
        console.error(err);
    }
);
```