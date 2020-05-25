> Products are the core concept of all ecommerce site. In the omna api, as many others ecommerce system has 3 other concept related with the product:
Category, Brand and Variants, also the product could belong to many other integrations. 

## 1. Create a product
In order to [create a product](http://doc-api.omna.io/api-spec/#operation/create_product_beta_) yo must specify name and price, also a description and a package fields of the product for instance:

> <div border:3px solid brown;
   border-radius:22px;> POST </div> /products

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
A product could be removed only if the product is not associated to an integration.

> DELETE /products/<b>{product_id}</b>

More information [here](http://doc-api.omna.io/api-spec/#operation/delete_product_beta_)

Also a product could be updated:

> POST /products/ <b> {product_id} </b>

More information [here](http://doc-api.omna.io/api-spec/#operation/update_product_beta_)

> GET /products/<b> {product_id} </b>

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

More information [here](http://doc-api.omna.io/api-spec/#operation/get_product_beta_)

## 4. List and filter products.
You can [list and filter products](http://doc-api.omna.io/api-spec/#operation/get_products_beta_) 

> <div> GET </div> /products

It allows to get a paginated list of product, it has a lot of parameters to filter, order, paginate and an option to bring full information of records or not. For detailed information of all this parameters go [here](http://doc-api.omna.io/api-spec/#operation/get_products_beta_)


## 5. Link and unlink.

Every product could be linked to one or more integrations or not linked with any integration. In order to link to one or more integration use:

> PUT /products/ <b>{product_id} </b>

More information [here](http://doc-api.omna.io/api-spec/#link_product_async_beta_)

To unlink from one or more associations use:

PATCH /products/<b>{product_id}<b>

More information [here](http://doc-api.omna.io/api-spec/#unlink_product_async_beta_)


