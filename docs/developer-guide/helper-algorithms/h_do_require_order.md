# Helper algorithm

## h_do_require_order

Search and returns an order by its id or by its number in an integration.

If some of the resources are not found an exception is thrown.
    
### Definition

> **Name:** h_do_require_order
> 
> **Namespace:** OMNAv2
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | number_or_id | true | String | Contains the order number, id or remote id |
> | integration_id | false | OMNAv2::Integration \| String | Contains the integration record o id |
>
> **Returns:** The a record of OMNAv2::Order or Ov2Anyone::Order if the parameter integration_id is given.

### See also
* [Others helper algorithms](overview?id=h_do_require_order)