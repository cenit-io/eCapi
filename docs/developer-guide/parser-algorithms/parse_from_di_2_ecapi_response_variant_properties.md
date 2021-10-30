# Parser algorithm
 
## parse_from_di_2_ecapi_response_variant_properties

Build and returns the property lists to conform the details of a product variant in an integration.

**Resources related with this parser:**

* OMNA API service to get product variant details: [Retrieve a Product Variant](/eCapi/api-spec/index.html#operation/get_variant_beta_).
* Data type that stores the product variant details for an integration: [DIVariant](../data-types/DIVariant.md).
* Data type that stores the product variant properties definition: [DICategory](../data-types/DICategory.md).
    
### Definition

> **Name:** parse_from_di_2_ecapi_response_variant_properties
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | di_variant | true | OMNAv2::DIVariant \| Ov2Anyone::DIVariant | Contains the [DIVariant](../data-types/DIVariant.md) record from which you will get the property values. |
> | category_properties_definition | true | Array | Contains the definition of properties for a variant category ([DICategory](../data-types/DICategory.md) |
>
> **Returns:** The definition of the property list with its corresponding values ​​for the details of a variant.

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_di_2_ecapi_response_variant_properties&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others parser algorithms](overview?id=parse_from_di_2_ecapi_response_variant_properties)