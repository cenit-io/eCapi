# Parser algorithm
 
## parse_from_omna_db_2_api_request_order_line_items

Transforms and returns the data of order items of an order registered in OMNA to be exported 
to the remote platform to be integrated.

**Resources related with this parser:**

* Parser: [parse_from_omna_db_2_api_request_order](../parser-algorithms/parse_from_omna_db_2_api_request_order.md).

    
### Definition

> **Name:** parse_from_omna_db_2_api_request_order_line_items
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the order to be transformed |
>
> **Returns:** A List of hash with the transformed order items.

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