# Parser algorithm:
 
## parse_from_integration_db_2_ecapi_response_variant_properties:

TODO: Description...
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: parse_from_integration_db_2_ecapi_response_variant_properties
    parameters:
      - name: variant
        required: true
        
      - name: properties_definition
        required: true
        
```

### Example:
```RUBY
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

### See also:
* [Others parser algorithms](overview?id=parse_from_integration_db_2_ecapi_response_variant_properties)