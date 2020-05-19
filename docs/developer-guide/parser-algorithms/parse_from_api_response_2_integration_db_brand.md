# Parser algorithm:
 
## parse_from_api_response_2_integration_db_brand:

TODO: Description...
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: parse_from_api_response_2_integration_db_brand
    parameters:
      - name: source
        required: true
        
```

### Example:
```RUBY
{
  id: source[:brand_id],
  name: source[:name],
  name_en: source[:name_en]
}
```

### See also:
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_brand)