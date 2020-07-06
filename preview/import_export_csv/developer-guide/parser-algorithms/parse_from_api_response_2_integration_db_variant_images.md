# Parser algorithm
 
## parse_from_api_response_2_integration_db_variant_images

It transforms and returns the data of each product variant images obtained from the platform to be integrated to be stored in 
the intermediate data structure in OMNA.

**Resources related with this parser:**

* Webhook from which the data is obtained: [get_products](../webhooks/overview.md?id=get_products).
* Action algorithms that makes the request to the api of the platform to integrate:
  [do_get_products](../action-algorithms/do_get_products.md) or [do_get_product](../action-algorithms/do_get_product.md)
* Data type where the transformed data will be stored: [DIImage](../data-types/DIImage.md).
    
### Definition

> **Name:** parse_from_api_response_2_integration_db_variant_images
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the product variant images to be transformed |
>
> **Returns:** A array of hash with the data to be saved in a record of [DIImage](../data-types/DIImage.md).

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_api_response_2_integration_db_variant_images&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_variant_images)