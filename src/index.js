import React from 'react';
import ReactDOM from 'react-dom';
// (1) first ingredient from react router

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
// (1) first ingredient from react router

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

serviceWorker.unregister()
