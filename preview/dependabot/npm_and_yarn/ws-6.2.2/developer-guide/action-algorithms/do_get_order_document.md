# Action algorithm

## do_get_order_document

Allows submitting a request a request to the remote integration platform to get an order document.
    
### Definition

> **Name:** do_get_order_document
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | order | true | Ov2Anyone::Order | Contains the record of the order |
> | doc_type | true | String | Contains the type of document to be obtain |
> | webhook | true | Setup::PlainWebhook | Contains the [get_order_document](../webhooks/overview?id=get_order_document) webhook |

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_get_order_document&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others action algorithms](overview?id=do_get_order_document)