# Data Type: 

## Property:

TODO: Description...
    
### JSON SCHEMA:
```JSON
{
  "title": "Property",
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "label": {
      "type": "string"
    },
    "category_id": {
      "type": "string"
    },
    "source": {
      "type": "string",
      "enum": [
        "product",
        "variant"
      ]
    },
    "required": {
      "type": "boolean"
    },
    "input_type": {
      "type": "string"
    },
    "options": {
      "type": "array",
      "visible": false,
      "items": {
        "type": "string"
      }
    }
  }
}
```

### See also:
* [Others data types](overview?id=Property)