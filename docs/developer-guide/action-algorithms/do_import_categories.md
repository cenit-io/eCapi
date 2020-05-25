# Action algorithm

## do_import_categories

Allows submitting a request to the remote integration platform to get the product categories.
    
### Definition

> **Name:** do_import_categories
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
  response = webhook.submit!
  response = JSON.parse(response, symbolize_names: true)

  Cenit.fail(response[:message]) if response[:code].to_i != 0

  response[:data]
end

categories
```

### See also
* [Others action algorithms](overview?id=do_import_categories)