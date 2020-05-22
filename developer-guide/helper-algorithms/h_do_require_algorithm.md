# Helper algorithm:

## h_do_require_algorithm:

Search and returns an algorithm by its name and integration channel.

The algorithm searches 1st in the namespace of the provided channel, if it is not found, it will search, 
only if applicable, in the main namespace of the integration.

If the resource is not found an exception is thrown.
    
### Definition:

> **Name:** h_do_require_algorithm
> 
> **Namespace:** OMNAv2
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | channel | true | ... |
> | alg_name | true | ... |
> | throwing | false | ... |

### See also:
* [Others helper algorithms](overview?id=h_do_require_algorithm)