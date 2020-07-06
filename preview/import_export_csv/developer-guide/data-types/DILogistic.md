# Data Type

## DILogistic

Data structure to store the imported records of logistics for each integration channel.

**Algorithms related with this data type:**

* Action algorithm [do_get_logistics](../action-algorithms/do_get_logistics.md)
* Parser algorithm [parse_from_api_response_2_integration_db_logistic](../parser-algorithms/parse_from_api_response_2_integration_db_logistic.md)

    
### JSON SCHEMA
```json
{
  "type": "object",
  "properties": {
    "logistic_id": {
      "type": "integer"
    },
    "logistic_name": {
      "type": "string"
    },
    "enabled": {
      "type": "boolean"
    },
    "data": {
      "type": "object",
      "visible": false
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
    }
  }
}
```

### See also
* [This data type in Cenit-IO](https://cenit.io/json_data_type?f[name][40703][o]=is&f[name][40703][v]=DILogistic&f[namespace][40840][v]=OMNAv2)
* [Others data types](overview?id=DILogistic)