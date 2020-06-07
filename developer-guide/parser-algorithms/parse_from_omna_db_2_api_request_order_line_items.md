# Parser algorithm
 
## parse_from_omna_db_2_api_request_order_line_items

Transforms and returns the data of order items of an order registered in OMNA to be exported 
to the remote platform to be integrated.

**Resources related with this parser:**

* Parser: [parse_from_omna_db_2_api_request_order](../parser-algorithms/parse_from_omna_db_2_api_request_order.md).

    
### Definition

> **Name:** parse_from_omna_db_2_api_request_order_line_items
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the order to be transformed |
>
> **Returns:** A List of hash with the transformed order items.

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_omna_db_2_api_request_order_line_items&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others parser algorithms](overview?id=parse_from_omna_db_2_api_request_order_line_items)