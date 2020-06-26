# Parser algorithm
 
## parse_from_integration_db_2_ecapi_response_product_properties

Build and returns the property lists to conform the details of a product in an integration.

**Resources related with this parser:**

* OMNA API service to get product details: [Retrieve a Product](//https://doc-api.omna.io/api-spec/index.html#operation/get_product_beta_).
* Data type that stores the product details for an integration: [DIProduct](../data-types/DIProduct.md).
* Data type that stores the product properties definition: [DICategory](../data-types/DICategory.md).
    
### Definition

> **Name:** parse_from_integration_db_2_ecapi_response_product_properties
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | di_product | true | OMNAv2::DIProduct \| Ov2Anyone::DIProduct | Contains the [DIProduct](../data-types/DIProduct.md) record from which you will get the property values. |
> | category_properties_definition | true | Array | Contains the definition of properties for a product category ([DICategory](../data-types/DICategory.md) |
>
> **Returns:** The definition of the property list with its corresponding values ​​for the details of a product.

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_integration_db_2_ecapi_response_product_properties&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others parser algorithms](overview?id=parse_from_integration_db_2_ecapi_response_product_properties)