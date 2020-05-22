# Parser algorithm:
 
## parse_from_integration_db_2_omna_db_order_line_items:

TODO: Description...
    
### Definition:

> **Name:** parse_from_integration_db_2_omna_db_order_line_items
> 
> **Namespace:** Ov2Shopee
>
> **Parameters:**
> 
> | Name | Required | Description |
> | --- | --- | --- |
> | source | true | ... |

### Example:
```RUBY
source[:line_items].try(:map) do |item|
  {
    id: item[:id],
    name: item[:name],
    quantity: item[:quantity],
    price: item[:price],
    currency: source[:currency],
    sku: item[:sku],
    variation_id: item[:variant_id]
  }
end
```

### See also:
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_order_line_items)