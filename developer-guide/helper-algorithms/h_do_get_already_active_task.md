# Helper algorithm:

## h_do_get_already_active_task:

Returns, if it exists, the task that meets the following conditions:

* Corresponds to an asynchronous execution of the given algorithm.
* Status is pending or running.
* It was invoked with exactly the same parameters given.

It is useful to avoid unnecessary execution of tasks that produce the same result.
    
### Definition:

> **Name:** h_do_get_already_active_task
> 
> **Namespace:** OMNAv2
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | algorithm | true | ... |
> | inputs | false | ... |

### See also:
* [Others helper algorithms](overview?id=h_do_get_already_active_task)