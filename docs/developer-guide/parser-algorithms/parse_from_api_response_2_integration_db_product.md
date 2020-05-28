# Parser algorithm:
 
## parse_from_api_response_2_integration_db_product:

TODO: Description...
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: parse_from_api_response_2_integration_db_product
    parameters:
      - name: source
        required: true
        
```

### Example:
```RUBY
{
  remote_product_id: source[:id],
  category_id: source[:product_type],
}
```

### See also:
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_product)