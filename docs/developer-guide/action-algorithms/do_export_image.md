# Action algorithm

## do_export_image

Allows submitting a request to the remote integration platform to publish an image.
    
### Definition

> **Name:** do_export_image
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | url | true | String | Contains the url of the image to be exported |
> | integration | true | OMNAv2::Integration | Contains integration record |
> | webhook | true | Setup::PlainWebhook | Contains the [upload_image](../webhooks/overview?id=upload_image) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task. |

### Example
```ruby
# Upload image to the remote integration
new_url = begin
  data = { Image: { Url: url } }.to_xml(root: 'Request')

  response = webhook.submit!(parameters: { 'payload' => data })
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:message]) if response[:code].to_i != 0

  response[:data][:image][:url]
end

new_url
```

### See also
* [Others action algorithms](overview?id=do_export_image)