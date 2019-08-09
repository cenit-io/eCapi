// See Authentication section to sign any request.
let integration_id = 'shop_01';

let request = axios({
  method: 'DELETE',
  url: 'integrations/' + integration_id
});

request.then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(error.response ? error.response.data : error.message);
});