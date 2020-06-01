# Parser algorithm
 
## parse_from_api_response_2_integration_db_property

TODO: Description...
    
### Definition

> **Name:** parse_from_api_response_2_integration_db_property
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | - | - |

### Example
```ruby
{
  property_id: source[:name],
  name: source[:name],
  label: source[:label],
  input_type: source[:input_type].underscore.to_sym,
  required: source[:is_mandatory] == 1,
  options: source[:options].collect { |o| o[:name] },
  source: source[:attribute_type] == 'sku' ? 'variant' : 'product'
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_property)