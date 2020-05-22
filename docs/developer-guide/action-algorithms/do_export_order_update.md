# Action algorithm:

## do_export_order_update:

Allows submitting a request to the remote integration platform to update an order.
    
### Definition:

> **Name:** do_export_order_update
> 
> **Namespace:** Ov2Shopify
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | data | true | ... |
> | target_integration | true | ... |
> | webhook | true | ... |
> | order_exported | true | ... |
> | task | true | ... |

### Example:
```RUBY
# Update order in the remote integration
data = { 'order' => data }
tps = { 'order_id' => order_exported.exported_id }

response = webhook.submit!(body: data.to_json, template_parameters: tps)
response = JSON.parse(response, symbolize_names: true)

Cenit.fail(response[:errors]) if response[:errors]

nil
```

### See also:
* [Others action algorithms](overview?id=do_export_order_update)