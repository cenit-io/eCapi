# Data types

These data types store intermediate data imported or exported from or to the remote platform to be integrated, respectively.

You can see their definitions in [Cenit-IO](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=like&f[name][24160][v]=ID).

These data types are the ones that will be used by default unless you decide to create an identical representation in 
the [namespaces](../namespaces.md) corresponding to the integration.

## Data types descriptions{docsify-ignore}

### DIBrand 

> Data structure to store the imported records of product brands for each integration channel.
> 
> This structure is required only when the platform to be integrated have predefined brands to the products.
> 
> **Algorithms related with this data type:**
> 
> * Action algorithm [do_get_brands](../action-algorithms/do_get_brands.md)
> * Parser algorithm [parse_from_api_response_2_di_brand](../parser-algorithms/parse_from_api_response_2_di_brand.md)
>
> [[see more details]](DIBrand ':class=see-more')

### DICategory 

> Data structure to store the imported records of product categories for each integration channel.
> 
> This structure is required only when the platform to be integrated organizes the products by categories.
> 
> **Algorithms related with this data type:**
> 
> * Action algorithm [do_get_categories](../action-algorithms/do_get_categories.md)
> * Parser algorithm [parse_from_api_response_2_di_category](../parser-algorithms/parse_from_api_response_2_di_category.md)
> 
>
> [[see more details]](DICategory ':class=see-more')

### DIImage 

> Data structure to store the imported records of product images for each integration channel.
> 
> **Warning:** This structure is beta and is subject to change.
> 
> **Algorithms related with this data type:**
> 
> * Action algorithm [do_get_products](../action-algorithms/do_get_products.md).
> * Parser algorithm [parse_from_api_response_2_di_product_images](../parser-algorithms/parse_from_api_response_2_di_product_images.md).
> * Parser algorithm [parse_from_api_response_2_di_variant_images](../parser-algorithms/parse_from_api_response_2_di_variant_images.md).
>
> [[see more details]](DIImage ':class=see-more')

### DILogistic 

> Data structure to store the imported records of logistics for each integration channel.
> 
> **Algorithms related with this data type:**
> 
> * Action algorithm [do_get_logistics](../action-algorithms/do_get_logistics.md)
> * Parser algorithm [parse_from_api_response_2_di_logistic](../parser-algorithms/parse_from_api_response_2_di_logistic.md)
> 
>
> [[see more details]](DILogistic ':class=see-more')

### DIOrder 

> Data structure to store the imported records of orders for each integration channel.
> 
> **Algorithms related with this data type:**
> 
> * Action algorithm [do_get_orders](../action-algorithms/do_get_orders.md).
> * Parser algorithm [parse_from_api_response_2_di_order](../parser-algorithms/parse_from_api_response_2_di_order.md).
> 
>
> [[see more details]](DIOrder ':class=see-more')

### DIProduct 

> Data structure to store the imported records of products for each integration channel.
> 
> **Algorithms related with this data type:**
> 
> * Action algorithm [do_get_products](../action-algorithms/do_get_products.md).
> * Parser algorithm [parse_from_api_response_2_di_product](../parser-algorithms/parse_from_api_response_2_di_product.md).
> * Parser algorithm [parse_from_api_request_2_di_product](../parser-algorithms/parse_from_api_request_2_di_product.md).
> * Parser algorithm [parse_from_core_2_di_product](../parser-algorithms/parse_from_core_2_di_product.md).
> 
>
> [[see more details]](DIProduct ':class=see-more')

### DIProperty 

> Data structure to store the imported records of product properties definition for each product category and each
> integration channel.
> 
> This structure is required only when the platform to be integrated organizes the products by categories and these have
> custom attributes related to the associated category.
> 
> **Algorithms related with this data type:**
> 
> * Action algorithm [do_get_properties](../action-algorithms/do_get_properties.md).
> * Parser algorithm [parse_from_api_response_2_di_property](../parser-algorithms/parse_from_api_response_2_di_property.md).
> 
>
> [[see more details]](DIProperty ':class=see-more')

### DIVariant 

> Data structure to store the imported records of product variants for each integration channel.
> 
> **Algorithms related with this data type:**
> 
> * Action algorithm [do_get_products](../action-algorithms/do_get_products.md).
> * Parser algorithm [parse_from_api_response_2_di_product](../parser-algorithms/parse_from_api_response_2_di_variant.md).
> 
>
> [[see more details]](DIVariant ':class=see-more')

