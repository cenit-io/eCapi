# Helper algorithm

## do_require_integration

Search and returns an integration by its id.

If value of check_authorization parameter is true and the integration is not authorized then 
an exception is thrown.

If the resource is not found an exception is thrown.
    
### Definition

> **Name:** do_require_integration
> 
> **Namespace:** eCore
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | eCore::Integration \| String | Contains the integration record or id |
> | check_authorization | false | Boolean | An exception occurs when this parameter is true and integration is not authorized |
>
> **Returns:** The required integration.

### See also
* [This algorithm in Cenit-IO](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_require_integration&f[namespace][40840][v]=eCore)
* [Others helper algorithms](overview?id=do_require_integration)