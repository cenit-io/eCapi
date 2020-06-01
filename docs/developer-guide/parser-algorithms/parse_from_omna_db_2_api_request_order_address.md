# Parser algorithm
 
## parse_from_omna_db_2_api_request_order_address

Transforms and returns the data of shipping and billing address of an order registered in OMNA to be exported 
to the remote platform to be integrated.

**Resources related with this parser:**

* Parser: [parse_from_omna_db_2_api_request_order](../parser-algorithms/parse_from_omna_db_2_api_request_order.md).

    
### Definition

> **Name:** parse_from_omna_db_2_api_request_order_address
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the address to be transformed |
>
> **Returns:** A hash with the transformed address.

### Example
```ruby
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

### See also
* [Others parser algorithms](overview?id=parse_from_omna_db_2_api_request_order_address)