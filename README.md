# Atom IDE Brightscript

An atom client for the [Hinoki](https://github.com/willowtreeapps/hinoki/) - Brightscript language server.

![showcase](/artwork/showcase.png)

# Usage

This package *requires* the [atom-ide-ui](https://atom.io/packages/atom-ide-ui) package. It exposes APIs needed to consume diagnostic information reported by the language server.

Linting is managed by [Wist](https://github.com/willowtreeapps/wist/). As a result you can manage linting rules by providing a `.wistrc.json`. 

```json
{
    "rules": {
        "no-stop": ["error"],
        "no-print": ["warn"]
    }
}
```

More information about rules you can enable/disable are available [here](https://github.com/willowtreeapps/wist/)

# Contributing to Atom IDE Brightscript

Contributions and suggestions are more than welcome. Please see our [Code of Conduct](/CODE_OF_CONDUCT.md) as well as our [Contributing Guidelines ](/CONTRIBUTING.md)
for more information.
