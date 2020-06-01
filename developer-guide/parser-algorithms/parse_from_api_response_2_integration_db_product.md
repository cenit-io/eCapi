# Parser algorithm
 
## parse_from_api_response_2_integration_db_product

It transforms and returns the data of each product obtained from the platform to be integrated to be stored in 
the intermediate data structure in OMNA.

**Resources related with this parser:**

* Webhook from which the data is obtained: [get_products](../webhooks/overview.md?id=get_products).
* Action algorithms that makes the request to the api of the platform to integrate:
  [do_get_products](../action-algorithms/do_get_products.md) or [do_get_product](../action-algorithms/do_get_product.md)
* Data type where the transformed data will be stored: [DIProduct](../data-types/DIProduct.md).
    
### Definition

> **Name:** parse_from_api_response_2_integration_db_product
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the product to be transformed |
>
> **Returns:** A hash, with the same structure as the example shown below, with the data to be saved in a record of [DIProduct](../data-types/DIProduct.md).

### Example
```ruby
{
  remote_product_id: source[:item_id],
  category_id: source[:primary_category].to_s,
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_product)