# Data Type

## DICategory

Data structure to store the imported records of product categories for each integration channel.

This structure is required only when the platform to be integrated organizes the products by categories.

**Algorithms related with this data type:**

* Action algorithm [do_get_categories](../action-algorithms/do_get_categories.md)
* Parser algorithm [parse_from_api_response_2_integration_db_category](../parser-algorithms/parse_from_api_response_2_integration_db_category.md)

    
### JSON SCHEMA
```json
{
  "type": "object",
  "properties": {
    "category_id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "integration": {
      "$ref": {
        "namespace": "OMNAv2",
        "name": "Integration"
      },
      "referenced": true
    },
    "properties": {
      "type": "array",
      "items": {
        "$ref": {
          "namespace": "OMNAv2",
          "name": "DIProperty"
        }
      }
    }
  }
}
```

### See also
* [Others data types](overview?id=DICategory)