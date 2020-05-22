# Parser algorithm:
 
## parse_from_api_response_2_integration_db_brand:

TODO: Description...
    
### Definition:

> **Name:** parse_from_api_response_2_integration_db_brand
> 
> **Namespace:** Ov2Lazada
>
> **Parameters:**
> 
> | Name | Required | Description |
> | --- | --- | --- |
> | source | true | ... |

### Example:
```RUBY
{
  id: source[:brand_id],
  name: source[:name],
  name_en: source[:name_en]
}
```

### See also:
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_brand)