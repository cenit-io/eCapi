# Parser algorithm
 
## parse_from_omna_db_2_api_request_order

Transforms and returns the data of an order registered in OMNA to be exported to the remote platform to be integrated.

**Resources related with this parser:**

* Data type corresponding to the source of the order to be transformed: 
  [OMNAv2::Order](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Order).
* Action algorithm to export the order: 
  [do_create_order](../action-algorithms/do_create_order.md) or 
  [do_update_order](../action-algorithms/do_update_order.md).
* Webhook to export the order:
  [create_order](../webhooks/overview?id=create_order) or 
  [update_order](../webhooks/overview?id=update_order).

    
### Definition

> **Name:** parse_from_omna_db_2_api_request_order
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the hash record of the [OMNAv2::Order](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Order) to be transformed |
>
> **Returns:** The hash with the data to be exported.

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_omna_db_2_api_request_order&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others parser algorithms](overview?id=parse_from_omna_db_2_api_request_order)