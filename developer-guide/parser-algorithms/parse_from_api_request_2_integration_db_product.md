# Parser algorithm
 
## parse_from_api_request_2_integration_db_product

It transforms and sets the data of the product properties, received from the **OMNA API service** be stored in 
the intermediate data structure in OMNA.

**Resources related with this parser:**

* OMNA API service to update the specific properties of a product: [Update Product Properties](//doc-api.omna.io/api-spec/index.html#operation/update_integration_product_beta_).
* Data type where the transformed data will be stored: [DIProduct](../data-types/DIProduct.md).
    
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
  key = property[:id]
  value = property[:value]

  case key.to_sym
  when :category_id
    invalid = di_product.data[:primary_category].present? && di_product.data[:primary_category].to_s != value.to_s
    Cenit.fail('[400] - The category property cannot be updated in Ov2Anyone integrations.') if invalid
    di_product.data[:primary_category] = di_product.category_id = value.to_i
  else
    di_product.data[:attributes] ||= []
    di_product.data[:attributes][key] = value
  end
end
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_request_2_integration_db_product)