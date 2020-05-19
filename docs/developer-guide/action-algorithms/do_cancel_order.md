# Action algorithm:

## do_cancel_order:

Allows submitting a request to the remote integration platform to cancel an order.
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: do_cancel_order
    parameters:
      - name: order
        required: true
        
      - name: webhook
        required: true
        
      - name: task
        required: true
        
```

### Example:
```RUBY
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
```

### See also:
* [Others actions algorithms](overview?id=do_cancel_order)