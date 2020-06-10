# Webhooks

The webhooks represent the web API services of the platform to be integrated.

It is very important that the webhooks described below be create with the exact same name assigned here. This will 
save you work later in creating the [action algorithms](../action-algorithms/overview.md).

It is not necessary to define a webhook for each service provided by the API, only those described below must be defined.
Depending on the services provided by the API of the platform to be integrated, it will be necessary or not to define 
some extra webhooks to complete the necessary information flow.

You can manage the connections by entering [here](https://cenit.io/plain_webhook).

## Webhooks that should be created{docsify-ignore}

### cancel_order 

> It consists of the configuration, relative route and parameters, to consume the **order cancellation** service on the
> platform to be integrated.
> 
> This webhook, already configured with the [connection](../connection.md) and [authorization](../authorization.md) 
> corresponding to the integration instance in process, will be the one received by parameter in the 
> action algorithm [do_cancel_order](../action-algorithms/do_cancel_order.md).

### create_order 

> It consists of the configuration, relative route and parameters, to consume the **order creation** service on the
> platform to be integrated.
> 
> This webhook, already configured with the [connection](../connection.md) and [authorization](../authorization.md) 
> corresponding to the integration instance in process, will be the one received by parameter in the 
> action algorithm [do_create_order](../action-algorithms/do_create_order.md).

### create_product 

> It consists of the configuration, relative route and parameters, to consume the **product creation** service on the
> platform to be integrated.
> 
> This webhook, already configured with the [connection](../connection.md) and [authorization](../authorization.md) 
> corresponding to the integration instance in process, will be the one received by parameter in the 
> action algorithm [do_create_product](../action-algorithms/do_create_product.md).

### create_variant 

> TODO: Description...

### delete_product 

> It consists of the configuration, relative route and parameters, to consume the **delete product** service on the
> platform to be integrated.
> 
> This webhook, already configured with the [connection](../connection.md) and [authorization](../authorization.md) 
> corresponding to the integration instance in process, will be the one received by parameter in the 
> action algorithm [do_delete_remote_product](../action-algorithms/do_delete_remote_product.md).

### get_brands 

> It consists of the configuration, relative route and parameters, to consume the service to **get all brands** 
> on the platform to be integrated.
> 
> This webhook is required only when the platform to be integrated have predefined brands to the products.
> 
> This webhook, already configured with the [connection](../connection.md) and [authorization](../authorization.md) 
> corresponding to the integration instance in process, will be the one received by parameter in the 
> action algorithm [do_get_brands](../action-algorithms/do_get_brands.md).

### get_categories 

> It consists of the configuration, relative route and parameters, to consume the service to **get all categories** 
> on the platform to be integrated.
> 
> This webhook is required only when the platform to be integrated organizes the products by categories.
> 
> This webhook, already configured with the [connection](../connection.md) and [authorization](../authorization.md) 
> corresponding to the integration instance in process, will be the one received by parameter in the 
> action algorithm [do_get_categories](../action-algorithms/do_get_categories.md).

### get_category_attrs 

> It consists of the configuration, relative route and parameters, to consume the service to
> **get the attrs of a category** on the platform to be integrated.
> 
> This webhook is required only when the platform to be integrated organizes the products by categories and these have
> custom attributes related to the associated category.

### get_integration_metadata 

> It consists of the configuration, relative route and parameters, to consume the service to **get user or shop metadata** 
> on the platform to be integrated.
> 
> This webhook is normally used in authorization validation in the action algorithm
> [do_after_authorize](../action-algorithms/do_after_authorize.md).

### get_order 

> It consists of the configuration, relative route and parameters, to consume the service to **get an order** on the
> platform to be integrated.
> 
> This webhook, already configured with the [connection](../connection.md) and [authorization](../authorization.md) 
> corresponding to the integration instance in process, will be the one received by parameter in the 
> action algorithm [do_get_order](../action-algorithms/do_get_order.md).

### get_order_document 

> It consists of the configuration, relative route and parameters, to consume the service to **get an order document** 
> on the platform to be integrated.
> 
> This webhook, already configured with the [connection](../connection.md) and [authorization](../authorization.md) 
> corresponding to the integration instance in process, will be the one received by parameter in the 
> action algorithm [do_get_order_document](../action-algorithms/do_get_order_document.md).

### get_orders 

> It consists of the configuration, relative route and parameters, to consume the service to **get orders** on the
> platform to be integrated.
> 
> This webhook, already configured with the [connection](../connection.md) and [authorization](../authorization.md) 
> corresponding to the integration instance in process, will be the one received by parameter in the 
> action algorithm [do_get_orders](../action-algorithms/do_get_orders.md).

### get_product 

> It consists of the configuration, relative route and parameters, to consume the service to **get a product** on the
> platform to be integrated.
> 
> This webhook, already configured with the [connection](../connection.md) and [authorization](../authorization.md) 
> corresponding to the integration instance in process, will be the one received by parameter in the 
> action algorithm [do_get_product](../action-algorithms/do_get_product.md).

### get_products 

> It consists of the configuration, relative route and parameters, to consume the service to **get products** on the
> platform to be integrated.
> 
> This webhook, already configured with the [connection](../connection.md) and [authorization](../authorization.md) 
> corresponding to the integration instance in process, will be the one received by parameter in the 
> action algorithm [do_get_products](../action-algorithms/do_get_products.md).

### update_order 

> It consists of the configuration, relative route and parameters, to consume the **order update** service on the
> platform to be integrated.
> 
> This webhook, already configured with the [connection](../connection.md) and [authorization](../authorization.md) 
> corresponding to the integration instance in process, will be the one received by parameter in the 
> action algorithm [do_update_order](../action-algorithms/do_update_order.md).

### update_product 

> It consists of the configuration, relative route and parameters, to consume the **product update** service on the
> platform to be integrated.
> 
> This webhook, already configured with the [connection](../connection.md) and [authorization](../authorization.md) 
> corresponding to the integration instance in process, will be the one received by parameter in the 
> action algorithm [do_update_product](../action-algorithms/do_update_product.md).

### update_variant 

> TODO: Description...

### upload_image 

> It consists of the configuration, relative route and parameters, to consume the **upload image** service on the
> platform to be integrated.

