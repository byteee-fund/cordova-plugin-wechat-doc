# checkUniversalLinkReady

> This interface is for iOS only.
>
> This interface is intended for debugging purposes only; do not enable it in a production environment.

## Parameters

None

## Example

```javascript
window.Wechat.checkUniversalLinkReady(
    function(res) {
        console.log('check universal link success:', res);
    },
  	function(err) {
      console.error(err);
    }
)
```