# Data Type: 

## Brand:

Data structure to store the imported records of product brands for each integration channel.

This structure is required only when the platform to be integrated have predefined brands to the products.

Its records are completed from the information obtained in [this action](../action-algorithms/do_import_brands.md) algorithm 
and mapped in [this parser](../parser-algorithms/parse_from_api_response_2_integration_db_brand.md) algorithm.
    
### JSON SCHEMA:
```JSON
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "name_en": {
      "type": "string"
    }
  }
}
```

### See also:
* [Others data types](overview?id=Brand)