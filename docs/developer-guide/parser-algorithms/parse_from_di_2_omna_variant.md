# Parser algorithm
 
## parse_from_di_2_core_variant

Transforms and returns the data of a product variant from its intermediate data structure in OMNA to be stored
in the general data structure of variants in OMNA.

**Resources related with this parser:**

* Data type corresponding to the source of the product variant to be transformed: [DIVariant](../data-types/DIVariant.md).
* Data type where the transformed data will be stored: [eCore::Variant](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Variant).
    
### Definition

> **Name:** parse_from_di_2_core_variant
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the order to be transformed |
> | is_new_target | true | Boolean | Contains true if target will be a new record |
>
> **Returns:** A hash with transformed data to be stored in [eCore::Vatiant](https://cenit.io/json_data_type?f[namespace][24075][v]&#x3D;eCore&amp;f[name][24160][o]&#x3D;is&amp;f[name][24160][v]&#x3D;Vatiant).

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_di_2_core_variant&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others parser algorithms](overview?id=parse_from_di_2_core_variant)