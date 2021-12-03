# Helper algorithm

## do_require_product

Search and returns a product by its id in omna or by its id in the remote platform to be integrate.

If only the product id (1st parameter) is provided, then the search is performed in the product registers of OMNA.
[ [See in Cenit-IO](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Product) ]

If the 2 parameters are provided, they are assumed to be (remote_product_id and integration_id) and the search is 
carried out in the product registers on the intermediate structure used for this purpose.
[ [See here](../data-types/IntegrationProduct.md) ]

If some of the resources are not found an exception is thrown.
    
### Definition

> **Name:** do_require_product
> 
> **Namespace:** eCore
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | product_id | true | String | Contains the product id or remote id |
> | integration_id | false | eCore::Integration \| String | Contains the integration record o id |
>
> **Returns:** The a record of eCore::Product or Ov2Anyone::Product if the parameter integration_id is given.

### See also
* [This algorithm in Cenit-IO](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_require_product&f[namespace][40840][v]=eCore)
* [Others helper algorithms](overview?id=do_require_product)