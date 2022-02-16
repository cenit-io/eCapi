# Action algorithm

## do_get_categories

Allows submitting a request to the remote integration platform to get the product categories.
    
### Definition

> **Name:** do_get_categories
> 
> **Namespace:** eCwAnyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | eCore::Integration | Contains integration record |
> | webhook | true | Setup::PlainWebhook | Contains the [get_categories](../webhooks/overview?id=get_categories) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task |

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_get_categories&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=eCw)
* [Others action algorithms](overview?id=do_get_categories)