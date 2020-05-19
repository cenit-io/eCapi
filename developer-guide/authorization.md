# Authorization

An authorization named "**base**" must be created. This can be generic and defined in the main namespace (**`Ov2Anyone`**) or custom 
defined in the namespaces of each channel (**`Ov2AnyoneID, Ov2AnyoneMY, ...`**). In either case, you can use **`template_parameters`** 
and the algorithms [do_authorization_callback](Action-algorithm-do_authorization_callback) and [do_after_authorize](Action-algorithm-do_after_authorize) to set the values ​​of the **`template_parameters`** and validate 
the authorization process.