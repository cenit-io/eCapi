# Parser algorithm
 
## parse_from_api_response_2_integration_db_order

TODO: Description...
    
### Definition

> **Name:** parse_from_api_response_2_integration_db_order
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
  number: source[:order_number],
  status: source[:statuses].try(:first),
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_order)