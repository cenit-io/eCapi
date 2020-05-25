# Action algorithm

## do_get_integration_metadata

Allows submitting a request to the remote integration platform to get its metadata.
    
### Definition

> **Name:** do_get_integration_metadata
> 
> **Namespace:** Ov2Lazada
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | integration | true | OMNAv2::Integration |
> | webhook | true | Setup::PlainWebhook |

### Example
```ruby
# Get metadata from the remote integration
metadata = begin
  response = webhook.submit!(body: '{}')
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:msg] || response[:error]) if response[:error]

  response
end

metadata
```

### See also
* [Others action algorithms](overview?id=do_get_integration_metadata)