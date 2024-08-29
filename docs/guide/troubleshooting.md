# FAQ

### How to use the WeChat SDK without payment features on iOS?

Modify `config.xml`:

```xml
<source-file src="src/ios/libs/pay/WechatOpenSDK-XCFramework.xcframework" framework="true" />
```

To

```xml
<source-file src="src/ios/libs/nopay/WechatOpenSDK-XCFramework.xcframework" framework="true" />
```


### Why do I get a "Signature Mismatch" error in Android DEBUG mode?

Ensure that the signature used in Debug mode matches the one registered in the WeChat Open Platform. You can configure the same signature for both debug and release modes in the build.gradle file.

