# Login

Redirect to WeChat to Obtain WeChat Login Status

## Parameters

| Property | Type   | Default Value      | Required | Description                           |
| -------- | ------ | ------------------ | -------- | ------------------------------------- |
| scope    | string | snsapi_userinfo   | No       | Fixed value                           |
| state    | string |                    | No       |                                       |

## Returns

| Property | Type   | Description                                                                                          |
| -------- | ------ | ---------------------------------------------------------------------------------------------------- |
| code     | string | The code used by the user to obtain the access_token                                                 |
| state    | string | A unique identifier used by the third-party program to mark its request, passed in by the third-party program and returned by WeChat terminal. The state string cannot exceed 1K in length |
| country  | string | The current language of the WeChat client                                                             |
| lang     | string | The current language of the WeChat client                                                             |

## Example

```javascript
window.Wechat.login({
  scope: "snsapi_userinfo", 
  state: "wechat_sdk_demo_test"
}, function(res) {
     console.log('login success:', res.code);
}, function(err) {
     console.error(err);
  }
);
```