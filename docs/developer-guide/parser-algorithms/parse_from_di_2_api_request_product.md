# Parser algorithm
 
## parse_from_di_2_api_request_product

Transforms and returns the data of a product from its intermediate data structure in core to be send the
the remote platform to be integrated.

**Resources related with this parser:**

* Data type corresponding to the source of the product to be transformed: [DIProduct](../data-types/DIProduct.md).
* Action algorithm that performs and processes the submit of the data:
  [do_create_product](../action-algorithms/do_create_product.md) or [do_update_product](../action-algorithms/do_update_product.md).
* Webhook through which data is sent: [create_product](../webhooks/overview.md?id=create_product) or [update_product](../webhooks/overview.md?id=update_product).

    
### Definition

> **Name:** parse_from_di_2_api_request_product
> 
> **Namespace:** eCwAnyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the product to be transformed. In the field di_variants_data you will find the data of its updated variants in core. |
> | integration | true | eCore::Integration | Contains the integration record |
> | is_new_target | true | Boolean | Contains true if target will be a new record |
>
> **Returns:** A hash with transformed data to be send to the remote platform to be integrated.

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_di_2_api_request_product&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=eCw)
* [Others parser algorithms](overview?id=parse_from_di_2_api_request_product)