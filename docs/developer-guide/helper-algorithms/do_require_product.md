# Helper algorithm

## do_require_product

Search and returns a product by its id in omna or by its id in the remote platform to be integrate.

If only the product id (1st parameter) is provided, then the search is performed in the product registers of OMNA.
[ [See in Cenit-IO](https://cenit.io/json_data_type?f[namespace][24075][v]&#x3D;OMNAv2&amp;f[name][24160][o]&#x3D;is&amp;f[name][24160][v]&#x3D;Product&quot;) ]

If the 2 parameters are provided, they are assumed to be (remote_product_id and integration_id) and the search is 
carried out in the product registers on the intermediate structure used for this purpose.
[ [See here](../data-types/Product.md) ]

If some of the resources are not found an exception is thrown.
    
### Definition

> **Name:** do_require_product
> 
> **Namespace:** OMNAv2
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | product_id | true | String | Contains the product id or remote id |
> | integration_id | false | OMNAv2::Integration \| String | Contains the integration record o id |
>
> **Returns:** The a record of OMNAv2::Product or Ov2Anyone::Product if the parameter integration_id is given.

### See also
* [Others helper algorithms](overview?id=do_require_product)