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
> | is_new_target | true | Boolean | Contains true if target will be a new record |
>
> **Returns:** A hash with transformed data to be stored in [OMNAv2::Product](https://cenit.io/json_data_type?f[namespace][24075][v]&#x3D;OMNAv2&amp;f[name][24160][o]&#x3D;is&amp;f[name][24160][v]&#x3D;Product).

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_integration_db_2_omna_db_product&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_product)