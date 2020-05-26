# Action algorithm

## do_get_brands

Allows submitting a request to the remote integration platform to get the product brands.
    
### Definition

> **Name:** do_get_brands
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | OMNAv2::Integration | - |
> | webhook | true | Setup::PlainWebhook | - |
> | task | true | Setup::AlgorithmExecution | - |

### Example
```ruby
limit = 1000
offset = task.state[:offset] ||= 0

# Get brands from the remote integration
brands = begin
  tps = { 'limit' => limit, 'offset' => offset }

  response = webhook.submit!(template_parameters: tps)
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:message]) if response[:code].to_i != 0

  response[:data]
end

if (items.count == limit)
  task.state[:offset] += limit
  task.state[:import_next_block] = true
end

brands
```

### See also
* [Others action algorithms](overview?id=do_get_brands)