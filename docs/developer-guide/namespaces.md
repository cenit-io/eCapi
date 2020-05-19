# Integration namespaces:

Create the **`main namespace`** of the integration, with **`Ov2`** as the prefix of the name, remaining as follows **`Ov2Anyone`**.

In this namespace you must define the general resources that represent the integration logic. Such as connection, 
authorization base template, webhooks, action algorithms and the parsers.

Create the **`channels namespaces`** of the integration, with **`Ov2`** as the prefix of the name, remaining as follows 
**`Ov2AnyoneID, Ov2AnyoneMY, … , Ov2AnyoneVN`**.

In this namespace you must define the data schemas. Such as Brand, Category, Image, Order, Product, Property, and Variant. 
In general and by convention, this data schemas will have the same structure regardless of the channel or type of integration.

Eventually, you can also define, by particular channel characteristics, any of the resources described for the main namespace. 
At the time of its use or execution, will be prioritized first the corresponding to the namespace of the channel, 
if it does not exist, then the one of the main namespace will be used.