# Action algorithm

## do_get_product

Allows submitting a request to the remote integration platform to get an product.
    
### Definition

> **Name:** do_get_product
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | OMNAv2::Integration | Contains integration record |
> | product_id | true | String | Contains the id of the product to be obtain |
> | webhook | true | Setup::PlainWebhook | Contains the [get_product](../webhooks/overview?id=get_product) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task |

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_get_product&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others action algorithms](overview?id=do_get_product)