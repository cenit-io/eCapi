# Parser algorithms

In these algorithms, are implemented the transformation logic of the information by mapping from source to destination.

It is very important that the algorithms described below be create with the exact same name assigned here and as a rule 
everyone has to have the prefix "**parse_**" in their name.

You can manage the algorithms by entering [here](https://cenit.io/algorithm).

## Parsers from omna-api request

In these algorithms the origin of the information will always be the parameters received in a request to an OMNA API service.

Note that all these algorithms have the prefix "**parse_from_api_request_2_**" in their names.

### parse_from_api_request_2_integration_db_product 

> Set the value of each property in the data structure of the product record corresponding to the integration.
>
> [[see more details]](parse_from_api_request_2_integration_db_product ':class=see-more')

### parse_from_api_request_2_integration_db_variant 

> Set the value of each property in the data structure of the variant record corresponding to the integration.
>
> [[see more details]](parse_from_api_request_2_integration_db_variant ':class=see-more')


## Parsers from remote-api response

In these algorithms, the origin of the information will always be the **response** obtained from a request to a API 
service of the platform to be integrated.

Note that all these algorithms have the prefix "**parse_from_api_response_2_**" in their names.

### parse_from_api_response_2_integration_db_brand 

> It transforms and returns the data of each product brand obtained from the platform to be integrated to be stored in 
> the intermediate data structure in OMNA.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_brands](../webhooks/overview.md?id=get_brands).
> * Action algorithm that makes the request to the api of the platform to integrate:
>   [do_get_categories](../action-algorithms/do_get_categories.md).
> * Data type where the transformed data will be stored: [DIBrand](../data-types/DIBrand.md).
>
> [[see more details]](parse_from_api_response_2_integration_db_brand ':class=see-more')

### parse_from_api_response_2_integration_db_category 

> It transforms and returns the data of each product category obtained from the platform to be integrated to be stored in 
> the intermediate data structure in OMNA.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_categories](../webhooks/overview.md?id=get_categories).
> * Action algorithm that makes the request to the api of the platform to integrate:
>   [do_get_categories](../action-algorithms/do_get_categories.md).
> * Data type where the transformed data will be stored: [DICategory](../data-types/DICategory.md).
>
> [[see more details]](parse_from_api_response_2_integration_db_category ':class=see-more')

### parse_from_api_response_2_integration_db_order 

> It transforms and returns the data of each order obtained from the platform to be integrated to be stored in 
> the intermediate data structure in OMNA.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_orders](../webhooks/overview.md?id=get_orders).
> * Action algorithms that makes the request to the api of the platform to integrate:
>   [do_get_orders](../action-algorithms/do_get_orders.md) or [do_get_order](../action-algorithms/do_get_order.md)
> * Data type where the transformed data will be stored: [DIOrder](../data-types/DIOrder.md).
>
> [[see more details]](parse_from_api_response_2_integration_db_order ':class=see-more')

### parse_from_api_response_2_integration_db_product 

> It transforms and returns the data of each product obtained from the platform to be integrated to be stored in 
> the intermediate data structure in OMNA.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_products](../webhooks/overview.md?id=get_products).
> * Action algorithms that makes the request to the api of the platform to integrate:
>   [do_get_products](../action-algorithms/do_get_products.md) or [do_get_product](../action-algorithms/do_get_product.md)
> * Data type where the transformed data will be stored: [DIProduct](../data-types/DIProduct.md).
>
> [[see more details]](parse_from_api_response_2_integration_db_product ':class=see-more')

### parse_from_api_response_2_integration_db_product_images 

> It transforms and returns the data of each product images obtained from the platform to be integrated to be stored in 
> the intermediate data structure in OMNA.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_products](../webhooks/overview.md?id=get_products).
> * Action algorithms that makes the request to the api of the platform to integrate:
>   [do_get_products](../action-algorithms/do_get_products.md) or [do_get_product](../action-algorithms/do_get_product.md)
> * Data type where the transformed data will be stored: [DIImage](../data-types/DIImage.md).
>
> [[see more details]](parse_from_api_response_2_integration_db_product_images ':class=see-more')

### parse_from_api_response_2_integration_db_property 

> It transforms and returns the data of each product property obtained from the platform to be integrated to be stored in 
> the intermediate data structure in OMNA.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_category_attrs](../webhooks/overview.md?id=get_category_attrs).
> * Action algorithm that makes the request to the api of the platform to integrate:
>   [do_get_properties](../action-algorithms/do_get_properties.md).
> * Data type where the transformed data will be stored: [DICategory](../data-types/DICategory.md).
>
> [[see more details]](parse_from_api_response_2_integration_db_property ':class=see-more')

