# Helper algorithm

## do_require_variant

Search and returns a product variant by its id in omna or by its id in the remote platform to be integrate.

If only the product variant id (1st parameter) is provided, then the search is performed in the product variant registers of OMNA.
[ [See in Cenit-IO](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Variant) ]

If the 2 parameters are provided, they are assumed to be (remote_variant_id and integration_id) and the search is 
carried out in the product variant registers on the intermediate structure used for this purpose.
[ [See here](../data-types/IntegrationVariant.md) ]

If some of the resources are not found an exception is thrown.
    
### Definition

> **Name:** do_require_variant
> 
> **Namespace:** OMNAv2
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | variant_id | true | String | Contains the variant id or remote id |
> | product_id | true | String | Contains the product id or remote id |
> | integration_id | false | OMNAv2::Integration \| String | Contains the integration record o id |
>
> **Returns:** The a record of OMNAv2::Variant or Ov2Anyone::Variant if the parameter integration_id is given.

### See also
* [This algorithm in Cenit-IO](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_require_variant&f[namespace][40840][v]=OMNAv2)
* [Others helper algorithms](overview?id=do_require_variant)