# Capacitor/Ionic

## DEMO

[Ionic7 Demo](https://github.com/byteee-fund/cordova-plugin-wechat-ionic7-demo)

## 安装插件

替换为你自己的AppId

```shell
npm install ../cordova-plugin-wechat --variable APP_ID=xxx --variable UNIVERSAL_LINK=https://xxx
```

### 修改capacitor.config.json文件


```typescript
const config: CapacitorConfig = {
  ...  
  cordova: { 
    preferences: { 
      wechat_app_id: "wx785b8bdxxxx6",
      wechat_universal_link: "https://xxx"
    } 
  },
  ios: {
    cordovaLinkerFlags: ["-ObjC", "-all_load"]
  }
};
```


### 修改IOS工程配置

[微信官方文档](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html)

1、在 Xcode 中，选择你的工程设置项，选中“TARGETS”一栏，在“info”标签栏的“URL type“添加“URL scheme”为你所注册的应用程序 id（如下图所示）。

![img](https://res.wx.qq.com/op_res/NFS7xqSfwkeorZKhFhAaA5JlwLGitxOtyG9c6F2UfF6nggDUCq7zzVW0cq0mOmVq)

2、在Xcode中，选择你的工程设置项，选中“TARGETS”一栏，在“info”标签栏的“LSApplicationQueriesSchemes”添加weixin、weixinULAPI、weixinURLParamsAPI（如下图所示）。

![img](https://res.wx.qq.com/op_res/UA9NqONywI8DFeIMFMdND1tBAozE7hWe0fnrY88k68I0Rqq6Q60XCm2ZG9I7PfuzQIqbdsHIdVDiMjRPafZTig)

3、原来的method swizzling在capactiro中无法监听回调，需要通过Bridging Header代码进行调用, 在APP targes 的 “Build Settings"里找到 "Objective-C Bridging Header", 输入

```
../../capacitor-cordova-ios-plugins/sources/CordovaPluginWechat/Wechat-Bridging-Header.h
```

![img](../../../cordova-plugin-wechat-doc-old/docs/images/xcode-2.png)


4、修改AppDelegate.swift

添加如下代码：

```swift
WechatAttribution.shared().continue(userActivity)
```


![img](../../../cordova-plugin-wechat-doc-old/docs/images/xcode-3.png)