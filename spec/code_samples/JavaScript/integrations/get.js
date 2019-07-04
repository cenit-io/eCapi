const
    current_tenant = { token: '....', secret: '...' },
    base_url = 'http://cenit.io/app/ecapi-v1/',

    sign_params = (path, params) => {
        params = params || {};

        // Add token and timestamp parameters.
        params.token = current_tenant.token;
        params.timestamp = Date.now();

        // Join the service path and the ordered sequence of characters, excluding the quotes,
        // corresponding to the JSON of the parameters that will be sent.
        msg = path + JSON.stringify(params).replace(/["']/g, '').split('').sort().join('');

        // Generate the corresponding hmac using the js-sha256 or similar library.
        params.hmac = sha256.hmac.update(current_tenant.secret, msg).hex();

        return params;
    },

    get_integrations = (params) => {
        const path = 'integrations';
        // Call to service using jQuery
        return $.getJSON({ url: base_url + path, data: sign_params(path, params) });
    };

get_integrations({ limit: 10, offset: 0, channel: 'LazadaSG' }).done((response) => {
    console.log(response)
}).fail((response) => {
    console.error(response)
});

