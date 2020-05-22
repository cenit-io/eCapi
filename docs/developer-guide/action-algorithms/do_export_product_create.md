# Action algorithm

## do_export_product_create

Allows submitting a request to the remote integration platform to create a product.
    
### Definition

> **Name:** do_export_product_create
> 
> **Namespace:** Ov2Shopify
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | data | true |  |
> | target_integration | true |  |
> | webhook | true |  |
> | task | true |  |

### Example
```ruby
# Create an product in the remote integration
product = begin
            response = webhook.submit!(body: { 'product' => data }.to_json)
            response = JSON.parse(response, symbolize_names: true)

            Cenit.fail(response[:errors]) if response[:errors]

            response[:product]
          end

# Returns the remote_product_id.
product[:id]
```

### See also
* [Others action algorithms](overview?id=do_export_product_create)