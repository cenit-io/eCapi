# Parser algorithm
 
## parse_from_api_response_2_integration_db_logistic

It transforms and returns the data of each logistic obtained from the platform to be integrated to be stored in 
the intermediate data structure in OMNA.

**Resources related with this parser:**

* Webhook from which the data is obtained: [get_logistics](../webhooks/overview.md?id=get_logistics).
* Action algorithm that makes the request to the api of the platform to integrate:
  [do_get_logistics](../action-algorithms/do_get_logistics.md).
* Data type where the transformed data will be stored: [DILogistic](../data-types/DILogistic.md).
    
### Definition

> **Name:** parse_from_api_response_2_integration_db_logistic
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the logistic item to be transformed |
>
> **Returns:** A hash with the data to be saved in a record of [DILogistic](../data-types/DILogistic.md).

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_api_response_2_integration_db_logistic&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_logistic)