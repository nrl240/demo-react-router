import React from 'react';

import './App.css';

import {
  Bio,
  Experience,
  Projects,
  Contact
} from './Components';

function App() {
  return (
    <div className='App'>
      <nav>
        <ul>
          <div className='nav-name'>
            <li>
              <a href='/'>Noelle Laureano</a>
            </li>
          </div>
          <div className='nav-menu'>
            <li>
              <a href='/projects'>Projects</a>
            </li>
            <li>
              <a href='/experience'>Experience</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </div>
        </ul>
      </nav>
      <Bio />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
