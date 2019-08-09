// See Authentication section to sign any request.

let request = axios({
  method: 'POST',
  url: 'integrations',
  data: { name: "Shop-01", channel: "LazadaSG" }
});

request.then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(error.response ? error.response.data : error.message);
});