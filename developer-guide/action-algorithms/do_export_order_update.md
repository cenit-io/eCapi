# Action algorithm

## do_export_order_update

Allows submitting a request to the remote integration platform to update an order.
    
### Definition

> **Name:** do_export_order_update
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | data | true | Hash | Is obtained from this [parser](../parser-algorithms/parse_from_omna_db_2_api_request_order.md). |
> | integration | true | OMNAv2::Integration | - |
> | webhook | true | Setup::PlainWebhook | Contains the [update_order](../webhooks/overview?id=update_order) webhook |
> | order_exported | true | Hash | - |
> | task | true | Setup::AlgorithmExecution | - |
>
> **Returns:** A **Hash** with the order data updated on the remote platform.

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