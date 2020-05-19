# Parser algorithm:
 
## parse_from_api_response_2_integration_db_category:

TODO: Description...
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: parse_from_api_response_2_integration_db_category
    parameters:
      - name: source
        required: true
        
```

### Example:
```RUBY
{
  id: source[:category_id],
  name: source[:category_name]
}
```

### See also:
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_category)