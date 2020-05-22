# Parser algorithm
 
## parse_from_omna_db_2_api_request_order_line_items

TODO: Description...
    
### Definition

> **Name:** parse_from_omna_db_2_api_request_order_line_items
> 
> **Namespace:** Ov2Shopify
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | source | true |  |

### Example
```ruby
source[:line_items].try(:map) do |item|
  {
    id: item[:id],
    name: item[:name],
    title: item[:name],
    quantity: item[:quantity],
    price: item[:price],
    currency: source[:currency],
    sku: item[:sku],
    variant_id: item[:variation_id]
  }
end
```

### See also
* [Others parser algorithms](overview?id=parse_from_omna_db_2_api_request_order_line_items)