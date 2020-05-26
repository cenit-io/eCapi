# Action algorithm

## do_export_order_update

Allows submitting a request to the remote integration platform to update an order.
    
### Definition

> **Name:** do_export_order_update
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
> | order_exported | true | Hash |
> | task | true | Setup::AlgorithmExecution |

### Example
```ruby
# Update an order in the remote integration

order = begin
  data = { 'order' => data }
  tps = { 'order_id' => order_exported[:id] }

  response = webhook.submit!(body: data.to_json, template_parameters: tps)
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:errors]) if response[:errors]

  response[:order]
end

order
```

### See also
* [Others action algorithms](overview?id=do_export_order_update)