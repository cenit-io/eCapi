# Action algorithm

## do_export_product_update

Allows submitting a request to the remote integration platform to update a product.
    
### Definition

> **Name:** do_export_product_update
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | data | true | - | - |
> | integration | true | OMNAv2::Integration | - |
> | webhook | true | Setup::PlainWebhook | - |
> | task | true | Setup::AlgorithmExecution | - |

### Example
```ruby
# Update a product in the remote integration
data = { 'order' => data }
tps = { 'order_id' => order_exported.exported_id }

response = webhook.submit!(body: data.to_json, template_parameters: tps)
response = JSON.parse(response, symbolize_names: true)

Cenit.fail(response[:errors]) if response[:errors]

nil
```

### See also
* [Others action algorithms](overview?id=do_export_product_update)