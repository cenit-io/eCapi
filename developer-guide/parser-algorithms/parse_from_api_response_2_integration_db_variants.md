# Parser algorithm:
 
## parse_from_api_response_2_integration_db_variants:

TODO: Description...
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: parse_from_api_response_2_integration_db_variants
    parameters:
      - name: source
        required: true
        
```

### Example:
```RUBY
source[:variants].map do |variant|
  {
    remote_variant_id: variant[:id],
    sku: variant[:sku],
    data: variant.dup
  }
end
```

### See also:
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_variants)