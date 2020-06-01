# Parser algorithm
 
## parse_from_integration_db_2_omna_db_product

TODO: Description...
    
### Definition

> **Name:** parse_from_integration_db_2_omna_db_product
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
# Mapping product from db record of LazadaXX channel to OMNAv2.

data = source[:data]
min_sku = data[:skus].min_by { |v| v[:price] }

{
  name: data[:attributes][:name],
  description: data[:attributes][:description],
  price: min_sku[:price],
  package: {
    weight: min_sku[:package_weight],
    height: min_sku[:package_height],
    length: min_sku[:package_length],
    width: min_sku[:package_width],
    content: min_sku[:package_content]
  }
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_product)