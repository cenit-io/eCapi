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
  property_id: source[:attribute_id],
  name: source[:attribute_name],
  label: source[:attribute_name],
  input_type: source[:input_type].underscore.to_sym,
  required: source[:is_mandatory],
  options: source[:options],
  source: 'product'
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_property)