# Integration namespaces

As a rule and to avoid conflicts, we recommend the use of the prefix **`eCw`** in the name of each namespace and the use of 
names in the UpperCamelCase format.

## Main namespace

Create the **`main namespace`** of the integration, with **`eCw`** as the prefix of the name, remaining as follows **`eCwAnyone`**.

In this namespace you must define the general resources that represent the integration logic. Such as: 

* [Connection](connection) 
* [Authorization](authorization) 
* [Webhooks](webhooks) 
* [Action algorithms](action-algorithms/overview) 
* [Parser algorithms](patser-algorithms/overview) 

## Channels namespaces

Create the **`channels namespaces`** of the integration, with **`eCw`** as the prefix of the name, remaining as follows 
**`eCwAnyoneID, eCwAnyoneMY, … , eCwAnyoneVN`**.

In this namespace you must define the data schemas. Such as Brand, Category, Image, Order, Product, Property, and Variant. 
In general and by convention, this data schemas will have the same structure regardless of the channel or type of integration.

Eventually, you can also define, by particular channel characteristics, any of the resources described for the main namespace. 
At the time of its use or execution, will be prioritized first the corresponding to the namespace of the channel, 
if it does not exist, then the one of the main namespace will be used.