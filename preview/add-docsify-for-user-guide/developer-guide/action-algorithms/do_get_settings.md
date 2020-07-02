# Action algorithm:

## do_get_settings:

Returns the available integration settings with its available channels.
    
### Definition:
```YAML
    namespace: Ov2Anyone
    name: do_get_settings
    parameters:
```

### Example:
```RUBY
{
  available_channels: [
    { name: 'Ov2AnyoneID', title: 'Anyone [ID]' },
    { name: 'Ov2AnyoneMY', title: 'Anyone [MY]' },
    { name: 'Ov2AnyonePH', title: 'Anyone [PH]' },
    { name: 'Ov2AnyoneSG', title: 'Anyone [SG]' },
    { name: 'Ov2AnyoneTH', title: 'Anyone [TH]' },
    { name: 'Ov2AnyoneVN', title: 'Anyone [VN]' },
    { name: 'Ov2AnyoneSB', title: 'Anyone [Sandbox]' }
  ]
}
```

### See also:
* [Others action algorithms](overview?id=do_get_settings)