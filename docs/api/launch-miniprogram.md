# LaunchMiniProgram

## Parameters

| Property         | Type   | Default Value        | Required | Description                                                                                         |
| ---------------- | ------ | -------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| userName         | string |                      | Yes      | The original ID of the mini-program, e.g., gh_d43f693ca31f. [Click here to see how to obtain it](https://dev.weixin.qq.com/docs/framework/faq/dev.html#_1、如何获取小程序原始-id) |
| path             | string | Default to open the mini-program homepage | No       | The optional path to open a specific page within the mini-program, e.g., "?foo=bar".                |
| miniprogramType  | number | Defaults to release version | No       | Optional: 0 - Release version, 1 - Development version, 2 - Experience version                     |

## Example


```javascript
window.Wechat.launchMiniProgram({
  userName: "gh_67210fc11b59", 
}, function(res) {
     console.log('launch mini program success!');
}, function(err) {
     console.error(err);
  }
);
```