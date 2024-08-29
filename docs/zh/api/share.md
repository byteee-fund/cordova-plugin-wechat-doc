# 分享

此方法是一个简便的分享方法，可以使用此接口分享所有的分享类型，只需要额外传入`type`参数即可。



## 参数

| 属性     | 类型   | 默认值 | 必填 | 说明                                     |
| -------- | ------ | ------ | ---- | ---------------------------------------- |
| type     | string | -      | 是   | 分享类型 1 文本 2 图片 等，具体参考Share |
| 其他参数 |        |        |      | 其他分享类型需要的参数                   |



## 示例

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