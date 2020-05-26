# Parser algorithm
 
## parse_from_api_response_2_integration_db_variants

TODO: Description...
    
### Definition

> **Name:** parse_from_api_response_2_integration_db_variants
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | - | - |

### Example
```ruby
source[:variants].map do |variant|
  {
    remote_variant_id: variant[:id],
    sku: variant[:sku],
    data: variant.dup
  }
end
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_variants)