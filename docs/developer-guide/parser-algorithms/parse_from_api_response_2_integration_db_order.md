# Parser algorithm:
 
## parse_from_api_response_2_integration_db_order:

TODO: Description...
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: parse_from_api_response_2_integration_db_order
    parameters:
      - name: source
        required: true
        
```

### Example:
```RUBY
state = begin
  if source[:cancelled_at].present?
    'cancelled'
  elsif source[:closed_at].present?
    'closed'
  else
    'open'
  end
end

{
  number: source[:order_number],
  status: state
}
```

### See also:
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_order)