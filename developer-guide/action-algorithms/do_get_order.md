# Action algorithm

## do_get_order

Allows submitting a request to the remote integration platform to get an order.
    
### Definition

> **Name:** do_get_order
> 
> **Namespace:** Ov2Lazada
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | integration | true | OMNAv2::Integration |
> | number | true |  |
> | webhook | true | Setup::PlainWebhook |
> | task | true | Setup::AlgorithmExecution |

### Example
```ruby
# Get order from integration
order = begin
  data = { ordersn_list: [number] }
  response = webhook.with(conn).and(auth).submit!(body: data.to_json)
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:msg] || response[:error]) if response[:error]

  response[:orders].first
end

order
```

### See also
* [Others action algorithms](overview?id=do_get_order)