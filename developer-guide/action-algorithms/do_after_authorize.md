# Action algorithm

## do_after_authorize

Allows validate the authorization and start some processes after successful authorization.
    
### Definition

> **Name:** do_after_authorize
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | OMNAv2::Integration \| String | Contains the integration record or id |
> | webhook | true | Setup::PlainWebhook | Contains the [get_integration_metadata](../webhooks/overview?id=get_integration_metadata) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task |
>
> **Returns:** List of the names of the resources that should be imported initially.
For each of these names, except for categories and brands, 
should be created a algorithm with the same name and the prefix **do_import_**.
(Ex: [do_import_logistics](do_import_logistics.md))

### Example
```ruby
# Validate authorization
begin
  integration_country = integration.channel.gsub(/^Ov2Anyone/, '')

  response = webhook.submit! # (parameters: ..., body: ...)
  response = JSON.parse(response, symbolize_names: true)

  if response[:country] != integration_country
    integration.authorization.cancel!
    Cenit.fail("Invalid store country, #{integration_country} expected and #{response[:country]} received.")
  end
end

# Returns the names of the resources that should be imported initially
%w(categories brands logistics)
```

### See also
* [Others action algorithms](overview?id=do_after_authorize)