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
> | Name | Required | Type |
> | --- | --- | --- |
> | action | true |  |
> | message | true |  |
> | join_group | false |  |

### See also
* [Others helper algorithms](overview?id=h_do_set_asynchronous_task)