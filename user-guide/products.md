> Products are the core concept of all e-commerce sites. In ecapi, as many others e-commerce system has 3 other concept related with the product:
Category, Brand and Variants, also the product could belong to many other e-commerce integrations. Currently the main source of products are the e-commerce integration, and the creation, update, removal and link through ecapi are in beta state.

## 1. Basic operations

> This basic operations are very simple. This operations work directly with the entity on ecapi. Do not affect entities on integrated e-commerce.

>[Create](//cenit-io.github.io/eCapi/api-spec/#operation/create_product_beta_)<div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> POST </div> /products </br> </br> 

> [Remove](//cenit-io.github.io/eCapi/api-spec/#operation/delete_product_beta_) <div style="background-color:#E27A7A; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> DELETE </div> /products/<b>{product_id}</b>

>[Update](//cenit-io.github.io/eCapi/api-spec/#operation/update_product_beta_) <div style="background-color:#248fB2; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> POST </div> /products/ <b> {product_id} </b>

>[Retrieve](//cenit-io.github.io/eCapi/api-spec/#operation/get_product_beta_) <div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /products/<b> {product_id} </b>

## 2. Link and unlink.

> Every product could be linked to one or more integrations or not linked with any integrated e-commerce. Those operations affect the link status of the product and also potencially affect the entity on remote e-commerce integrations.

>[Link](//cenit-io.github.io/eCapi/api-spec/#operation/#link_product_async_beta_)<div style="background-color:#9B708B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> PUT </div> /products/ <b>{product_id} </b>

>[Unlink](//cenit-io.github.io/eCapi/api-spec/#operation/#unlink_product_async_beta_)<div style="background-color:#E09D43; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> PATCH </div> /products/<b>{product_id}</b>

## 3. List and filter
>[List and filter products](//cenit-io.github.io/eCapi/api-spec/#operation/get_products_beta_)<div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /products </br></br>
It allows to get a paginated list of product, it has a lot of parameters to order, filter, paginate and an option to bring full information of records or not. For detailed information of all this parameters go [here](//cenit-io.github.io/eCapi/api-spec/#operation/get_products_beta_)

## 4. Variants.
>A variant of a product is basically the same product with some specified caracteristic. A product could have many variants, also a variant could be linked to many e-commerce integration. In order to manage the varians the following API are exposed:

>[Create](//cenit-io.github.io/eCapi/api-spec/#operation/create_variant_beta_)<div style="background-color:#248fB2; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> POST </div> /products/<b> {product_id} </b>/variants 

>[Remove](//cenit-io.github.io/eCapi/api-spec/#operation/delete_variant_beta_)<div style="background-color:#E27A7A; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> DELETE </div> /products/<b>{product_id}</b>/variants/<b>{variant_id}</b>

>[Update](//cenit-io.github.io/eCapi/api-spec/#operation/update_variant_beta_)<div style="background-color:#248fB2; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> POST </div> /products/<b>{product_id}</b>/variants/<b>{variant_id}</b>	

>[Retrieve](//cenit-io.github.io/eCapi/api-spec/#operation/get_variant_beta_)
> <div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /products/<b>{product_id}</b>/variants/<b>{variant_id}</b>

>[List and filter variants](//cenit-io.github.io/eCapi/api-spec/#operation/get_variants_beta_)<div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /products/<b>{product_id}</b>/variants </br> </br> It allows to get a paginated list of variants of a product, it has a lot of parameters to filter, order, paginate and an option to bring full information of records or not. For detailed information of all this parameters go [here](//cenit-io.github.io/eCapi/api-spec/#operation/get_variants_beta_)

>[Link](//cenit-io.github.io/eCapi/api-spec/#operation/#link_variant_beta_) <div style="background-color:#9B708B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> PUT </div> /products/{product_id}/<b>{product_id}</b>/variants/<b>{variant_id}</b>

>[Unlink](//cenit-io.github.io/eCapi/api-spec/#operation/#unlink_variant_async_beta_)<div style="background-color:#E09D43; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> PATCH </div> /products/<b>{product_id}</b>/variants/<b>{variant_id}</b>

## 5. Working on Integration.
> The following set of api operations are intended to operate directly on an integrated e-commerce. The ids used in parameters are the e-commerce system identifier.

>[Update a product](//cenit-io.github.io/eCapi/api-spec/#operation/#update_integration_product_beta_) <div style="background-color:#248fB2; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> POST </div> /integrations/<b>{integration_id}</b>/products/<b>{remote_product_id}</b>. 

>[Update a variant](//cenit-io.github.io/eCapi/api-spec/#operation/#update_integration_variant_beta_) <div style="background-color:#248fB2; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> POST </div> /integrations/<b>{integration_id}</b>/products/<b>{remote_product_id}</b>/variants/<b>{remote_variant_id}</b>. 

>[Retrieve a product](//cenit-io.github.io/eCapi/api-spec/#operation/#get_integration_product_beta_) <div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /integrations/<b>{integration_id}</b>/products/<b>{remote_product_id}</b>.

>[Retrieve a variant](//cenit-io.github.io/eCapi/api-spec/#operation/#get_integration_variant_beta_) <div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /integrations/<b>{integration_id}</b>/products/<b>{remote_product_id}</b>/variants/<b>{remote_variant_id}</b>.

>[List and filter products](//cenit-io.github.io/eCapi/api-spec/#operation/get_integration_products_beta_) <div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /integrations/<b>{integration_id}</b>/products </br></br>
It allows to get a paginated list of products of some integration, it has a lot of parameters to filter, order, paginate and an option to bring full information of records or not. For detailed information of all this parameters go [here](//cenit-io.github.io/eCapi/api-spec/#operation/get_integration_products_beta_)

>[List and filter variants](//cenit-io.github.io/eCapi/api-spec/#operation/get_integration_variants_beta_) <div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /integrations/<b>{integration_id}</b>/products/variants </br></br>
It allows to get a paginated list of variants of some integration, it has a lot of parameters to filter, order, paginate and an option to bring full information of records or not. For detailed information of all this parameters go [here](//cenit-io.github.io/eCapi/api-spec/#operation/get_integration_variants_beta_)

>[Unlink product](//cenit-io.github.io/eCapi/api-spec/#operation/#unlink_integration_product_async_beta_)<div style="background-color:#E09D43; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> PATCH </div> /integrations/<b>{integration_id}</b>/products/<b>{remote_product_id}</b>

>[Unlink variant](//cenit-io.github.io/eCapi/api-spec/#operation/#unlink_integration_variant_async_beta_)<div style="background-color:#E09D43; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> PATCH </div> /integrations/<b>{integration_id}</b>/products/<b>{remote_product_id}</b>/variants/<b>{remote_variant_id}</b>

>[Import product](//cenit-io.github.io/eCapi/api-spec/#operation/#import_integration_product_async_)<div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /integrations/<b>{integration_id}</b>/products/<b>{remote_product_id}</b>/import

>[Import product updates](//cenit-io.github.io/eCapi/api-spec/#operation/#import_products_async_)<div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /integrations/<b>{integration_id}</b>/products/import

## 6. Brands and Categories.
> Brands and categories are e-commerce concepts wich help to group products. Edge Connector App offer api services to handle this concepts.

>[Retrieve a brand](//cenit-io.github.io/eCapi/api-spec/#operation/#get_brand) <div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /integrations/<b>{integration_id}</b>/brands/<b>{brand_id}</b>.

>[Retrieve a category](//cenit-io.github.io/eCapi/api-spec/#operation/#get_category) <div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /integrations/<b>{integration_id}</b>/categories/<b>{category_id}</b>.

>[List and filter brands](//cenit-io.github.io/eCapi/api-spec/#operation/get_integration_brands) <div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /integrations/<b>{integration_id}</b>/brands</br></br>
It allows to get a paginated list of brands of some integration, it has a lot of parameters to filter, order, paginate and an option to bring full information of records or not. For detailed information of all this parameters go [here](//cenit-io.github.io/eCapi/api-spec/#operation/get_integration_brands)

>[List and filter categories](//cenit-io.github.io/eCapi/api-spec/#operation/get_integration_categories) <div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /integrations/<b>{integration_id}</b>/categories</br></br>
It allows to get a paginated list of categories of some integration, it has a lot of parameters to filter, order, paginate and an option to bring full information of records or not. For detailed information of all this parameters go [here](//cenit-io.github.io/eCapi/api-spec/#operation/get_integration_categories)

>[Import brand](//cenit-io.github.io/eCapi/api-spec/#operation/#import_brands_async_)<div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /integrations/<b>{integration_id}</b>/brand/import

>[Import category](//cenit-io.github.io/eCapi/api-spec/#operation/#import_categories_async_)<div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /integrations/<b>{integration_id}</b>/categories/import
