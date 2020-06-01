# Parser algorithm
 
## parse_from_integration_db_2_omna_db_order_line_items

TODO: Description...
    
### Definition

> **Name:** parse_from_integration_db_2_omna_db_order_line_items
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
source[:line_items].try(:map) do |item|
  {
    id: item[:order_item_id],
    name: item[:name],
    quantity: 1,
    price: item[:paid_price],
    currency: item[:currency],
    sku: item[:sku],
    # variation_id: item[:variation_id],
  }
end

```

### See also
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_order_line_items)