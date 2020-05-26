# Action algorithm

## do_export_image

Allows submitting a request to the remote integration platform to publish an image.
    
### Definition

> **Name:** do_export_image
> 
> **Namespace:** Ov2Lazada
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | url | true | String |
> | integration | true | OMNAv2::Integration |
> | webhook | true | Setup::PlainWebhook |
> | task | true | Setup::AlgorithmExecution |

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