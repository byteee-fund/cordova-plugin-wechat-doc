# 错误码

错误码主要分为两种，

* 微信SDK定义的错误码（errCode值一般 < 0）

* 插件自定义的错误码 (errCode值 >= 1000)



## 微信SDK错误码

| 错误码 | 说明     |
| ------ | -------- |
| -1     | 普通错误 |
| -2     | 用户取消 |
| -3     | 发送失败 |
| -4     | 认证拒绝 |
| -5     | 不支持   |
| -6     | 禁用     |



## 插件错误码

| 错误说明 | 说明                         |
| -------- | ---------------------------- |
| 1001     | 微信API未初始化              |
| 1002     | 微信未安装                   |
| 1003     | 发送请求失败                 |
| 1004     | 传入参数非法                 |
| 1005     | 线程错误                     |
| 1006     | IO错误（读取图片或文件错误） |
| 1007     | 不支持的API                  |



