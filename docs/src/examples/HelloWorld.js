import React from 'react'
import '../App.css'
import {XTerm} from 'xterm-for-react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark  } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)

        // Create a ref
        this.xtermRef = React.createRef()
    }

    componentDidMount() {
        // Once the terminal is loaded write a new line to it.
        this.xtermRef.current.terminal.writeln('Hello, World!')
    }

    render() {
        return (
            <>
            {/* Create a new terminal and set it's ref. */}
            <XTerm ref={this.xtermRef} />
            <SyntaxHighlighter language="javascript" style={ dark }>
{`
class HelloWorld extends React.Component {
    constructor(props) {
        super(props)

        // Create a ref for the terminal
        this.xtermRef = React.createRef()
    }

    componentDidMount() {
        // Once the terminal is loaded write a new line to it.
        this.xtermRef.current.terminal.writeln('Hello, World!')
    }

    render() {
        return (
            // Create a new terminal and set it's ref.
            <XTerm ref={this.xtermRef} />
        )
    }
}
`}
            </SyntaxHighlighter>
        </>
        )
    }
}

export default HelloWorld