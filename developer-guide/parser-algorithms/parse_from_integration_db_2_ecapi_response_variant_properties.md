# Parser algorithm
 
## parse_from_integration_db_2_ecapi_response_variant_properties

Build and returns the property lists to conform the details of a product variant in an integration.
    
### Definition

> **Name:** parse_from_integration_db_2_ecapi_response_variant_properties
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | di_variant | true | OMNAv2::DIVariant \| Ov2Anyone::DIVariant | Contains the [DIVariant](../data-types/DIVariant.md) record from which you will get the property values. |
> | properties_definition | true | Array | Contains the definition of properties for a variant category ([DICategory](../data-types/DICategory.md) |
>
> **Returns:** The definition of the property list with its corresponding values ​​for the details of a variant.

### Example
```ruby
properties_definition.map do |property|
  {
    id: property.property_id,
    label: property.label,
    required: property.required,
    read_only: false,
    input_type: property.input_type,
    options: property.options,
    value: variant.data[property.name]
  }
end
```

### See also
* [Others parser algorithms](overview?id=parse_from_integration_db_2_ecapi_response_variant_properties)