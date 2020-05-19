# Action algorithm:

## do_export_order_create:

Allows submitting a request to the remote integration platform to create an order.
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: do_export_order_create
    parameters:
      - name: data
        required: true
        
      - name: target_integration
        required: true
        
      - name: webhook
        required: true
        
      - name: task
        required: true
        
```

### Example:
```RUBY
# Put order to the remote integration
order = begin
  response = webhook.submit!(body: { 'order' => data }.to_json)
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:errors]) if response[:errors]

  response[:order]
end

# Returns data to create order exported record.
{ exported_id: order[:id], exported_number: order[:order_number] }
```

### See also:
* [Others actions algorithms](overview?id=do_export_order_create)