# Capacitor/Ionic

## DEMO

[Ionic7 Demo](https://github.com/byteee-fund/cordova-plugin-wechat-ionic7-demo)

## Install the Plugin

Replace with your own Wechat AppId

```shell
npm install ../cordova-plugin-wechat --variable APP_ID=xxx --variable UNIVERSAL_LINK=https://xxxx
```

## Project Configuration

In the capacitor.config.json file, add your wechat AppId variable configuration as shown below:

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

## iOS Project Configuration

### Modify the URL SCHEME

n Xcode, select your project settings, choose the "TARGETS" section, and in the "Info" tab, add your registered application ID as the "URL scheme" under "URL types" (see the image below).

As shown in the image:

![img](https://res.wx.qq.com/op_res/NFS7xqSfwkeorZKhFhAaA5JlwLGitxOtyG9c6F2UfF6nggDUCq7zzVW0cq0mOmVq)

### Modify the Info.plist

In Xcode, select your project settings, choose the "TARGETS" section, and in the "Info" tab, add `weixin`, `weixinULAPI`, and `weixinURLParamsAPI` under `"LSApplicationQueriesSchemes"` (see the image below).


![img](https://res.wx.qq.com/op_res/UA9NqONywI8DFeIMFMdND1tBAozE7hWe0fnrY88k68I0Rqq6Q60XCm2ZG9I7PfuzQIqbdsHIdVDiMjRPafZTig)

### Add the Header file

In your App Target -> Build Settings, find "Objective-C Bridging Header" and add the following line:

```text
../capacitor-cordova-ios-plugins/sources/CordovaPluginWechat/Wechat-Bridging-Header.h
```

As shown in the image:

![img](/public/images/xcode-2.png)

### Modify AppDelegate

In the AppDelegate.swift file, locate the code position as shown below, and add the following code:

```swift
WechatAttribution.shared().continue(userActivity)
```

As shown in the image:

![img](/public/images/xcode-3.png)
