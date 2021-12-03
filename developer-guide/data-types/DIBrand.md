# Data Type

## DIBrand

Data structure to store the imported records of product brands for each integration channel.

This structure is required only when the platform to be integrated have predefined brands to the products.

**Algorithms related with this data type:**

* Action algorithm [do_get_brands](../action-algorithms/do_get_brands.md)
* Parser algorithm [parse_from_api_response_2_di_brand](../parser-algorithms/parse_from_api_response_2_di_brand.md)
    
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
        "namespace": "eCore",
        "name": "Integration"
      },
      "referenced": true
    }
  }
}
```

### See also
* [This data type in Cenit-IO](https://cenit.io/json_data_type?f[name][40703][o]=is&f[name][40703][v]=DIBrand&f[namespace][40840][v]=eCore)
* [Others data types](overview?id=DIBrand)