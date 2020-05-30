# Data types

These data types store intermediate data imported or exported from or to the remote platform, respectively.

You can see their definitions in [Cenit-IO](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=like&f[name][24160][v]=ID).

These data types are the ones that will be used by default unless you decide to create an identical representation in 
the [namespaces](../namespaces.md) corresponding to the integration.

## Data types descriptions{docsify-ignore}

### IDBrand 

> Data structure to store the imported records of product brands for each integration channel.
> 
> This structure is required only when the platform to be integrated have predefined brands to the products.
> 
> Its records are completed from the information obtained in [this action](../action-algorithms/do_get_brands.md) algorithm 
> and mapped in [this parser](../parser-algorithms/parse_from_api_response_2_integration_db_brand.md) algorithm.
>
> [[see more details]](IDBrand ':class=see-more')

### IDCategory 

> Data structure to store the imported records of product categories for each integration channel.
> 
> This structure is required only when the platform to be integrated organizes the products by categories.
> 
> Its records are completed from the information obtained in [this action](../action-algorithms/do_get_categories.md) algorithm 
> and mapped in [this parser](../parser-algorithms/parse_from_api_response_2_integration_db_category.md) algorithm.
>
> [[see more details]](IDCategory ':class=see-more')

### IDImage 

> Data structure to store the imported records of product images for each integration channel.
> 
> **Warning:** This structure is beta and is subject to change.
> 
> Its records are completed from the information obtained or mapped in algorithms: 
> 
> * [do_get_products](../action-algorithms/do_get_products.md).
> * [parse_from_api_response_2_integration_db_product_images](../parser-algorithms/parse_from_api_response_2_integration_db_product_images.md).
> * [parse_from_api_response_2_integration_db_variant_images](../parser-algorithms/parse_from_api_response_2_integration_db_variant_images.md).
>
> [[see more details]](IDImage ':class=see-more')

### IDOrder 

> Data structure to store the imported records of orders for each integration channel.
> 
> Its records are completed from the information obtained or mapped in algorithms: 
> 
> * [do_get_orders](../action-algorithms/do_get_orders.md).
> * [parse_from_api_response_2_integration_db_order](../parser-algorithms/parse_from_api_response_2_integration_db_order.md).
>
> [[see more details]](IDOrder ':class=see-more')

### IDProduct 

> Data structure to store the imported records of products for each integration channel.
> 
> Its records are completed from the information obtained or mapped in algorithms: 
> 
> * [do_get_products](../action-algorithms/do_get_products.md).
> * [parse_from_api_response_2_integration_db_product](../parser-algorithms/parse_from_api_response_2_integration_db_product.md).
> * [parse_from_omna_db_2_integration_db_product](../parser-algorithms/parse_from_omna_db_2_integration_db_product.md).
>
> [[see more details]](IDProduct ':class=see-more')

### IDProperty 

> Data structure to store the imported records of product properties definition for each product category and each
> integration channel.
> 
> This structure is required only when the platform to be integrated organizes the products by categories and these have
> custom attributes related to the associated category.
> 
> Its records are completed from the information obtained or mapped in algorithms: 
> 
> * [do_get_properties](../action-algorithms/do_get_properties.md).
> * [parse_from_api_response_2_integration_db_property](../parser-algorithms/parse_from_api_response_2_integration_db_property.md).
> 
>
> [[see more details]](IDProperty ':class=see-more')

### IDVariant 

> Data structure to store the imported records of product variants for each integration channel.
> 
> Its records are completed from the information obtained or mapped in algorithms: 
> 
> * [do_get_products](../action-algorithms/do_get_products.md).
> * [parse_from_api_response_2_integration_db_product](../parser-algorithms/parse_from_api_response_2_integration_db_variant.md).
> * [parse_from_omna_db_2_integration_db_product](../parser-algorithms/parse_from_omna_db_2_integration_db_variant.md).
>
> [[see more details]](IDVariant ':class=see-more')

