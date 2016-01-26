# Paw Human Readable Generator

Paw extension providing a generator geared towards human readable exports to send to co-workers over eg. Slack.

## Example

```
POST http://127.0.0.1:1180/test?abc=123

Authorization: foo

{
  "bar": "foo"
}
```

## Install

Clone the repository as `se.kodfabrik.PawExtensions.HumanGenerator` into your Paw extension folder:

`git clone git@github.com:voxpelli/paw-humangenerator.git se.kodfabrik.PawExtensions.HumanGenerator`

You can find your Paw extension folder by going to `Preferences > Extensions` and hit the `Open Extensions Directory` button.

## Credits

Initial inspiration and code was taken from the [Paw API Blueprint Generator Extension](https://github.com/apiaryio/Paw-APIBlueprintGenerator).
