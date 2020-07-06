# Action algorithm

## do_delete_remote_product

Allows submitting a request to the remote integration platform to remove a product.
    
### Definition

> **Name:** do_delete_remote_product
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | product | true | Ov2Anyone::Product | Contains the record of product to be delete |
> | webhook | true | Setup::PlainWebhook | Contains the [delete_product](../webhooks/overview?id=delete_product) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task |

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_delete_remote_product&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others action algorithms](overview?id=do_delete_remote_product)