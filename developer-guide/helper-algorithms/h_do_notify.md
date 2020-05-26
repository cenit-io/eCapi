# Helper algorithm

## h_do_notify

Create a system notification.
    
### Definition

> **Name:** h_do_notify
> 
> **Namespace:** OMNAv2
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | msg | true | String | Contains the message to be send |
> | attachment | false | Hash | Contains the attachment file data |
> | type | false | String \| Symbol | Contains notification type |
> | context | false | Setup::Tenant \| Setup::AlgorithmExecution | Contains the context in which the notification will be sent |

### See also
* [Others helper algorithms](overview?id=h_do_notify)