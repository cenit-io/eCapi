# Action algorithm

## do_check_error_response

Check if an answer is an error and if so get the string corresponding to the message and throw an exception.
    
### Definition

> **Name:** do_check_error_response
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | response | true | Hash | Contains the response data received from the request to the external API of the foreign platform. |
> | action_identify | false | String\|Symbol | Contains the identification of the action. It can be the name of the algorithm that does the invocation or a symbol like :get_product, :get_order, :update_product, etc. |
>
> **Returns:** A list of the available integration settings with its available channels.

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_check_error_response&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others action algorithms](overview?id=do_check_error_response)