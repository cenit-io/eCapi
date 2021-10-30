# Parser algorithm
 
## parse_from_api_request_2_di_variant

It transforms and sets the data of the product variant properties, received from the **OMNA API service** be stored in 
the intermediate data structure in OMNA.

**Resources related with this parser:**

* OMNA API service to update the specific properties of a product variant: [Update Variant Properties](/eCapi/api-spec/index.html#operation/update_integration_variant_beta_).
* Data type where the transformed data will be stored: [DIVariant](../data-types/DIVariant.md).
    
### Definition

> **Name:** parse_from_api_request_2_di_variant
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | di_variant | true | OMNAv2::DIVariant \| Ov2Anyone::DIVariant | Contains the record of [DIVariant](../data-types/DIVariant.md) that to be updated |
> | request_data | true | Hash | Contains the data received in the request to the variant properties update [service](/eCapi/api-spec/#operation/update_integration_variant_beta_) |

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_api_request_2_di_variant&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others parser algorithms](overview?id=parse_from_api_request_2_di_variant)