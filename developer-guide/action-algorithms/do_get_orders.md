# Action algorithm

## do_get_orders

Allows submitting a request to the remote integration platform to get the orders.
    
### Definition

> **Name:** do_get_orders
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | OMNAv2::Integration | Contains integration record |
> | webhook | true | Setup::PlainWebhook | Contains the [get_orders](../webhooks/overview?id=get_orders) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task. |

### Example
```ruby
limit = 50
offset = task.state[:offset] ||= 0
s_date = task.state[:start_date]
e_date = [s_date + 15.days, task.state[:end_date]].min

# Get orders from integration
orders, more = begin
  data = {
    update_time_from: s_date.to_i,
    update_time_to: e_date.to_i,
    pagination_entries_per_page: limit,
    pagination_offset: offset,
  }

  response = webhook.submit!(body: data.to_json)
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:msg] || response[:error]) if response[:error]

  more = response[:more]
  sn_list = response[:orders].map { |o| o[:ordersn] }

  if sn_list.any?
    webhook = ns_anyone.webhook(:get_order)

    data = { ordersn_list: sn_list }
    response = webhook.submit!(body: data.to_json)
    response = JSON.parse(response, symbolize_names: true)

    Cenit.fail(response[:msg] || response[:error]) if response[:error]
  end

  [response[:orders], more]
end

if (more)
  # Run again until the last block is reached
  task.state[:offset] += limit
  task.state[:import_next_block] = true
elsif e_date < task.state[:end_date]
  # Run again until the current date is reached
  task.state[:start_date] = e_date
  task.state[:offset] = 0
  task.state[:import_next_block] = true
end

orders
```

### See also
* [Others action algorithms](overview?id=do_get_orders)