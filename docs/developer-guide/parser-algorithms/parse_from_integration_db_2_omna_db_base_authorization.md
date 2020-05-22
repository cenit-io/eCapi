# Parser algorithm:
 
## parse_from_integration_db_2_omna_db_base_authorization:

TODO: Description...
    
### Definition:

> **Name:** parse_from_integration_db_2_omna_db_base_authorization
> 
> **Namespace:** Ov2Shopify
>
> **Parameters:**
> 
> | Name | Required | Description |
> | --- | --- | --- |
> | integration | true | ... |
> | base_authorization | true | ... |

### Example:
```RUBY
# Mapping authorization from Shopify integration db record and authorization base of the integration channel.

{
  template_parameters: [{ key: 'shop', value: integration.name }]
}
```

### See also:
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_base_authorization)