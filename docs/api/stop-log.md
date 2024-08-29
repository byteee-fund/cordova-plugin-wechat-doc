# StopLog

> This interface is for iOS use only.
>
> This interface is provided for debugging purposes only; do not enable it in the production environment.

## Parameters

None

## Example

```javascript
window.Wechat.stopLog(
    function(res) {
        console.log('get sdk version:', res);
    },
  	function(err) {
      console.error(err);
    }
)
```