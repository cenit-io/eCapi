const baseURL = 'https://cenit.io/app/ecapi-v1/';

const current_tenant = { token: '...', secret: '...' };

/**
 * Returns URI to page to authorize an Integration.
 *
 * @param integration_id {string} Identifier of the Integration
 * @returns {string} URI to authorization page
 */
const authorizationURI = (integration_id) => {
  let path = 'integrations/' + integration_id + '/authorize';

  // Prepare the request data with the token, timestamp and redirect_uri parameters
  let data = {
    token: current_tenant.token,
    timestamp: Date.now(),
    redirect_uri: 'http://127.0.0.1:8080'
  };

  // Join the service path and the ordered sequence of characters, excluding the quotes,
  // corresponding to the JSON of the parameters that will be sent.
  let msg = path + JSON.stringify(data).replace(/["']/g, '').split('').sort().join('');

  // Generate the corresponding hmac parameter using the js-sha256 or similar library.
  data.hmac = sha256.hmac.update(current_tenant.secret, msg).hex();

  // Generate query string with all parameters simple-query-string or similar library
  let queryString = simpleQueryString.stringify(data);

  return `${baseURL}${path}?${queryString}`;
};

// Redirect the navigation to the authorization page
window.location = authorizationURI('shop_01');