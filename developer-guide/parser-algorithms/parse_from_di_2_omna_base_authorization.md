# Parser algorithm
 
## parse_from_di_2_core_base_authorization

Returns the custom data, usually the template parameters, that will be used to create the authorization 
associated with the integration.

**Resources related with this parser:**

* Integration data type: [eCore::Integration](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Integration).
* Authorization: [Authorization base template](../developer-guide/authorization).
    
### Definition

> **Name:** parse_from_di_2_core_base_authorization
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | eCore::Integration | Contains the integration record |
> | base_authorization | true | Setup::Authorization | Contains the base authorization used as templates |
>
> **Returns:** A hash with the custom data, usually the template parameters, that will be used to create the authorization associated with the integration.

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=parse_from_di_2_core_base_authorization&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others parser algorithms](overview?id=parse_from_di_2_core_base_authorization)