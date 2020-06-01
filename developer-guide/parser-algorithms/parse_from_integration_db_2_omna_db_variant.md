# Parser algorithm
 
## parse_from_integration_db_2_omna_db_variant

TODO: Description...
    
### Definition

> **Name:** parse_from_integration_db_2_omna_db_variant
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
# Mapping variant from db record of LazadaXX channel to OMNAv2.

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