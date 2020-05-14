import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import HelloWorld from './examples/HelloWorld'
import Echo from './examples/Echo'
import Addons from './examples/Addons'

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

ReactDOM.render(routing, document.getElementById('root'))