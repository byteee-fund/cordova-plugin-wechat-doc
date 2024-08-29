# Error Codes

There are two main types of error codes:

* Error codes defined by the WeChat SDK (errCode values are generally < 0)
* Custom error codes defined by the plugin (errCode values are >= 1000)

## WeChat SDK Error Codes

| Error Code | Description    |
| ---------- | -------------- |
| -1         | General error  |
| -2         | User canceled  |
| -3         | Send failed    |
| -4         | Authorization denied |
| -5         | Unsupported    |
| -6         | Disabled       |

## Plugin Error Codes

| Error Code | Description                     |
| ---------- | ------------------------------- |
| 1001       | WeChat API not initialized       |
| 1002       | WeChat not installed            |
| 1003       | Request failed to send          |
| 1004       | Invalid parameters              |
| 1005       | Thread error                    |
| 1006       | IO error (image or file read error) |
| 1007       | Unsupported API                 |
