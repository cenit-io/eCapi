# Helper algorithm:

## h_do_require_variant:

Search and returns a product variant by its id in omna or by its id in the remote platform to be integrate.

If only the product variant id (1st parameter) is provided, then the search is performed in the product variant registers of OMNA.
[ [See in Cenit-IO](https://cenit.io/json_data_type?f[namespace][24075][v]&#x3D;OMNAv2&amp;f[name][24160][o]&#x3D;is&amp;f[name][24160][v]&#x3D;Variant&quot;) ]

If the 2 parameters are provided, they are assumed to be (remote_variant_id and integration_id) and the search is 
carried out in the product variant registers on the intermediate structure used for this purpose.
[ [See here](../data-types/Variant.md) ]

If some of the resources are not found an exception is thrown.
    
### Definition:

> **Name:** h_do_require_variant
> 
> **Namespace:** OMNAv2
>
> **Parameters:**
> 
> | Name | Required | Description |
> | --- | --- | --- |
> | variant_id | true | ... |
> | product_id | false | ... |
> | integration_id | false | ... |

### See also:
* [Others helper algorithms](overview?id=h_do_require_variant)