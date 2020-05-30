# Data Type

## DIImage

Data structure to store the imported records of product images for each integration channel.

**Warning:** This structure is beta and is subject to change.

Its records are completed from the information obtained or mapped in algorithms: 

* [do_get_products](../action-algorithms/do_get_products.md).
* [parse_from_api_response_2_integration_db_product_images](../parser-algorithms/parse_from_api_response_2_integration_db_product_images.md).
* [parse_from_api_response_2_integration_db_variant_images](../parser-algorithms/parse_from_api_response_2_integration_db_variant_images.md).
    
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
        "namespace": "OMNAv2",
        "name": "Image"
      },
      "referenced": true
    },
    "product": {
      "$ref": {
        "namespace": "OMNAv2",
        "name": "DIProduct"
      },
      "referenced": true
    },
    "variant": {
      "$ref": {
        "namespace": "OMNAv2",
        "name": "DIVariant"
      },
      "referenced": true
    }
  }
}
```

### See also
* [Others data types](overview?id=DIImage)