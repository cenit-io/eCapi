# Data Type

## DIImage

Data structure to store the imported records of product images for each integration channel.

**Warning:** This structure is beta and is subject to change.

**Algorithms related with this data type:**

* Action algorithm [do_get_products](../action-algorithms/do_get_products.md).
* Parser algorithm [parse_from_api_response_2_di_product_images](../parser-algorithms/parse_from_api_response_2_di_product_images.md).
* Parser algorithm [parse_from_api_response_2_di_variant_images](../parser-algorithms/parse_from_api_response_2_di_variant_images.md).
    
### JSON SCHEMA
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string"
    },
    "image_in_omna": {
      "$ref": {
        "namespace": "eCore",
        "name": "Image"
      },
      "referenced": true
    },
    "product": {
      "$ref": {
        "namespace": "eCore",
        "name": "DIProduct"
      },
      "referenced": true
    },
    "variant": {
      "$ref": {
        "namespace": "eCore",
        "name": "DIVariant"
      },
      "referenced": true
    }
  }
}
```

### See also
* [This data type in Cenit-IO](https://cenit.io/json_data_type?f[name][40703][o]=is&f[name][40703][v]=DIImage&f[namespace][40840][v]=eCore)
* [Others data types](overview?id=DIImage)