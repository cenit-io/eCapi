# Parser algorithm
 
## parse_from_integration_db_2_omna_db_product

Transforms and returns the data of a product from its intermediate data structure in OMNA to be stored
in the general data structure of products in OMNA.

**Resources related with this parser:**

* Data type corresponding to the source of the product to be transformed: [DIProduct](../data-types/DIProduct.md).
* Data type where the transformed data will be stored: [OMNAv2::Product](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Product).
    
### Definition

> **Name:** parse_from_integration_db_2_omna_db_product
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the product to be transformed |

### Example
```ruby
# Mapping product from db record of Ov2AnyoneXX channel to OMNAv2.

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