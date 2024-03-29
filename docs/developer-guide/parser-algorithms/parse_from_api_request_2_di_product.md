# Parser algorithm
 
## parse_from_api_request_2_di_product

It transforms and sets the data of the product properties, received from the **eCAPI service** be stored in 
the intermediate data structure in core.

**Resources related with this parser:**

* eCAPI service to update the specific properties of a product: [Update Product Properties](//cenit-io.github.io/eCapi/api-spec/index.html#operation/update_integration_product_beta_).
* Data type where the transformed data will be stored: [DIProduct](../data-types/DIProduct.md).
    
### Definition

> **Name:** parse_from_api_request_2_di_product
> 
> **Namespace:** eCwAnyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | di_product | true | eCore::DIProduct \| eCwAnyone::DIProduct | Contains the record of [DIProduct](../data-types/DIProduct.md) that to be updated |
> | request_data | true | Hash | Contains the data received in the request to the product properties update [service](//cenit-io.github.io/eCapi/api-spec/#operation/update_integration_product_beta_) |

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_api_request_2_di_product&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=eCw)
* [Others parser algorithms](overview?id=parse_from_api_request_2_di_product)