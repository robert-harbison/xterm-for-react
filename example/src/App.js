import React from 'react'
import './App.css'
import {
  Link
} from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <ul>  
        <li><Link to="hello-world">Hello World Example</Link></li>
        <li><Link to="echo">Echo Example</Link></li>
        <li><Link to="addons">Addons Example</Link></li>
      </ul>
    </div>
  )
}

export default App