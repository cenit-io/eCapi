# Action algorithm:

## do_import_properties:

Allows submitting a request to the remote integration platform to get and import the product properties.
    
### Definition:

> **Name:** do_import_properties
> 
> **Namespace:** Ov2Shopee
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | integration | true | ... |
> | category | true | ... |
> | webhook | true | ... |

### Example:
```RUBY
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

### See also:
* [Others action algorithms](overview?id=do_import_properties)