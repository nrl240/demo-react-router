import React from 'react'
import { Route, Link } from 'react-router-dom'

import { SingleProject } from './'

const Projects = ({ match }) => (
  <div>
    <h3>Projects</h3>
    <ul>
      <li><Link to='/projects/mapstack'>Mapstack</Link></li>
      <li><Link to='/projects/saucesome'>Saucesome</Link></li>
      <li><Link to='/projects/the-listening-room'>The Listening Room</Link></li>
    </ul>

    <Route path={`${match.url}/:projectId`} component={SingleProject}/>
  </div>
)

export default Projects
