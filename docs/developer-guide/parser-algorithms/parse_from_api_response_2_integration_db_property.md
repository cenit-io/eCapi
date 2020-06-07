# Parser algorithm
 
## parse_from_api_response_2_integration_db_property

It transforms and returns the data of each product property obtained from the platform to be integrated to be stored in 
the intermediate data structure in OMNA.

**Resources related with this parser:**

* Webhook from which the data is obtained: [get_category_attrs](../webhooks/overview.md?id=get_category_attrs).
* Action algorithm that makes the request to the api of the platform to integrate:
  [do_get_properties](../action-algorithms/do_get_properties.md).
* Data type where the transformed data will be stored: [DICategory](../data-types/DICategory.md).
    
### Definition

> **Name:** parse_from_api_response_2_integration_db_property
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the product property to be transformed |
>
> **Returns:** A hash with the data to be saved in the properties attribute on the record of [DICategory](../data-types/DICategory.md).

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_api_response_2_integration_db_property&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_property)