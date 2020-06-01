# Parser algorithm
 
## parse_from_api_response_2_integration_db_product

TODO: Description...
    
### Definition

> **Name:** parse_from_api_response_2_integration_db_product
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
{
  remote_product_id: source[:item_id],
  category_id: source[:primary_category].to_s,
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_product)