### parse_from_api_response_2_integration_db_variant_images 

> It transforms and returns the data of each product variant images obtained from the platform to be integrated to be stored in 
> the intermediate data structure in OMNA.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_products](../webhooks/overview.md?id=get_products).
> * Action algorithms that makes the request to the api of the platform to integrate:
>   [do_get_products](../action-algorithms/do_get_products.md) or [do_get_product](../action-algorithms/do_get_product.md)
> * Data type where the transformed data will be stored: [DIImage](../data-types/DIImage.md).
>
> [[see more details]](parse_from_api_response_2_integration_db_variant_images ':class=see-more')

### parse_from_api_response_2_integration_db_variants 

> It transforms and returns the data of each product variant obtained from the platform to be integrated to be stored in 
> the intermediate data structure in OMNA.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_products](../webhooks/overview.md?id=get_products).
> * Action algorithms that makes the request to the api of the platform to integrate:
>   [do_get_products](../action-algorithms/do_get_products.md) or [do_get_product](../action-algorithms/do_get_product.md)
> * Data type where the transformed data will be stored: [DIVariant](../data-types/DIVariant.md).
>
> [[see more details]](parse_from_api_response_2_integration_db_variants ':class=see-more')


## Parsers from integration db

In these algorithms, the origin of the information will always be a record of an intermediate [data type](../data-types/overview.md).

Note that all these algorithms have the prefix "**parse_from_integration_db_2_**" in their names.

### parse_from_integration_db_2_ecapi_response_product_properties 

> Build and returns the property lists to conform the details of a product in an integration.
>
> [[see more details]](parse_from_integration_db_2_ecapi_response_product_properties ':class=see-more')

### parse_from_integration_db_2_ecapi_response_variant_properties 

> Build and returns the property lists to conform the details of a product variant in an integration.
>
> [[see more details]](parse_from_integration_db_2_ecapi_response_variant_properties ':class=see-more')

### parse_from_integration_db_2_omna_db_order 

> Map the order data from record of [DIOrder](../data-types/DIOrder.md) to [OMNAv2::Order](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Order).
>
> [[see more details]](parse_from_integration_db_2_omna_db_order ':class=see-more')

### parse_from_integration_db_2_omna_db_order_address 

> Map the order shipping and billing address data from record of [DIOrder](../data-types/DIOrder.md) to [OMNAv2::Order](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Order).
>
> [[see more details]](parse_from_integration_db_2_omna_db_order_address ':class=see-more')

### parse_from_integration_db_2_omna_db_order_line_items 

> Map the order items data from record of [DIOrder](../data-types/DIOrder.md) to [OMNAv2::Order](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Order).
>
> [[see more details]](parse_from_integration_db_2_omna_db_order_line_items ':class=see-more')

### parse_from_integration_db_2_omna_db_product 

> Map the product data from record of [DIProduct](../data-types/DIProduct.md) to [OMNAv2::Product](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Product).
>
> [[see more details]](parse_from_integration_db_2_omna_db_product ':class=see-more')

### parse_from_integration_db_2_omna_db_variant 

> Map the product variant data from record of [DIVariant](../data-types/DIVariant.md) to [OMNAv2::Variant](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Variant).
>
> [[see more details]](parse_from_integration_db_2_omna_db_variant ':class=see-more')


## Parsers from omna db

In these algorithms, the origin of the information will always be a record of 
a [omna data type](https://cenit.io/json_data_type?f[namespace][99061][v]=OMNAv2).

Note that all these algorithms have the prefix "**parse_from_omna_db_2_**" in their names.

### parse_from_omna_db_2_integration_db_product 

> Map the product data from record of [OMNAv2::Product](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Product) to [DIProduct](../data-types/DIProduct.md)
>
> [[see more details]](parse_from_omna_db_2_integration_db_product ':class=see-more')

### parse_from_omna_db_2_integration_db_variant 

> Map the product variant data from record of [OMNAv2::Product](https://cenit.io/json_data_type?f[namespace][24075][v]=OMNAv2&f[name][24160][o]=is&f[name][24160][v]=Variant) to [DIVariant](../data-types/DIVariant.md)
>
> [[see more details]](parse_from_omna_db_2_integration_db_variant ':class=see-more')

