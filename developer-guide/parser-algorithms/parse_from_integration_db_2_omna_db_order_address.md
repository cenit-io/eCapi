# Parser algorithm
 
## parse_from_integration_db_2_omna_db_order_address

Transforms and returns the data of shipping and billing address of an order from its intermediate data structure in OMNA to be stored 
in the general data structure of orders in OMNA.

**Resources related with this parser:**

* Data type corresponding to the source of the order to be transformed: [DIOrder](../data-types/DIOrder.md).
* Data type where the transformed data will be stored: [OMNAv2::Order](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Order).
    
### Definition

> **Name:** parse_from_integration_db_2_omna_db_order_address
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the address to be transformed |

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