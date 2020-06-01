# Parser algorithm
 
## parse_from_omna_db_2_integration_db_product

Transforms and returns the data of a product from its general data structure of products in OMNA to be stored 
in the intermediate data structure in OMNA.

**Resources related with this parser:**

* Data type corresponding to the source of the product to be transformed: [OMNAv2::Product](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Product).
* Data type where the transformed data will be stored: [DIProduct](../data-types/DIProduct.md).
    
### Definition

> **Name:** parse_from_omna_db_2_integration_db_product
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the hash record of the [OMNAv2::Product](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Product) to be transformed |
>
> **Returns:** Tha hash with the data to be store in [DIProduct](../data-types/DIProduct.md).

### Example
```ruby
# Mapping product from db record of OMNAv2.

product_in_omna = source
{
  attributes: {
    name: product_in_omna[:name],
    description: product_in_omna[:description]
  }
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_omna_db_2_integration_db_product)