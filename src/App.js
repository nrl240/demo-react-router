import React from 'react'
// (2) second two ingredients from React Router
import { Route, Link } from 'react-router-dom'

import './App.css'

import { Bio, Experience, Projects, Contact } from './Components'
import jobHistory from './Data/jobHistory'

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          {/* (4) update your anchor tags to React Router Links (href >> to) */}
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

      {/* (3) insert your routes (at "some" path, render "some" component) */}
      <Route exact path='/' component={Bio} />
      <Route path='/projects' component={Projects} />
      {/* (5) pass custom props AND route props to the Experience component */}
      <Route
        path='/experience'
        // (5a) change "component=" to "render="
        // (5b) pass a variable in as an argument to our arrow function ("routeProps")
        // (5c) use the spread operator on routeProps to create keys for our three route props (match, history, location)
        // (5d) pass our Exerpience component jobHistory as a prop using the normal syntax to pass props to components
        render={ (routeProps) => (
          <Experience {...routeProps} jobHistory={jobHistory} />
         )}
      />
      {/* Note: if we don't use the spread operator on our routeProps, inside of our Contact component, we will have to access them by doing: `props.routeProps.match` instead of simply `props.match` */}
      <Route path='/contact' render={(routeProps) =>
        <Contact routeProps={routeProps} />}
      />

    </div>
  )
}

export default App
