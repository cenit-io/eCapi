# Action algorithm

## do_cancel_order

Allows submitting a request to the remote integration platform to cancel an order.
    
### Definition

> **Name:** do_cancel_order
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | order | true | OMNAv2::Order | Contains the record of the order to be canceled |
> | webhook | true | Setup::PlainWebhook | Contains the [cancel_order](../webhooks/overview?id=cancel_order) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task. |

### Example
```ruby
# Cancel the order in the remote integration
data = {
  ordersn: order.number,
  cancel_reason: 'OUT_OF_STOCK',
  item_id: order.line_items[0].id.to_i,
  variation_id: order.line_items[0].variation_id.to_i
}

response = webhook.submit!(body: data.to_json)
response = JSON.parse(response, symbolize_names: true)

Cenit.fail(response[:error]) if response[:error]

true
```

### See also
* [Others action algorithms](overview?id=do_cancel_order)