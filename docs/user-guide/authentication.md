> Authentication process is a common oauth process.  </br>
  Apirest used: </br> </br>
  [sign_in](http://doc-api.omna.io/api-spec/#operation/sign_in) </br>
  [get_access_token](http://doc-api.omna.io/api-spec/#operation/get_access_token_async_)
	
## 1. Redirect to authentication page.

Redirect to authentication page through [sign_in](http://http://doc-api.omna.io/api-spec/#operation/sign_in) api request.

>   GET https://cenit.io/users/sign_in?redirect_url=http://my.example.com/home
	<div align=center>
		<img width="200" src="/assets/images/user-guide/sign_in.jpg"/>
	</div>
	
After authentication process is validated, and sucess authorized, the system send an authentication token to [redirect_uri]
(http://doc-api.omna.io/api-spec/#operation/sign_in) parameter value passed in [sign_in](http://doc-api.omna.io/api-spec/#operation/sign_in).
	
>	GET http://my.example.com/home?code=rxfnjmfupsyv3zocvoli </br></br>
	
This code (Authentication Token) should be readed and use it in the next step.
	
## 2. Get the access token
Get the access token through [get_access_token](http://doc-api.omna.io/api-spec/#operation/get_access_token_async_) api request 

> POST https://cenit.io/users/get_access_token  </br>
  "code" : "rxfnjmfupsyv3zocvoli" </br></br>
   
The result of this call is a json with the authentication token, the secret token, and information of the user authenticated. This 
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
