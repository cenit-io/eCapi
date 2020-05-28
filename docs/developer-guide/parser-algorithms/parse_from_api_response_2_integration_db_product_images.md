# Parser algorithm:
 
## parse_from_api_response_2_integration_db_product_images:

TODO: Description...
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: parse_from_api_response_2_integration_db_product_images
    parameters:
      - name: source
        required: true
        
```

### Example:
```RUBY
source[:images].select.map { |imag| { url: imag[:src] } }
```

### See also:
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_product_images)