# RequestSubscribeMessage

## Redirect to WeChat for One-time Subscription Message

## Parameters

| Property     | Type   | Default Value | Required | Description                                                                                             |
| ------------ | ------ | ------------- | -------- | ------------------------------------------------------------------------------------------------------- |
| templateId   | string | -             | No       | Subscription message template ID, obtained after the application review is approved on the WeChat Open Platform. To view the template ID: WeChat Open Platform - Mobile Application - Capabilities - One-time Subscription Message |
| reserved     | string | -             | No       | Used to maintain the request and callback state. This parameter can be used to prevent CSRF attacks (Cross-Site Request Forgery). It is recommended to include this parameter, which can be set as a simple random number plus session for verification. Developers can set values a-zA-Z0-9, up to 128 bytes, and should be URL encoded |
| scene        | number | -             | No       | Scene value                                                                                           |

## Example

```javascript
window.Wechat.requestSubscribeMessage({
  templateId: "xxxx", 
}, function(res) {
     console.log('request share');
}, function(err) {
     console.error(err);
  }
);
```