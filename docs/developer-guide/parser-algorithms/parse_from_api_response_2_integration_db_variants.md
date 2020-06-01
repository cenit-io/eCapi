# Parser algorithm
 
## parse_from_api_response_2_integration_db_variants

It transforms and returns the data of each product variant obtained from the platform to be integrated to be stored in 
the intermediate data structure in OMNA.

**Resources related with this parser:**

* Webhook from which the data is obtained: [get_products](../webhooks/overview.md?id=get_products).
* Action algorithms that makes the request to the api of the platform to integrate:
  [do_get_products](../action-algorithms/do_get_products.md) or [do_get_product](../action-algorithms/do_get_product.md)
* Data type where the transformed data will be stored: [DIVariant](../data-types/DIVariant.md)
    
### Definition

> **Name:** parse_from_api_response_2_integration_db_variants
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the product variant to be transformed |
>
> **Returns:** A array of hash with the data to be saved in a record of [DIVariant](../data-types/DIVariant.md)

### Example
```ruby
source[:skus].map do |variant|
  {
    remote_variant_id: variant[:SkuId],
    sku: variant[:SellerSku],
    data: variant.dup
  }
end
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_variants)