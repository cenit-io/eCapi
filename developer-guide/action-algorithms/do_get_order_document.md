# Action algorithm

## do_get_order_document

Allows submitting a request a request to the remote integration platform to get an order document.
    
### Definition

> **Name:** do_get_order_document
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | order | true | Ov2Anyone::Order | Contains the record of the order |
> | doc_type | true | String | Contains the type of document to be obtain |
> | webhook | true | Setup::PlainWebhook | Contains the [get_order_document](../webhooks/overview?id=get_order_document) webhook |

### Example
```ruby
# Get document from the remote integration

data = { ordersn_list: [order.number], is_batch: false }
response = webhook.submit!(body: data.to_json)
response = JSON.parse(response, symbolize_names: true)

Cenit.fail(response[:msg] || response[:error]) if response[:error]
Cenit.fail(response[:result][:errors][0][:error_description]) if response[:result][:errors].any?

{
  file: Base64.strict_encode64(URI.parse(response[:result][:airway_bills][0][:airway_bill]).read),
  mime_type: 'application/pdf',
  document_type: doc_type
}

```

### See also
* [Others action algorithms](overview?id=do_get_order_document)