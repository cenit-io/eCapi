# Parser algorithm
 
## parse_from_api_request_2_integration_db_variant

Set the value of each property in the data structure of the variant record corresponding to the integration.
    
### Definition

> **Name:** parse_from_api_request_2_integration_db_variant
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | di_variant | true | OMNAv2::DIVariant \| Ov2Anyone::DIVariant | Contains the record of [DIVariant](../data-types/DIVariant.md) that to be updated |
> | request_data | true | Hash | Contains the data received in the request to the variant properties update [service](//doc-api.omna.io/api-spec/#operation/update_integration_variant_beta_) |

### Example
```ruby
# Set the value of each property in the data structure of the variant record corresponding to the integration.

request_data[:properties].each do |property|
  key = property[:id]
  value = property[:value]

  di_variant.data[key] = value
end
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_request_2_integration_db_variant)