# Helper algorithm

## h_do_require_integration

Search and returns an integration by its id.

If value of check_authorization parameter is true and the integration is not authorized then 
an exception is thrown.

If the resource is not found an exception is thrown.
    
### Definition

> **Name:** h_do_require_integration
> 
> **Namespace:** OMNAv2
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | OMNAv2::Integration \| String | Contains the integration record o id |
> | check_authorization | false | Boolean | An exception occurs when this parameter is true and integration is not authorized |
>
> **Returns:** The required integration

### See also
* [Others helper algorithms](overview?id=h_do_require_integration)