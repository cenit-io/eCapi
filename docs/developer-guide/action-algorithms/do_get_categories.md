# Action algorithm

## do_get_categories

Allows submitting a request to the remote integration platform to get and import the product categories.
    
### Definition

> **Name:** do_get_categories
> 
> **Namespace:** Ov2Shopee
>
> **Parameters:**
> 
> | Name | Required | Type |
> | --- | --- | --- |
> | integration | true |  |
> | webhook | true |  |
> | task | true |  |

### Example
```ruby
# Get categories from the remote integration
categories = begin
  data = {}
  response = webhook.submit!(body: data.to_json)
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:msg] || response[:error]) if response[:error]

  response[:categories]
end

categories
```

### See also
* [Others action algorithms](overview?id=do_get_categories)