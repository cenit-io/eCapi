# Parser algorithm
 
## parse_from_api_response_2_di_order

It transforms and returns the data of each order obtained from the platform to be integrated to be stored in 
the intermediate data structure in OMNA.

**Resources related with this parser:**

* Webhook from which the data is obtained: [get_orders](../webhooks/overview.md?id=get_orders).
* Action algorithms that makes the request to the api of the platform to integrate:
  [do_get_orders](../action-algorithms/do_get_orders.md) or [do_get_order](../action-algorithms/do_get_order.md)
* Data type where the transformed data will be stored: [DIOrder](../data-types/DIOrder.md).
    
### Definition

> **Name:** parse_from_api_response_2_di_order
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the order to be transformed |
>
> **Returns:** A hash with the data to be saved in a record of [DIOrder](../data-types/DIOrder.md).

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_api_response_2_di_order&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others parser algorithms](overview?id=parse_from_api_response_2_di_order)