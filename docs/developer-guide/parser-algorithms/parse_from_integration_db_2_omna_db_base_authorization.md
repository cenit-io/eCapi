# Parser algorithm:
 
## parse_from_integration_db_2_omna_db_base_authorization:

TODO: Description...
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: parse_from_integration_db_2_omna_db_base_authorization
    parameters:
      - name: integration
        required: true
        
      - name: base_authorization
        required: true
        
```

### Example:
```RUBY
# Mapping authorization from Shopify integration db record and authorization base of the integration channel.

{
  template_parameters: [{ key: 'shop', value: integration.name }]
}
```

### See also:
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_base_authorization)