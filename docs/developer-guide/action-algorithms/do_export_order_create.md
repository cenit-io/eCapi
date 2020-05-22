# Action algorithm:

## do_export_order_create:

Allows submitting a request to the remote integration platform to create an order.
    
### Definition:

> **Name:** do_export_order_create
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
> | task | true | ... |

### Example:
```RUBY
# Put order to the remote integration
order = begin
  response = webhook.submit!(body: { 'order' => data }.to_json)
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:errors]) if response[:errors]

  response[:order]
end

# Returns data to create order exported record.
{ exported_id: order[:id], exported_number: order[:order_number] }
```

### See also:
* [Others action algorithms](overview?id=do_export_order_create)