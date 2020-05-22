# Parser algorithm
 
## parse_from_omna_db_2_integration_db_variant

TODO: Description...
    
### Definition

> **Name:** parse_from_omna_db_2_integration_db_variant
> 
> **Namespace:** Ov2Shopee
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | source | true |  |
> | target_sku | true |  |

### Example
```ruby
# Mapping variant from db record of OMNAv2.

variant_in_omna = source

price = variant_in_omna[:price]
original_price = variant_in_omna[:original_price]

{
  sku: target_sku,
  price: price,
  compare_at_price: original_price == price ? nil : original_price,
  weight: variant_in_omna[:weight],
  weight_unit: 'kg',
  inventory_quantity: variant_in_omna[:quantity],
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_omna_db_2_integration_db_variant)