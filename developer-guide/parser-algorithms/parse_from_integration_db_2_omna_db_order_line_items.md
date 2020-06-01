# Parser algorithm
 
## parse_from_integration_db_2_omna_db_order_line_items

Transforms and returns the data of the order items from its intermediate data structure in OMNA to be stored 
in the general data structure of orders in OMNA.

**Resources related with this parser:**

* Data type corresponding to the source of the order to be transformed: [DIOrder](../data-types/DIOrder.md).
* Data type where the transformed data will be stored: [OMNAv2::Order](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Order).
    
### Definition

> **Name:** parse_from_integration_db_2_omna_db_order_line_items
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the order to be transformed |

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