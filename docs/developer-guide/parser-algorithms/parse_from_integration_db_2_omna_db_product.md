# Parser algorithm
 
## parse_from_integration_db_2_omna_db_product

TODO: Description...
    
### Definition

> **Name:** parse_from_integration_db_2_omna_db_product
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | - | - |

### Example
```ruby
# Mapping product from db record of Shopify channel to OMNAv2.

parse_package_weight = Cenit.namespace(:OMNAv2).algorithm(:parse_from_integration_db_2_omna_db_package_weight)

data = source[:data]

min_sku = data[:variants].min_by { |v| v[:price] }

{
  name: data[:title],
  description: data[:body_html],
  price: min_sku[:price],
  package: {
    weight: parse_package_weight.run([min_sku[:weight], min_sku[:weight_unit]]),
    # height:   WITHOUT-SUPPORT-IN-THIS-INTEGRATION,
    # length:   WITHOUT-SUPPORT-IN-THIS-INTEGRATION,
    # width:    WITHOUT-SUPPORT-IN-THIS-INTEGRATION,
    # content:  WITHOUT-SUPPORT-IN-THIS-INTEGRATION
  }
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_product)