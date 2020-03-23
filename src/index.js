import React from 'react'
import ReactDOM from 'react-dom'
// (1) first ingredient from React Router
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

serviceWorker.unregister()
