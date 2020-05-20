# webhooks:

The webhooks represent the web API services of the platform to be integrated.

It is very important that the webhooks described below are created with the exact same name assigned here. This will 
save you work later in creating the [action algorithms](../action-algorithms/overview.md).

It is not necessary to define a webhook for each service provided by the API, only those described below must be defined.
Depending on the services provided by the API of the platform to be integrated, it will be necessary or not to define 
some extra webhooks to complete the necessary information flow.

You can manage the connections by entering [here](https://cenit.io/plain_webhook).

## Webhooks that should be created:

### cancel_order: 

  > Cancel an order

### delete_product: 

  > Delete a product

### get_brands: 

  > Returns the brands list

### get_categories: 

  > Returns the categories list

### get_category_attrs: 

  > Returns the definition of attributes of a given product category

### get_integration_metadata: 

  > Returns the shop metadata

### get_order: 

  > Returns the order information

### get_order_document: 

  > Returns the order-related documents

### get_order_items: 

  > Returns the order items list

### get_orders: 

  > Returns the orders list

### get_product: 

  > Returns the product information

### get_products: 

  > Returns the products list

### upload_image: 

  > Migrate a single image from an external site to Lazada site.
Allowed image formats are JPG and PNG.
The maximum size of an image file is 1MB.

