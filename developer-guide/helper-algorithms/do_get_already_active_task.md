# Helper algorithm

## do_get_already_active_task

Returns, if it exists, the task that meets the following conditions:

* Corresponds to an asynchronous execution of the given algorithm.
* Status is pending or running.
* It was invoked with exactly the same parameters given.

It is useful to avoid unnecessary execution of tasks that produce the same result.
    
### Definition

> **Name:** do_get_already_active_task
> 
> **Namespace:** OMNAv2
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | algorithm | true | Setup::Algorithm | Contains the algorithm to be executed |
> | inputs | false | Array | Contains the parameters that will be passed to the algorithm |

### See also
* [This algorithm in Cenit-IO](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_get_already_active_task&f[namespace][40840][v]=OMNAv2)
* [Others helper algorithms](overview?id=do_get_already_active_task)