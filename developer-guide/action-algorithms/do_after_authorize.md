# Action algorithm

## do_after_authorize

Allows validate the authorization and start some processes after successful authorization.

In this algorithm, if applicable for integration, the tasks for importing some resources such as categories and marks 
should be started.
    
### Definition

> **Name:** do_after_authorize
> 
> **Namespace:** Ov2Shopee
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | integration_id | true | OMNAv2::Integration \| String |
> | task | true | Setup::AlgorithmExecution |

### Example
```ruby
ns_omna = Cenit.namespace(:OMNAv2)

do_notify = ns_omna.algorithm(:do_notify)
do_asynchronous_task = ns_omna.algorithm(:do_asynchronous_task)
do_require_integration = ns_omna.algorithm(:do_require_integration)
do_require_algorithm = ns_omna.algorithm(:do_require_algorithm)
do_require_webhook = ns_omna.algorithm(:do_require_webhook)

integration = do_require_integration.run([integration_id])
integration_name = "#{integration.name}@#{integration.channel}"

# Validate authorization (check country)
begin
  integration_country = integration.channel.gsub(/^Ov2Anyone/, '')

  webhook = do_require_webhook.run([integration, :get_integration_metadata])
  response = webhook.submit! # (parameters: ..., body: ...)
  response = JSON.parse(response, symbolize_names: true)

  if response[:country] != integration_country
    integration.authorization.cancel!
    Cenit.fail("Invalid store country, #{integration_country} expected and #{response[:country]} received.")
  end
end

# Add task to import the initial resources
begin
  join_group = "AFTER-AUTHORIZE-#{integration.id}"

  do_notify.run(["Add task to import brands from #{integration_name} integration.", :info, task])
  action = do_require_algorithm.run([integration, :do_import_brands])
  message = {
    description: "Importing product brands from #{integration_name} integration",
    join_group: join_group,
    input: [integration.id]
  }
  do_asynchronous_task.run([action, message, join_group])

  do_notify.run(["Add task to import categories from #{integration_name} integration.", :info, task])
  action = do_require_algorithm.run([integration, :do_import_categories])
  message = {
    description: "Importing product categories from #{integration_name} integration.",
    join_group: join_group,
    input: [integration.id]
  }
  do_asynchronous_task.run([action, message, join_group])
end
```

### See also
* [Others action algorithms](overview?id=do_after_authorize)