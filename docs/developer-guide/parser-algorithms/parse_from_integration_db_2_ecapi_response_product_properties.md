# Parser algorithm
 
## parse_from_integration_db_2_ecapi_response_product_properties

Build and returns the property lists to conform the details of a product in an integration.

**Resources related with this parser:**

* OMNA API service to get product details: [Retrieve a Product](//https://doc-api.omna.io/api-spec/index.html#operation/get_product_beta_).
* Data type that stores the product details for an integration: [DIProduct](../data-types/DIProduct.md).
* Data type that stores the product properties definition: [DICategory](../data-types/DICategory.md).
    
### Definition

> **Name:** parse_from_integration_db_2_ecapi_response_product_properties
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | di_product | true | OMNAv2::DIProduct \| Ov2Anyone::DIProduct | Contains the [DIProduct](../data-types/DIProduct.md) record from which you will get the property values. |
> | properties_definition | true | Array | Contains the definition of properties for a product category ([DICategory](../data-types/DICategory.md) |
>
> **Returns:** The definition of the property list with its corresponding values ​​for the details of a product.

### Example
```ruby
ns_omna = Cenit.namespace(:OMNAv2)
do_require_data_type = ns_omna.algorithm(:do_require_data_type)

properties = []

integration = product.integration
dt_category = do_require_data_type.run([integration, :DICategory])
dt_brand = do_require_data_type.run([integration, :DIBrand])

# Set category property
properties << begin
  conditions = { id: product.category_id, integration: { 'id' => integration.id } }
  record = product.category_id ? dt_category.where(conditions).first : nil

  {
    id: 'category_id',
    label: 'Category',
    required: true,
    read_only: product.category_id.present?,
    input_type: 'single_select_with_remote_options',
    options: record ? [{ id: record.id, name: record.name }] : [],
    options_service_path: "/integrations/#{integration.id}/categories",
    value: product.category_id
  }
end

# Set product properties from given definitions
properties_definition.each do |property|
  product.data[:attributes] ||= {}

  properties << item = {
    id: property.property_id,
    label: property.label,
    required: property.required,
    read_only: false,
    input_type: property.input_type,
    options: property.options,
    value: product.data[:attributes][property.name]
  }

  if property.property_id == 'brand'
    item[:input_type] = 'single_select_with_remote_options'
    item[:options_service_path] = "/integrations/#{integration.id}/brands"

    conditions = { integration: { 'id' => integration.id }, '$or' => [{ name: item[:value] }, { id: item[:value] }] }
    if item[:value] && record = dt_brand.where(conditions).first
      item[:options] << { id: record.id, name: record.name }
    end
  end
end

properties
```

### See also
* [Others parser algorithms](overview?id=parse_from_integration_db_2_ecapi_response_product_properties)