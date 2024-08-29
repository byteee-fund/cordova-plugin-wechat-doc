# 常见问题



### IOS下如何使用不含支付的微信支付SDK?

修改`config.xml` 

```xml
<source-file src="src/ios/libs/pay/WechatOpenSDK-XCFramework.xcframework" framework="true" />
```

为

```xml
<source-file src="src/ios/libs/nopay/WechatOpenSDK-XCFramework.xcframework" framework="true" />
```



### 为什么安卓DEBUG模式下提示"签名不一致"?

请确保`Debug`模式下的对应的签名和开放平台里的签名保持一致。可在`build.gradle`文件里配置`debug`和`release`里使用相同的签名。
