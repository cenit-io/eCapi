# Parser algorithms

In these algorithms, are implemented the transformation logic of the information by mapping from source to destination.

It is very important that the algorithms described below be create with the exact same name assigned here and as a rule 
everyone has to have the prefix "**parse_**" in their name.

You can manage the algorithms by entering [here](https://cenit.io/algorithm).

## Parsers from core-api request

In these algorithms the origin of the information will always be the parameters received in a request to an eCAPI service.

Note that all these algorithms have the prefix "**parse_from_api_request_2_**" in their names.

### parse_from_api_request_2_di_product 

> It transforms and sets the data of the product properties, received from the **eCAPI service** be stored in 
> the intermediate data structure in core.
> 
> **Resources related with this parser:**
> 
> * eCAPI service to update the specific properties of a product: [Update Product Properties](//cenit-io.github.io/eCapi/api-spec/index.html#operation/update_integration_product_beta_).
> * Data type where the transformed data will be stored: [DIProduct](../data-types/DIProduct.md).
>
> [[see more details]](parse_from_api_request_2_di_product ':class=see-more')

### parse_from_api_request_2_di_variant 

> It transforms and sets the data of the product variant properties, received from the **eCAPI service** be stored in 
> the intermediate data structure in core.
> 
> **Resources related with this parser:**
> 
> * eCAPI service to update the specific properties of a product variant: [Update Variant Properties](//cenit-io.github.io/eCapi/api-spec/index.html#operation/update_integration_variant_beta_).
> * Data type where the transformed data will be stored: [DIVariant](../data-types/DIVariant.md).
>
> [[see more details]](parse_from_api_request_2_di_variant ':class=see-more')


## Parsers from remote-api response

In these algorithms, the origin of the information will always be the **response** obtained from a request to a API 
service of the platform to be integrated.

Note that all these algorithms have the prefix "**parse_from_api_response_2_**" in their names.

### parse_from_api_response_2_di_brand 

> It transforms and returns the data of each product brand obtained from the platform to be integrated to be stored in 
> the intermediate data structure in core.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_brands](../webhooks/overview.md?id=get_brands).
> * Action algorithm that makes the request to the api of the platform to integrate:
>   [do_get_categories](../action-algorithms/do_get_categories.md).
> * Data type where the transformed data will be stored: [DIBrand](../data-types/DIBrand.md).
>
> [[see more details]](parse_from_api_response_2_di_brand ':class=see-more')

### parse_from_api_response_2_di_category 

> It transforms and returns the data of each product category obtained from the platform to be integrated to be stored in 
> the intermediate data structure in core.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_categories](../webhooks/overview.md?id=get_categories).
> * Action algorithm that makes the request to the api of the platform to integrate:
>   [do_get_categories](../action-algorithms/do_get_categories.md).
> * Data type where the transformed data will be stored: [DICategory](../data-types/DICategory.md).
>
> [[see more details]](parse_from_api_response_2_di_category ':class=see-more')

### parse_from_api_response_2_di_logistic 

> It transforms and returns the data of each logistic obtained from the platform to be integrated to be stored in 
> the intermediate data structure in core.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_logistics](../webhooks/overview.md?id=get_logistics).
> * Action algorithm that makes the request to the api of the platform to integrate:
>   [do_get_logistics](../action-algorithms/do_get_logistics.md).
> * Data type where the transformed data will be stored: [DILogistic](../data-types/DILogistic.md).
>
> [[see more details]](parse_from_api_response_2_di_logistic ':class=see-more')

### parse_from_api_response_2_di_order 

> It transforms and returns the data of each order obtained from the platform to be integrated to be stored in 
> the intermediate data structure in core.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_orders](../webhooks/overview.md?id=get_orders).
> * Action algorithms that makes the request to the api of the platform to integrate:
>   [do_get_orders](../action-algorithms/do_get_orders.md) or [do_get_order](../action-algorithms/do_get_order.md)
> * Data type where the transformed data will be stored: [DIOrder](../data-types/DIOrder.md).
>
> [[see more details]](parse_from_api_response_2_di_order ':class=see-more')

