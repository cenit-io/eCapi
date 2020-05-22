# Parser algorithm:
 
## parse_from_omna_db_2_integration_db_product:

TODO: Description...
    
### Definition:

> **Name:** parse_from_omna_db_2_integration_db_product
> 
> **Namespace:** Ov2Shopee
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | source | true | ... |

### Example:
```RUBY
# Mapping product from db record of OMNAv2.

product_in_omna = source
{
  title: product_in_omna[:name],
  body_html: product_in_omna[:description]
}
```

### See also:
* [Others parser algorithms](overview?id=parse_from_omna_db_2_integration_db_product)