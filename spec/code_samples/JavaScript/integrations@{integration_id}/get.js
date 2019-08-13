// See the authentication section to learn how to sign any request.

let integration_id = 'shop_01';

let request = axios({
  method: 'GET',
  url: 'integrations/' + integration_id
});

request.then((response) => {
  // Do something with the response
}).catch((error) => {
  // Do something with the error
});