# Data types

This data types represent the intermediate data structure where the information coming from or destined for the platform
to be integrated will be stored.

It is very important that the data types described below be create with the exact same name assigned here.

You can manage the data types by entering [here](https://cenit.io/json_data_type).

## Data types that should be created{docsify-ignore}

### Brand 

> Data structure to store the imported records of product brands for each integration channel.
> 
> This structure is required only when the platform to be integrated have predefined brands to the products.
> 
> Its records are completed from the information obtained in [this action](../action-algorithms/do_import_brands.md) algorithm 
> and mapped in [this parser](../parser-algorithms/parse_from_api_response_2_integration_db_brand.md) algorithm.
>
> [[see more details]](Brand ':class=see-more')

### Category 

> Data structure to store the imported records of product categories for each integration channel.
> 
> This structure is required only when the platform to be integrated organizes the products by categories.
> 
> Its records are completed from the information obtained in [this action](../action-algorithms/do_import_categories.md) algorithm 
> and mapped in [this parser](../parser-algorithms/parse_from_api_response_2_integration_db_category.md) algorithm.
>
> [[see more details]](Category ':class=see-more')

### Image 

> Data structure to store the imported records of product images for each integration channel.
> 
> **Warning:** This structure is beta and is subject to change.
> 
> Its records are completed from the information obtained or mapped in algorithms: 
> 
> * [do_import_products](../action-algorithms/do_import_products.md).
> * [parse_from_api_response_2_integration_db_product_images](../parser-algorithms/parse_from_api_response_2_integration_db_product_images.md).
> * [parse_from_api_response_2_integration_db_variant_images](../parser-algorithms/parse_from_api_response_2_integration_db_variant_images.md).
>
> [[see more details]](Image ':class=see-more')

### Order 

> Data structure to store the imported records of orders for each integration channel.
> 
> Its records are completed from the information obtained or mapped in algorithms: 
> 
> * [do_import_orders](../action-algorithms/do_import_orders.md).
> * [parse_from_api_response_2_integration_db_order](../parser-algorithms/parse_from_api_response_2_integration_db_order.md).
>
> [[see more details]](Order ':class=see-more')

### Product 

> Data structure to store the imported records of products for each integration channel.
> 
> Its records are completed from the information obtained or mapped in algorithms: 
> 
> * [do_import_products](../action-algorithms/do_import_products.md).
> * [parse_from_api_response_2_integration_db_product](../parser-algorithms/parse_from_api_response_2_integration_db_product.md).
> * [parse_from_omna_db_2_integration_db_product](../parser-algorithms/parse_from_omna_db_2_integration_db_product.md).
>
> [[see more details]](Product ':class=see-more')

### Property 

> Data structure to store the imported records of product properties definition for each product category and each
> integration channel.
> 
> This structure is required only when the platform to be integrated organizes the products by categories and these have
> custom attributes related to the associated category.
> 
> Its records are completed from the information obtained or mapped in algorithms: 
> 
> * [do_import_properties](../action-algorithms/do_import_properties.md).
> * [parse_from_api_response_2_integration_db_property](../parser-algorithms/parse_from_api_response_2_integration_db_property.md).
> 
>
> [[see more details]](Property ':class=see-more')

### Variant 

> Data structure to store the imported records of product variants for each integration channel.
> 
> Its records are completed from the information obtained or mapped in algorithms: 
> 
> * [do_import_products](../action-algorithms/do_import_products.md).
> * [parse_from_api_response_2_integration_db_product](../parser-algorithms/parse_from_api_response_2_integration_db_variant.md).
> * [parse_from_omna_db_2_integration_db_product](../parser-algorithms/parse_from_omna_db_2_integration_db_variant.md).
>
> [[see more details]](Variant ':class=see-more')

