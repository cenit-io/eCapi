# Parser algorithm
 
## parse_from_api_response_2_integration_db_product

TODO: Description...
    
### Definition

> **Name:** parse_from_api_response_2_integration_db_product
> 
> **Namespace:** Ov2Lazada
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | source | true |  |

### Example
```ruby
{
  remote_product_id: source[:id],
  category_id: source[:product_type],
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_product)