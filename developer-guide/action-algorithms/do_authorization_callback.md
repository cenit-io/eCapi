# Action algorithm:

## do_authorization_callback:

Allows set the template parameters of the authorization from the callback params in a callback authorization.
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: do_authorization_callback
    parameters:
      - name: callback_params
        required: true
        
      - name: template_parameters
        required: true
        
```

### Example:
```RUBY
# Set the template_parameters with callback parameters.

template_parameters['tp1'] = callback_params[:cbp1]
template_parameters['tp2'] = callback_params[:cbp2]
# ...
template_parameters['tpN'] = callback_params[:cbpN]
```

### See also:
* [Others actions algorithms](overview?id=do_authorization_callback)