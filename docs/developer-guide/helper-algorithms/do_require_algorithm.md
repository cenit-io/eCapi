# Helper algorithm

## do_require_algorithm

Search and returns an algorithm by its name and integration channel.

The algorithm searches 1st in the namespace of the provided channel, if it is not found, it will search, 
only if applicable, in the main namespace of the integration.

If the resource is not found an exception is thrown.
    
### Definition

> **Name:** do_require_algorithm
> 
> **Namespace:** eCore
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | eCore::Integration \| String | Contains the integration record or id |
> | alg_name | true | String \| Symbol | Contains the name of the algorithm |
> | throwing | false | Boolean | An exception is thrown when this parameter is true and the algorithm does not exist. |
>
> **Returns:** The required algorithm.

### See also
* [This algorithm in Cenit-IO](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_require_algorithm&f[namespace][40840][v]=eCore)
* [Others helper algorithms](overview?id=do_require_algorithm)