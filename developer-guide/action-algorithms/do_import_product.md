# Action algorithm:

## do_import_product:

Allows submitting a request to the remote integration platform to get and import an product.
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: do_import_product
    parameters:
      - name: integration
        required: true
        
      - name: product_id
        required: true
        
      - name: webhook
        required: true
        
      - name: task
        required: true
        
```

### Example:
```RUBY
# Get product from integration
data = { item_id: product_id.to_i }
response = webhook.submit!(body: data.to_json)
response = JSON.parse(response, symbolize_names: true)

Cenit.fail(response[:msg] || response[:error]) if response[:error]

response[:item]
```

### See also:
* [Others action algorithms](overview?id=do_import_product)