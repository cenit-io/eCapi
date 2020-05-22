# Parser algorithm
 
## parse_from_api_response_2_integration_db_product_images

TODO: Description...
    
### Definition

> **Name:** parse_from_api_response_2_integration_db_product_images
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
source[:images].select.map { |imag| { url: imag[:src] } }
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_product_images)