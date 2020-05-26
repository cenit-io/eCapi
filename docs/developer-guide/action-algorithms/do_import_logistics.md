# Action algorithm

## do_import_logistics

Allows submitting a request to the remote integration platform to get and import the logistics.
    
### Definition

> **Name:** do_import_logistics
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration_id | true | String | Contains the integration id |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task. |

### Example
```ruby
ns_omna = Cenit.namespace(:OMNAv2)
do_notify = ns_omna.algorithm(:h_do_notify)
do_require_webhook = ns_omna.algorithm(:h_do_require_webhook)

integration = ns_omna.algorithm(:h_do_require_integration).run([integration_id])
integration_name = "#{integration.name}@#{integration.channel}"

do_notify.run(["Importing logistics from '#{integration_name}' integration.", :info, task])

# Get logistics from integration
logistics = begin
  webhook = do_require_webhook.run([integration, :get_logistics])

  data = {}
  response = webhook.submit!(body: data.to_json)
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:msg] || response[:error]) if response[:error]

  response[:logistics]
end

count = logistics.count
do_notify.run(["Mapping #{count} #{'logistic'.pluralize(count)}.", :info, task])

# Save logistics in OMNA Database
dt_logistic = Cenit.namespace(integration.channel).data_type(:Logistic)
last_import_date = DateTime.try(:now).iso8601

logistics.each do |logistic|
  translation = {
    logistic_id: logistic[:logistic_id],
    logistic_name: logistic[:logistic_name],
    enabled: logistic[:enabled],
    data: logistic,
    last_import_date: last_import_date,
    integration: { _reference: true, id: integration.id }
  }

  dt_logistic.create_from_json!(translation, primary_field: %w(logistic_id integration))
end

true
```

### See also
* [Others action algorithms](overview?id=do_import_logistics)