# 登录(login)

跳转微信获取微信登录态



## 参数

| 属性  | 类型   | 默认值          | 必填 | 说明   |
| ----- | ------ | --------------- | ---- | ------ |
| scope | string | snsapi_userinfo | 否   | 固定值 |
| state | string |                 | 否   |        |



## 返回

| 属性    | 类型   | 说明                                                         |
| ------- | ------ | ------------------------------------------------------------ |
| code    | string | 用户换取 access_token 的 code                                |
| state   | string | 第三方程序发送时用来标识其请求的唯一性的标志，由第三方程序调用 sendReq 时传入，由微信终端回传，state 字符串长度不能超过 1K |
| country | string | 微信客户端当前语言                                           |
| lang    | string | 微信客户端当前语言                                           |



##  示例

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