
> Some CenitIO eCommerce API services takes to much time to complete, such task becomes in <b>async</b> such that a pattern is used in order to know when the operations completes or to know the Z. A services which is async uses this kind of pattern and all this method will return an identifier to a task entity that could be accessed later to check the task status. 

## 1. Task stucture.
The task structure brings a lot of information usefull to inform the user the status of certain task, or to use in the logic of the application to raise some event when certain task conditions are meet. Some of this fields are:
> - <b>status</b>: ('running', 'pending', 'completed', 'failed', 'broken', 'unscheduled')
> - <b>progress</b>: Percent between 0 and 100.
> - <b>description</b>: Description of the task.
> - <b>executions</b>: An array of all execution history of the task.
> - <b>notifications</b>: An array of all notifications of the task.

## 2. Example.
You can make a call to a service like:
>[install an available integration](//cenit-io.github.io/eCapi/api-spec/#operation/install_available_integration_async_)<div style="background-color:#E09D43; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> PATCH </div> /available/integrations/<b>{collection_id}</b></br> </br> 

After this, a json like this will outcome:
```json
{
	"type": "task",
	"data": {
		"id": "5cfe690b25d9854b3b02241b",
		"status": "running",
		"progress": 0,
		"description": "Description of the task to be executed ...",
		"created_at": "2019-06-10T14:28:27+00:00",
		"updated_at": "2019-06-10T14:28:43+00:00",
		"executions": [],
		"notifications": [],
		"scheduler": {}
	}
}
```
Then use the <b>id</b> of this json to know the state of the task in further requests.

 >[Get task status](//cenit-io.github.io/eCapi/api-spec/#operation/get_task)<div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /tasks/<b>{task_id}</b> </br> </br> 