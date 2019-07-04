/*
 See current_tenant, base_url and sign_params
 in 'LIST ALL INTEGRATIONS' service.
*/

const get_integration = (id) => {
    const path = 'integrations/' + id;
    // Call to service using jQuery
    return $.getJSON({ url: base_url + path, data: sign_params(path) });
};

get_integration('shop_01').done((response) => {
    console.log(response)
}).fail((response) => {
    console.error(response)
});