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
variant.product.data[:options].map do |option|
  {
    id: option[:id],
    label: option[:name],
    required: true,
    read_only: false,
    input_type: 'single_select',
    options: option[:values],
    value: variant.data["option#{option[:position]}"],
  }
end
```

### See also
* [Others parser algorithms](overview?id=parse_from_integration_db_2_ecapi_response_variant_properties)