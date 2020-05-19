# Action algorithm:

## do_import_brands:

Allows submitting a request to the remote integration platform to get and import the product brands.
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: do_import_brands
    parameters:
      - name: integration
        required: true
        
      - name: webhook
        required: true
        
      - name: task
        required: true
        
```

### Example:
```RUBY
limit = 1000
offset = task.state[:offset] ||= 0

# Get brands from the remote integration
brands = begin
  tps = { 'limit' => limit, 'offset' => offset }

  response = webhook.submit!(template_parameters: tps)
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:message]) if response[:code].to_i != 0

  response[:data]
end

if (items.count == limit)
  task.state[:offset] += limit
  task.state[:import_next_block] = true
end

brands
```

### See also:
* [Others actions algorithms](overview?id=do_import_brands)