# Parser algorithm:
 
## parse_from_omna_db_2_api_request_order:

TODO: Description...
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: parse_from_omna_db_2_api_request_order
    parameters:
      - name: source
        required: true
        
```

### Example:
```RUBY
# Mapping of an record of order of OMNAv2 for to be use in an API request for an integration of this channel.

ns_sopify = Cenit.namespace(:Ov2Anyone)
parse_address = ns_sopify.algorithm(:parse_from_omna_db_2_api_request_order_address)
parse_line_items = ns_sopify.algorithm(:parse_from_omna_db_2_api_request_order_line_items)

{
  shipping_address: parse_address.run([source[:ship_address]]),
  billing_address: parse_address.run([source[:bill_address]]),
  created_at: source[:created_date],
  processed_at: source[:created_date],
  currency: source[:currency],
  tags: source[:integration][:channel],
  line_items: parse_line_items.run([source]),
  line_items: parse_line_items.run([source]),
  total_price: source[:total_price],
  processing_method: 'direct',
  taxes_included: true,
  name: source[:number],
  payment_gateway_names: source[:payments].map { |pm| pm[:method] },
  inventory_behaviour: 'decrement_obeying_policy',

  customer: { first_name: source[:customer][:first_name] }
}
```

### See also:
* [Others parser algorithms](overview?id=parse_from_omna_db_2_api_request_order)