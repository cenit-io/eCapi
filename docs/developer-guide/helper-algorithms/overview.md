# Helper algorithms:

These are predefined algorithms that facilitate obtaining and configuring some useful or necessary resources for the
development of an integration for a new platform.

You can see this algorithms by entering [here](https://cenit.io/algorithm?f[name][40703][o]=starts_with&f[name][40703][v]=h_do_&f[namespace][40840][v]=OMNAv2).

## Predefined algorithms that you can use: {docsify-ignore}

## h_do_generate_hmac:

> This algorithm allows calculating the hmac of a hash or a record of a data type.
>
> [[see more details]](h_do_generate_hmac ':class=see-more')

## h_do_get_already_active_task:

> Returns, if it exists, the task that meets the following conditions:
> 
> * Corresponds to an asynchronous execution of the given algorithm.
> * Status is pending or running.
> * It was invoked with exactly the same parameters given.
> 
> It is useful to avoid unnecessary execution of tasks that produce the same result.
>
> [[see more details]](h_do_get_already_active_task ':class=see-more')

## h_do_get_available_channels:

> Returns the list of all available integration channels.
>
> [[see more details]](h_do_get_available_channels ':class=see-more')

## h_do_get_available_webhooks:

> Returns the list of all available webhook types.
>
> [[see more details]](h_do_get_available_webhooks ':class=see-more')

## h_do_get_available_workflows:

> Returns the list of all available workflow types.
>
> [[see more details]](h_do_get_available_workflows ':class=see-more')

## h_do_get_properties_definition:

> Returns the definition of the properties for products or variants of a category in an integration.
>
> [[see more details]](h_do_get_properties_definition ':class=see-more')

## h_do_notify:

> Create a system notification.
>
> [[see more details]](h_do_notify ':class=see-more')

## h_do_require_algorithm:

> Search and returns an algorithm by its name and integration channel.
> 
> The algorithm searches 1st in the namespace of the provided channel, if it is not found, it will search, 
> only if applicable, in the main namespace of the integration.
> 
> If the resource is not found an exception is thrown.
>
> [[see more details]](h_do_require_algorithm ':class=see-more')

## h_do_require_collection_installed:

> TODO: Description...
>
> [[see more details]](h_do_require_collection_installed ':class=see-more')

## h_do_require_collection_shared:

> TODO: Description...
>
> [[see more details]](h_do_require_collection_shared ':class=see-more')

## h_do_require_connection:

> Search and returns an connection by its name and integration channel.
> 
> The connection searches 1st in the namespace of the provided channel, if it is not found, it will search, 
> only if applicable, in the main namespace of the integration.
> 
> If the resource is not found an exception is thrown.
>
> [[see more details]](h_do_require_connection ':class=see-more')

## h_do_require_integration:

> TODO: Description...
>
> [[see more details]](h_do_require_integration ':class=see-more')

## h_do_require_order:

> TODO: Description...
>
> [[see more details]](h_do_require_order ':class=see-more')

## h_do_require_product:

> TODO: Description...
>
> [[see more details]](h_do_require_product ':class=see-more')

## h_do_require_variant:

> TODO: Description...
>
> [[see more details]](h_do_require_variant ':class=see-more')

## h_do_require_webhook:

> Search and returns an webhook by its name and integration channel.
> 
> The webhook searches 1st in the namespace of the provided channel, if it is not found, it will search, 
> only if applicable, in the main namespace of the integration.
> 
> The webhook found is assigned the connection and the authorization corresponding to the given integration.
> 
> If the resource is not found an exception is thrown.
>
> [[see more details]](h_do_require_webhook ':class=see-more')

## h_do_set_asynchronous_task:

> TODO: Description...
>
> [[see more details]](h_do_set_asynchronous_task ':class=see-more')

