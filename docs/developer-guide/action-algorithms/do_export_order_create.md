# Action algorithm

## do_export_order_create

Allows submitting a request to the remote integration platform to create an order.
    
### Definition

> **Name:** do_export_order_create
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | data | true | Hash | Contains the data to be export. This is obtained from this [parser](../parser-algorithms/parse_from_omna_db_2_api_request_order.md). |
> | integration | true | OMNAv2::Integration | Contains integration record |
> | webhook | true | Setup::PlainWebhook | Contains the [create_order](../webhooks/overview?id=create_order) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task. |
>
> **Returns:** A **Hash** with the order data created on the remote platform.

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