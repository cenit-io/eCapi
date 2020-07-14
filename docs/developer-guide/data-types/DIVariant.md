# Data Type

## DIVariant

Data structure to store the imported records of product variants for each integration channel.

**Algorithms related with this data type:**

* Action algorithm [do_get_products](../action-algorithms/do_get_products.md).
* Parser algorithm [parse_from_api_response_2_di_product](../parser-algorithms/parse_from_api_response_2_di_variant.md).

    
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
        "namespace": "OMNAv2",
        "name": "DIProduct"
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
* [This data type in Cenit-IO](https://cenit.io/json_data_type?f[name][40703][o]=is&f[name][40703][v]=DIVariant&f[namespace][40840][v]=OMNAv2)
* [Others data types](overview?id=DIVariant)