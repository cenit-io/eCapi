# Action algorithm

## do_get_properties

Allows submitting a request to the remote integration platform to get the product properties.
    
### Definition

> **Name:** do_get_properties
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | OMNAv2::Integration | - |
> | category | true | - | - |
> | webhook | true | Setup::PlainWebhook | Contains the [get_category_attrs](../webhooks/overview?id=get_category_attrs) webhook |

### Example
```ruby
# Get categories attrs from the remote integration
properties = begin
  data = { 'category_id' => category.id }

  response = webhook.submit!(body: data.to_json)
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:msg] || response[:error]) if response[:error]

  response[:attributes]
end

properties
```

### See also
* [Others action algorithms](overview?id=do_get_properties)