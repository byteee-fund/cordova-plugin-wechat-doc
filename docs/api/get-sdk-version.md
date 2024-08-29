# GetSDKVersion

Get WeChat SDK Version (not the WeChat App version)

## Parameters

None

## Returns

SDK version number

## Example

```javascript
window.Wechat.getSDKVersion(
    function(res) {
        console.log('get sdk version:', res);
    },
  	function(err) {
      console.error(err);
    }
)
```