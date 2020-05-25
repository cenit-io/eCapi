# Action algorithm

## do_get_product

Allows submitting a request to the remote integration platform to get an product.
    
### Definition

> **Name:** do_get_product
> 
> **Namespace:** Ov2Lazada
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | integration | true | OMNAv2::Integration |
> | product_id | true |  |
> | webhook | true | Setup::PlainWebhook |
> | task | true | Setup::AlgorithmExecution |

### Example
```ruby
# Get product from integration
data = { item_id: product_id.to_i }
response = webhook.submit!(body: data.to_json)
response = JSON.parse(response, symbolize_names: true)

Cenit.fail(response[:msg] || response[:error]) if response[:error]

response[:item]
```

### See also
* [Others action algorithms](overview?id=do_get_product)