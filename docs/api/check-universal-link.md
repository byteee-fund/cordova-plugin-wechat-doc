# 自检(checkUniversalLinkReady)

> 此接口仅限IOS下使用
>
> 此接口仅为了方便调试使用，生成环境请勿开启。



## 参数

无



## 示例

```javascript
window.Wechat.checkUniversalLinkReady(
    function(res) {
        console.log('check universal link success:', res);
    },
  	function(err) {
      console.error(err);
    }
)
```