# Data Type

## IDOrder

Data structure to store the imported records of orders for each integration channel.

Its records are completed from the information obtained or mapped in algorithms: 

* [do_get_orders](../action-algorithms/do_get_orders.md).
* [parse_from_api_response_2_integration_db_order](../parser-algorithms/parse_from_api_response_2_integration_db_order.md).
    
### JSON SCHEMA
```json
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

### See also
* [Others data types](overview?id=IDOrder)