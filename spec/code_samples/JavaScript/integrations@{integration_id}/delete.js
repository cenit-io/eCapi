/*
 See current_tenant, base_url and sign_params
 in 'LIST ALL INTEGRATIONS' service.
*/

const delete_integration = (id) => {
  const path = 'integrations/' + id;
  // Call to service using jQuery
  return $.ajax({ url: base_url + path, type: 'DELETE', data: sign_params(path) });
};

delete_integration('shop_01').done((response) => {
  console.log(response)
}).fail((response) => {
  console.error(response)
});