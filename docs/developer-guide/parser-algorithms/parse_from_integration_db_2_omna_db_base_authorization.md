# Parser algorithm
 
## parse_from_integration_db_2_omna_db_base_authorization

Returns the custom data, usually the template parameters, that will be used to create the authorization 
associated with the integration.

**Resources related with this parser:**

* Integration data type: [OMNAv2::Integration](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Integration).
* Authorization: [Authorization base template](../developer-guide/authorization).
    
### Definition

> **Name:** parse_from_integration_db_2_omna_db_base_authorization
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | OMNAv2::Integration | Contains the integration record |
> | base_authorization | true | Setup::Authorization | Contains the base authorization used as templates |
>
> **Returns:** A hash with the custom data, usually the template parameters, that will be used to create the authorization associated with the integration.

### Example
```ruby
# Mapping authorization from MercadoLibre integration db record and authorization base of the integration channel.

country = integration.channel[-2, 2]
domains = { CL: 'cl', CR: 'co.cr' }
domain = domains[country.to_sym] || "com.#{country.downcase}"

{
  template_parameters: [
    { key: 'domain', value: domain },
    { key: 'user_id', value: '' },
    { key: 'site_id', value: '' }
  ]
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_base_authorization)