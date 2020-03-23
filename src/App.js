import React from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'

import { Bio, Experience, Projects, Contact } from './Components'
import jobHistory from './Data/jobHistory'

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <div className='nav-name'>
            <li><Link to='/'>Noelle Laureano</Link></li>
          </div>
          <div className='nav-menu'>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/experience'>Experience</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </div>
        </ul>
      </nav>

      <Route exact path='/' component={Bio} />
      <Route path='/projects' component={Projects} />
      <Route
        path='/experience'
        render={ (routeProps) => (
          <Experience jobHistory={jobHistory} {...routeProps} />
         )}
      />
      <Route path='/contact' render={(routeProps) =>
        <Contact routeProps={routeProps} />}
      />

    </div>
  )
}

export default App
