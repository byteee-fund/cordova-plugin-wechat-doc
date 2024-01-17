# 快速开始



## 开始前的准备

- 注册[微信开放平台](https://open.weixin.qq.com/)，并申请移动应用；

- 如果需要支付功能，还需要申请[微信商户](https://pay.weixin.qq.com)；
- IOS项目请配置好UNIVERSAL LINK；
- 准备好的你项目（基于cordova）
- [获取](https://byteee.fund/project/cordova-plugin-wechat)代码并下载解压到本地；



## 开发环境

- Android Studio 

- Xcode
- Node
- Cordova



## 安装插件

### 本地安装

```shell
cordova plugin add ../本地插件目录 --variable APP_ID=你的微信APPID --variable UNIVERSAL_LINK=你的UNIVERSAL LINK链接
```

> 如果你的项目支持安卓，也可以不传入`UNIVERSAL_LINK `参数



## 移除插件

```shell
cordova plugin rm cordova-plugin-wechat --variable APP_ID=你的微信APPID
```