### parse_from_api_response_2_di_product 

> It transforms and returns the data of each product obtained from the platform to be integrated to be stored in 
> the intermediate data structure in core.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_products](../webhooks/overview.md?id=get_products).
> * Action algorithms that makes the request to the api of the platform to integrate:
>   [do_get_products](../action-algorithms/do_get_products.md) or [do_get_product](../action-algorithms/do_get_product.md)
> * Data type where the transformed data will be stored: [DIProduct](../data-types/DIProduct.md).
>
> [[see more details]](parse_from_api_response_2_di_product ':class=see-more')

### parse_from_api_response_2_di_product_images 

> It transforms and returns the data of each product images obtained from the platform to be integrated to be stored in 
> the intermediate data structure in core.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_products](../webhooks/overview.md?id=get_products).
> * Action algorithms that makes the request to the api of the platform to integrate:
>   [do_get_products](../action-algorithms/do_get_products.md) or [do_get_product](../action-algorithms/do_get_product.md)
> * Data type where the transformed data will be stored: [DIImage](../data-types/DIImage.md).
>
> [[see more details]](parse_from_api_response_2_di_product_images ':class=see-more')

### parse_from_api_response_2_di_property 

> It transforms and returns the data of each product property obtained from the platform to be integrated to be stored in 
> the intermediate data structure in core.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_category_attrs](../webhooks/overview.md?id=get_category_attrs).
> * Action algorithm that makes the request to the api of the platform to integrate:
>   [do_get_properties](../action-algorithms/do_get_properties.md).
> * Data type where the transformed data will be stored: [DICategory](../data-types/DICategory.md).
>
> [[see more details]](parse_from_api_response_2_di_property ':class=see-more')

### parse_from_api_response_2_di_variant 

> It transforms and returns the data of each product variant  obtained from the platform to be integrated to be stored in 
> the intermediate data structure in core.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_products](../webhooks/overview.md?id=get_products).
> * Action algorithms that makes the request to the api of the platform to integrate:
>   [do_get_products](../action-algorithms/do_get_products.md) or [do_get_product](../action-algorithms/do_get_product.md)
> * Data type where the transformed data will be stored: [DIVariant](../data-types/DIVariant.md).
>
> [[see more details]](parse_from_api_response_2_di_variant ':class=see-more')

### parse_from_api_response_2_di_variant_images 

> It transforms and returns the data of each product variant images obtained from the platform to be integrated to be stored in 
> the intermediate data structure in core.
> 
> **Resources related with this parser:**
> 
> * Webhook from which the data is obtained: [get_products](../webhooks/overview.md?id=get_products).
> * Action algorithms that makes the request to the api of the platform to integrate:
>   [do_get_products](../action-algorithms/do_get_products.md) or [do_get_product](../action-algorithms/do_get_product.md)
> * Data type where the transformed data will be stored: [DIImage](../data-types/DIImage.md).
>
> [[see more details]](parse_from_api_response_2_di_variant_images ':class=see-more')


## Parsers from DI data types records

In these algorithms, the origin of the information will always be a record of an intermediate [data type](../data-types/overview.md).

Note that all these algorithms have the prefix "**parse_from_di_2_**" in their names.

### parse_from_di_2_api_request_product 

> Transforms and returns the data of a product from its intermediate data structure in core to be send the
> the remote platform to be integrated.
> 
> **Resources related with this parser:**
> 
> * Data type corresponding to the source of the product to be transformed: [DIProduct](../data-types/DIProduct.md).
> * Action algorithm that performs and processes the submit of the data:
>   [do_create_product](../action-algorithms/do_create_product.md) or [do_update_product](../action-algorithms/do_update_product.md).
> * Webhook through which data is sent: [create_product](../webhooks/overview.md?id=create_product) or [update_product](../webhooks/overview.md?id=update_product).
> 
>
> [[see more details]](parse_from_di_2_api_request_product ':class=see-more')

