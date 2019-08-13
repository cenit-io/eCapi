// See the authentication section to learn how to sign any request.

let request = axios({
  method: 'POST',
  url: 'integrations',
  data: { name: "Shop-01", channel: "LazadaSG" }
});

request.then((response) => {
  // Do something with the response
}).catch((error) => {
  // Do something with the error
});