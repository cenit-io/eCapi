# Parser algorithm
 
## parse_from_integration_db_2_omna_db_order

TODO: Description...
    
### Definition

> **Name:** parse_from_integration_db_2_omna_db_order
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
# Mapping order from db record of LazadaXX channel to OMNAv2.

data = source[:data]

ns_lazada = Cenit.namespace(:Ov2Lazada)
parse_line_items = ns_lazada.algorithm(:parse_from_integration_db_2_omna_db_order_line_items)
parse_address = ns_lazada.algorithm(:parse_from_integration_db_2_omna_db_order_address)

{
  remote_order_id: data[:order_id],
  number: data[:order_number],
  total_price: data[:price],
  currency: data[:line_items][0][:currency],
  total_quantity: data[:items_count],
  status: data[:statuses].try(:first),

  line_items: line_items = parse_line_items.run([data]),

  payments: line_items.map do |li|
    {
      method: data[:payment_method],
      amount: li[:paid_price],
      currency: li[:currency],
      status: li[:stage_pay_status]
    }
  end,

  ship_address: parse_address.run([data[:address_shipping]]),
  bill_address: parse_address.run([data[:address_billing]]),

  customer: {
    # customer_id: nil,
    first_name: data[:customer_first_name],
    last_name: data[:customer_last_name]
  },

  created_date: DateTime.parse(data[:created_at]).iso8601,
  updated_date: DateTime.parse(data[:updated_at]).iso8601
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_order)