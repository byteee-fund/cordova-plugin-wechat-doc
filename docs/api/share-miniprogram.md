# ShareMiniProgram


## Parameters

| Property          | Type   | Default Value | Required | Description                                                      |
| ----------------- | ------ | -------------- | -------- | ---------------------------------------------------------------- |
| userName          | string | -              | Yes      | Mini Program original ID, such as gh_d43f693ca31f               |
| path              | string | -              | Yes      | Mini Program page path; for mini games, only the query part can be provided to achieve parameter passing, e.g., "?foo=bar" |
| title             | string | -              | No       | Mini Program title                                               |
| description       | string | -              | No       | Mini Program description                                         |
| imagePath         | string | -              | Yes      | Thumbnail image related to the mini program, supports code package image resources or local temporary, cached, or user files; network image paths are not supported |
| webpageUrl        | string | -              | Yes      | Web link URL for compatibility with older versions               |
| withShareTicket   | string | -              | Yes      | If developers want the shared mini program to obtain more information when it is opened again, such as group identifiers, set `withShareTicket` to true. When the share card is opened by other users in a group chat, you can obtain `shareTicket` to get more share information. See Mini Program for more share information. Minimum client version required: 6.5.13 |
| miniprogramType   | number | -              | Yes      | 0-Official version, 1-Experience version, 2-Preview version       |
| scene             | number | -              | No       | Target scene for sharing, only supports chat, 0=share to chat    |

## Example


```javascript
window.Wechat.shareMiniProgram({
     webpageUrl: "https://byteee.fund",
     title: "XX小程序",
     description: "这是一个小程序",
     imagePath: "www/img/logo.png",
     userName: "gh_67210fc11b59",
     path: "/pages/index",
     miniprogramType: 0,
     withShareTicket: true,
  }, function(res){
    console.log("share success");
  }, function(err) {
    console.error(err);
  }
);
```