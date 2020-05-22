# Action algorithm:

## do_import_product:

Allows submitting a request to the remote integration platform to get and import an product.
    
### Definition:

> **Name:** do_import_product
> 
> **Namespace:** Ov2Shopee
>
> **Parameters:**
> 
> | Name | Required | Description |
> | --- | --- | --- |
> | integration | true | ... |
> | product_id | true | ... |
> | webhook | true | ... |
> | task | true | ... |

### Example:
```RUBY
# Get product from integration
data = { item_id: product_id.to_i }
response = webhook.submit!(body: data.to_json)
response = JSON.parse(response, symbolize_names: true)

Cenit.fail(response[:msg] || response[:error]) if response[:error]

response[:item]
```

### See also:
* [Others action algorithms](overview?id=do_import_product)