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
# Mapping order from db record of Shopify channel to OMNAv2.

data = source[:data]
ns_sopify = Cenit.namespace(:Ov2Anyone)
parse_line_items = ns_sopify.algorithm(:parse_from_integration_db_2_omna_db_order_line_items)
parse_address = ns_sopify.algorithm(:parse_from_integration_db_2_omna_db_order_address)
line_items = parse_line_items.run([data])

{
  remote_order_id: data[:id],
  number: data[:order_number],
  total_price: data[:total_price],
  currency: data[:currency],
  total_quantity: line_items.sum { |li| li[:quantity] },
  status: source[:status] || '',

  payments: line_items.map do |li|
    {
      method: data[:payment_gateway_names][0],
      amount: li[:price],
      currency: li[:currency],
    }
  end,

  ship_address: parse_address.run([data[:shipping_address]]),
  bill_address: parse_address.run([data[:billing_address]]),

  line_items: line_items,

  customer: data[:customer].try { |customer| { first_name: customer[:first_name], last_name: customer[:last_name] } },

  created_date: DateTime.parse(data[:created_at]).iso8601,
  updated_date: DateTime.parse(data[:updated_at]).iso8601
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_order)