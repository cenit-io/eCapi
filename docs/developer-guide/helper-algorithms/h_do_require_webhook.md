# Helper algorithm:

## h_do_require_webhook:

Search and returns an webhook by its name and integration channel.

The webhook searches 1st in the namespace of the provided channel, if it is not found, it will search, 
only if applicable, in the main namespace of the integration.

The webhook found is assigned the connection and the authorization corresponding to the given integration.

If the resource is not found an exception is thrown.
    
### Definition:

**Name:** h_do_require_webhook

**Namespace:** OMNAv2

**Parameters:**

| Name | Required | Description |
| --- | --- | --- |
| integration | true | ... |
| name | true | ... |

### See also:
* [Others helper algorithms](overview?id=h_do_require_webhook)