# Action algorithms

In these algorithms, are implemented the configuration and logic of information exchange, to send or request the information
to or from the platform to be integrate, consuming the [webhooks](../webhooks/overview.md) defined for this integration.

It is very important that the algorithms described below be create with the exact same name assigned here and as a rule 
everyone has to have the prefix "**do_**" in their name.

You can manage the algorithms by entering [here](https://cenit.io/algorithm).

## Algorithms that should be created{docsify-ignore}

## do_after_authorize

> Allows validate the authorization and start some processes after successful authorization.
>
> [[see more details]](do_after_authorize ':class=see-more')

## do_authorization_callback

> Allows set the template parameters of the authorization from the callback params in a callback authorization.
>
> [[see more details]](do_authorization_callback ':class=see-more')

## do_authorization_params_signer

> Allows signing the parameters sent in the request for an authorization.
>
> [[see more details]](do_authorization_params_signer ':class=see-more')

## do_cancel_order

> Allows submitting a request to the remote integration platform to cancel an order.
>
> [[see more details]](do_cancel_order ':class=see-more')

## do_delete_remote_product

> Allows submitting a request to the remote integration platform to remove a product.
>
> [[see more details]](do_delete_remote_product ':class=see-more')

## do_export_image

> Allows submitting a request to the remote integration platform to publish an image.
>
> [[see more details]](do_export_image ':class=see-more')

## do_export_order_create

> Allows submitting a request to the remote integration platform to create an order.
>
> [[see more details]](do_export_order_create ':class=see-more')

## do_export_order_update

> Allows submitting a request to the remote integration platform to update an order.
>
> [[see more details]](do_export_order_update ':class=see-more')

## do_export_product_create

> Allows submitting a request to the remote integration platform to create a product.
>
> [[see more details]](do_export_product_create ':class=see-more')

## do_export_product_update

> Allows submitting a request to the remote integration platform to update a product.
>
> [[see more details]](do_export_product_update ':class=see-more')

## do_get_brands

> Allows submitting a request to the remote integration platform to get the product brands.
>
> [[see more details]](do_get_brands ':class=see-more')

## do_get_categories

> Allows submitting a request to the remote integration platform to get the product categories.
>
> [[see more details]](do_get_categories ':class=see-more')

## do_get_integration_metadata

> Allows submitting a request to the remote integration platform to get its metadata.
>
> [[see more details]](do_get_integration_metadata ':class=see-more')

## do_get_order

> Allows submitting a request to the remote integration platform to get an order.
>
> [[see more details]](do_get_order ':class=see-more')

## do_get_order_document

> Allows submitting a request a request to the remote integration platform to get an order document.
>
> [[see more details]](do_get_order_document ':class=see-more')

## do_get_order_document_types

> Returns the possible types of order documents available.
>
> [[see more details]](do_get_order_document_types ':class=see-more')

## do_get_orders

> Allows submitting a request to the remote integration platform to get the orders.
>
> [[see more details]](do_get_orders ':class=see-more')

## do_get_product

> Allows submitting a request to the remote integration platform to get an product.
>
> [[see more details]](do_get_product ':class=see-more')

## do_get_products

> Allows submitting a request to the remote integration platform to get the products.
>
> [[see more details]](do_get_products ':class=see-more')

## do_get_properties

> Allows submitting a request to the remote integration platform to get the product properties.
>
> [[see more details]](do_get_properties ':class=see-more')

## do_get_settings

> Returns the available integration settings with its available channels.
>
> [[see more details]](do_get_settings ':class=see-more')

## do_import_logistics

> Allows submitting a request to the remote integration platform to get and import the logistics.
>
> [[see more details]](do_import_logistics ':class=see-more')

