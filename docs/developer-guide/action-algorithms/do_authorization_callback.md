# Action algorithm

## do_authorization_callback

Allows set the template parameters of the authorization from the callback params in a callback authorization.
    
### Definition

> **Name:** do_authorization_callback
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | callback_params | true | Hash | Contains the parameters returned since authorization |
> | template_parameters | true | Hash | Contains the reference to the authorization template parameters |

### Example
```ruby
# Set the template_parameters with callback parameters.

template_parameters['tp1'] = callback_params[:cbp1]
template_parameters['tp2'] = callback_params[:cbp2]
# ...
template_parameters['tpN'] = callback_params[:cbpN]
```

### See also
* [Others action algorithms](overview?id=do_authorization_callback)