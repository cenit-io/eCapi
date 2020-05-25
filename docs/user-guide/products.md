> Products are the core concept of all e-commerce sites. In the omna api, as many others e-commerce system has 3 other concept related with the product:
Category, Brand and Variants, also the product could belong to many other e-commerce integrations. Currently the main source of products are the e-commerce integration, and the creation, update, removal and link through OMNA API are in beta state.

## 1. Create a product
In order to [create a product](http://doc-api.omna.io/api-spec/#operation/create_product_beta_) yo must specify name and price, also a description and a package fields of the product for instance:

> <div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> POST </div> /products

```json
	{
		"data": {
				"name": "IPod Nano - 4GB",
				"desciption": "IPod Nano - 4GB ...",
				"price": 159,
				"package": {
							"weight": 1,
							"height": 1,
							"length": 1,
							"width": 1,
							}
				}
	}
```

## 2. Remove, update and retrieve 
This operations are very simple and can be done by the following apis:

- [Remove](http://doc-api.omna.io/api-spec/#operation/delete_product_beta_)
> <div style="background-color:#E27A7A; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> DELETE </div> /products/<b>{product_id}</b>

- [Update](http://doc-api.omna.io/api-spec/#operation/update_product_beta_)
> <div style="background-color:#248fB2; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> POST </div> /products/ <b> {product_id} </b>

- [Retrieve](http://doc-api.omna.io/api-spec/#operation/get_product_beta_)
> <div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /products/<b> {product_id} </b>

It gets the product informacion, the result is a json with full information of the product.

```json
	{
	"type": "product",
	"data": {
			"id": "5e98e0eb25d98575bc04bad1",
			"name": "TESTING (DO NOT BUY)- Baby One Suit",
			"description": "<p><strong>(TEST - DO NOT BUY)</strong></p> <p>...</p>",
			"price": 10,
			"package": {},
			"integrations": [],
			"images": [],
			"variants": 1,
			"created_at": "2020-04-16T22:49:15+00:00",
			"updated_at": "2020-04-16T22:49:15+00:00"
			}
	}
```

## 4. Link and unlink.

Every product could be linked to one or more integrations or not linked with any integration. 

- [Link](http://doc-api.omna.io/api-spec/#operation/#link_product_async_beta_)
> <div style="background-color:#9B708B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> PUT </div> /products/ <b>{product_id} </b>

- [Unlink](http://doc-api.omna.io/api-spec/#operation/#unlink_product_async_beta_)
> <div style="background-color:#E09D43; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> PATCH </div> /products/<b>{product_id}</b>



## 5. List and filter products.
You can [list and filter products](http://doc-api.omna.io/api-spec/#operation/get_products_beta_) 

> <div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /products

It allows to get a paginated list of product, it has a lot of parameters to filter, order, paginate and an option to bring full information of records or not. For detailed information of all this parameters go [here](http://doc-api.omna.io/api-spec/#operation/get_products_beta_)

## 6. Variants.

A variant of a product is basically the same product with some specified caracteristic. A product could have many variants, also a variant could be linked to many e-commerce integration. In order to manage the varians the following API are exposed:

- [Create](http://doc-api.omna.io/api-spec/#operation/create_variant_beta_)
> <div style="background-color:#248fB2; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> POST </div> /products/<b> {product_id} </b>/variants 

- [Remove](http://doc-api.omna.io/api-spec/#operation/delete_variant_beta_)
> <div style="background-color:#E27A7A; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> DELETE </div> /products/<b>{product_id}</b>/variants/<b>{variant_id}</b>

- [Update](http://doc-api.omna.io/api-spec/#operation/update_variant_beta_)
> <div style="background-color:#248fB2; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> POST </div> /products/<b>{product_id}</b>/variants/<b>{variant_id}</b>

- [Retrieve](http://doc-api.omna.io/api-spec/#operation/get_variant_beta_)
> <div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /products/<b>{product_id}</b>/variants/<b>{variant_id}</b>

- [List and filter variants](http://doc-api.omna.io/api-spec/#operation/get_variants_beta_) 
> <div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> /products/<b>{product_id}</b>/variants

It allows to get a paginated list of variants of a product, it has a lot of parameters to filter, order, paginate and an option to bring full information of records or not. For detailed information of all this parameters go [here](http://doc-api.omna.io/api-spec/#operation/get_variants_beta_)





