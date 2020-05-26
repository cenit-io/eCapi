# Helper algorithm

## h_do_set_asynchronous_task

Create a task for the asynchronous execution of the given action (algorithm).

If the join_group parameter is provided, the task will be placed at the end of the execution queue of this group. 
Otherwise it will be put at the end of the execution queue created for task of the same action (algorithm).
    
### Definition

> **Name:** h_do_set_asynchronous_task
> 
> **Namespace:** OMNAv2
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
* [Others helper algorithms](overview?id=h_do_set_asynchronous_task)