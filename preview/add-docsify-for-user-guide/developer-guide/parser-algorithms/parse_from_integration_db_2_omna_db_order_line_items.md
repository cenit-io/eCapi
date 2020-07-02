# Parser algorithm:
 
## parse_from_integration_db_2_omna_db_order_line_items:

TODO: Description...
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: parse_from_integration_db_2_omna_db_order_line_items
    parameters:
      - name: source
        required: true
        
```

### Example:
```RUBY
source[:line_items].try(:map) do |item|
  {
    id: item[:id],
    name: item[:name],
    quantity: item[:quantity],
    price: item[:price],
    currency: source[:currency],
    sku: item[:sku],
    variation_id: item[:variant_id]
  }
end
```

### See also:
* [Others parser algorithms](overview?id=parse_from_integration_db_2_omna_db_order_line_items)