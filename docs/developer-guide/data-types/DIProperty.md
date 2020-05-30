# Data Type

## DIProperty

Data structure to store the imported records of product properties definition for each product category and each
integration channel.

This structure is required only when the platform to be integrated organizes the products by categories and these have
custom attributes related to the associated category.

**Algorithms related with this data type:**

* Action algorithm [do_get_properties](../action-algorithms/do_get_properties.md).
* Parser algorithm [parse_from_api_response_2_integration_db_property](../parser-algorithms/parse_from_api_response_2_integration_db_property.md).

    
### JSON SCHEMA
```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "label": {
      "type": "string"
    },
    "source": {
      "type": "string",
      "enum": [
        "product",
        "variant"
      ]
    },
    "required": {
      "type": "boolean"
    },
    "input_type": {
      "type": "string"
    },
    "options": {
      "type": "array",
      "visible": false,
      "items": {
        "type": "string"
      }
    }
  }
}
```

### See also
* [Others data types](overview?id=DIProperty)