# Data Type

## DICategory

Data structure to store the imported records of product categories for each integration channel.

This structure is required only when the platform to be integrated organizes the products by categories.

**Algorithms related with this data type:**

* Action algorithm [do_get_categories](../action-algorithms/do_get_categories.md)
* Parser algorithm [parse_from_api_response_2_di_category](../parser-algorithms/parse_from_api_response_2_di_category.md)

    
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
* [This data type in Cenit-IO](https://cenit.io/json_data_type?f[name][40703][o]=is&f[name][40703][v]=DICategory&f[namespace][40840][v]=OMNAv2)
* [Others data types](overview?id=DICategory)