# Parser algorithm:
 
## parse_from_integration_db_2_omna_db_order_address:

TODO: Description...
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: parse_from_integration_db_2_omna_db_order_address
    parameters:
      - name: source
        required: true
        
```

### Example:
```RUBY
source ||= {}

{
  first_name: source[:first_name],
  last_name: source[:last_name],
  country: source[:country],
  state: source[:province],
  city: source[:city],
  phone: [source[:phone], source[:phone]].compact.join(', '),
  zip_code: source[:zip],
  address: source[:address1]
}
```

### See also:
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_order_address)