# Parser algorithm
 
## parse_from_api_response_2_integration_db_category

TODO: Description...
    
### Definition

> **Name:** parse_from_api_response_2_integration_db_category
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | source | true | - | - |

### Example
```ruby
items = [source]
categories = []

while item = items.shift
  if item[:children].blank?
    categories << { category_id: item[:category_id], name: item[:name] }
  else
    item[:children].each { |children| items << children.merge(name: "#{item[:name]} > #{children[:name]}") }
  end
end

categories
```

### See also
* [Others parser algorithms](overview?id=parse_from_api_response_2_integration_db_category)