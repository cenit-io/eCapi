# Parser algorithm
 
## parse_from_integration_db_2_ecapi_response_variant_properties

TODO: Description...
    
### Definition

> **Name:** parse_from_integration_db_2_ecapi_response_variant_properties
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | variant | true | - | - |
> | properties_definition | true | - | - |

### Example
```ruby
properties_definition.map do |property|
  {
    id: property.property_id,
    label: property.label,
    required: property.required,
    read_only: false,
    input_type: property.input_type,
    options: property.options,
    value: variant.data[property.name]
  }
end
```

### See also
* [Others parser algorithms](overview?id=parse_from_integration_db_2_ecapi_response_variant_properties)