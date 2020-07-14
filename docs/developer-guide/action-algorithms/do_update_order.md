# Action algorithm

## do_update_order

Allows submitting a request to the remote integration platform to update an order.
    
### Definition

> **Name:** do_update_order
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | data | true | Hash | Contains the data to be export. This is obtained from this [parser](../parser-algorithms/parse_from_omna_2_api_request_order.md). |
> | integration | true | OMNAv2::Integration | Contains integration record |
> | webhook | true | Setup::PlainWebhook | Contains the [update_order](../webhooks/overview?id=update_order) webhook |
> | order_exported | true | Hash | Contains the data returned by the remote platform in the last export of the order |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task |
>
> **Returns:** A **Hash** with the order data updated on the remote platform.

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_update_order&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others action algorithms](overview?id=do_update_order)