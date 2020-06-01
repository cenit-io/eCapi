# Parser algorithm
 
## parse_from_integration_db_2_omna_db_order_address

TODO: Description...
    
### Definition

> **Name:** parse_from_integration_db_2_omna_db_order_address
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
source ||= {}
{
  first_name: source[:first_name],
  last_name: source[:last_name],
  country: source[:country],
  state: source[:address3],
  city: [source[:city], source[:address4]].compact.join(', '),
  phone: [source[:phone], source[:phone]].compact.join(', '),
  zip_code: source[:post_code],
  address: [source[:address1], source[:address5]].compact
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_order_address)