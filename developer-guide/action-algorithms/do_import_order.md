# Action algorithm:

## do_import_order:

Allows submitting a request to the remote integration platform to get and import an order.
    
### Definition:

> **Name:** do_import_order
> 
> **Namespace:** Ov2Shopee
>
> **Parameters:**
> 
> | Name | Required | Description |
> | --- | --- | --- |
> | integration | true | ... |
> | number | true | ... |
> | webhook | true | ... |
> | task | true | ... |

### Example:
```RUBY
# Get order from integration
order = begin
  data = { ordersn_list: [number] }
  response = webhook.with(conn).and(auth).submit!(body: data.to_json)
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:msg] || response[:error]) if response[:error]

  response[:orders].first
end

order
```

### See also:
* [Others action algorithms](overview?id=do_import_order)