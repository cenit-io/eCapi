# Parser algorithm
 
## parse_from_api_response_2_integration_db_product_images

It transforms and returns the data of each product images obtained from the platform to be integrated to be stored in 
the intermediate data structure in OMNA.

**Resources related with this parser:**

* Webhook from which the data is obtained: [get_products](../webhooks/overview.md?id=get_products).
* Action algorithms that makes the request to the api of the platform to integrate:
  [do_get_products](../action-algorithms/do_get_products.md) or [do_get_product](../action-algorithms/do_get_product.md)
* Data type where the transformed data will be stored: [DIImage](../data-types/DIImage.md)
    
### Definition

> **Name:** parse_from_api_response_2_integration_db_product_images
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the product images to be transformed |
>
> **Returns:** A array of hash, with the same structure as the example shown below, with the data to be saved in a record of [DIImage](../data-types/DIImage.md)

### Example
```ruby
source[:images].select.map { |url| { url: url } }
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_product_images)