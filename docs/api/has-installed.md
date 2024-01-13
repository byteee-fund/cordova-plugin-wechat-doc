# 是否安装(isWXAppInstalled)

判断微信客户端是否有安装



## 参数

无



## 返回

0 代表未安装 1代表已安装



## 示例

```javascript
window.Wechat.isWXAppInstalled(
    function(res) {
        console.log('wechat installed result:', res);
    },
  	function(err) {
      console.error(err);
    }
)
```