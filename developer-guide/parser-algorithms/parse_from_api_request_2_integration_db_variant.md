# Parser algorithm
 
## parse_from_api_request_2_integration_db_variant

TODO: Description...
    
### Definition

> **Name:** parse_from_api_request_2_integration_db_variant
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | variant_record | true | - | - |
> | new_data | true | - | - |

### Example
```ruby
# Set the value of each property in the data structure of the variant record corresponding to the integration.
new_data[:properties].each do |property|
  option = variant.product.data[:options].detect { |o| o[:id] == property[:id] }
  variant_record.data["option#{option[:position]}"] = property[:value]
end
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_request_2_integration_db_variant)