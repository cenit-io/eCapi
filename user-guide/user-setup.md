>Before a user could use the CenitIO eCommerce API, it must be configured to use CenitIO eCommerce API. The CenitIO eCommerce API must be installed and a tenant assigned to it. In order to do so, there are two ways, one easy way using [CenitIO eCommerce Application --DEV--](https://develop.d2px3nipkhew1t.amplifyapp.com/), and a hard way using CenitIO eCommerce API global services. Both ways are described here.

## 1. Ebanux APP
After login on Ebanux APP, if the user is new and eCommerce API is not installed you could see a message like this:

><div align=center><img width="800" src="assets/images/user-guide/install_message.jpg"/></div>

The go to <b>Integration</b> menu in <b>Available integrations </b>, and will see a list of available integrations to install.
><div align=center><img width="800" src="assets/images/user-guide/available_integrations.jpg"/></div>

Then click on <b>install</b> action, and a message like this will apear.
><div align=center><img width="800" src="assets/images/user-guide/install_started_message.jpg"/></div>

After some time you will see in the <b>Integration</b> menu in <b>Installed integrations </b> the core integration installed.
Then the user is ready to use the CenitIO eCommerce API services.

## 2. eCommerce API.
This process is more complex because it involves to make the same actions programatically. 
- 1. [Authenticate](authentication) the user. 
- 2. Use the [list of all available integrations](//cenit-io.github.io/eCapi/api-spec/#operation/get_available_integrations) services to get all available integrations.
- 3. Search the Integration-Core. This search is based on the fact that the name field of previous response has the value "Core"
- 4. Use the [install available integration](//cenit-io.github.io/eCapi/api-spec/#operation/get_available_integrations) service using the id found.
- 5. Check when the status of the [install available integration task is finished](Tasks?id=_2-example) in order to continue.


