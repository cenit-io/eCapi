# Action algorithm:

## do_export_image:

Allows submitting a request a request to the remote integration platform to publish an image.
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: do_export_image
    parameters:
      - name: url
        required: true
        
      - name: integration_id
        required: true
        
```

### Example:
```RUBY
ns_omna = Cenit.namespace(:OMNAv2)
ns_anyone = Cenit.namespace(:Ov2Anyone)

integration = ns_omna.algorithm(:do_require_integration).run([integration_id])
auth = integration.authorization
conn = ns_omna.algorithm(:do_require_connection).run([integration.channel])

# Upload image to the remote integration
url = begin
  webhook = ns_anyone.webhook(:upload_image)

  data = [url]

  response = webhook.with(conn).and(auth).submit!(parameters: { 'images' => data })
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:msg] || response[:error]) if response[:error]

  response[:images].first[:shopee_image_url]
end

url
```

### See also:
* [Others action algorithms](overview?id=do_export_image)