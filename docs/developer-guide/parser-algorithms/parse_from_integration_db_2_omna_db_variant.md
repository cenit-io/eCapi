# Parser algorithm
 
## parse_from_integration_db_2_omna_db_variant

Transforms and returns the data of a product variant from its intermediate data structure in OMNA to be stored
in the general data structure of variants in OMNA.

**Resources related with this parser:**

* Data type corresponding to the source of the product variant to be transformed: [DIVariant](../data-types/DIVariant.md).
* Data type where the transformed data will be stored: [OMNAv2::Variant](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Variant).
    
### Definition

> **Name:** parse_from_integration_db_2_omna_db_variant
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the order to be transformed |
>
> **Returns:** A hash with transformed data to ve stored in [OMNAv2::Vatiant](https://cenit.io/json_data_type?f[namespace][24075][v]&#x3D;OMNAv2&amp;f[name][24160][o]&#x3D;is&amp;f[name][24160][v]&#x3D;Vatiant).

### Example
```ruby
# Mapping variant from db record of Ov2AnyoneXX channel to OMNAv2.

data = source[:data]
data[:Images] ||= []

{
  sku: data[:SellerSku],
  price: data[:special_price] || data[:price],
  original_price: data[:price],
  quantity: data[:quantity],
  images: data[:Images].select { |img| !img.blank? },
  package: {
    weight: data[:package_weight],
    height: data[:package_height],
    length: data[:package_length],
    width: data[:package_width],
    content: data[:package_content]
  }
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_variant)