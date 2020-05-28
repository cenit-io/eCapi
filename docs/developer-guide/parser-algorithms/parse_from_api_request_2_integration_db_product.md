# Parser algorithm:
 
## parse_from_api_request_2_integration_db_product:

TODO: Description...
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: parse_from_api_request_2_integration_db_product
    parameters:
      - name: product_record
        required: true
        
      - name: new_data
        required: true
        
```

### Example:
```RUBY
# Set the value of each property in the data structure of the product record corresponding to the integration.
new_data[:properties].each do |property|
  key = property[:id]
  value = property[:value]

  case key.to_sym
  when :category_id
    product_record.data[:product_type] = product_record.category_id = value
  else
    product_record.data[key] = value
  end
end
```

### See also:
* [Others parser algorithms](overview?id=parse_from_api_request_2_integration_db_product)