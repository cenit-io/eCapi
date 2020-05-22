# Action algorithm:

## do_cancel_order:

Allows submitting a request to the remote integration platform to cancel an order.
    
### Definition:

> **Name:** do_cancel_order
> 
> **Namespace:** Ov2Shopee
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | order | true | ... |
> | webhook | true | ... |
> | task | true | ... |

### Example:
```RUBY
# Cancel the order in the remote integration
data = {
  ordersn: order.number,
  cancel_reason: 'OUT_OF_STOCK',
  item_id: order.line_items[0].id.to_i,
  variation_id: order.line_items[0].variation_id.to_i
}

response = webhook.submit!(body: data.to_json)
response = JSON.parse(response, symbolize_names: true)

Cenit.fail(response[:error]) if response[:error]
```

### See also:
* [Others action algorithms](overview?id=do_cancel_order)