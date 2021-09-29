# XTerm For React

[![NPM](https://img.shields.io/npm/v/xterm-for-react.svg)](https://www.npmjs.com/package/xterm-for-react)

XTerm For React is a React wrapper made for XTerm.js to allow you to easly integrate XTerm into any React project.

# Getting Started

## Installation

You can install XTerm For React using the following commands:

NPM:

```
npm install xterm-for-react
```

Yarn:

```
yarn add xterm-for-react
```

## Running The Examples
- Clone this repo ```git clone https://github.com/robert-harbison/xterm-for-react.git```.
- Open terminal and ```cd``` to the example directory in the repo you just cloned.
- Run ```npm install```
- Run ```npm start``` to start the example.

## Basic Terminal

The main component to this library is 'XTerm'. This will create a div and use it to open a XTerm.js terminal. The base terminal won't really do anything as it is just the terminal UI.

You can create the base terminal using:

```
// Import XTerm
import { XTerm } from 'xterm-for-react'

// Render the component
<XTerm />
```

## 'XTerm' Props

\*\* Some of theme types are included with XTerm.js not with xterm-for-react

\*\* Any 'Prop' with a '?' is optional.

| Prop                                                          | Description                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className?: string                                            | Class name to add to the terminal container.                                                                                                                                                                                                                                                                                                                                      |
| options?: ITerminalOptions                                    | Options to initialize the terminal with.                                                                                                                                                                                                                                                                                                                                          |
| addons?: `Array<ITerminalAddon>`                              | An array of XTerm addons to load along with the terminal.                                                                                                                                                                                                                                                                                                                         |
| onBinary?(data: string): void                                 | Adds an event listener for when a binary event fires. This is used to enable non UTF-8 conformant binary messages to be sent to the backend. Currently this is only used for a certain type of mouse reports that happen to be not UTF-8 compatible. The event value is a JS string, pass it to the underlying pty as binary data, e.g. `pty.write(Buffer.from(data, 'binary'))`. |
| onCursorMove?(): void                                         | Adds an event listener for the cursor moves.                                                                                                                                                                                                                                                                                                                                      |
| onData?(data: string): void                                   | Adds an event listener for when a data event fires. This happens for example when the user types or pastes into the terminal. The event value is whatever `string` results, in a typical setup, this should be passed on to the backing pty.                                                                                                                                      |
| onKey?(event: { key: string; domEvent: KeyboardEvent }): void | Adds an event listener for when a key is pressed. The event value contains the string that will be sent in the data event as well as the DOM event that triggered it.                                                                                                                                                                                                             |
| onLineFeed?(): void                                           | Adds an event listener for when a line feed is added.                                                                                                                                                                                                                                                                                                                             |
| onScroll?(newPosition: number): void                          | Adds an event listener for when a scroll occurs. The event value is the new position of the viewport.                                                                                                                                                                                                                                                                             |
| onSelectionChange?(): void                                    | Adds an event listener for when a selection change occurs.                                                                                                                                                                                                                                                                                                                        |
| onRender?(event: { start: number; end: number }): void        | Adds an event listener for when rows are rendered. The event value contains the start row and end rows of the rendered area (ranges from `0` to `Terminal.rows - 1`).                                                                                                                                                                                                             |
| onResize(event: { cols: number; rows: number }): void         | Adds an event listener for when the terminal is resized. The event value contains the new size.                                                                                                                                                                                                                                                                                   |
| onTitleChange?(newTitle: string): void                        | Adds an event listener for when an OSC 0 or OSC 2 title change occurs. The event value is the new title.                                                                                                                                                                                                                                                                          |
| customKeyEventHandler?(event: KeyboardEvent): boolean         | Attaches a custom key event handler which is run before keys are processed, giving consumers of xterm.js ultimate control as to what keys should be processed by the terminal and what keys should not.                                                                                                                                                                           |

## Calling XTerm Functions

If we don't have a wrapper for a specific method in XTerm.js you can call any function in XTerm.js using a ref. [You can look here for the functions provided by XTerm.js](https://xtermjs.org/docs/)

(There will soon wrapper functions for XTerm.js functions but right now you will need to use a ref.)

```jsx
    import * as React from 'react'

    export const Terminal = () => {
        const xtermRef = React.useRef(null)

        React.useEffect(() => {
            // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
            xtermRef.current.terminal.writeln("Hello, World!")
        }, [])

        return (
            // Create a new terminal and set it's ref.
            <XTerm ref={xtermRef} />
        )
    }
```

## Terminal Options

You can pass options that you want to use to instantiate the XTerm.js 'Terminal' as props to the XTerm component. [Here](https://xtermjs.org/docs/api/terminal/interfaces/iterminaloptions/) is a link to the terminal options documentation.

```
    // Import XTerm
    import { XTerm } from 'xterm-for-react'

    // Render the component
    <XTerm options={{ lineHeight: 3 }} />
```

## Addons

You can use XTerm.js addons by using the `addons` prop. This prop is an array of addons you want to load.

You can see an example of using addons please see [this](https://github.com/robert-harbison/xterm-for-react/blob/master/example/src/examples/Addons.js) file in the example folder.

```
    // Import the addon
    import { SearchAddon } from 'xterm-addon-search'

    // Instantiate the addon
    const searchAddon = new SearchAddon()

    // Load the addons as a prop
    <XTerm addons={[searchAddon]} />
```


## Examples

If you want to see a example of this in action check out the ```example``` folder in the this repo.

## Other Resources

[XTerm.js Documentation](https://xtermjs.org/docs/)

## Issues / Feature Requests

If you have any feature requests or have any issues please post them [here](https://github.com/robert-harbison/xterm-for-react/issues).

## Contributing

If you would like to contribute to this project in terms of code please see our [contributing](https://github.com/robert-harbison/xterm-for-react/blob/master/CONTRIBUTING.md) page.

## Versioning

We use [SemVer](https://semver.org/) as our versioning standard.

## Credits

-   Thanks to everyone who made [XTerm.js](https://xtermjs.org/) for enabling this project to be possible.
-   Much of the documentation about the usage and features of XTerm where taken from their documentation.
-   Thanks to [create-react-library](https://www.npmjs.com/package/create-react-library) for creating a easy template for creating React libraries.
-   And of course thanks to all the [React](https://reactjs.org/) guys for making React a thing.

## License

Distributed under the MIT License. See [LICENSE](https://github.com/robert-harbison/xterm-for-react/blob/master/LICENSE) for more information.
