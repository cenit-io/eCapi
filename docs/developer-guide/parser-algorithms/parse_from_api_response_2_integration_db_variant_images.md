# Parser algorithm
 
## parse_from_api_response_2_integration_db_variant_images

TODO: Description...
    
### Definition

> **Name:** parse_from_api_response_2_integration_db_variant_images
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
# TODO: Implement a better structure to manage the products and variants images.
source[:Images].select { |img| !img.blank? }.map { |url| { url: url } }
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_variant_images)