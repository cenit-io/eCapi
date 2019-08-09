// See Authentication section to sign any request.

let request = axios({
  method: 'GET',
  url: 'integrations',
  params: { limit: 10, offset: 0, channel: 'LazadaSG' }
});

request.then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(error.response ? error.response.data : error.message);
});

