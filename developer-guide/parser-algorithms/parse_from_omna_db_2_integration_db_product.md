# Parser algorithm
 
## parse_from_omna_db_2_integration_db_product

TODO: Description...
    
### Definition

> **Name:** parse_from_omna_db_2_integration_db_product
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
# Mapping product from db record of OMNAv2.

product_in_omna = source
{
  attributes: {
    name: product_in_omna[:name],
    description: product_in_omna[:description]
  }
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_omna_db_2_integration_db_product)