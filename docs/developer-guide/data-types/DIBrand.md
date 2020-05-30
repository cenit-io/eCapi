# Data Type

## DIBrand

Data structure to store the imported records of product brands for each integration channel.

This structure is required only when the platform to be integrated have predefined brands to the products.

**Algorithms related with this data type:**

* Action algorithm [do_get_brands](../action-algorithms/do_get_brands.md)
* Parser algorithm [parse_from_api_response_2_integration_db_brand](../parser-algorithms/parse_from_api_response_2_integration_db_brand.md)
    
### JSON SCHEMA
```json
{
  "type": "object",
  "properties": {
    "brand_id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "name_en": {
      "type": "string"
    },
    "integration": {
      "$ref": {
        "namespace": "OMNAv2",
        "name": "Integration"
      },
      "referenced": true
    }
  }
}
```

### See also
* [Others data types](overview?id=DIBrand)