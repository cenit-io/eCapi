# Parser algorithm
 
## parse_from_omna_db_2_integration_db_variant

Transforms and returns the data of a product variant from its general data structure of variants in OMNA to be stored 
in the intermediate data structure in OMNA.

**Resources related with this parser:**

* Data type corresponding to the source of the product variant to be transformed: [OMNAv2::Variant](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Variant).
* Data type where the transformed data will be stored: [DIVariant](../data-types/DIVariant.md).
    
### Definition

> **Name:** parse_from_omna_db_2_integration_db_variant
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the hash record of the [OMNAv2::Variant](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Variant) to be transformed |
> | target_sku | true | - | - |
>
> **Returns:** Tha hash with the data to be store in [DIVariant](../data-types/DIVariant.md).

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