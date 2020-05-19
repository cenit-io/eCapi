# Action algorithm:

## do_import_categories:

Allows submitting a request to the remote integration platform to get and import the product categories.
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: do_import_categories
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
# Get categories from the remote integration
categories = begin
  response = webhook.submit!
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:message]) if response[:code].to_i != 0

  response[:data]
end

categories
```

### See also:
* [Others actions algorithms](overview?id=do_import_categories)