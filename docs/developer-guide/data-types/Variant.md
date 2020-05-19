# Data Type: 

## Variant:

Data structure to store the records of the product variants created or imported in OMNA.
    
### JSON SCHEMA:
```JSON
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

### See also:
* [Others data types](overview?id=Variant)