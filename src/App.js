import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './App.css';

import {
  Bio,
  Experience,
  Projects,
  SingleProject,
  Contact
} from './Components';
import { jobHistory, projectHistory } from './data';

function App() {
  return (
    <div className='App'>
      <nav>
        <ul>
          <div className='nav-name'>
            <li>
              <Link to='/'>Noelle Laureano</Link>
            </li>
          </div>
          <div className='nav-menu'>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/experience'>Experience</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </div>
        </ul>
      </nav>

      {/* REACT ROUTER ROUTES (FRONT END ROUTING) */}
      <Switch>
        <Route exact path='/' component={Bio} />
        <Route
          exact
          path='/projects'
          render={() => <Projects projectHistory={projectHistory} />}
        />
        <Route
          path='/projects/:slug'
          render={(routeProps) => (
            <SingleProject {...routeProps} projectHistory={projectHistory} />
          )}
        />
        <Route
          path='/experience'
          render={(routeProps) => (
            <Experience
              // match={routeProps.match}
              // location={routeProps.location}
              // history={routeProps.history}
              {...routeProps}
              jobHistory={jobHistory}
            />
          )}
        />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
