# Data Type: 

## Order:

Data structure to store the records of the orders registered in OMAN.
    
### JSON SCHEMA:
```JSON
{
  "type": "object",
  "properties": {
    "number": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "data": {
      "type": "object",
      "visible": false
    },
    "hmac": {
      "type": "string"
    },
    "last_import_date": {
      "type": "string",
      "format": "date-time"
    },
    "integration": {
      "$ref": {
        "namespace": "OMNAv2",
        "name": "Integration"
      },
      "referenced": true
    },
    "order_in_omna": {
      "$ref": {
        "namespace": "OMNAv2",
        "name": "Order"
      },
      "referenced": true
    }
  }
}
```

### See also:
* [Others data types](overview?id=Order)