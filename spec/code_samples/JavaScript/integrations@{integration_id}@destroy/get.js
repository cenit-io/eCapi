/*
 See current_tenant, base_url and sign_params
 in 'LIST ALL INTEGRATIONS' service.
*/

const destroy_integration = (id) => {
  const path = 'integrations/' + id + '/destroy';
  // Call to service using jQuery
  return $.getJSON({ url: base_url + path, data: sign_params(path) });
};

destroy_integration('shop_01').done((response) => {
  console.log(response)
}).fail((response) => {
  console.error(response)
});