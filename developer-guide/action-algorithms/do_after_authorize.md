# Action algorithm

## do_after_authorize

Allows validate the authorization and start some processes after successful authorization.
    
### Definition

> **Name:** do_after_authorize
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | OMNAv2::Integration \| String | Contains the integration record or id |
> | webhook | true | Setup::PlainWebhook | Contains the [get_integration_metadata](../webhooks/overview?id=get_integration_metadata) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task |
>
> **Returns:** List of the names of the resources that should be imported initially.
For each of these names, except for categories and brands, 
should be created a algorithm with the same name and the prefix **do_import_**.
(Ex: [do_import_logistics](do_import_logistics.md)).

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_after_authorize&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others action algorithms](overview?id=do_after_authorize)