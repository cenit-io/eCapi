# Parser algorithm
 
## parse_from_integration_db_2_omna_db_variant

TODO: Description...
    
### Definition

> **Name:** parse_from_integration_db_2_omna_db_variant
> 
> **Namespace:** Ov2Shopee
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | source | true |  |

### Example
```ruby
# Mapping variant from db record of Shopify channel to OMNAv2.

parse_package_weight = Cenit.namespace(:OMNAv2).algorithm(:parse_from_integration_db_2_omna_db_package_weight)

data = source[:data]

{
  sku: data[:sku],
  price: data[:price],
  original_price: data[:compare_at_price] || data[:price],
  quantity: data[:inventory_quantity],
  package: {
    weight: parse_package_weight.run([data[:weight], data[:weight_unit]]),
    # height:   WITHOUT-SUPPORT-IN-THIS-INTEGRATION,
    # length:   WITHOUT-SUPPORT-IN-THIS-INTEGRATION,
    # width:    WITHOUT-SUPPORT-IN-THIS-INTEGRATION,
    # content:  WITHOUT-SUPPORT-IN-THIS-INTEGRATION
  }
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_variant)