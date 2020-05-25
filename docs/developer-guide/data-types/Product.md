# Data Type

## Product

Data structure to store the imported records of products for each integration channel.

Its records are completed from the information obtained or mapped in algorithms: 

* [do_import_products](../action-algorithms/do_import_products.md).
* [parse_from_api_response_2_integration_db_product](../parser-algorithms/parse_from_api_response_2_integration_db_product.md).
* [parse_from_omna_db_2_integration_db_product](../parser-algorithms/parse_from_omna_db_2_integration_db_product.md).
    
### JSON SCHEMA
```json
{
  "type": "object",
  "properties": {
    "remote_product_id": {
      "type": "string"
    },
    "product_in_omna": {
      "$ref": {
        "namespace": "OMNAv2",
        "name": "Product"
      },
      "referenced": true
    },
    "category_id": {
      "type": "string"
    },
    "data": {
      "type": "object",
      "visible": false
    },
    "integration": {
      "$ref": {
        "namespace": "OMNAv2",
        "name": "Integration"
      },
      "referenced": true
    },
    "hmac": {
      "type": "string"
    },
    "deleted": {
      "type": "boolean",
      "default": false
    }
  }
}
```

### See also
* [Others data types](overview?id=Product)