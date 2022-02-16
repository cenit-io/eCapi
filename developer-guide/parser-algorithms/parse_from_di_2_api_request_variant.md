# Parser algorithm
 
## parse_from_di_2_api_request_variant

Transforms and returns the data of a product variant from its intermediate data structure in core to be send the
the remote platform to be integrated.

**Resources related with this parser:**

* Data type corresponding to the source of the product variant to be transformed: [DIVariant](../data-types/DIVariant.md).
* Action algorithm that performs and processes the submit of the data:
  [do_create_variant](../action-algorithms/do_create_variant.md) or [do_update_variant](../action-algorithms/do_update_variant.md).
* Webhook through which data is sent: [create_variant](../webhooks/overview.md?id=create_variant) or [update_variant](../webhooks/overview.md?id=update_variant).

    
### Definition

> **Name:** parse_from_di_2_api_request_variant
> 
> **Namespace:** eCwAnyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the product variant to be transformed. In the field di_product_data you will find the data of its updated product in core. |
> | integration | true | eCore::Integration | Contains the integration record |
> | is_new_target | true | Boolean | Contains true if target will be a new record |
>
> **Returns:** A hash with transformed data to be send to the remote platform to be integrated.

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_di_2_api_request_variant&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=eCw)
* [Others parser algorithms](overview?id=parse_from_di_2_api_request_variant)