# Data Type: 

## Product:

Data structure to store the records of the products created or imported in OMNA.
    
### JSON SCHEMA:
```JSON
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

### See also:
* [Others data types](overview?id=Product)