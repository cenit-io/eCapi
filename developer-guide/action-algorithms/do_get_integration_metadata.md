# Action algorithm:

## do_get_integration_metadata:

Allows submitting a request to the remote integration platform to get its metadata.
    
### Definition:

> **Name:** do_get_integration_metadata
> 
> **Namespace:** Ov2Shopee
>
> **Parameters:**
> 
> | Name | Required | Description |
> | --- | --- | --- |
> | integration | true | ... |
> | webhook | true | ... |

### Example:
```RUBY
# Get metadata from the remote integration
metadata = begin
  response = webhook.submit!(body: '{}')
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:msg] || response[:error]) if response[:error]

  response
end

metadata
```

### See also:
* [Others action algorithms](overview?id=do_get_integration_metadata)