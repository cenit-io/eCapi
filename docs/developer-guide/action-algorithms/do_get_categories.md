# Action algorithm

## do_get_categories

Allows submitting a request to the remote integration platform to get the product categories.
    
### Definition

> **Name:** do_get_categories
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | OMNAv2::Integration | Contains integration record |
> | webhook | true | Setup::PlainWebhook | Contains the [get_categories](../webhooks/overview?id=get_categories) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task |

### Example
```ruby
# Get categories from the remote integration
categories = begin
  response = webhook.submit!
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:message]) if response[:code].to_i != 0

  response[:data]
end

categories
```

### See also
* [Others action algorithms](overview?id=do_get_categories)