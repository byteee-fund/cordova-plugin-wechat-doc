# 获取SDK版本(getSDKVersion)

获取微信SDK版本号（非微信APP版本号）



## 参数

无



## 返回

版本号



## 示例

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