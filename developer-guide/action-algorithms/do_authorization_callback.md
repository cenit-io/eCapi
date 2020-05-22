# Action algorithm

## do_authorization_callback

Allows set the template parameters of the authorization from the callback params in a callback authorization.
    
### Definition

> **Name:** do_authorization_callback
> 
> **Namespace:** Ov2Shopee
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | callback_params | true | Hash |
> | template_parameters | true | Hash |

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