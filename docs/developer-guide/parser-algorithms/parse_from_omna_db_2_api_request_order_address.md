# Parser algorithm:
 
## parse_from_omna_db_2_api_request_order_address:

TODO: Description...
    
### Definition:

> **Name:** parse_from_omna_db_2_api_request_order_address
> 
> **Namespace:** Ov2Shopify
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | source | true | ... |

### Example:
```RUBY
source ||= {}
last = '-' if source[:last_name].nil? || source[:last_name] == ''
{
  first_name: source[:first_name],
  last_name: last,
  country: source[:country],
  province: source[:state],
  city: source[:city].split(",")[0],
  phone: "+#{source[:phone].split(",")[0]}",
  zip: source[:zip_code],
  address1: "#{source[:address][0]} #{source[:address][1]}",
}
```

### See also:
* [Others parser algorithms](overview?id=parse_from_omna_db_2_api_request_order_address)