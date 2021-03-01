# Action algorithm

## do_get_properties

Allows submitting a request to the remote integration platform to get the product properties.
    
### Definition

> **Name:** do_get_properties
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | OMNAv2::Integration | Contains integration record |
> | category | true | String | Contains the product category id |
> | webhook | true | Setup::PlainWebhook | Contains the [get_category_attrs](../webhooks/overview?id=get_category_attrs) webhook |

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_get_properties&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others action algorithms](overview?id=do_get_properties)