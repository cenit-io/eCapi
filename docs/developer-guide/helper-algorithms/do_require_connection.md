# Helper algorithm

## do_require_connection

Search and returns a connection by its name and integration channel.

The connection searches 1st in the namespace of the provided channel, if it is not found, it will search, 
only if applicable, in the main namespace of the integration.

If the resource is not found an exception is thrown.
    
### Definition

> **Name:** do_require_connection
> 
> **Namespace:** eCore
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | eCore::Integration \| String | Contains the integration record or id |
> | name | false | String \| Symbol | Contains the name of the connection |
>
> **Returns:** The required connection.

### See also
* [This algorithm in Cenit-IO](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_require_connection&f[namespace][40840][v]=eCore)
* [Others helper algorithms](overview?id=do_require_connection)