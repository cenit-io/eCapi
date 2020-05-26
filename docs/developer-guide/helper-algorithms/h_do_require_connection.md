# Helper algorithm

## h_do_require_connection

Search and returns a connection by its name and integration channel.

The connection searches 1st in the namespace of the provided channel, if it is not found, it will search, 
only if applicable, in the main namespace of the integration.

If the resource is not found an exception is thrown.
    
### Definition

> **Name:** h_do_require_connection
> 
> **Namespace:** OMNAv2
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | channel | true | OMNAv2::Integration \| String | Contains the integration record o channel name |
> | name | false | String \| Symbol | Contains the name of the connection |
>
> **Returns:** The required connection

### See also
* [Others helper algorithms](overview?id=h_do_require_connection)