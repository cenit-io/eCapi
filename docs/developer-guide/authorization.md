# Authorization

An authorization named "**base**" must be created. 

**This can be:**
* Common for all integration channels and defined in the [main namespace](namespaces?id=main-namespace).
* Custom for each integration channel and defined in the [channels namespaces](namespaces?id=channels-namespaces). 

In either case, you can use **`template_parameters`** 
and the algorithms [do_authorization_callback](action-algorithms/do_authorization_callback) and 
[do_after_authorize](action-algorithms/do_after_authorize) to set the values of the **`template_parameters`** and 
validate the authorization process.

You can manage the authorizations by entering [here](https://cenit.io/authorization).