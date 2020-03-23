import React from 'react'
// (2) second two ingredients from react router

import './App.css'

import { Bio, Experience, Projects, Contact } from './Components'

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <div className='nav-name'>
            <li><a href='/'>Noelle Laureano</a></li>
          </div>
          <div className='nav-menu'>
            {/* (4) update links */}
            <li><a href='/projects'>Projects</a></li>
            <li><a href='/experience'>Experience</a></li>
            <li><a href='/contact'>Contact</a></li>
          </div>
        </ul>
      </nav>

      {/* (3) Routes */}

    </div>
  )
}

export default App