### parse_from_di_2_api_request_variant 

> Transforms and returns the data of a product variant from its intermediate data structure in core to be send the
> the remote platform to be integrated.
> 
> **Resources related with this parser:**
> 
> * Data type corresponding to the source of the product variant to be transformed: [DIVariant](../data-types/DIVariant.md).
> * Action algorithm that performs and processes the submit of the data:
>   [do_create_variant](../action-algorithms/do_create_variant.md) or [do_update_variant](../action-algorithms/do_update_variant.md).
> * Webhook through which data is sent: [create_variant](../webhooks/overview.md?id=create_variant) or [update_variant](../webhooks/overview.md?id=update_variant).
> 
>
> [[see more details]](parse_from_di_2_api_request_variant ':class=see-more')

### parse_from_di_2_ecapi_response_product_properties 

> Build and returns the property lists to conform the details of a product in an integration.
> 
> **Resources related with this parser:**
> 
> * eCAPI service to get product details: [Retrieve a Product](//cenit-io.github.io/eCapi/api-spec/index.html#operation/get_product_beta_).
> * Data type that stores the product details for an integration: [DIProduct](../data-types/DIProduct.md).
> * Data type that stores the product properties definition: [DICategory](../data-types/DICategory.md).
>
> [[see more details]](parse_from_di_2_ecapi_response_product_properties ':class=see-more')

### parse_from_di_2_ecapi_response_variant_properties 

> Build and returns the property lists to conform the details of a product variant in an integration.
> 
> **Resources related with this parser:**
> 
> * eCAPI service to get product variant details: [Retrieve a Product Variant](//cenit-io.github.io/eCapi/api-spec/index.html#operation/get_variant_beta_).
> * Data type that stores the product variant details for an integration: [DIVariant](../data-types/DIVariant.md).
> * Data type that stores the product variant properties definition: [DICategory](../data-types/DICategory.md).
>
> [[see more details]](parse_from_di_2_ecapi_response_variant_properties ':class=see-more')

### parse_from_di_2_core_base_authorization 

> Returns the custom data, usually the template parameters, that will be used to create the authorization 
> associated with the integration.
> 
> **Resources related with this parser:**
> 
> * Integration data type: [eCore::Integration](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Integration).
> * Authorization: [Authorization base template](../developer-guide/authorization).
>
> [[see more details]](parse_from_di_2_core_base_authorization ':class=see-more')

### parse_from_di_2_core_order 

> Transforms and returns the data of an order from its intermediate data structure in core to be stored 
> in the general data structure of orders in core.
> 
> **Resources related with this parser:**
> 
> * Data type corresponding to the source of the order to be transformed: [DIOrder](../data-types/DIOrder.md).
> * Data type where the transformed data will be stored: [eCore::Order](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Order).
>
> [[see more details]](parse_from_di_2_core_order ':class=see-more')

### parse_from_di_2_core_order_address 

> Transforms and returns the data of shipping and billing address of an order from its intermediate data structure in core to be stored 
> in the general data structure of orders in core.
> 
> **Resources related with this parser:**
> 
> * Data type corresponding to the source of the order to be transformed: [DIOrder](../data-types/DIOrder.md).
> * Data type where the transformed data will be stored: [eCore::Order](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Order).
>
> [[see more details]](parse_from_di_2_core_order_address ':class=see-more')

### parse_from_di_2_core_order_line_items 

> Transforms and returns the data of the order items from its intermediate data structure in core to be stored 
> in the general data structure of orders in core.
> 
> **Resources related with this parser:**
> 
> * Data type corresponding to the source of the order to be transformed: [DIOrder](../data-types/DIOrder.md).
> * Data type where the transformed data will be stored: [eCore::Order](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Order).
>
> [[see more details]](parse_from_di_2_core_order_line_items ':class=see-more')

### parse_from_di_2_core_product 

> Transforms and returns the data of a product from its intermediate data structure in core to be stored
> in the general data structure of products in core.
> 
> **Resources related with this parser:**
> 
> * Data type corresponding to the source of the product to be transformed: [DIProduct](../data-types/DIProduct.md).
> * Data type where the transformed data will be stored: [eCore::Product](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Product).
>
> [[see more details]](parse_from_di_2_core_product ':class=see-more')

### parse_from_di_2_core_variant 

> Transforms and returns the data of a product variant from its intermediate data structure in core to be stored
> in the general data structure of variants in core.
> 
> **Resources related with this parser:**
> 
> * Data type corresponding to the source of the product variant to be transformed: [DIVariant](../data-types/DIVariant.md).
> * Data type where the transformed data will be stored: [eCore::Variant](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Variant).
>
> [[see more details]](parse_from_di_2_core_variant ':class=see-more')


## Parsers from eCore data types records

In these algorithms, the origin of the information will always be a record of 
a [core data type](https://cenit.io/json_data_type?f[namespace][99061][v]=eCore).

Note that all these algorithms have the prefix "**parse_from_core_2_**" in their names.

### parse_from_core_2_api_request_order 

> Transforms and returns the data of an order registered in core to be exported to the remote platform to be integrated.
> 
> **Resources related with this parser:**
> 
> * Data type corresponding to the source of the order to be transformed: 
>   [eCore::Order](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Order).
> * Action algorithm to export the order: 
>   [do_create_order](../action-algorithms/do_create_order.md) or 
>   [do_update_order](../action-algorithms/do_update_order.md).
> * Webhook to export the order:
>   [create_order](../webhooks/overview?id=create_order) or 
>   [update_order](../webhooks/overview?id=update_order).
> 
>
> [[see more details]](parse_from_core_2_api_request_order ':class=see-more')

### parse_from_core_2_api_request_order_address 

> Transforms and returns the data of shipping and billing address of an order registered in core to be exported 
> to the remote platform to be integrated.
> 
> **Resources related with this parser:**
> 
> * Parser: [parse_from_core_2_api_request_order](../parser-algorithms/parse_from_core_2_api_request_order.md).
> 
>
> [[see more details]](parse_from_core_2_api_request_order_address ':class=see-more')

### parse_from_core_2_api_request_order_line_items 

> Transforms and returns the data of order items of an order registered in core to be exported 
> to the remote platform to be integrated.
> 
> **Resources related with this parser:**
> 
> * Parser: [parse_from_core_2_api_request_order](../parser-algorithms/parse_from_core_2_api_request_order.md).
> 
>
> [[see more details]](parse_from_core_2_api_request_order_line_items ':class=see-more')

### parse_from_core_2_di_product 

> Transforms and returns the data of a product from its general data structure of products in core to be stored 
> in the intermediate data structure in core.
> 
> **Resources related with this parser:**
> 
> * Data type corresponding to the source of the product to be transformed: [eCore::Product](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Product).
> * Data type where the transformed data will be stored: [DIProduct](../data-types/DIProduct.md).
>
> [[see more details]](parse_from_core_2_di_product ':class=see-more')

### parse_from_core_2_di_variant 

> Transforms and returns the data of a product variant from its general data structure of variants in core to be stored 
> in the intermediate data structure in core.
> 
> **Resources related with this parser:**
> 
> * Data type corresponding to the source of the product variant to be transformed: [eCore::Variant](https://cenit.io/json_data_type?f[namespace][24075][v]=eCore&f[name][24160][o]=is&f[name][24160][v]=Variant).
> * Data type where the transformed data will be stored: [DIVariant](../data-types/DIVariant.md).
>
> [[see more details]](parse_from_core_2_di_variant ':class=see-more')

