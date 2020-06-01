# Parser algorithm
 
## parse_from_api_response_2_integration_db_property

It transforms and returns the data of each product property obtained from the platform to be integrated to be stored in 
the intermediate data structure in OMNA.

**Resources related with this parser:**

* Webhook from which the data is obtained: [get_category_attrs](../webhooks/overview.md?id=get_category_attrs).
* Action algorithm that makes the request to the api of the platform to integrate:
  [do_get_properties](../action-algorithms/do_get_properties.md).
* Data type where the transformed data will be stored: [DICategory](../data-types/DICategory.md).
    
### Definition

> **Name:** parse_from_api_response_2_integration_db_property
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | Hash | Contains the data of the product property to be transformed |
>
> **Returns:** A hash, with the same structure as the example shown below, with the data to be saved in the properties attribute on the record of [DICategory](../data-types/DICategory.md).

### Example
```ruby
{
  property_id: source[:name],
  name: source[:name],
  label: source[:label],
  input_type: source[:input_type].underscore.to_sym,
  required: source[:is_mandatory] == 1,
  options: source[:options].collect { |o| o[:name] },
  source: source[:attribute_type] == 'sku' ? 'variant' : 'product'
}
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_property)