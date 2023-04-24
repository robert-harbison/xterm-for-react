import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import HelloWorld from './examples/HelloWorld.js'
import Echo from './examples/Echo.js'
import Addons from './examples/Addons.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/hello-world" component={HelloWorld} />
            <Route path="/echo" component={Echo} />
            <Route path="/addons" component={Addons} />
        </Switch>
    </Router>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    routing
)