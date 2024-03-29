# Parser algorithm
 
## parse_from_core_2_di_product

Transforms and returns the data of a product from its general data structure of products in core to be stored 
in the intermediate data structure in core.

**Resources related with this parser:**

* Data type corresponding to the source of the product to be transformed: [eCore::Product](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Product).
* Data type where the transformed data will be stored: [DIProduct](../data-types/DIProduct.md).
    
### Definition

> **Name:** parse_from_core_2_di_product
> 
> **Namespace:** eCwAnyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the hash record of the [eCore::Product](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Product) to be transformed |
> | integration | true | eCore::Integration | Contains the integration record |
> | is_new_target | true | Boolean | Contains true if target will be a new record |
>
> **Returns:** Tha hash with the data to be store in [DIProduct](../data-types/DIProduct.md).

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_core_2_di_product&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=eCw)
* [Others parser algorithms](overview?id=parse_from_core_2_di_product)