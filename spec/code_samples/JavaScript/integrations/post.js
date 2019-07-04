/*
 See current_tenant, base_url and sign_params
 in 'LIST ALL INTEGRATIONS' service.
*/

const create_integration = (params) => {
  const path = 'integrations';
  // Call to service using jQuery
  return $.post({
    url: base_url + path,
    data: JSON.stringify(sign_params(path, params)),
    dataType: 'json',
    contentType: 'application/json'
  })
};

create_integration({
  data: { name: "Shop-01", channel: "LazadaSG" }
}).done((response) => {
  console.log(response)
}).fail((response) => {
  console.error(response)
});