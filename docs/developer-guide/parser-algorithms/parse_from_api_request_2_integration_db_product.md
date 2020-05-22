# Parser algorithm:
 
## parse_from_api_request_2_integration_db_product:

TODO: Description...
    
### Definition:

> **Name:** parse_from_api_request_2_integration_db_product
> 
> **Namespace:** Ov2Shopee
>
> **Parameters:**
> 
> | Name | Required | Description |
> | --- | --- | --- |
> | product_record | true | ... |
> | new_data | true | ... |

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