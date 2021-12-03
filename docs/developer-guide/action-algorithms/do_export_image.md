# Action algorithm

## do_export_image

Allows submitting a request to the remote integration platform to publish an image.
    
### Definition

> **Name:** do_export_image
> 
> **Namespace:** Ov2Anyone
>
> **Parameters:**
> 
> | Name | Required | Type | Description |
> | ---- | -------- | ---- | ----------- |
> | url | true | String | Contains the url of the image to be exported |
> | integration | true | eCore::Integration | Contains integration record |
> | webhook | true | Setup::PlainWebhook | Contains the [upload_image](../webhooks/overview?id=upload_image) webhook |
> | task | true | Setup::AlgorithmExecution | Contains a reference to the running task |

### See also
* [Code examples](https://cenit.io/algorithm?f[name][40703][o]=is&f[name][40703][v]=do_export_image&f[namespace][40840][o]=starts_with&f[namespace][40840][v]=Ov2)
* [Others action algorithms](overview?id=do_export_image)