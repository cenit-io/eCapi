# Action algorithm:

## do_delete_remote_product:

Allows submitting a request to the remote integration platform to remove a product.
    
### Definition:

> **Name:** do_delete_remote_product
> 
> **Namespace:** Ov2Shopee
>
> **Parameters:**
> 
> | Name | Required | Description |
> | --- | --- | --- |
> | product | true | ... |
> | webhook | true | ... |
> | task | true | ... |

### Example:
```RUBY
ns_omna = Cenit.namespace(:OMNAv2)

integration = product.integration
auth = integration.authorization
conn = ns_omna.algorithm(:do_require_connection).run([integration.channel])

webhook = Cenit.namespace(:Ov2Anyone).webhook(:delete_product)

response = webhook.with(conn).and(auth).submit!(template_parameters: { 'item_id' => product.remote_product_id })
response = JSON.parse(response, symbolize_names: true)

Cenit.fail(response[:error]) if response[:error]

true
```

### See also:
* [Others action algorithms](overview?id=do_delete_remote_product)