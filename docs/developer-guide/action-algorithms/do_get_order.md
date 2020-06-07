# Action algorithm

## do_get_order

Allows submitting a request to the remote integration platform to get an order.
    
### Definition

> **Name:** do_get_order
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | OMNAv2::Integration | Contains integration record |
> | number | true | String | Contains the number of the order to be obtain |
> | webhook | true | Setup::PlainWebhook | Contains the [get_order](../webhooks/overview?id=get_order) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task |

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_get_order&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others action algorithms](overview?id=do_get_order)