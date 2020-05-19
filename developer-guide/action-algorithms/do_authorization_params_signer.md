# Action algorithm:

## do_authorization_params_signer:

Allows signing the parameters sent in the request for an authorization.
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: do_authorization_params_signer
    parameters:
      - name: params
        required: true
        
      - name: template_params
        required: true
        
```

### Example:
```RUBY
secret = template_params[:secret]
digest = OpenSSL::Digest.new_sign('sha256')

# Get payload and add token and timestamp.
data = JSON.parse(template_params[:body])
data[:token] = template_params[:token]
data[:timestamp] = Time.now.to_i

# Create the message
url = template_params[:url] + template_params[:path]
msg = "#{url}|#{data.to_json}"

# Generate and set the hmac
data[:hmac] = OpenSSL::HMAC.hexdigest(digest, secret, msg)

# Replace the old payload with the new signed payload
template_params[:body].gsub!(/^.*$/, data.to_json)
```

### See also:
* [Others actions algorithms](overview?id=do_authorization_params_signer)