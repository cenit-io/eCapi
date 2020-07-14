# Data Type

## DIOrder

Data structure to store the imported records of orders for each integration channel.

**Algorithms related with this data type:**

* Action algorithm [do_get_orders](../action-algorithms/do_get_orders.md).
* Parser algorithm [parse_from_api_response_2_di_order](../parser-algorithms/parse_from_api_response_2_di_order.md).

    
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
* [This data type in Cenit-IO](https://cenit.io/json_data_type?f[name][40703][o]=is&f[name][40703][v]=DIOrder&f[namespace][40840][v]=OMNAv2)
* [Others data types](overview?id=DIOrder)