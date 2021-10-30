
> <b>Authentication</b> is a simple process where the system could verified the client is she claims to be. All this services are available even if no [OMNAV2 is installed](user-setup) in the user tennant. After this you can access all OMNA API services.

## 1. Redirect to authentication page.

>Redirect to authentication page through [sign_in](//cenit-io.github.io/eCapi/api-spec/#operation/sign_in) api request.
><div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> https://cenit.io/users/sign_in?redirect_url=http://my.example.com/home
	<div align=center>
		<img width="800" src="/assets/images/user-guide/sign_in.jpg"/>
	</div>

After authentication process is validated, and sucess authorized, the system send an authentication token to [redirect_uri](//cenit-io.github.io/eCapi/api-spec/#operation/sign_in) parameter value passed in [sign_in](//cenit-io.github.io/eCapi/api-spec/#operation/sign_in).
	
><div style="background-color:#6BBD5B; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> GET </div> http://my.example.com/home?code=rxfnjmfupsyv3zocvoli </br></br>
	
This code (Authentication Token) should be readed and use it in the next step.
	
## 2. Get the access token
>Get the access token through [get_access_token](//cenit-io.github.io/eCapi/api-spec/#operation/get_access_token_async_) api request 
><div style="background-color:#248fB2; color:white; border:0px solid brown;border-radius:0px; float:left; padding-right: 5px; padding-left: 5px; margin-right:20px;"> POST </div> https://cenit.io/users/get_access_token</br></br> "code" : "rxfnjmfupsyv3zocvoli" </br></br>
   
The result of this call is a json with the a token, the secret code, and information of the user authenticated. This 
information will be used in other calls to api rest.
```json
	{
	"type": "tenent",
	"data": {
				"id": "f8sf8f8f78dsf8v8fd87ff86",
				"name": "main_omna",
				"token": "rXfNJmFUpsyv3zocVolI",
				"secret": "42b22ff1c8dd674c3912dbd2c79cc46682206cd8f2238c4faa8539a82e66bf38",
				"deactivation": "2019-07-03T15:48:57+00:00",
				"created_at": "2019-05-02T18:16:34+00:00",
				"updated_at": "2019-06-03T15:48:57+00:00",
				"user": {
							"name": "Alejandro Pérez Pérez",
							"email": "alepp@example.com",
							"picture": "http://example.com/users/pictures/alepp.png"
				}
			}
	}
```

## 3. Sign a request
After the token is obtained, every request to OMNA API services must be signed in order to authorize the operation. The sign process of every request is described bellow:
1. Add token and current datetime as url request parameter.
2. Take all params (url parameters and body parameters) in a json string representation.
3. Remove all quotes
4. Generate an sha256 hmac resume value with secret code as key.
5. Add hmac value as an URL parameter. 

As an example code in axios javascript:

```javascript
const current_tenant = { token: '....', secret: '...' };

  axios.defaults.baseURL = 'https://cenit.io/app/ecapi-v1/';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.put['Content-Type'] = 'application/json';

  // Interceptors to sign any request.
  axios.interceptors.request.use((config) => {
    // Add token and timestamp to URL parameters.
    config.params = Object.assign({}, config.params, { token: current_tenant.token, timestamp: Date.now() });

    // Merge all URL parameters and body data to be sent with the request.
    let data = Object.assign({}, config.params, config.data);

    // Join the service path and the ordered sequence of characters, excluding the quotes,
    // corresponding to the JSON of the parameters that will be sent.
    let msg = config.url + JSON.stringify(data).replace(/["']/g, '').split('').sort().join('');

    // Generate the corresponding hmac parameter using the js-sha256 or similar library.
    config.params.hmac = sha256.hmac.update(current_tenant.secret, msg).hex();

    return config;
  });
```

## 4. OMNA APP.
   The three steps above explained is simplified if you use the OMNA APP. It offers a direct way to sign the request. First you must go to OMNA APP, login, go to the section of Developers, and in API keys subsection copy the two fields "Secret code" and "Token". After this you could use them in the third step described above without doing the previous two steps.
   
   TODO: Image of the OMNA APP with token and secret.


