# Data Type

## DIProduct

Data structure to store the imported records of products for each integration channel.

**Algorithms related with this data type:**

* Action algorithm [do_get_products](../action-algorithms/do_get_products.md).
* Parser algorithm [parse_from_api_response_2_di_product](../parser-algorithms/parse_from_api_response_2_di_product.md).
* Parser algorithm [parse_from_api_request_2_di_product](../parser-algorithms/parse_from_api_request_2_di_product.md).
* Parser algorithm [parse_from_core_2_di_product](../parser-algorithms/parse_from_core_2_di_product.md).

    
### JSON SCHEMA
```json
{
  "type": "object",
  "properties": {
    "remote_product_id": {
      "type": "string"
    },
    "product_in_core": {
      "$ref": {
        "namespace": "eCore",
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
        "namespace": "eCore",
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
* [This data type in Cenit-IO](https://cenit.io/json_data_type?f[name][40703][o]=is&f[name][40703][v]=DIProduct&f[namespace][40840][v]=eCore)
* [Others data types](overview?id=DIProduct)