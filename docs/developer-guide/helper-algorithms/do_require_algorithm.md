# Helper algorithm

## do_require_algorithm

Search and returns an algorithm by its name and integration channel.

The algorithm searches 1st in the namespace of the provided channel, if it is not found, it will search, 
only if applicable, in the main namespace of the integration.

If the resource is not found an exception is thrown.
    
### Definition

> **Name:** do_require_algorithm
> 
> **Namespace:** OMNAv2
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | OMNAv2::Integration \| String | Contains the integration record or id |
> | alg_name | true | String \| Symbol | Contains the name of the algorithm |
> | throwing | false | Boolean | An exception is thrown when this parameter is true and the algorithm does not exist. |
>
> **Returns:** The required algorithm

### See also
* [Others helper algorithms](overview?id=do_require_algorithm)