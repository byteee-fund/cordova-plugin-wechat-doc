# 分享文件



## 参数

| 属性        | 类型   | 默认值 | 必填 | 说明                                                         |
| ----------- | ------ | ------ | ---- | ------------------------------------------------------------ |
| title       | string | -      | 是   | 网页标题                                                     |
| description | string | -      | 是   | 网页描述                                                     |
| filePath    | string | -      | 是   | 分享文件，支持网络图片链接，Base64字符串，Assets资源文件，系统文件路径 |
| scene       | number | -      | 是   | 发送的目标场景,0=分享到会话,1=分享到朋友圈，2=分享到收藏     |



## 示例

```javascript
window.Wechat.shareFileMessage({
  		title: '分享文件',
  		description: '这是一个文件',
  		filePath: 'www/img/logo.png',
      scene: 0, 
  }, function(res){
    console.log("share success");
  }, function(err) {
    console.error(err);
  }
);
```