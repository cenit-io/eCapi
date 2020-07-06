# Data Type

## DIProduct

Data structure to store the imported records of products for each integration channel.

**Algorithms related with this data type:**

* Action algorithm [do_get_products](../action-algorithms/do_get_products.md).
* Parser algorithm [parse_from_api_response_2_integration_db_product](../parser-algorithms/parse_from_api_response_2_integration_db_product.md).
* Parser algorithm [parse_from_api_request_2_integration_db_product](../parser-algorithms/parse_from_api_request_2_integration_db_product.md).
* Parser algorithm [parse_from_omna_db_2_integration_db_product](../parser-algorithms/parse_from_omna_db_2_integration_db_product.md).

    
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
* [This data type in Cenit-IO](https://cenit.io/json_data_type?f[name][40703][o]=is&f[name][40703][v]=DIProduct&f[namespace][40840][v]=OMNAv2)
* [Others data types](overview?id=DIProduct)