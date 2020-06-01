# Parser algorithm
 
## parse_from_omna_db_2_integration_db_variant

TODO: Description...
    
### Definition

> **Name:** parse_from_omna_db_2_integration_db_variant
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | - | - |
> | target_sku | true | - | - |

### Example
```ruby
# Mapping variant from db record of OMNAv2.

variant_in_omna = source

price = variant_in_omna[:price]
original_price = variant_in_omna[:original_price]

{
  SellerSku: target_sku,
  price: variant_in_omna[:original_price],
  special_price: original_price == price ? nil : price,
  quantity: variant_in_omna[:quantity],
  package_weight: variant_in_omna[:package][:weight],
  package_height: variant_in_omna[:package][:height],
  package_length: variant_in_omna[:package][:length],
  package_width: variant_in_omna[:package][:width],
  package_content: variant_in_omna[:package][:content]
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_omna_db_2_integration_db_variant)