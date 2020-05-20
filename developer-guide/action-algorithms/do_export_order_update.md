# Action algorithm:

## do_export_order_update:

Allows submitting a request to the remote integration platform to update an order.
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: do_export_order_update
    parameters:
      - name: data
        required: true
        
      - name: target_integration
        required: true
        
      - name: webhook
        required: true
        
      - name: order_exported
        required: true
        
      - name: task
        required: true
        
```

### Example:
```RUBY
# Update order in the remote integration
data = { 'order' => data }
tps = { 'order_id' => order_exported.exported_id }

response = webhook.submit!(body: data.to_json, template_parameters: tps)
response = JSON.parse(response, symbolize_names: true)

Cenit.fail(response[:errors]) if response[:errors]

nil
```

### See also:
* [Others actions algorithms](overview?id=do_export_order_update)