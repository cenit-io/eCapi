# Action algorithm

## do_get_products

Allows submitting a request to the remote integration platform to get the products.
    
### Definition

> **Name:** do_get_products
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | eCore::Integration | Contains integration record |
> | webhook | true | Setup::PlainWebhook | Contains the [get_products](../webhooks/overview?id=get_products) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task |

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_get_products&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others action algorithms](overview?id=do_get_products)