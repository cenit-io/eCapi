# Action algorithm

## do_export_order_create

Allows submitting a request to the remote integration platform to create an order.

**You have to returns**: A hash with the order data created on the remote platform.

The parameter **data** is obtained from the result of parsing the registration of the order with 
this [parser](../parser-algorithms/parse_from_omna_db_2_api_request_order.md).
    
### Definition

> **Name:** do_export_order_create
> 
> **Namespace:** Ov2Shopify
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | data | true | Hash |
> | integration | true | OMNAv2::Integration |
> | webhook | true | Setup::PlainWebhook |
> | task | true | Setup::AlgorithmExecution |

### Example
```ruby
# Put order to the remote integration
order = begin
  response = webhook.submit!(body: { 'order' => data }.to_json)
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:errors]) if response[:errors]

  response[:order]
end

order
```

### See also
* [Others action algorithms](overview?id=do_export_order_create)