# Data Type: 

## Image:

Data structure to store the records of the images of the products created or imported in OMNA.
    
### JSON SCHEMA:
```JSON
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
        "namespace": "Ov2Shopify",
        "name": "Product"
      },
      "referenced": true
    },
    "variant": {
      "$ref": {
        "namespace": "Ov2Shopify",
        "name": "Variant"
      },
      "referenced": true
    }
  }
}
```

### See also:
* [Others data types](overview?id=Image)