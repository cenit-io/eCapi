# Parser algorithm
 
## parse_from_omna_db_2_api_request_order

Transforms and returns the data of an order registered in OMNA to be exported to the remote platform to be integrated.

**Resources related with this parser:**

* Data type corresponding to the source of the order to be transformed: 
  [OMNAv2::Order](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Order).
* Action algorithm to export the order: 
  [do_export_order_create](../action-algorithms/do_export_order_create.md) or 
  [do_export_order_update](../action-algorithms/do_export_order_update.md).
* Webhook to export the order:
  [create_order](../webhooks/overview?id=create_order) or 
  [update_order](../webhooks/overview?id=update_order).

    
### Definition

> **Name:** parse_from_omna_db_2_api_request_order
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the hash record of the [OMNAv2::Order](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Order) to be transformed |
>
> **Returns:** The hash with the data to be exported.

### Example
```ruby
# Mapping of an record of order of OMNAv2 for to be use in an API request for an integration of this channel.

ns_omna = Cenit.namespace(:OMNAv2)
do_require_algorithm = ns_omna.algorithm(:do_require_algorithm)

parse_address = do_require_algorithm.run([source[:integration][:id], :parse_from_omna_db_2_api_request_order_address])
parse_line_items = do_require_algorithm.run([source[:integration][:id], :parse_from_omna_db_2_api_request_order_line_items])

{
  shipping_address: parse_address.run([source[:ship_address]]),
  billing_address: parse_address.run([source[:bill_address]]),
  created_at: source[:created_date],
  processed_at: source[:created_date],
  currency: source[:currency],
  tags: source[:integration][:channel],
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

### See also
* [Others parser algorithms](overview?id=parse_from_omna_db_2_api_request_order)