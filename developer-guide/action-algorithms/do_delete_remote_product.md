# Action algorithm

## do_delete_remote_product

Allows submitting a request to the remote integration platform to remove a product.
    
### Definition

> **Name:** do_delete_remote_product
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | product | true | Ov2Anyone::Product | Contains the record of product to be delete |
> | webhook | true | Setup::PlainWebhook | Contains the [delete_product](../webhooks/overview?id=delete_product) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task |

### Example
```ruby
response = webhook.submit!(template_parameters: { 'item_id' => product.remote_product_id })
response = JSON.parse(response, symbolize_names: true)

Cenit.fail(response[:error]) if response[:error]

true
```

### See also
* [Others action algorithms](overview?id=do_delete_remote_product)