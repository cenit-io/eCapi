# Parser algorithm
 
## parse_from_core_2_di_variant

Transforms and returns the data of a product variant from its general data structure of variants in core to be stored 
in the intermediate data structure in core.

**Resources related with this parser:**

* Data type corresponding to the source of the product variant to be transformed: [eCore::Variant](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Variant).
* Data type where the transformed data will be stored: [DIVariant](../data-types/DIVariant.md).
    
### Definition

> **Name:** parse_from_core_2_di_variant
> 
> **Namespace:** eCwAnyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the hash record of the [eCore::Variant](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Variant) to be transformed |
> | target_sku | true | - | - |
>
> **Returns:** Tha hash with the data to be store in [DIVariant](../data-types/DIVariant.md).

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_core_2_di_variant&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=eCw)
* [Others parser algorithms](overview?id=parse_from_core_2_di_variant)