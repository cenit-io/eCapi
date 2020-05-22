# Data Type

## Variant

Data structure to store the imported records of product variants for each integration channel.

Its records are completed from the information obtained or mapped in algorithms: 

* [do_import_products](../action-algorithms/do_import_products.md).
* [parse_from_api_response_2_integration_db_product](../parser-algorithms/parse_from_api_response_2_integration_db_variant.md).
* [parse_from_omna_db_2_integration_db_product](../parser-algorithms/parse_from_omna_db_2_integration_db_variant.md).
    
### JSON SCHEMA
```json
{
  "type": "object",
  "properties": {
    "remote_variant_id": {
      "type": "string"
    },
    "variant_in_omna": {
      "$ref": {
        "namespace": "OMNAv2",
        "name": "Variant"
      },
      "referenced": true
    },
    "sku": {
      "type": "string"
    },
    "data": {
      "type": "object",
      "visible": false
    },
    "product": {
      "$ref": {
        "namespace": "Ov2Shopify",
        "name": "Product"
      },
      "referenced": true
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
* [Others data types](overview?id=Variant)