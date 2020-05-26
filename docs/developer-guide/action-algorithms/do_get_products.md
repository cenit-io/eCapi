# Action algorithm

## do_get_products

Allows submitting a request to the remote integration platform to get the products.
    
### Definition

> **Name:** do_get_products
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | integration | true | OMNAv2::Integration | - |
> | webhook | true | Setup::PlainWebhook | - |
> | task | true | Setup::AlgorithmExecution | - |

### Example
```ruby
limit = 50
offset = task.state[:offset] ||= 0
s_date = task.state[:start_date]
e_date = [s_date + 15.days, task.state[:end_date]].min

# Get products from integration
products, more = begin
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
  id_list = response[:items].select { |i| i[:status] != 'DELETED' }.map { |m| m[:item_id] }
  items = []

  if id_list.any?
    webhook = Cenit.namespace(:OMNAv2).algorithm(:do_require_webhook).run([integration, :get_product])

    id_list.each do |item|
      response = webhook.submit!(body: { item_id: item }.to_json)
      response = JSON.parse(response, symbolize_names: true)
      items << response[:item]

      Cenit.fail(response[:msg] || response[:error]) if response[:error]
    end
  end

  [items, more]
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

products
```

### See also
* [Others action algorithms](overview?id=do_get_products)