# Parser algorithm
 
## parse_from_api_response_2_di_brand

It transforms and returns the data of each product brand obtained from the platform to be integrated to be stored in 
the intermediate data structure in core.

**Resources related with this parser:**

* Webhook from which the data is obtained: [get_brands](../webhooks/overview.md?id=get_brands).
* Action algorithm that makes the request to the api of the platform to integrate:
  [do_get_categories](../action-algorithms/do_get_categories.md).
* Data type where the transformed data will be stored: [DIBrand](../data-types/DIBrand.md).
    
### Definition

> **Name:** parse_from_api_response_2_di_brand
> 
> **Namespace:** eCwAnyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the product brand to be transformed |
>
> **Returns:** A hash with the data to be saved in a record of [DIBrand](../data-types/DIBrand.md).

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_api_response_2_di_brand&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=eCw)
* [Others parser algorithms](overview?id=parse_from_api_response_2_di_brand)