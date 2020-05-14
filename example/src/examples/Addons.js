import React from 'react'
import '../App.css'
import {XTerm} from 'xterm-for-react'
import { SearchAddon } from 'xterm-addon-search';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark  } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class Addons extends React.Component {
    constructor(props) {
        super(props)
        // Create a ref
        this.xtermRef = React.createRef()
        this.searchAddon = new SearchAddon();
    }

    componentDidMount() {
        this.xtermRef.current.terminal.writeln(
            "Hit  enter we will highlight 'THIS' text."
        );
    }

    render() {
        return (
            <>
            {/* Create a new terminal and set it's ref. */}
<XTerm
    ref={this.xtermRef}
    addons={[this.searchAddon]}
    onData={(data) => {
        const code = data.charCodeAt(0);
        if (code === 13) {
            this.searchAddon.findNext("'THIS'")
        }
    }}
/>
<SyntaxHighlighter language="javascript" style={ dark }>
{`
class Addons extends React.Component {
    constructor(props) {
        super(props)
        // Create a ref
        this.xtermRef = React.createRef()
        this.searchAddon = new SearchAddon();
    }

    componentDidMount() {
        this.xtermRef.current.terminal.writeln(
            "Hit enter we will highlight 'THIS' text."
        );
    }

    render() {
        return (
            {/* Create a new terminal and set it's ref. */}
            <XTerm
                ref={this.xtermRef}
                addons={[this.searchAddon]}
                onData={(data) => {
                    const code = data.charCodeAt(0);
                    if (code === 13) {
                        this.searchAddon.findNext("'THIS'")
                    }
                }}
            />
        )
    }
}
`}
</SyntaxHighlighter>
            </>
        )
    }
}

export default Addons