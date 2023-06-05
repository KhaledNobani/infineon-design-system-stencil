
# React + Stencil

React Wrappers: Similarly to Vue, a React wrapper provides a React interface to a Stencil web component, making the web component feel more like a typical React component. This includes proper handling of props, state, and events within the context of a React application.

## Installation

### With NPM

1. ```npm install @infineon/infineon-design-system-react```

#### With Yarn

1. ```yarn add @infineon/infineon-design-system-react```

#### Import the module inside your entry point file.


```import { defineCustomElements } from '@infineon/infineon-design-system-react';```

```defineCustomElements(window)```

In React, there isn't a built-in mechanism to globally register components like in Vue. Therefore, components need to be imported in the file that they are being used in.

#### Usage

``import { IfxProgressBar, IfxSearchBar, IfxButton } from '@infineon/infineon-design-system-react';``

``<IfxSearchBar onIfxChange={handleSearch} style={{ width: '100%' }} show-close-button="true"></IfxSearchBar>``

##### React + Javascript specific

It may be necessary to add the following to your .env file at project root:

``GENERATE_SOURCEMAP=false``

This can also be achieved by updating your start script in the ``package.json`` accordingly.

