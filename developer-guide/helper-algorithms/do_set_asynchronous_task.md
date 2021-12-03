# Helper algorithm

## do_set_asynchronous_task

Create a task for the asynchronous execution of the given action (algorithm).

If the join_group parameter is provided, the task will be placed at the end of the execution queue of this group. 
Otherwise it will be put at the end of the execution queue created for task of the same action (algorithm).
    
### Definition

> **Name:** do_set_asynchronous_task
> 
> **Namespace:** eCore
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | action | true | Setup::Algorithm | Contains the algorithm to be executed |
> | message | true | Hash | Contains message passed to the task |
> | join_group | false | String | Contains the join group name |
>
> **Returns:** The task found or created.

### See also
* [This algorithm in Cenit-IO](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_set_asynchronous_task&f[namespace][40840][v]=eCore)
* [Others helper algorithms](overview?id=do_set_asynchronous_task)