# Action algorithm

## do_create_variant

Allows submitting a request to the remote integration platform to create a product variant.
    
### Definition

> **Name:** do_create_variant
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | data | true | - | Contains the data to be export. This is obtained from this [parser](../parser-algorithms/parse_from_omna_db_2_api_request_variant.md). |
> | integration | true | OMNAv2::Integration | Contains integration record |
> | webhook | true | Setup::PlainWebhook | Contains the [create_variant](../webhooks/overview?id=create_variant) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task |

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_create_variant&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others action algorithms](overview?id=do_create_variant)