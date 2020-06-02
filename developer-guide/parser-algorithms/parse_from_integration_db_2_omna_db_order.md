# Parser algorithm
 
## parse_from_integration_db_2_omna_db_order

Transforms and returns the data of an order from its intermediate data structure in OMNA to be stored 
in the general data structure of orders in OMNA.

**Resources related with this parser:**

* Data type corresponding to the source of the order to be transformed: [DIOrder](../data-types/DIOrder.md).
* Data type where the transformed data will be stored: [OMNAv2::Order](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Order).
    
### Definition

> **Name:** parse_from_integration_db_2_omna_db_order
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the order to be transformed |
>
> **Returns:** A hash with transformed data to ve stored in [OMNAv2::Order](https://cenit.io/json_data_type?f[namespace][24075][v]&#x3D;OMNAv2&amp;f[name][24160][o]&#x3D;is&amp;f[name][24160][v]&#x3D;Order).

### Example
```ruby
# Mapping order data from db record of DIOrder to OMNAv2::Order.

data = source[:data]

ns_lazada = Cenit.namespace(:Ov2Anyone)
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
    customer_id: data[:customer_id],
    first_name: data[:customer_first_name],
    last_name: data[:customer_last_name]
  },

  created_date: DateTime.parse(data[:created_at]).iso8601,
  updated_date: DateTime.parse(data[:updated_at]).iso8601
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_order)