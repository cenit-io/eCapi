# Parser algorithm
 
## parse_from_di_2_core_order

Transforms and returns the data of an order from its intermediate data structure in OMNA to be stored 
in the general data structure of orders in OMNA.

**Resources related with this parser:**

* Data type corresponding to the source of the order to be transformed: [DIOrder](../data-types/DIOrder.md).
* Data type where the transformed data will be stored: [eCore::Order](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Order).
    
### Definition

> **Name:** parse_from_di_2_core_order
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the order to be transformed |
>
> **Returns:** A hash with transformed data to be stored in [eCore::Order](https://cenit.io/json_data_type?f[namespace][24075][v]&#x3D;eCore&amp;f[name][24160][o]&#x3D;is&amp;f[name][24160][v]&#x3D;Order).

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_di_2_core_order&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others parser algorithms](overview?id=parse_from_di_2_core_order)