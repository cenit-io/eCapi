# Action algorithm:

## do_get_integration_metadata:

Allows submitting a request to the remote integration platform to get its metadata.
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: do_get_integration_metadata
    parameters:
      - name: integration
        required: true
        
      - name: webhook
        required: true
        
```

### Example:
```RUBY
# Get metadata from the remote integration
metadata = begin
  response = webhook.submit!(body: '{}')
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:msg] || response[:error]) if response[:error]

  response
end

metadata
```

### See also:
* [Others actions algorithms](overview?id=do_get_integration_metadata)