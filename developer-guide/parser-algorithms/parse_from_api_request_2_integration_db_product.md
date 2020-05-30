# Parser algorithm
 
## parse_from_api_request_2_integration_db_product

Set the value of each property in the data structure of the product record corresponding to the integration.
    
### Definition

> **Name:** parse_from_api_request_2_integration_db_product
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | di_product | true | OMNAv2::DIProduct \| Ov2Anyone::DIProduct | Contains the record of [DIProduct](../data-types/DIProduct.md) that to be updated |
> | request_data | true | Hash | Contains the data received in the request to the product properties update [service](//doc-api.omna.io/api-spec/#operation/update_integration_product_beta_) |

### Example
```ruby
# Set the value of each property in the data structure of the product record corresponding to the integration.

request_data[:properties].each do |property|
  attr_name = property[:id]
  di_product.data[:attributes][attr_name] = property[:value]
end
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_request_2_integration_db_product)