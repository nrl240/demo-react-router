import React from 'react'
// (1) import in react router
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './App.css'

import { Bio, Experience, Projects, Contact } from './Components'

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <div className='nav-name'>
            <li><Link to='/'>Noelle Laureano</Link></li>
          </div>
          <div className='nav-menu'>
            {/* (3) update links */}
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/experience'>Experience</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </div>
        </ul>
      </nav>

      {/* (2) Routes */}
      <Router>
        <Route exact path='/' component={Bio} />
        <Route path='/projects' component={Projects} />
        <Route path='/experience' component={Experience} />
        <Route path='/contact' component={Contact} />
      </Router>

    </div>
  )
}

export default App
