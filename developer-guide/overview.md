# Guide to create a new available integration

An integration contains a collection of resources that allow the synchronization of the information between OMNA and a 
remote platform that has an API that allows communication between the parties.

All these resources must be organized in [namespaces](namespaces) relative to the name of the platform to be integrated.

To guarantee communication between the parties, a [connection](connection) and the corresponding
[authorization](authorization) must be created and configured.

## Previous requirements

Before beginning development, you should identify and have the following items on hand:

* Name of the platform to be integrate.
* Determine if the platform will have multiple integration channels. This normally applies to platforms that have 
  different domains or replicas by region or country.
* URL base of the API of the platform to be integrate.
* Authentication mechanism. (Basic, oAuth, oAuth2, ...)
* API documentation of the platform to be integrate.
* Have access to Cenit-IO and [pull](https://cenit.io/cross_shared_collection/5dc99ad825d985238605db73/pull) 
  the [OMNAv2](https://cenit.io/cross_shared_collection/5dc99ad825d985238605db73) collection on your tenant.
