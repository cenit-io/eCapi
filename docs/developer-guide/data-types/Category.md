# Data Type

## Category

Data structure to store the imported records of product categories for each integration channel.

This structure is required only when the platform to be integrated organizes the products by categories.

Its records are completed from the information obtained in [this action](../action-algorithms/do_get_categories.md) algorithm 
and mapped in [this parser](../parser-algorithms/parse_from_api_response_2_integration_db_category.md) algorithm.
    
### JSON SCHEMA
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "properties_imported": {
      "type": "boolean",
      "default": false
    }
  }
}
```

### See also
* [Others data types](overview?id=Category)