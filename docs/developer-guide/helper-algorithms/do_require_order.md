# Helper algorithm

## do_require_order

Search and returns an order by its id or by its number in an integration.

If some of the resources are not found an exception is thrown.
    
### Definition

> **Name:** do_require_order
> 
> **Namespace:** eCore
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | number_or_id | true | String | Contains the order number, id or remote id |
> | integration_id | false | eCore::Integration \| String | Contains the integration record o id |
>
> **Returns:** The a record of eCore::Order or eCwAnyone::Order if the parameter integration_id is given.

### See also
* [This algorithm in Cenit-IO](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_require_order&f[namespace][40840][v]=eCore)
* [Others helper algorithms](overview?id=do_require_order)