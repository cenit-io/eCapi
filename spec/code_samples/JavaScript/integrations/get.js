// See the authentication section to learn how to sign any request.

let request = axios({
  method: 'GET',
  url: 'integrations',
  params: { limit: 10, offset: 0, channel: 'LazadaSG' }
});

request.then((response) => {
  // Do something with the response
}).catch((error) => {
  // Do something with the error
});

