# Action algorithm

## do_cancel_order

Allows submitting a request to the remote integration platform to cancel an order.
    
### Definition

> **Name:** do_cancel_order
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | order | true | eCore::Order | Contains the record of the order to be canceled |
> | webhook | true | Setup::PlainWebhook | Contains the [cancel_order](../webhooks/overview?id=cancel_order) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task |

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_cancel_order&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others action algorithms](overview?id=do_cancel_order)