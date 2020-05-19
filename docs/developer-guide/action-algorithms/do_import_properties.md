# Action algorithm:

## do_import_properties:

Allows submitting a request to the remote integration platform to get and import the product properties.
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: do_import_properties
    parameters:
      - name: integration
        required: true
        
      - name: category
        required: true
        
      - name: webhook
        required: true
        
```

### Example:
```RUBY
# Get categories attrs from the remote integration
properties = begin
  data = { 'category_id' => category.id }

  response = webhook.submit!(body: data.to_json)
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:msg] || response[:error]) if response[:error]

  response[:attributes]
end

properties
```

### See also:
* [Others actions algorithms](overview?id=do_import_properties)